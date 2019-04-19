import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView,  FlatList, Animatable } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import { DatePicker } from 'native-base';
import AppointmentsCard from '../../Components/AppointmentsCard';

class MyAppointments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          data:[],
          isSearchClicked: false,
          searchText: '',
          currentLoggedInUser: global.isCurrentLoggedInUser
          }

        this.arrayHolder = [];
    }

    componentDidMount() {
      this._onFocusListener = this.props.navigation.addListener('didFocus', (payload) => {
        this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
        this.forceUpdate();
    });
      if (global.isLoggedIn === true) {
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
            console.log("MYAPOINTMENTSRESPONSE: "+ JSON.stringify(res));
            this.setState({
              loading: false,
              data: res,
              originalData: res,
              refreshing: false,
            });
            this.arrayHolder = this.state.data;
            console.log("MY APPOINTMENTS Data: " + JSON.stringify(this.state.data))
          })
          .catch(error => {
            this.setState({ error, loading: false });
            console.log("My APPOINTMENTS Error: " + JSON.stringify(error))
          });
      }
    }

    componentWillMount() {
      this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
      this.forceUpdate();
  }

    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'My Appointments' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
              rightComponent={ this.renderRightIcons() }
            />
          );
        }

    renderRightIcons = () => {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.setState({ isSearchClicked: true })} style={{marginHorizontal: 7}}>
            <Icon name="search" type="font-awesome" color="#fff" size={18} style={{paddingTop:40}}></Icon>
          </TouchableOpacity>
        </View>
      );
    }

    renderSearchBarHeader = () => {
      return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={this.renderCenterSearchBar()}
          rightComponent={{ icon: 'close', color: '#fff', onPress: () => {
            this.setState({ isSearchClicked: false });
            this.renderListAccordingToSearchBar('');
            } 
          }}
          leftComponent={{ icon: 'search', type: 'font-awesome', color: '#fff', size:18 }}
        />
      );
    }

    renderCenterSearchBar = () => {
      return(
        <TextInput
            ref="searchBarInput"
            autoCapitalize = 'none'
            underlineColorAndroid="transparent" 
            placeholder="Search an Appointment ..." 
            placeholderTextColor="#fff" 
            style={styles.searchBarTextInput}
            onChangeText={(text) => this.renderListAccordingToSearchBar(text)}
            value={this.state.searchText}
          />
      );
    }

    renderListAccordingToSearchBar = (text) => {
      this.setState({searchText: text});
      console.log("All Books Array Holder: " + this.arrayHolder);
      const newData = this.arrayHolder.filter(item => {
        const itemData = `${item.appointmentId} ${item.slotDate.toUpperCase()}}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData,
      });
    }

      returnDatePicker = () => {
          return (
            <View style={{flexDirection: 'row', marginHorizontal: 5, alignSelf:'center', justifyContent:'center'}}>
              <View style={{padding: 5}}>
                <Icon name='calendar' type='font-awesome' color='#FF8F00' size={18} underlayColor={'#64b5f6'} />
              </View>
              <DatePicker
              date={this.state.date}
              onDateChange={date => this.setState({date})}
              placeHolderTextStyle={{fontSize:14}}
              />
            </View>
      )
      }
    
    rightIconFunctionality = () => {
       // if (this.state.searchBarTextTouched) {
          return (
              <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
              {this.returnDatePicker()}
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
                <AppointmentsCard key={item.appointmentId.toString()} navigation={this.props.navigation} item={item} />
              )}
              keyExtractor={item => item.appointmentId.toString()}
            />
            </View>
            </ScrollView>
          
        );
      }
  
    render() {
      if (global.isLoggedIn === false) {
        return(
            <View style={styles.Hcontainer}>
                {this.renderHeader()}
                <View style={[styles.container, {alignContent: 'center', justifyContent: 'center'}]}>
                    <Text style={{justifyContent: 'center', alignSelf: 'center'}}>Please Login First!!!</Text>
                    <TouchableOpacity style={[styles.customBtnBG, {margin: 20}]} onPress={() => {this.props.navigation.navigate('loginSignupSelection')}} >
                        <Text style={[styles.customBtnText, {alignSelf: 'center'}]}>Go To Login Screen!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
      return(
        <View style={styles.container}>
            { this.state.isSearchClicked ? this.renderSearchBarHeader() : this.renderHeader() }

            
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <View style={[styles.sectionStyle,{flex: 1, flexDirection: 'row'}]}>
                  {this.rightIconFunctionality()}
                </View>
              <View style={[styles.sectionStyle,{flex: 1, flexDirection: 'row'}]}>
                <TouchableOpacity style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
                  <Text style={{padding: 5, alignSelf:'center', justifyContent: 'center'}}>All Appointments</Text>
                </TouchableOpacity>
              </View>
            </View>

            { this.returnList() }

        </View>
    )
    }
  }
}

const styles = {
    container: {
        flex: 1
    },
    Hcontainer: {
      flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
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
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      //backgroundColor: '#F5F5F5',
      borderWidth: 0,
      //borderColor: '#F57C00',
      height: 35,
      borderRadius: 15,
      margin: 5
    },
    customBtnBG: {
      backgroundColor: "#FF9800",
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 5
  },
  customBtnText: {
      fontSize: 15,
      color: "#fff",
  },
}

export default MyAppointments;