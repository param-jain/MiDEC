import React, { Component } from 'react';
import { View, Dimensions, Modal, Alert, TouchableHighlight, Text, Picker, BackHandler, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Avatar, Icon, Header } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import axios from 'axios';

class AdviseeDetailsScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
        isDateTimePickerVisible: false,
        date: '',
        slot: '',
        availableDates: [],
        availableSlots: [],
        dateModalVisible: false,
        slotModalVisible: false
      }
  
    this.arrayHolder = [];
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    const { navigation } = this.props;
    const item = navigation.getParam('item', 'Oops');

    const { adviserTitle, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry } = item;
    if (item.slotDates !== null) {
      console.log('Slot Dates: '+ item.slotDates[0])
      this.setState({date: item.slotDates[0], availableDates: item.slotDates});
    }

    this.getAvailableDateSlots();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
      }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
      }, ], {
          cancelable: false
      }
   )
   return true;
  }

    renderCardDetail = () => {

      const { navigation } = this.props;
      const item = navigation.getParam('item', 'Oops');

      const { adviserTitle, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry } = item;

      return(
        <Card>

            <Text style={{fontWeight: '600', marginBottom: 10}}>{adviserTitle}</Text>
      

            <View style={{flexDirection:'row',justifyContent: 'space-around'}}>

            <View style={{flexDirection:'column', paddingRight: 15}}>
              <Avatar
              size="large"
              activeOpacity={0.7}/>
              <Text style={styles.avatarText}>{currCompany}</Text>
            </View>
      
      
      
            <View style={{flexDirection:'row', paddingLeft:5, marginLeft: 5}}>
      
                <View style={{flexDirection:'column'}}>
      
                    <View style={{flexDirection:'row', paddingLeft:0, paddingBottom: 4}}>
                    <Icon name="cube" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>  Work Experience </Text>
                    <Text style={{fontSize: 12, paddingLeft:5, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>{totalWorkExpYears} Yrs {totalWorkExpMonths} Mnts</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row', paddingBottom: 4}}>
                    <Icon name="money" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>  Fees per call </Text>
                    <Text style={{fontSize: 12, paddingLeft:27, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>INR {feePer30Mins} / 30 min</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row', paddingBottom: 4}}>
                    <Icon name="industry" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>  Industry </Text>
                    <Text style={{fontSize: 12, paddingLeft:54, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}} >{((currIndustry[0]).length > 10) ? (((currIndustry[0]).substring(0, 7)) + ' ...') : currIndustry[0]}</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row', paddingBottom: 4}}>
                    <Icon name="star-half" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>  Rating </Text>
                    <Text style={{fontSize: 12, paddingLeft:64, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>{rating} / 5</Text>
                    </View>
                    
                </View>
            </View>
      {/*
            <View style={{flexDirection: 'column'}}>
                <View style={{marginBottom: 30, marginLeft: 25}}>
                  <Icon name="bookmark-o" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}></Icon>
                </View>
                <View style={{marginBottom: 30, marginLeft: 25}}>
                 <Icon name="share" size={18} style={{paddingTop:40}}></Icon>
                </View>
             </View>
      */}
            </View>
            </Card>
      );
    }

    renderHeader = () => {
      return(
          <Header
            backgroundColor="#FF6D00"
            outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
            centerComponent={{ text: 'M i D E C' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
          />
        );
      }

    renderBackground = () => {
      const { navigation } = this.props;
      const item = navigation.getParam('item', 'Oops');

      return(
        <Card>
         <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="cubes" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Brief Background: </Text>
            </View>
          <Text>{item.background}</Text>
        </Card>
      );
    }

    getAvailableDateSlots = () => {
      const { navigation } = this.props;
      const item = navigation.getParam('item', 'Oops');

      const { adviserTitle, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry } = item;
      
      let url = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/slots/get/'+`${item.adviserId}`+'?slotDate='+`${this.state.date}`
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
          console.log("Slots Duh: "+ JSON.stringify(res));
          this.setState({
            availableSlots: res.slotTimes,
            slot: res.slotTimes[0]
          });
          //this.arrayHolder = this.state.data;
          console.log("Home Screen Data: " + JSON.stringify(this.state.data))
        })
        .catch(error => {
          this.setState({ error, loading: false });
          console.log("Error: Home Screen Data: " + JSON.stringify(error))
        });

}

    renderPickers = () => {
      return(
            <View style={{flexDirection: 'row'}}>
              <View style={{flex:1}}>
                <Card style={{height: 200}}>
                  <TouchableOpacity onPress={() => {this.setState({ dateModalVisible: true})}}>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <Icon name="calendar" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                      <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Select Date: </Text>
                    </View>
                    <Text>{this.state.date.toString()}</Text>
                  </TouchableOpacity>
                </Card>

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setState({dateModalVisible: false})}
                    visible={this.state.dateModalVisible}
                >
                    <View style={styles.popupOverlay } onPress={() => this.setState({dateModalVisible: false})}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                            <TouchableOpacity style={{marginTop: 50}} onPress={() => this.setState({dateModalVisible: false})} >
                                <Icon name='cross' type='entypo' raised color='#FF3D00'/>
                            </TouchableOpacity>
                            <View style={{borderBottomWidth: 2, borderBottomColor:'#eeeeee', marginHorizontal:20}}>
                                <Text style={styles.modalTitle}>Select your Date</Text>
                            </View>
                            <View style={{marginLeft: 15, marginRight:15, marginTop: 7}}>
                                <Picker
                                    selectedValue={this.state.date}
                                    style={{height: 50, width: 2*Dimensions.get('window').width/3}}
                                    onValueChange={(itemValue) => {
                                        this.setState({dateModalVisible: false, date: this.state.availableDates[itemValue]});
                                        this.getAvailableDateSlots();
                                    }}
                                    mode="dropdown">
                                    {this.state.availableDates.map((item, index) => {
                                      return (<Picker.Item label={item} value={index} key={item}/>) 
                                  })}
                                </Picker>
                            </View>
                            </View>
                        </View>
                    </View>
                </Modal>
              </View>


              <View style={{flex:1}}>
                <Card style={{height: 200}}>
                  <TouchableOpacity onPress={() => this.setState({slotModalVisible: true})}>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <Icon name="calendar" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                      <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Select Slot: </Text>
                    </View>
                    <Text>{this.state.slot.toString()}</Text>
                  </TouchableOpacity>
                </Card>

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setState({slotModalVisible: true})}
                    visible={this.state.slotModalVisible}
                >
                    <View style={styles.popupOverlay } onPress={() => this.setState({slotModalVisible: false})}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                            <TouchableOpacity style={{marginTop: 50}} onPress={() => this.setState({slotModalVisible: false})} >
                                <Icon name='cross' type='entypo' raised color='#FF3D00'/>
                            </TouchableOpacity>
                            <View style={{borderBottomWidth: 2, borderBottomColor:'#eeeeee', marginHorizontal:20}}>
                                <Text style={styles.modalTitle}>Select your Slot</Text>
                            </View>
                            <View style={{marginLeft: 15, marginRight:15, marginTop: 7}}>
                                <Picker
                                    selectedValue={this.state.slot}
                                    style={{height: 50, width: 2*Dimensions.get('window').width/3}}
                                    onValueChange={(itemValue) => {
                                        this.setState({slotModalVisible: false, slot: this.state.availableSlots[itemValue]});
                                    }}
                                    mode="dropdown">
                                    {this.state.availableSlots.map((item, index) => {
                                      return (<Picker.Item label={item} value={index} key={item}/>) 
                                  })}
                                </Picker>
                            </View>
                            </View>
                        </View>
                    </View>
                </Modal>
              </View>
          </View>
      );
    }

    renderExtras = () => {
      const { navigation } = this.props;
      const item = navigation.getParam('item', 'Oops');

      return(
        <View>
          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="attach-money" type="material" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Fees: </Text>
              <Text style={{marginHorizontal: 10}}>Rs. {item.feePer30Mins} per 30 Minutes</Text>
            </View>
            <Text style={{marginHorizontal: 86}}>Rs. {item.feePer15Mins} per 15 Minutes</Text>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="certificate" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Current Company: </Text>
              <Text style={{marginHorizontal: 0}}>{item.currCompany}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="industry" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Current Industry:  </Text>
              <Text style={{marginHorizontal: 0}}>{((item.currIndustry[0]).length > 10) ? (((item.currIndustry[0]).substring(0, 12)) + ' ...') : item.currIndustry[0]}</Text>
            </View>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="skip-previous" type="material" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Past Companies: </Text>
            </View>
            <Text style={{marginHorizontal: 10}}>{item.pastCompanies}</Text>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="cube" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Total Work Experience: </Text>
              <Text style={{marginHorizontal: 0}}>{item.totalWorkExpYears} Years {item.totalWorkExpMonths} Months</Text>
            </View>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="explicit" type="material" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Areas of Expertise: </Text>
            </View>
            <Text style={{marginHorizontal: 10}}>{item.expertAreas}</Text>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="book" type="material" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Educational Background: </Text>
            </View>
            <Text style={{marginHorizontal: 10}}>{item.eduQualif}</Text>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="area-chart" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Current Functional Area: </Text>
            </View>
            <Text style={{marginHorizontal: 10}}>{item.currFnclArea}</Text>
          </Card>

          <Card>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <Icon name="crop-square" type="material" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Past Functional Areas: </Text>
            </View>
            <Text style={{marginHorizontal: 10}}>{item.pastFnclArea}</Text>
          </Card>
        </View>
      );
    }


    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const item = navigation.getParam('item', 'Oops');

      return (
        <View style={{ flex: 1 }}>
          {this.renderHeader()}
          <ScrollView>
            {this.renderCardDetail()}
            {this.renderBackground()}
            {this.renderPickers()}
            {this.renderExtras()}

            <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0, marginVertical: 20}}>
            {/* <Button type="outline" title="Book an Appointment" buttonStyle={{borderColor: '#FF9800', borderRadius: 10}} titleStyle={{color: '#000'}}></Button> */}
              <TouchableOpacity onPress={() => {navigation.navigate('confirmPayment', {slotSelected: this.state.slot, dateSelected: this.state.date, adviserSelected: item})}} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
                <Text style={{alignSelf: 'center', padding: 5}}>Proceed</Text> 
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  avatarText: {
      textAlign: 'left',
      paddingLeft: 5,
      paddingTop: 5,
      color: '#000',
      fontWeight: 'bold',
    },
    popup: {
      backgroundColor: 'white',
      marginTop: 80,
      marginHorizontal: 20,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#666'
    },
    popupOverlay: {
      backgroundColor: "#00000057",
      flex: 1,
      marginTop: 30
    },
    popupContent: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      height:"80%",
    },
    modalTitle:{
      fontSize:22,
      marginBottom: 4,
      alignSelf:'center',
      textAlign: 'center',
      justifyContent: 'center',
      color:"#FF3D00",
      fontWeight:'bold',
      paddingTop: 50,
    },
  
})

  export default AdviseeDetailsScreen;