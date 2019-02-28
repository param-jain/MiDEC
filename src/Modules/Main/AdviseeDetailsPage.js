import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Avatar, Icon, Header } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';

class AdviseeDetailsScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
        isDateTimePickerVisible: false,
        date: '',
        today: ''
      }
  
    this.arrayHolder = [];
  }

  componentDidMount() {
    const today = new Date();
    this.setState({date: today, today});
  }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
   
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      this.setState({ date });
      this._hideDateTimePicker();
    };

    renderCardDetail = () => {

      const { navigation } = this.props;
      const item = navigation.getParam('item', 'Oops');

      const { title, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry } = item;

      return(
        <Card>

            <Text style={{fontWeight: '600', marginBottom: 10}}>{title}</Text>
      

            <View style={{flexDirection:'row',justifyContent: 'space-around'}}>

            <View style={{flexDirection:'column', paddingRight: 15}}>
              <Avatar
              size="large"
              activeOpacity={0.7}/>
              <Text style={mystyles.avatarText}>{currCompany}</Text>
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
                    <Text style={{fontSize: 12}} >{((currIndustry).length > 10) ? (((currIndustry).substring(0, 7)) + ' ...') : currIndustry}</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row', paddingBottom: 4}}>
                    <Icon name="star-half" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>  Rating </Text>
                    <Text style={{fontSize: 12, paddingLeft:64, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>{rating} / 5</Text>
                    </View>
                    
                </View>
            </View>
      
            <View style={{flexDirection: 'column'}}>
                <View style={{marginBottom: 30, marginLeft: 25}}>
                  <Icon name="bookmark-o" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}></Icon>
                </View>
                <View style={{marginBottom: 30, marginLeft: 25}}>
                 <Icon name="share" size={18} style={{paddingTop:40}}></Icon>
                </View>
             </View>
      
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
          <Text>{item.briefBackground}</Text>
        </Card>
      );
    }

    renderPickers = () => {
      return(
        <Card>
           <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Icon name="calendar" type="font-awesome" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
              <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Select Your Slot: </Text>
            </View>
            <Text>{this.state.date.toString()}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode='datetime'
            minimumDate={this.state.today}
            minuteInterval={30}
        />
        </Card>
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
              <Text style={{marginHorizontal: 0}}>{item.currIndustry}</Text>
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
              <TouchableOpacity onPress={() => navigation.navigate('adviseeDetails', {item: item})} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
                <Text style={{alignSelf: 'center', padding: 5}}>Proceed</Text> 
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      );
    }
  }


const mystyles = StyleSheet.create({
  avatarText: {
      textAlign: 'left',
      paddingLeft: 5,
      paddingTop: 5,
      color: '#000',
      fontWeight: 'bold',
    },
  
})

  export default AdviseeDetailsScreen;