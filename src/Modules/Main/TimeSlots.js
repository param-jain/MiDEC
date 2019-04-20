//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Picker
} from 'react-native'
import { Icon, Card, Header } from 'react-native-elements';
import MyDatePicker from 'react-native-datepicker';
import { DrawerActions } from 'react-navigation';

class TimeSlots extends Component {
  constructor(props){
    super(props);
    this.state = {
        tabSelected: 'from',
        from_date: '',
        to_date: '',
        seven_seventhirty: false,
        seventhirty_eight: false,
        eight_eightthirty: false,
        eightthirty_nine: false,
        nine_ninethirty: false,
        ninethirty_ten: false,
        ten_tenthirty: false,
        tenthirty_eleven: false,
        eleven_eleventhirty: false,
        eleventhirty_twelve: false,
        twelve_twelvethirty: false,
        twelvethirty_thirteen: false,
        thirteen_thirteenthirty: false,
        thirteenthirty_fourteen: false,
        fourteen_fourteenthirty: false,
        fourteenthirty_fifteen: false,
        fifteen_fifteenthirty: false,
        fifteenthirty_sixteen: false,
        sixteen_sixteenthirty: false,
        sixteenthirty_seventeen: false,
        seventeen_seventeenthirty: false,
        seventeenthirty_eighteen: false
    }
  }


  updateAccountType = (account_type) => {
     this.setState({ account_type: account_type })
  }

  onBanksChanged = (selectedBanks) => {
    this.setState({ selectedBanks });
  }


  changeButton7_730 = () =>{
    if(!this.state.seven_seventhirty) {
      this.setState({
        seven_seventhirty: true
      });
    }else{
      this.setState({
        seven_seventhirty: false,
      });
    }
  }


  changeButton730_8 = () =>{
    if(!this.state.seventhirty_eight) {
      this.setState({
        seventhirty_eight: true
      });
    }else{
      this.setState({
        seventhirty_eight: false,
      });
    }
  }

  changeButton8_830 = () =>{
    if(!this.state.eight_eightthirty) {
      this.setState({
        eight_eightthirty: true
      });
    }else{
      this.setState({
        eight_eightthirty: false,
      });
    }
  }

  changeButton830_9 = () =>{
    if(!this.state.eightthirty_nine) {
      this.setState({
        eightthirty_nine: true
      });
    }else{
      this.setState({
        eightthirty_nine: false,
      });
    }
  }

  changeButton9_930 = () =>{
    if(!this.state.nine_ninethirty) {
      this.setState({
        nine_ninethirty: true
      });
    }else{
      this.setState({
        nine_ninethirty: false,
      });
    }
  }

  changeButton930_10 = () =>{
    if(!this.state.ninethirty_ten) {
      this.setState({
        ninethirty_ten: true
      });
    }else{
      this.setState({
        ninethirty_ten: false,
      });
    }
  }


  changeButton10_1030 = () =>{
    if(!this.state.ten_tenthirty) {
      this.setState({
        ten_tenthirty: true
      });
    }else{
      this.setState({
        ten_tenthirty: false,
      });
    }
  }


  changeButton1030_11 = () =>{
    if(!this.state.tenthirty_eleven) {
      this.setState({
        tenthirty_eleven: true
      });
    }else{
      this.setState({
        tenthirty_eleven: false,
      });
    }
  }


  changeButton11_1130 = () =>{
    if(!this.state.eleven_eleventhirty) {
      this.setState({
        eleven_eleventhirty: true
      });
    }else{
      this.setState({
        eleven_eleventhirty: false,
      });
    }
  }

  changeButton1130_12 = () =>{
    if(!this.state.eleventhirty_twelve) {
      this.setState({
        eleventhirty_twelve: true
      });
    }else{
      this.setState({
        eleventhirty_twelve: false,
      });
    }
  }

  changeButton12_1230 = () =>{
    if(!this.state.twelve_twelvethirty) {
      this.setState({
        twelve_twelvethirty: true
      });
    }else{
      this.setState({
        twelve_twelvethirty: false,
      });
    }
  }


