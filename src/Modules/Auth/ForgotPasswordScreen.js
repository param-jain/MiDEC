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
    StatusBar,
    ImageBackground
  } from 'react-native'
  import * as Animatable from 'react-native-animatable';

import { Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'

const ROOT_URL = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec'

import { signupEmailChanged, signupPasswordChanged, signupVerifyPasswordChanged} from '../../Actions/index'

class ForgotPasswordScreen extends Component {

    state = { isAuthenticating: false, errorMessage: '', }

    backButtonNavigation() {
        this.props.navigation.navigate('login');
    }

    onEmailChange(text) {
        text=text.trim();
        this.props.signupEmailChanged(text);
    }


    validateEmail = (email) => {
        if (!this.props.emailTouched) {
            return (  
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{paddingLeft: 15, paddingTop: 15}}><Icon type='material-community' name='email-outline' color='#D4D4D4'/></View>
                    <TextInput
                        keyboardType={'email-address'}
                        autoCapitalize = 'none'
                        underlineColorAndroid="#CDCDCD" 
                        placeholder="Enter Email Address" 
                        placeholderColor="#c4c3cb" 
                        style={styles.loginFormTextInput}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    </View>
                </View>        
            );
        } else {
            if (email.length < 5) {
                return (  
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{paddingLeft: 15, paddingTop: 15}}><Icon type='material-community' name='email-outline' color='#D4D4D4'/></View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="#CDCDCD" 
                            placeholder="Enter Email Address" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        </View>
                        <Text style={styles.errorMessage}>Email should be at least 5 characters long!</Text>
                    </View>        
                );
            } else if (email.split('').filter(x => x === '@').length !== 1) {
                return (  
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{paddingLeft: 15, paddingTop: 15}}><Icon type='material-community' name='email-outline' color='#D4D4D4'/></View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="#CDCDCD" 
                            placeholder="Enter Email Address" 
                            placeholderColor="#c4c3cb"
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        </View>
                        <Text style={styles.errorMessage}>Email should contain '@'</Text>
                    </View>        
                );
            } else if (email.indexOf('.') === -1) {
                return (  
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{paddingLeft: 15, paddingTop: 15}}><Icon type='material-community' name='email-outline' color='#D4D4D4'/></View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="#CDCDCD" 
                            placeholder="Enter Email Address" 
                            placeholderColor="#c4c3cb"
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        </View>
                        <Text style={styles.errorMessage}>Email should contain at least one dot (.)</Text>
                    </View>        
                );
            } else {
                return (  
                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{paddingLeft: 15, paddingTop: 15}}><Icon type='material-community' name='email-outline' color='#D4D4D4'/></View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="#CDCDCD" 
                            placeholder="Enter Email Address" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#1B5E20'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        </View>
                    </View>        
                );
            }
        }
    }

    navigateToSignUpDetails() {

        console.log("navigateToSignUpDetails Password: " + this.props.password);
       
        const url = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/usrg/reset?userEmail='+`${this.props.email}`
        this.setState({ isAuthenticating: true });

        const postData = {
            email: "testmidec1@gmail.com",
        }

          fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
            },
            //body: JSON.stringify(postData),
            })
            //.then((response) => response.json())
            .then(res => {
                    console.log("Login Screen Data: " + res._bodyInit)
                    this.setState({ data: JSON.parse(res._bodyInit), isAuthenticating: false });
                    if (JSON.parse(res._bodyInit).errorMsg === null) {
                        this.props.navigation.navigate('loginSignupSelection');
                    } else {
                    this.setState({errorMessage: JSON.parse(res._bodyInit).message});

                    }
            })
            .catch(err => {
                this.setState({ error: errorMessage, isAuthenticating: false });
                console.log("Error: Login Screen Data: " + err)
            });
       
       /* const url = ROOT_URL+'/usrg/create';
        this.setState({ isAuthenticating: true });

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
            },
            body: JSON.stringify({
                "userEmail": this.props.email,
                "password": this.props.password,
                "userType": "advisee",
            }),
            })
            //.then((response) => response.json())
            .then(response => {
                if(response.data === 'User Already Exists'){
                    this.setState({isAuthenticating: false});
                    Alert.alert (
                        'User Already Exists',
                        'Please Signup using Different Account',
                        [
                            {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                            }
                        ],
                        {cancelable: false},
                    )
                } else {
                    this.props.navigation.navigate('home');
                    this.setState({isAuthenticating: false});
                }
            })
            .catch(error => {
              this.setState({ error, isAuthenticating: false });
              console.log("Error: Home Screen Data: " + JSON.stringify(error))
            }); */
    }

    enableNextButton = (email, password, verifyPassword) => {
        if (
            (email.indexOf('.') === -1)||
            (email.split('').filter(x => x === '@').length !== 1)||
            (email.length < 5)
            ) {
                return (
                    <TouchableOpacity 
                        style={styles.nextButton}
                        onPress={this.navigateToSignUpDetails.bind(this)}
                        disabled
                        >
                        <Text style={{padding: 5, color: 'white'}}>Send Link</Text>
                    </TouchableOpacity>
                );
        } else {
            return(
                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={this.navigateToSignUpDetails.bind(this)}
                    >
                    <Text style={{padding: 5, color: 'white'}}>Send Link</Text>
                    </TouchableOpacity>
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
                <ImageBackground source={require('../../../assets/forget-password-link.png')} style={{width: '100%', height: '100%'}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Spinner visible={this.state.isAuthenticating} />
                        <View style={styles.loginFormView}>
                        <Animatable.View animation="slideInUp" iterationCount={1}>
                            <Text style={{padding: 15}}>Please enter your email id. We will send you a link to reset the password.</Text>                            
                            {this.validateEmail(this.props.email)}
                            <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                            {this.enableNextButton(this.props.email, this.props.password, this.props.verifyPassword)}
                            </Animatable.View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                </ImageBackground>
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
        flex: 1,
        //justifyContent: 'center'
    },
    loginFormTextInput: {
        flex: 1,
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderColor: '#777777',
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
        backgroundColor: '#464646',
        padding: 10,
        marginHorizontal: 5,
        marginTop: 30
    }
  });

const mapStateToProps = (state) => ({
    email: state.sign_up.email,
    emailTouched: state.sign_up.emailTouched,
    password: state.sign_up.password,
    passwordTouched: state.sign_up.passwordTouched,
    verifyPassword: state.sign_up.verifyPassword,
    verifyPasswordTouched: state.sign_up.verifyPasswordTouched,
    isAuthenticating: state.sign_up.isAuthenticating,
});

export default connect(mapStateToProps, { 
    signupEmailChanged, 
    signupPasswordChanged, 
    signupVerifyPasswordChanged,
})(ForgotPasswordScreen);