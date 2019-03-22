import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    StatusBar,
    TextInput
  } from 'react-native'
  
import { Icon, Header } from 'react-native-elements';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'
import { connect } from 'react-redux'

import CardDetail from '../../Components/CardDetail';
import { DrawerActions } from 'react-navigation';

const ROOT_URL = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/'

class HomeScreen extends Component {

static navigationOptions = (props) => {
    return {
        title: 'Home',
        tabBarIcon:({ tintColor }) => {
          return <Icon name="home" type="font-awesome" size={22} color={tintColor} />;
        },
        headerRight: (
          <View style={{marginLeft: 10, marginRight: 10, flexDirection:'row-reverse'}}>
            <TouchableOpacity onPress={() => navigate('profile')} >
              <Icon name='user' type='font-awesome' color = '#fff'/>
            </TouchableOpacity>
          </View>
      ),
        //headerTitle: 'Home',
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: '#FD6D00' },
    };
  }

  constructor (props) {
    super(props);
    this.state = {
        loading: false,
        data: [],
        originalData: [],
        error: '',
        isSearchClicked: false,
        searchBarText: ''

      }
  
    this.arrayHolder = [];
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    console.log('Hollla');
    const url = `http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/adm/ar`;
    //const url = ROOT_URL+`adm/ar`;
    this.setState({ loading: true });
  
    
    const postData = {
      "pageNum": 0,
      "searchColumn": "string",
      "searchText": "string",
      "sortColumn": "string",
      "sortOrder": "string"
    }

    //var basicAuth = 'Basic ' + btoa('services-midec-ui:midec-services-ui2018');
  /*
    const config = {
      Headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
      }
    }

    axios.post( url, postData, {
      auth: {
        username: 'services-midec-ui',
        password: 'midec-services-ui2018'
      }})
*/
    fetch(url, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
      },
      body: JSON.stringify({
        "pageNum": 0,
        "searchColumn": "string",
        "searchText": "string",
        "sortColumn": "string",
        "sortOrder": "string"
      }),
      })
      //.then((response) => response.json())
      .then(res => {
        this.setState({
          error: res.error || null,
          loading: false,
          data: JSON.parse(res._bodyInit),
          originalData: JSON.stringify(res._bodyInit),
          refreshing: false,
        });
        this.arrayHolder = res;
        console.log("Home Screen Data: " + this.state.data[0].status)
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log("Error: Home Screen Data: " + JSON.stringify(error))
      });
  };

  returnList = () => {
    return (
      <ScrollView style={{flex: 1}}>
          <OptimizedFlatList 
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({ item }) => (
            <CardDetail key={item.adviserId.toString()} navigation={this.props.navigation} item={item} />
          )}
          keyExtractor={item => item.adviserId.toString()}
        />
        </ScrollView>
    );
  }

  renderRightIcons = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('homeFilter')}} style={{marginHorizontal: 7}}>
          <Icon name="filter" type="font-awesome" color="#fff" size={20} style={{alignContent:'center', paddingHorizontal: 10}}></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isSearchClicked: true })} style={{marginHorizontal: 7}}>
          <Icon name="search" type="font-awesome" color="#fff" size={18} style={{paddingTop:40}}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
  

  renderHeader = () => {
    return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'M i D E C' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          rightComponent={ this.renderRightIcons() }
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
        />
      );
    }

    renderCenterSearchBar = () => {
      return(
        <TextInput
            ref="searchBarInput"
            autoCapitalize = 'none'
            underlineColorAndroid="transparent" 
            placeholder="Start Typing ..." 
            placeholderTextColor="#fff" 
            style={styles.searchBarTextInput}
            onChangeText={(text) => this.setState({searchBarText: text})}
            value={this.state.searchBarText}
          />
      );
    }

    renderSearchBarHeader = () => {
      return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={this.renderCenterSearchBar()}
          rightComponent={{ icon: 'close', color: '#fff', onPress: () => this.setState({ isSearchClicked: false }) }}
          leftComponent={{ icon: 'search', type: 'font-awesome', color: '#fff', size:18 }}
        />
      );
    }

      render() {
        if (this.state.loading) {
          return (
            <View style={{flex:1, justifyContent: 'center' }}>
              <ActivityIndicator animating={this.state.loading} size="large" />
            </View>
          );
        }

          return (
            <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
              { this.state.isSearchClicked ? this.renderSearchBarHeader() : this.renderHeader() }
              { this.returnList() }
            </View>
          );
      }
  }

let styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
     item: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
    bg: {
      position: 'absolute',
      left: 25,
      top: 100,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    headerIconView: {
      flex: 0.15,
      backgroundColor: 'transparent'
    },
    headerBackButtonView: {
      width: 35,
      height: 35,
      position: 'absolute',
      top: 35,
      left: 15,
      marginBottom: 10
    },
    backButtonIcon: {
      resizeMode: 'contain',
      width: 35,
      height: 25
    },
    headerTitleView: {
      backgroundColor: 'transparent',
      paddingLeft: 25,
      marginBottom:0,
      marginTop: 0
    },
    titleViewText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#EF6C00',
      marginTop: 20,
      marginBottom: 10,
    },
    loginFormView: {
        marginTop: 40,
        flex: 1,
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777777',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 10,
      
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },
    promptMessage: {
        color: '#444444',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },
    checkButtonLayout: {
        marginTop: 50,

    },
    checkButton: {
      flexDirection: 'row', 
      justifyContent: 'space-around',
      marginTop: 30
    },
  });

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {})(HomeScreen);