  changeButton1230_13 = () =>{
    if(!this.state.twelvethirty_thirteen) {
      this.setState({
        twelvethirty_thirteen: true
      });
    }else{
      this.setState({
        twelvethirty_thirteen: false,
      });
    }
  }

changeButton13_1330 = () =>{
  if(!this.state.thirteen_thirteenthirty) {
    this.setState({
      thirteen_thirteenthirty: true
    });
  }else{
    this.setState({
      thirteen_thirteenthirty: false,
    });
  }
}

changeButton1330_14 = () =>{
  if(!this.state.thirteenthirty_fourteen) {
    this.setState({
      thirteenthirty_fourteen: true
    });
  }else{
    this.setState({
      thirteenthirty_fourteen: false,
    });
  }
}

changeButton14_1430 = () =>{
  if(!this.state.fourteen_fourteenthirty) {
    this.setState({
      fourteen_fourteenthirty: true
    });
  }else{
    this.setState({
      fourteen_fourteenthirty: false,
    });
  }
}

changeButton1430_15 = () =>{
  if(!this.state.fourteenthirty_fifteen) {
    this.setState({
      fourteenthirty_fifteen: true
    });
  }else{
    this.setState({
      fourteenthirty_fifteen: false,
    });
  }
}

changeButton15_1530 = () =>{
  if(!this.state.fifteen_fifteenthirty) {
    this.setState({
      fifteen_fifteenthirty: true
    });
  }else{
    this.setState({
      fifteen_fifteenthirty: false,
    });
  }
}

changeButton1530_16 = () =>{
  if(!this.state.fifteenthirty_sixteen) {
    this.setState({
      fifteenthirty_sixteen: true
    });
  }else{
    this.setState({
      fifteenthirty_sixteen: false,
    });
  }
}


changeButton16_1630 = () =>{
  if(!this.state.sixteen_sixteenthirty) {
    this.setState({
      sixteen_sixteenthirty: true
    });
  }else{
    this.setState({
      sixteen_sixteenthirty: false,
    });
  }
}


changeButton1630_17 = () =>{
  if(!this.state.sixteenthirty_seventeen) {
    this.setState({
      sixteenthirty_seventeen: true
    });
  }else{
    this.setState({
      sixteenthirty_seventeen: false,
    });
  }
}

changeButton17_1730 = () =>{
  if(!this.state.seventeen_seventeenthirty) {
    this.setState({
      seventeen_seventeenthirty: true
    });
  }else{
    this.setState({
      seventeen_seventeenthirty: false,
    });
  }
}

changeButton1730_18 = () =>{
  if(!this.state.seventeenthirty_eighteen) {
    this.setState({
      seventeenthirty_eighteen: true
    });
  }else{
    this.setState({
      seventeenthirty_eighteen: false,
    });
  }
}


clearFromSlots = () =>{
  this.setState({
    seven_seventhirty: false,
    seventhirty_eight: false,
    eight_eightthirty: false,
    eightthirty_nine: false,
    nine_ninethirty: false,
    ninethirty_ten: false,
    ten_tenthirty: false,
    tenthirty_eleven: false,
    eleven_eleventhirty: false,
    eleventhirty_twelve: false,
    twelve_twelvethirty: false
  })
}


clearToSlots = () =>{
  this.setState({
    twelvethirty_thirteen: false,
    thirteen_thirteenthirty: false,
    thirteenthirty_fourteen: false,
    fourteen_fourteenthirty: false,
    fourteenthirty_fifteen: false,
    fifteen_fifteenthirty: false,
    fifteenthirty_sixteen: false,
    sixteen_sixteenthirty: false,
    sixteenthirty_seventeen: false,
    seventeen_seventeenthirty: false,
    seventeenthirty_eighteen: false
  })
}


open_To = () =>{
  this.setState({
    tabSelected: 'to',
  })
}

  loadBottomView = () => {
    <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
    if (this.state.tabSelected === 'from') {

      return(
        <View style={{height: 700}}> 
   
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{textAlignVertical: "center",textAlign: "center"}}>From: </Text>
          <MyDatePicker
              style={{alignSelf: 'center', padding: 10, width: 200}}
              date={this.state.from_date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
                }
              }}
              onDateChange={(from_date) => {this.setState({from_date: from_date})}}>
          </MyDatePicker>
        </View>

        <Card>

          <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={this.state.seven_seventhirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton7_730} >
                  <Text style={styles.timeslotButtonText}>07 - 07:30</Text>
              </TouchableOpacity>

              <TouchableOpacity style={this.state.seventhirty_eight? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton730_8} >
                  <Text style={styles.timeslotButtonText}>07:30 - 08</Text>
              </TouchableOpacity>

              <TouchableOpacity style={this.state.eight_eightthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton8_830} >
                  <Text style={styles.timeslotButtonText}>08 - 08:30</Text>
              </TouchableOpacity>

