import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    StatusBar
  } from 'react-native'

import { Header, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';



class UploadCV extends Component {


    state = { isAuthenticating: false, errorMessage: '', oldPassword: '', currPwd: '', currentLoggedInUser: []}

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

    backButtonNavigation() {
        this.props.navigation.navigate('login');
    }




    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'Resume Upload' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            />
          );
        }

    render() {
            return (
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>

                            {this.renderHeader()}
                            <Text style={{padding: 10}}>Upload resume to complete registration. You will need the resume to apply to jobs.</Text>

                            <View style={{flexDirection: 'column'}}>
                                <TouchableOpacity onPress={() => {}}>
                                    <View style={{paddingTop: 30}}>
                                    <Icon name="upload" type="feather" size={40}/>
                                    <View>
                                    <Text style={{textAlign: 'center', padding: 5, fontSize: 17, fontWeight: 'bold'}}>Browse or upload resume</Text>
                                    <Text style={{textAlign: 'center', padding: 5, fontSize: 15}}>Supported formats: DOC,DOCX,PDF</Text>
                                    <Text style={{textAlign: 'center', padding: 5, fontSize: 15}}>File size should not exceed 2MB</Text>
                                    </View>
                                    </View>
                                </TouchableOpacity>                           
                            </View>

                            <View style={{paddingTop: 20}}>
                                <View style={styles.rule}></View>
                                <Text style={{alignSelf: 'center', padding: 5}}>OR</Text>
                                <View style={styles.rule}></View>
                            </View>


                            <View style={{flexDirection: 'column'}}>
                         
                                    <View style={{paddingTop: 30}}>
                                    <View>
                                    <Text style={{textAlign: 'center', padding: 5, fontSize: 17, fontWeight: 'bold'}}>Import your resume from</Text>

                                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20}}>

                                        <TouchableOpacity onPress={() => {}}>
                                        <View style={{flexDirection: 'column'}}>
                                        <Icon name="google-drive" type="material-community" size={50} color={'#1f8456'}/>
                                        <Text>Google Drive</Text>
                                        </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => {}}>
                                        <View style={{flexDirection: 'column'}}>
                                        <Icon name="dropbox" type="material-community" size={50} color={'#3d9ae8'}/>
                                        <Text>Dropbox</Text>
                                        </View>
                                        </TouchableOpacity>

                                        </View>
                                    </View>
                                    </View>            
                            </View>

                            <View style={{paddingTop: 20}}>
                                <View style={styles.rule}></View>
                            </View>

                            <View style={{flexDirection: 'column',backgroundColor: '#f0f0f0', height: '100%'}}>
                                <View style={{paddingTop: '10%'}}>
                                    <View style={{flexDirection: 'row', alignSelf: 'center', padding: 5}}>
                                    <Text>Updated on: </Text>
                                    <Text>31 December 2018 14:58 PM</Text>
                                    </View>

                                    <View style={{flexDirection: 'row', alignSelf: 'center', padding: 5}}>
                                    <Text style={{textAlign: 'center'}}>Size: </Text>
                                    <Text>66.97 KB</Text>
                                    </View>

                                    <TouchableOpacity  onPress={() => {}}>
                                    <View style={{flexDirection: 'row', alignSelf: 'center', padding: 5}}>
                                    <Icon name="download" type="feather"/>
                                    <Text>Download</Text>
                                    </View>
                                    </TouchableOpacity>

                                </View>

                            </View>


                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            );  
     }
}

let styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
      position: 'absolute',
      left: -25,
      top: 100,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    headerIconView: {
      marginBottom: 10,
      flex: 0.15,
      backgroundColor: 'transparent'
    },
    rule: {
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1,
    },
    headerBackButtonView: {
      width: 35,
      height: 35,
      position: 'absolute',
      top: 35,
      left: 15,
      marginBottom: 10
    },
    backButtonIcon: {
      resizeMode: 'contain',
      width: 35,
      height: 25
    },
    headerTitleView: {
      backgroundColor: 'transparent',
      paddingLeft: 25,
      marginBottom:0,
      marginTop: 0
    },
    titleViewText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#EF6C00',
      marginTop: 20,
      marginBottom: 10,
    },
    loginFormView: {
        marginTop: 40,
        paddingTop: 50,
        flex: 1,
        justifyContent: 'center'
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777777',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },
    nextButtonLayout: {
        marginTop: 50,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 30,
        textAlign: 'center',
    },
    nextButton: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 30
    },

    customBtnBG: {
        backgroundColor: "#FF9800",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5
    },
    logoText: {
        fontSize: 27,
        fontWeight: "800",
        marginBottom: 30,
        textAlign: 'center',
    },
    customBtnText: {
        fontSize: 15,
        color: "#fff",
    },
  });

export default UploadCV