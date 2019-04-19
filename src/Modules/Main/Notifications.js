import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';

class Notifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          loading: false,
          searchLoad: false,
          searchBarText: '',
          searchBarTextTouched: false,
          data:[],
        }

        this.arrayHolder = [];
    }

    componentDidMount() {
      console.log('LoggedUser RefTX: ' + JSON.parse(global.isCurrentLoggedInUser).referenceTx);
      const url = `http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/apts/aeNotifications/`+`${JSON.parse(global.isCurrentLoggedInUser).referenceTx}`;
      
      fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
        },
        })
        .then((response) => response.json())
        .then(res => {
          console.log("NOTIFICATIONSRESPONSE: "+ JSON.stringify(res));
          this.setState({
            loading: false,
            data: res,
            originalData: res,
            refreshing: false,
          });
          this.arrayHolder = this.state.data;
          console.log("NOTIFICATIONS Data: " + JSON.stringify(this.state.data))
        })
        .catch(error => {
          this.setState({ error, loading: false });
          console.log("NOTIFICATIONS Error: " + JSON.stringify(error))
        });
    }

    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'Notifications' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            />
          );
        }


    renderSearchBar = () => {
        return (
            <TextInput
                ref="searchBarInput"
                autoCapitalize = 'none'
                underlineColorAndroid="transparent" 
                placeholder="Search in Notifications ..." 
                placeholderTextColor="#616161" 
                style={styles.searchBarTextInput}
                onChangeText={(text) => this.onSearchTextChange(text)}
                value={this.state.searchBarText}
                />
        );
    }

    onSearchTextChange(text) {
        //text=text.trim();
        this.setState({
          searchBarText: text,
          searchBarTextTouched: true,
          searchLoad: true
        });
        //console.log("All Books Array Holder: " + this.arrayHolder);
        /*const newData = this.arrayHolder.filter(item => {
          const itemData = `${item.Author.toUpperCase()} ${item.Publisher.toUpperCase()} ${item.Title.toUpperCase()}`;
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
          searchLoad: false
        });*/
      }

    searchIconFunctionality = () => {
        return (
          <View style={{marginLeft: 15, marginRight: 10, alignContent:'center'}}>
            <Icon name='magnifying-glass' type='entypo' color='#FF8F00' />
          </View>
        );
      }
    
    rightIconFunctionality = () => {
       // if (this.state.searchBarTextTouched) {
          return (
            <View style={{marginRight: 15, alignContent:'center'}}>
              <Icon name='bell-o' type='font-awesome' color='#FF8F00' size={16} underlayColor={'#64b5f6'}/>
            </View>
          );
        }
      //}


      returnList = () => {
        console.log("sdasdadda: "+ this.state.data)
        let user = this.state.currentLoggedInUser;
       return (
          <ScrollView style={{flex: 1}}>
          <View animation="slideInUp" iterationCount={1}>
              <FlatList 
              style={{flex: 1}}
              data={this.state.data}
              renderItem={({ item }) => (
                <Card>
                  <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row', paddingBottom: 4, justifyContent: 'space-between'}}>
                      <Text style={{fontSize: 12, flex: 3}}>{item.comments} - {item.appointmentId}</Text>
                      <Text style={{fontSize: 12, flex: 1}}>{item.lastModifiedDate}</Text>
                    </View>
                    </View>
                </Card>
              )}
              keyExtractor={item => item.appointmentId.toString()}
            />
            </View>
            </ScrollView>
          
        );
      }
    
    render() {
        return(
            <View style={styles.container}>
                { this.renderHeader() }
                
                <View style={styles.sectionStyle}>
                    {this.searchIconFunctionality()}
                    {this.renderSearchBar()}
                    {this.rightIconFunctionality()}
                </View>

                { this.returnList() }

{/*
                <View style={{justifyContent: 'center', alignContent: 'center', marginHorizontal: 20, marginVertical: 8}}>
                    <Text style={{color: '#666'}}>Reach out and start a conversation. Great things might happen.</Text>
                </View>

                <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
                    <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0, marginVertical: 20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
                            <Text style={{alignSelf: 'center', padding: 5, fontWeight: '500', color: '#FF6D00'}}>Explore your Opportunities</Text> 
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    searchBarTextInput: {
        flex: 1
    },
    sectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      borderColor: '#F57C00',
      height: 35,
      borderRadius: 15,
      margin: 5
    },
}

export default Notifications;