              <TouchableOpacity style={this.state.eightthirty_nine? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton830_9} >
                  <Text style={styles.timeslotButtonText}>08:30 - 09</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={this.state.nine_ninethirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton9_930} >
                  <Text style={styles.timeslotButtonText}>09 - 09:30</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={this.state.ninethirty_ten? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton930_10} >
                  <Text style={styles.timeslotButtonText}>09:30 - 10</Text>
              </TouchableOpacity>

              <TouchableOpacity style={this.state.ten_tenthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton10_1030} >
                  <Text style={styles.timeslotButtonText}>10 - 10:30</Text>
              </TouchableOpacity>

              <TouchableOpacity style={this.state.tenthirty_eleven? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1030_11} >
                  <Text style={styles.timeslotButtonText}>10:30 - 11</Text>
              </TouchableOpacity>       
              </View>


              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={this.state.eleven_eleventhirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton11_1130} >
                  <Text style={styles.timeslotButtonText}>11 - 11:30</Text>
              </TouchableOpacity> 

              <TouchableOpacity style={this.state.eleventhirty_twelve? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1130_12} >
                  <Text style={styles.timeslotButtonText}>11:30 - 12</Text>
              </TouchableOpacity>

              <TouchableOpacity style={this.state.twelve_twelvethirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton12_1230} >
                  <Text style={styles.timeslotButtonText}>12 - 12:30</Text>
              </TouchableOpacity>  

              <TouchableOpacity style={{  borderRadius: 5,borderColor: '#FFFFFF', borderWidth: 1,paddingHorizontal: 10,paddingVertical: 15,marginBottom: 5,}}>
                  <Text style={{color: 'white'}}>12-12:30</Text>
              </TouchableOpacity>  
              </View>

           </View>

        </Card>


        <Text style={{fontSize: 10, paddingHorizontal:10, marginTop: 10, textAlign: 'center'}}>1. Please ensure you are available at the mentioned timeslots to take the phone call. 
        Missing an appointment could result in lowering of your rating, and even a permanent ban from MiDEC. 
        Please review our terms and conditions for more information.</Text>

        
        <Text style={{fontSize: 10, paddingHorizontal:10, textAlign: 'center'}}>2. Once a client books an appointment with you, the information that the client 
        wishes to share, shall be provided to you along with the appointment intimation. 
        All other relevant information might be revealed by the client during your phone call.</Text>

