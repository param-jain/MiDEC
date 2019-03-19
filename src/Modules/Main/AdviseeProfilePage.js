import React, { Component } from 'react';
import {
     View,
     Text, ScrollView, 
     StyleSheet, 
     Image, 
     ProgressBarAndroid,
     TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Checkbox from 'react-native-checkbox-heaven';
import {Collapse, CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


class AdviseeProfilePage extends Component {
        constructor(props){
        super(props)
    }


  render() {
    return (
        <View style={styles.container}>
        <ScrollView>
            <FAIcon name="arrow-left" size={15} color="black" style={{paddingLeft: 15}} onPress={() => {this.props.navigation.navigate('home')}}/>
            <Image style={styles.CircleShapeView}/> 
            <Text style={styles.AvatarText}>Rahul Prasad Sharma</Text>

            <ProgressBarAndroid
            style={styles.MyProgressBar}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.8}/>

            


            <Collapse>
                <CollapseHeader>
                    <View style={{flexDirection: 'row', marginLeft:20}}>
                        <Text style={{fontSize: 12}}>Profile: </Text>
                        <Text style={{fontSize: 12, color: 'orange'}}>80% </Text>
                        <View style={{marginLeft: 'auto', paddingRight: 20}}>
                        <Icon name="chevron-up" size={20} color="orange" style={{paddingRight: 5}}/>
                        </View>
                    </View>
                </CollapseHeader>
                
                <CollapseBody>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{fontSize: 12}}>Personal Details</Text>
                    <FAIcon name="check" size={15} color="black" style={{paddingRight: 5}}/>
                    </View>
                    <View style={styles.rule}/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{fontSize: 12}}>Professional Details</Text>
                    <FAIcon name="check" size={15} color="black" style={{paddingRight: 5}}/>
                    </View>
                    <View style={styles.rule}/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{fontSize: 12}}>Education Details</Text>
                    <FAIcon name="check" size={15} color="black" style={{paddingRight: 5}}/>
                    </View>
                    <View style={styles.rule}/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                    <Text style={{fontSize: 12}}>Resume Attached</Text>
                    <FAIcon name="check" size={15} color="black" style={{paddingRight: 5}}/>
                    </View>
                                        
                </CollapseBody>
            </Collapse>



            <Card>
              <View style={{flexDirection:'row', paddingBottom: 10}}>
                  <Text>Contact Details</Text>
                  <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => {this.props.navigation.navigate('adviseeEditContact')}}>
                    <Text style={{color: "#FF9800", marginLeft: 'auto'}}>EDIT</Text>
                  </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row', paddingTop:20, paddingBottom: 10}}>
                    <Icon name="email" size={18} color="orange" style={{paddingRight: 5}}/> 
                    <View style={{flexDirection:'column'}}> 
                    <Text style={{fontSize: 13}}>Email</Text>
                    <Text style={{fontSize: 13}}>example@gmail.com</Text>
                    </View>
                    <Text style={{fontSize: 13, marginLeft: 'auto'}}>VERIFY</Text>
              </View>
              

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Icon name="phone" size={18} color="orange" style={{paddingRight: 5}}/> 
                  <View style={{flexDirection:'column'}}> 
                    <Text style={{fontSize: 13}}>Phone number</Text>
                    <Text style={{fontSize: 13}}>9922453226</Text>
                    </View>
                  <Text style={{fontSize: 13, color: "#FF9800", marginLeft:'auto'}}>VERIFIED</Text>
              </View>


          </Card>


          <Card>
              <View style={{flexDirection:'row',}}>
                  <Text>Personal Details</Text>
                  <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => {this.props.navigation.navigate('adviseeEditPersonalDetails')}}>
                    <Text style={{color: "#FF9800", marginLeft: 'auto'}}>EDIT</Text>
                  </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row', paddingTop:20, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>First Name:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>First Name</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Last Name:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>Last Name</Text>
              </View>

              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop: 15}}>
                  <Text style={{fontSize: 13}}>Mobile Number:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>9922453226</Text>
              </View>

          </Card>



          <Card>
              <View style={{flexDirection:'row'}}>
                  <Text>Professional Details</Text>
                  <Text style={{color: "#FF9800", marginLeft:'auto'}}>ADD</Text>
              </View>

              <View style={{flexDirection:'row', paddingTop:20, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Total Work Experience:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>8 years</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Work experience in current functional area:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>2 years</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>LinkedIn Profile:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>http://www.linkedin.com</Text>
              </View>
              <View style={styles.rule}/>


              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Current job role:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>Manager</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Target job roles</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>ABC</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Current functional area:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>XYZ</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Target functional area:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>ASD</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Current Industry:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>Finance</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop: 15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Target Industries:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>FInance</Text>
              </View>
              <View style={styles.rule}/>

              
              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Area(s) of expertise:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>Asset handling</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 13}}>Last company you worked with:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>XYZ Tech</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'row', paddingTop: 15}}>
                  <Text style={{fontSize: 13}}>Target companies:</Text>
                  <Text style={{fontSize: 13, marginLeft:'auto'}}>ABC Tech</Text>
              </View>
              

          </Card>


          <Card>
              <View style={{flexDirection:'row'}}>
                  <Text>Education Details</Text>
                  <Text style={{color: "#FF9800", marginLeft: 'auto'}}>ADD</Text>
              </View>


              <View style={{flexDirection:'row', paddingTop:20}}>
                  <Text style={{fontSize: 13}}>Most relevant education qualification:</Text>
              </View>
           

          </Card>


          <Card>
              <View style={{flexDirection:'row'}}>
                  <Text>Resume</Text>
                  <Text style={{color: "#FF9800", marginLeft: 'auto'}}>Update CV</Text>
              </View>


              <View style={{flexDirection:'row', paddingTop:20}}>
                  <Text style={{fontSize: 14}}>dkergpsd</Text>
              </View>
             
              <View style={{flexDirection:'row', paddingTop:5, paddingBottom: 10}}>
                  <Text style={{fontSize: 12}}>Last Updated on:</Text>
                  <Text style={{fontSize: 12}}>31 Dec, 2018</Text>
              </View>
          
          </Card>


          <View style={{flexDirection: 'row', padding:30, alignItems: 'center', justifyContent:'center'}}>
          <Checkbox iconName='matMix' 
                    checkedColor='#FF9800'
                    uncheckedColor='#FF9800' 
                    onChange={(val) => (val)} />
          <Text style={{alignSelf:'center', paddingLeft: 5}}>Share my CV with my advisor for referral.</Text>
          </View>


          <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                <Text style={styles.customBtnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                <Text style={styles.customBtnText}>Save</Text>
            </TouchableOpacity>
          </View>



        </ScrollView>

      
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
      },
    CircleShapeView: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center', 
        alignSelf: 'center',
        borderRadius: 70/2,
        backgroundColor: '#a9a9a9',
    },
    AvatarText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    MyProgressBar: {
        color: "#FF9800",
        justifyContent: 'space-evenly',
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    CardTitle: {
        fontWeight: 'bold',
    },
    alignHorizontal: {
        flexDirection: 'row',
    },
    alignVertical: {
        flexDirection: 'column',
    },
    rule: {
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1,
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
})

export default AdviseeProfilePage;
