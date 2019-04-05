import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Share, Alert } from 'react-native';
import {Card, Avatar, Button, Icon} from 'react-native-elements';

export default class CardDetail extends Component{

  constructor(props) {
    super(props);

    this.state = {
      currentLoggedInUser: ''
    }
  }
    
  componentDidMount() {
    this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
    console.log('CARD DETAIL: ' + global.isCurrentLoggedInUser)
  }

  componentWillMount() {
    this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
    this.forceUpdate();
}

  render() {

      const { navigation } = this.props;
      //const item = navigation.getParam('item', 'Oops');  
      const item = this.props.item;
      const { adviserTitle, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry, bookMarked } = item;
      
        return(
            
          <Card>

          <Text style={{fontWeight: '600', marginBottom: 10}}>{((adviserTitle).length > 45) ? (((adviserTitle).substring(0, 42)) + ' ...') : adviserTitle}</Text>
    

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
                  <Text style={{fontSize: 12}} >{((JSON.stringify(currIndustry)).length > 14) ? ((JSON.stringify(currIndustry).substring(2, 9)) + ' ...') : currIndustry}</Text> 
                  </View>
    
    
                  <View style={{flexDirection:'row', paddingBottom: 4}}>
                  <Icon name="star-half" size={16} color="#FF6D00" style={{paddingRight: 5}}/>
                  <Text style={{fontSize: 12}}>  Rating </Text>
                  <Text style={{fontSize: 12, paddingLeft:64, paddingRight:10}}>:</Text>                
                  <Text style={{fontSize: 12}}>{rating} / 5</Text>
                  </View>
                  
              </View>
    
    
              <View style={{flexDirection:'column'}}>
    
                  {/* <View style={{flexDirection:'row'}}>
                    <View style={{padding:10}}></View>
                    <Text style={{fontSize: 12, paddingRight:5}}>:</Text>                
                    <Text style={{fontSize: 12}}>40 Yrs 11 Mnt</Text>
                  </View> */}
    
    
                  {/* <View style={{flexDirection:'row'}}>
                    <View style={{padding:10}}></View>
                    <Text style={{fontSize: 12, paddingRight:5}}>:</Text>       
                    <Text style={{fontSize: 12}}>INR 4000/30 min</Text>
                  </View> */}
    
    
                  {/* <View style={{flexDirection:'row'}}>
                    <View style={{padding:10}}></View>
                    <Text style={{fontSize: 12, paddingRight:5}}>:</Text>
                    <Text style={{fontSize: 12}}>INR 4000/30 min</Text>
                  </View> */}
    
    
                  {/* <View style={{flexDirection:'row'}}>
                    <View style={{padding:10}}></View>
                    <Text style={{fontSize: 12, paddingRight:5}}>:</Text>
                    <Text style={{fontSize: 12}}>3/5</Text>
                  </View> */}
    
              </View>
    
          </View>
    
          <View style={{flexDirection: 'column'}}>
              <View style={{marginBottom: 30, marginLeft: 25}}>
                {
                  bookMarked
                  ? 
                  <Icon onPress={() => {onBookmarkPressed(item, false)}} name="bookmark" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}/> 
                  : 
                  <Icon onPress={() => {onBookmarkPressed(item, true)}} name="bookmark-o" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}/> 
                }
              </View>
              <TouchableOpacity onPress={() => {onShare(item)}} style={{marginBottom: 30, marginLeft: 25}}>
               <Icon name="share" size={18} style={{paddingTop:40}}></Icon>
              </TouchableOpacity>
           </View>

          </View>
    
    
          <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0}}>
          {/* <Button type="outline" title="Book an Appointment" buttonStyle={{borderColor: '#FF9800', borderRadius: 10}} titleStyle={{color: '#000'}}></Button> */}
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('adviseeDetails', {item: item})}} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
              <Text style={{alignSelf: 'center', padding: 5}}>Book an Appointment</Text> 
            </TouchableOpacity>
          </View>
    
          </Card>
      )
      }        
    }

    onBookmarkPressed = (item, flag) => {
      
      if (item.bookMarked === true) {
        //remove bookmark
        console.log('REMOVE BM! ');
        const url = `http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/prfl/removeBM`;
      
        fetch(url, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
          },
          body: JSON.stringify({
            "adviserId" : item.adviserId,
            "adviseeId" : global.isCurrentLoggedInUser.userId 
          }),
          })
          .then((response) => response.json())
          .then(res => {
            console.log("shdsad: "+ JSON.stringify(res));
          })
          .catch(error => {
            console.log("Error: Remove BM: " + JSON.stringify(error));
          
          });
      } else {
        //add bookmark
        console.log('ADD BM! ');
        const url = `http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/prfl/addBM`;

        fetch(url, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
          },
          body: JSON.stringify({
            "adviserId" : item.adviserId,
            "adviseeId" : global.isCurrentLoggedInUser.userId
          }),
          })
          .then((response) => response.json())
          .then(res => {
            console.log("shdsad: "+ JSON.stringify(res));
          })
          .catch(error => {
            console.log("Error: Remove BM: " + JSON.stringify(error));
          });
      }
    }

    onShare = async (item) => {
      try {
        const result = await Share.share({
          message:
            `${item.title}` + " => " + `${item.currCompany}`,
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };


const mystyles = StyleSheet.create({
    avatarText: {
        textAlign: 'left',
        paddingLeft: 5,
        paddingTop: 5,
        color: '#000',
        fontWeight: 'bold',
      },
    
})