import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Avatar, Button, Icon} from 'react-native-elements';


const CardDetail = ({item, navigation}) => {
        const { title, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry } = item;
        return(
            /*<Card titleStyle={{alignSelf: 'flex-start'}} title={((title).length > 45) ? (((title).substring(0, 42)) + ' ...') : title}> */

            <Card>

            <Text style={{fontWeight: '600', marginBottom: 10}}>{((title).length > 45) ? (((title).substring(0, 42)) + ' ...') : title}</Text>
      

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
                  <Icon name="bookmark-o" type="font-awesome" size={20} style={{alignContent:'center', paddingHorizontal: 10}}></Icon>
                </View>
                <View style={{marginBottom: 30, marginLeft: 25}}>
                 <Icon name="share" size={18} style={{paddingTop:40}}></Icon>
                </View>
             </View>
      
            </View>
      
      
            <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0}}>
            {/* <Button type="outline" title="Book an Appointment" buttonStyle={{borderColor: '#FF9800', borderRadius: 10}} titleStyle={{color: '#000'}}></Button> */}
              <TouchableOpacity onPress={() => navigation.navigate('adviseeDetails', {item: item})} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
                <Text style={{alignSelf: 'center', padding: 5}}>Book an Appointment</Text> 
              </TouchableOpacity>
            </View>
      
            </Card>
        )
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

export default CardDetail;