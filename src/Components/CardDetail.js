import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const CardDetail = ({item}) => {
        const { adviserId, title, currCompany, totalWorkExpYears, totalWorkExpMonths, feePer30Mins, rating, currIndustry } = item;
        return(
            <Card title={title}> 

            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
      
      
            <View style={{flexDirection:'column', padding: 5}}>
              <Avatar
              size="large"
              activeOpacity={0.7}/>
              <Text style={mystyles.avatarText}>{currCompany}</Text>
            </View>
      
      
      
            <View style={{flexDirection:'row', paddingLeft:10, marginLeft: 12}}>
      
                <View style={{flexDirection:'column'}}>
      
                    <View style={{flexDirection:'row', paddingLeft:0}}>
                    <Icon name="package-variant-closed" size={18} color="orange" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>Work Experience</Text>
                    <Text style={{fontSize: 12, paddingLeft:20, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>{totalWorkExpYears} Years {totalWorkExpMonths} Months</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row'}}>
                    <Icon name="currency-inr" size={18} color="orange" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>Fees per call</Text>
                    <Text style={{fontSize: 12, paddingLeft:46, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>INR {feePer30Mins} / 30 min</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row'}}>
                    <Icon name="poll" size={18} color="orange" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>Industry</Text>
                    <Text style={{fontSize: 12, paddingLeft:67, paddingRight:10}}>:</Text>                
                    <Text style={{fontSize: 12}}>{currIndustry}</Text>
                    </View>
      
      
                    <View style={{flexDirection:'row'}}>
                    <Icon name="star-half" size={18} color="orange" style={{paddingRight: 5}}/>
                    <Text style={{fontSize: 12}}>Rating</Text>
                    <Text style={{fontSize: 12, paddingLeft:76, paddingRight:10}}>:</Text>                
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
      
      {/*
            <View style={{flexDirection: 'column'}}>
      
                <Icon name="bookmark-outline" size={20} style={{alignContent:'center'}}></Icon>
                <Icon name="share-variant" size={18} style={{paddingTop:40}}></Icon>
             </View>
      
      */}
      
            </View>
      
      
            <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:5}}>
            <Button type="outline" title="Book an Appointment" buttonStyle={{borderColor: '#FF9800', borderRadius: 10}} titleStyle={{color: '#000'}}></Button>
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