          <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={this.clearFromSlots} >
                <Text style={styles.customBtnText}>Clear selected timeslots</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.customBtnBG} onPress={this.open_To} >
                <Text style={styles.customBtnText}>Next</Text>
            </TouchableOpacity>
          </View>

        </View>
      );
    } else if (this.state.tabSelected === 'to') {
      return(
        <View>

              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{textAlignVertical: "center",textAlign: "center"}}>To: </Text>
              <MyDatePicker
                  style={{alignSelf: 'center', fontSize: 13, padding: 10, width: 200}}
                  date={this.state.to_date} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  placeholder="select date"
                  format="DD-MM-YYYY"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                  dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                    }
                  }}
                  onDateChange={(to_date) => {this.setState({to_date: to_date})}}>
              </MyDatePicker>
            </View>
 

                <Card>

                  <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                  
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity style={this.state.twelvethirty_thirteen? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1230_13} >
                        <Text style={styles.timeslotButtonText}>12:30 - 13</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.thirteen_thirteenthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton13_1330} >
                        <Text style={styles.timeslotButtonText}>13 - 13:30</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.thirteenthirty_fourteen? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1330_14} >
                        <Text style={styles.timeslotButtonText}>13:30 - 14</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.fourteen_fourteenthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton14_1430} >
                        <Text style={styles.timeslotButtonText}>14 - 14:30</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity style={this.state.fourteenthirty_fifteen? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1430_15} >
                        <Text style={styles.timeslotButtonText}>14:30 - 15</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={this.state.fifteen_fifteenthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton15_1530} >
                        <Text style={styles.timeslotButtonText}>15 - 15:30</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.fifteenthirty_sixteen? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1530_16} >
                        <Text style={styles.timeslotButtonText}>15:30 - 16</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.sixteen_sixteenthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton16_1630} >
                        <Text style={styles.timeslotButtonText}>16 - 16:30</Text>
                    </TouchableOpacity>       
                    </View>


                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity style={this.state.sixteenthirty_seventeen? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1630_17} >
                        <Text style={styles.timeslotButtonText}>16:30 - 17</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={this.state.seventeen_seventeenthirty? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton17_1730} >
                        <Text style={styles.timeslotButtonText}>17 - 17:30</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={this.state.seventeenthirty_eighteen? styles.timeslotButtonActive: styles.timeslotButtonInactive} activeOpacity= {.5} onPress={this.changeButton1730_18} >
                        <Text style={styles.timeslotButtonText}>17:30 - 18</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity style={{  borderRadius: 5,borderColor: '#FFFFFF', borderWidth: 1,paddingHorizontal: 10,paddingVertical: 15,marginBottom: 5}}>
                        <Text style={{color: 'white'}}>18 - 18:30</Text>
                    </TouchableOpacity>  
                    </View>

                </View>

                </Card>

                          <Text style={{fontSize: 10, paddingHorizontal:10, marginTop: 10, textAlign: 'center'}}>1. Please ensure you are available at the mentioned timeslots to take the phone call. 
                  Missing an appointment could result in lowering of your rating, and even a permanent ban from MiDEC. 
                  Please review our terms and conditions for more information.</Text>

                  
                  <Text style={{fontSize: 10, paddingHorizontal:10, textAlign: 'center'}}>2. Once a client books an appointment with you, the information that the client 
                  wishes to share, shall be provided to you along with the appointment intimation. 
                  All other relevant information might be revealed by the client during your phone call.</Text>
        
                <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>

                <TouchableOpacity style={styles.customBtnBG} onPress={this.clearToSlots} >
                <Text style={styles.customBtnText}>Clear selected timeslots</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                    <Text style={styles.customBtnText}>Save</Text>
                </TouchableOpacity>

                </View>
      </View>
      );
    }
    <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
  }

  renderHeader = () => {
    return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'Time Slots' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
        />
      );
    }
  

  render() {

    return (
      <View style={styles.container}>

        {this.renderHeader()}

        <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>

        <View>
            <Text style={{alignSelf: 'center',color: '#ff6600', fontSize: 15, padding: 10}}>Select available time slots</Text>
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-evenly', backgroundColor:'#f3f3f3'}}>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'from'})} style={styles.newButton}>
                <Icon type='material-community' name='ray-start' color='#ff6600'/>
                  <Text style={styles.buttonText}>From</Text>
                  <Text style={styles.buttonText}>{this.state.from_date}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'to'})} style={styles.newButton}>
                <Icon type='material-community' name='ray-end' color='#ff6600'/>
                  <Text style={styles.buttonText}>To</Text>
                  <Text style={styles.buttonText}>{this.state.to_date}</Text>
              </TouchableOpacity>

        </View>

        
        <ScrollView showsVerticalScrollIndicator={false} style={{flexDirection:'column'}}>
          {this.loadBottomView()}
        </ScrollView>

        </View>

       </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFF'
  },
  toolbar: {
    height: 56,
  },
  title: {
    alignSelf: 'center',
    color: 'white'
  },
  IconText: {
    color: 'orange'
  },
  rule: {
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  newButton: {
     alignContent: 'center',
     justifyContent: 'center',
     height: 90
 },
 buttonText: {
   alignSelf: 'center',
   color: '#ff6600',
   textAlign:'center'
 },
 customBtnBG: {
     backgroundColor: "#FF9800",
     paddingHorizontal: 15,
     paddingVertical: 5,
     margin: 20,
     borderRadius: 5
 },
 customBtnText: {
     fontSize: 15,
     alignSelf: 'center',
     color: "#fff",
 },
 timeslotButtonBG: {
   borderRadius: 5,
   borderColor: '#d3d3d3', 
   borderWidth: 1,
   paddingHorizontal: 20,
   paddingVertical: 15
 },
 timeslotButtonActive: {
  borderRadius: 5,
  borderColor: '#FF9800', 
  borderWidth: 1,
  marginLeft: 3,
  marginRight: 3,
  paddingHorizontal: 10,
  paddingVertical: 15,
  marginBottom: 5,
 },
 timeslotButtonInactive: {
  borderRadius: 5,
  borderColor: '#d3d3d3', 
  borderWidth: 1,
  marginLeft: 3,
  marginRight: 3,
  paddingHorizontal: 10,
  paddingVertical: 15,
  marginBottom: 5
 }
})

export default TimeSlots