import React, { Component } from 'react';
import {
     View,
     Text, ScrollView, 
     StyleSheet, 
     Image, 
     ProgressBarAndroid,
     TouchableOpacity } from 'react-native';
import {Card, Icon, Header} from 'react-native-elements';
import Checkbox from 'react-native-checkbox-heaven';
import { DrawerActions } from 'react-navigation';
import {Collapse, CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


class AdviseeProfilePage extends Component {
        constructor(props){
        super(props);
        this.state = {
            currentLoggedInUser: global.isCurrentLoggedInUser,
          }
    }

    componentDidMount () {
        this._onFocusListener = this.props.navigation.addListener('didFocus', (payload) => {
            this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
            this.forceUpdate();
        });
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
              centerComponent={{ text: 'My Profile' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            />
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
        return (
            <View style={styles.container}>
            {this.renderHeader()}
            <ScrollView>
                <Image style={styles.CircleShapeView}/>
                <Text style={styles.AvatarText}>{JSON.parse(this.state.currentLoggedInUser).firstName} {JSON.parse(this.state.currentLoggedInUser).lastName}</Text>
    
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
                            <Icon type="font-awesome" name="chevron-up" size={20} color="orange" style={{paddingRight: 5}}/>
                            </View>
                        </View>
                    </CollapseHeader>
                    
                    <CollapseBody>
    
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontSize: 12}}>Personal Details</Text>
                        <Icon type="font-awesome" name="check" size={15} color="black" style={{paddingRight: 5}}/>
                        </View>
                        <View style={styles.rule}/>
    
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontSize: 12}}>Professional Details</Text>
                        <Icon type="font-awesome" name="check" size={15} color="black" style={{paddingRight: 5}}/>
                        </View>
                        <View style={styles.rule}/>
    
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontSize: 12}}>Education Details</Text>
                        <Icon type="font-awesome" name="check" size={15} color="black" style={{paddingRight: 5}}/>
                        </View>
                        <View style={styles.rule}/>
    
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{fontSize: 12}}>Resume Attached</Text>
                        <Icon type="font-awesome" name="check" size={15} color="black" style={{paddingRight: 5}}/>
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
                        <Text style={{fontSize: 13, color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).userEmail}</Text>
                        </View>
                        <Text style={{fontSize: 13, marginLeft: 'auto'}}>VERIFY</Text>
                  </View>
                  
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Icon name="phone" size={18} color="orange" style={{paddingRight: 5}}/> 
                      <View style={{flexDirection:'column'}}> 
                        <Text style={{fontSize: 13}}>Phone number</Text>
                        <Text style={{fontSize: 13, color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).phoneNumber}</Text>
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
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).firstName}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Last Name:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).lastName}</Text>
                  </View>
    
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop: 15}}>
                      <Text style={{fontSize: 13}}>Mobile Number:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).phoneNumber}</Text>
                  </View>
    
              </Card>
    
    
    
              <Card>
                  <View style={{flexDirection:'row'}}>
                      <Text>Professional Details</Text>
                      <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => {this.props.navigation.navigate('adviseeEditProfessionalDetails')}}>
                        <Text style={{color: "#FF9800", marginLeft: 'auto'}}>ADD</Text>
                      </TouchableOpacity>
                  </View>
    
                  <View style={{flexDirection:'row', paddingTop:20, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Total Work Experience:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).totalExpYears} Yrs {JSON.parse(this.state.currentLoggedInUser).totalExpMonths} Mnts</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Work experience in current functional area:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).currExpYears} Yrs {JSON.parse(this.state.currentLoggedInUser).currExpMonths} Mnts</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>LinkedIn Profile:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).lnkdInProfile}</Text>
                  </View>
                  <View style={styles.rule}/>
    
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Current job role:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{((JSON.parse(this.state.currentLoggedInUser).currJobRole).length > 20) ? (((JSON.parse(this.state.currentLoggedInUser).currJobRole).substring(0, 20)) + ' ...') : JSON.parse(this.state.currentLoggedInUser).currJobRole}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Target job roles</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{((JSON.parse(this.state.currentLoggedInUser).currJobRole[0]).length > 20) ? (((JSON.parse(this.state.currentLoggedInUser).currJobRole[0]).substring(0, 20)) + ' ...') : JSON.parse(this.state.currentLoggedInUser).currJobRole[0]}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Current functional area:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{((JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]).length > 20) ? (((JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]).substring(0, 20)) + ' ...') : JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Target functional area:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{((JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]).length > 20) ? (((JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]).substring(0, 20)) + ' ...') : JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Current Industry:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).currIndustry}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop: 15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Target Industries:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{((JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]).length > 20) ? (((JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]).substring(0, 20)) + ' ...') : JSON.parse(this.state.currentLoggedInUser).currFnclArea[0]}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Area(s) of expertise:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{((JSON.parse(this.state.currentLoggedInUser).expertAreas[0]).length > 20) ? (((JSON.parse(this.state.currentLoggedInUser).expertAreas[0]).substring(0, 20)) + ' ...') : JSON.parse(this.state.currentLoggedInUser).expertAreas[0]}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop:15, paddingBottom: 10}}>
                      <Text style={{fontSize: 13}}>Last company you worked with:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).pastCompanies}</Text>
                  </View>
                  <View style={styles.rule}/>
    
                  <View style={{flexDirection:'row', paddingTop: 15}}>
                      <Text style={{fontSize: 13}}>Target companies:</Text>
                      <Text style={{fontSize: 13, marginLeft:'auto', color: '#626f78'}}>{JSON.parse(this.state.currentLoggedInUser).currCompanies}</Text>
                  </View>
                  
    
              </Card>
    
    
              <Card>
                  <View style={{flexDirection:'row'}}>
                      <Text>Education Details</Text>
                      <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => {this.props.navigation.navigate('adviseeEditEducationDetails')}}>
                        <Text style={{color: "#FF9800", marginLeft: 'auto'}}>ADD</Text>
                      </TouchableOpacity>
                  </View>
    
    
                  <View style={{flexDirection:'row', paddingTop:20}}>
                      <Text style={{fontSize: 13, color: '#626f78'}}>Most relevant education qualification:</Text>
                  </View>
               
    
              </Card>
    
    
              <Card>
                  <View style={{flexDirection:'row'}}>
                      <Text>Resume</Text>
                      <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => {this.props.navigation.navigate('updateCV')}}>
                        <Text style={{color: "#FF9800", marginLeft: 'auto'}}>Update CV</Text>
                      </TouchableOpacity>
                  </View>
    
    
                  <View style={{flexDirection:'row', paddingTop:20}}>
                      <Text style={{fontSize: 14, color: '#626f78'}}>Resume.pdf</Text>
                  </View>
                 
                  <View style={{flexDirection:'row', paddingTop:5, paddingBottom: 10}}>
                      <Text style={{fontSize: 12, color: '#626f78'}}>Last Updated on:</Text>
                      <Text style={{fontSize: 12, color: '#626f78'}}>31 Dec, 2018</Text>
                  </View>
              
              </Card>
    
    
                
            <View style={{flexDirection: 'column'}}>

              <View style={{flexDirection: 'row', paddingTop:30, paddingLeft:30, paddingRight: 30, alignItems: 'center', justifyContent:'center'}}>
              <Checkbox iconName='matMix' 
                        checkedColor='#FF9800'
                        uncheckedColor='#FF9800' 
                        onChange={(val) => (val)} />
             
                    <Text style={{alignSelf:'center', paddingLeft: 5}}>Share my CV with my advisor for referral.</Text>
              </View>

              <Text style={{alignSelf:'center', paddingLeft: 10, fontSize: 10, textAlign: 'left'}}>(Please note that if you have revealed your identity in your CV, you will no longer be anonymous, as your CV will be shared in its original, unedited form with your adviser post appointment confirmation.)</Text>
              </View>
    
    
              <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('home')}} >
                    <Text style={styles.customBtnText}>Cancel</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('home')}} >
                    <Text style={styles.customBtnText}>Save</Text>
                </TouchableOpacity>
              </View>
    
    
    
            </ScrollView>
    
          
            </View>
        );
      }
    }
}

const styles = StyleSheet.create({
    Hcontainer: {
        flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    container: {
        flex: 1,
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