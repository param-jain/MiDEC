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
          loading: false,
          searchLoad: false,
          searchBarText: '',
          searchBarTextTouched: false,
          data:[
            {
              "appointmentId": 5,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "MTLNQ1YD9RW1GP8FISCYJY",
              "slotDate": "2019-04-30",
              "slotTime": "09:30 hrs to 10:00 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:45:52.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 6,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "KKI0UMMT509EE856KHB2GL",
              "slotDate": "2019-04-30",
              "slotTime": "09:30 hrs to 10:00 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:45:58.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 7,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "DANJTF6Z5BCD5RYDFR8LWO",
              "slotDate": "2019-04-30",
              "slotTime": "09:30 hrs to 10:00 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:45:59.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 8,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "H0UY9NQ3LK6BMEBI5325Z9",
              "slotDate": "2019-04-30",
              "slotTime": "09:30 hrs to 10:00 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:45:59.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 9,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "U5DFE7S75NAZUH735PUVN8",
              "slotDate": "2019-04-30",
              "slotTime": "09:30 hrs to 10:00 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:45:59.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 10,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "GJIZPSDJR6BZKGN4M8JN11",
              "slotDate": "2019-04-30",
              "slotTime": "09:30 hrs to 10:00 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:45:59.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 11,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "3Q5U3PX8J1RPRGA9QTRIQN",
              "slotDate": "2019-05-01",
              "slotTime": "10:00 hrs to 10:30 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 30,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-01-30 07:46:43.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            },
            {
              "appointmentId": 29,
              "displayId": null,
              "adviserId": 36,
              "adviseeId": 35,
              "referenceTx": "5XT4CELEHZOIR3UZDA4LIY",
              "slotDate": "2019-05-06",
              "slotTime": "11:00 hrs to 11:30 hrs",
              "preferredSlotDate": null,
              "preferredSlotTimes": null,
              "status": "INIT",
              "comments": "New Appointment by Advisee",
              "agenda": null,
              "offerCode": null,
              "amount": 0,
              "paymentId": null,
              "refund": 0,
              "durationMins": 15,
              "rating": 0,
              "errorMsg": null,
              "lastModifiedBy": 35,
              "lastModifiedDate": "2019-02-04 12:05:50.0",
              "userType": null,
              "userId": 0,
              "aeFirstName": "Siddharth",
              "aeLastName": "Mantripragada",
              "aeEmail": "capelsid@gmail.com"
            }
          ],
          error: '',
          bookSelected:[],
        }

        this.arrayHolder = [];
    }

    componentDidMount() {
      
    }

    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'My Appointments' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
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
                placeholder="Find an Appointment ..." 
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

      focusTextInput() {
        this.refs.searchBarInput.focus();
      }

    searchIconFunctionality = () => {
        return (
          <View style={{marginLeft: 15, marginRight: 10, alignContent:'center'}}>
            <Icon name='magnifying-glass' type='entypo' color='#FF8F00' onPress={() => this.focusTextInput()} />
          </View>
        );
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
        return(
            <View style={styles.container}>
                { this.renderHeader() }
                
                <View style={{flexDirection: 'row'}}>
                  <View style={[styles.sectionStyle, {flex: 1}]}>
                      {this.searchIconFunctionality()}
                      {this.renderSearchBar()}
                  </View>
                </View>
                
                <View style={{flexDirection: 'row'}}>
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
}

export default MyAppointments;