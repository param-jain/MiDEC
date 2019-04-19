import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import { DatePicker } from 'native-base';

class AppointmentsCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          loading: false,
          searchLoad: false,
          searchBarText: '',
          searchBarTextTouched: false,
          data:[],
          error: '',
          bookSelected:[],
        }

        this.arrayHolder = [];
    }

    // renderHeader = () => {
    //     return(
    //         <Header
    //           backgroundColor="#FF6D00"
    //           outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
    //           centerComponent={{ text: 'My Appointments' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
    //           leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
    //         />
    //       );
    //     }


    // renderSearchBar = () => {
    //     return (
    //         <TextInput
    //             ref="searchBarInput"
    //             autoCapitalize = 'none'
    //             underlineColorAndroid="transparent" 
    //             placeholder="Find an Appointment ..." 
    //             placeholderTextColor="#616161" 
    //             style={styles.searchBarTextInput}
    //             onChangeText={(text) => this.onSearchTextChange(text)}
    //             value={this.state.searchBarText}
    //             />
    //     );
    // }

    // onSearchTextChange(text) {
    //     //text=text.trim();
    //     this.setState({
    //       searchBarText: text,
    //       searchBarTextTouched: true,
    //       searchLoad: true
    //     });
    //     //console.log("All Books Array Holder: " + this.arrayHolder);
    //     /*const newData = this.arrayHolder.filter(item => {
    //       const itemData = `${item.Author.toUpperCase()} ${item.Publisher.toUpperCase()} ${item.Title.toUpperCase()}`;
    //       const textData = text.toUpperCase();
    //       return itemData.indexOf(textData) > -1;
    //     });
    //     this.setState({
    //       data: newData,
    //       searchLoad: false
    //     });*/
    //   }

    //   focusTextInput() {
    //     this.refs.searchBarInput.focus();
    //   }

    // searchIconFunctionality = () => {
    //     return (
    //       <View style={{marginLeft: 15, marginRight: 10, alignContent:'center'}}>
    //         <Icon name='magnifying-glass' type='entypo' color='#FF8F00' onPress={() => this.focusTextInput()} />
    //       </View>
    //     );
    //   }

    //   returnDatePicker = () => {
    //       return (
    //         <View style={{flexDirection: 'row', marginHorizontal: 5, alignSelf:'center', justifyContent:'center'}}>
    //           <View style={{paddingLeft: 5, paddingTop: 10}}>
    //             <Icon name='calendar' type='font-awesome' color='#FF8F00' size={18} underlayColor={'#64b5f6'} />
    //           </View>
    //           <DatePicker
    //           date={this.state.date}
    //           onDateChange={date => this.setState({date})}
    //           placeHolderTextStyle={{fontSize:14}}
    //           />
    //         </View>
    //   )
    //   }
    
    // rightIconFunctionality = () => {
    //    // if (this.state.searchBarTextTouched) {
    //       return (
    //           <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
    //           {this.returnDatePicker()}
    //         </View>
    //       );
    //     }
    //   //}
  
    render() {

      const { navigation } = this.props;
      const item = this.props.item;
      const { appointmentId, referenceTx, slotDate, slotTime, durationMins} = item;
      console.log('Appointments: ', item);

        return(
            <View style={styles.container}>

                <Card>
                <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', paddingBottom: 4, justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 12, flex: 2}}>Appointment Ref No</Text>
                  <Text style={{fontSize: 12, flex:1}}>:</Text>                
                  <Text style={{fontSize: 12, flex: 2}}>{appointmentId}</Text>
                </View>


                <View style={{flexDirection:'row', paddingBottom: 4, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, flex: 2}}>Appointment Date</Text>
                <Text style={{fontSize: 12, flex: 1}}>:</Text>                
                <Text style={{fontSize: 12, flex: 2}}>{slotDate}</Text>
                </View>


                <View style={{flexDirection:'row', paddingBottom: 4, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, flex: 2}}>Start time</Text>
                <Text style={{fontSize: 12, flex: 1}}>:</Text>                
                <Text style={{fontSize: 12, flex: 2}} >{slotTime}</Text> 
                </View>


                <View style={{flexDirection:'row', paddingBottom: 4, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, flex:2}}>Duration</Text>
                <Text style={{fontSize: 12, flex: 1}}>:</Text>                
                <Text style={{fontSize: 12, flex: 2}}>{durationMins}</Text>
                </View>

                </View>


                <View style={{flexDirection: 'row', paddingTop:20, justifyContent:'space-evenly'}}>
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                    <Text style={styles.customBtnText}>Request a re-schedule</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                    <Text style={styles.customBtnText}>Request a cancellation</Text>
                </TouchableOpacity>
              </View>

                </Card>

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
    },    customBtnBG: {
        backgroundColor: "#FF9800",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },
    customBtnText: {
        fontSize: 13,
        color: "#fff"
    }
}

export default AppointmentsCard;