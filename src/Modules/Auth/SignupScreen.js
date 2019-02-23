import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    StatusBar
  } from 'react-native'

import { Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'

const ROOT_URL = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec'

import { signupEmailChanged, signupPasswordChanged, signupVerifyPasswordChanged} from '../../Actions/index'



class SignupScreen extends Component {

    state = { isAuthenticating: false }

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
                    <TextInput
                        keyboardType={'email-address'}
                        autoCapitalize = 'none'
                        underlineColorAndroid="transparent" 
                        placeholder="Email" 
                        placeholderColor="#c4c3cb" 
                        style={styles.loginFormTextInput}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </View>        
            );
        } else {
            if (email.length < 5) {
                return (  
                    <View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="transparent" 
                            placeholder="Email" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        <Text style={styles.errorMessage}>Email should be at least 5 characters long!</Text>
                    </View>        
                );
            } else if (email.split('').filter(x => x === '@').length !== 1) {
                return (  
                    <View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="transparent" 
                            placeholder="Email" 
                            placeholderColor="#c4c3cb"
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        <Text style={styles.errorMessage}>Email should contain '@'</Text>
                    </View>        
                );
            } else if (email.indexOf('.') === -1) {
                return (  
                    <View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="transparent" 
                            placeholder="Email" 
                            placeholderColor="#c4c3cb"
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                        <Text style={styles.errorMessage}>Email should contain at least one dot (.)</Text>
                    </View>        
                );
            } else {
                return (  
                    <View>
                        <TextInput
                            keyboardType={'email-address'}
                            autoCapitalize = 'none'
                            underlineColorAndroid="transparent" 
                            placeholder="Email" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#1B5E20'}]} 
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </View>        
                );
            }
        }
    }

    onPasswordChange(text) {
        text=text.trim();
        this.props.signupPasswordChanged(text);
    }

    validatePassword = (password) => {
        if (!this.props.passwordTouched) {
            return (  
                <View>
                    <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Password" 
                            placeholderColor="#c4c3cb" 
                            style={styles.loginFormTextInput} 
                            secureTextEntry={true}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                </View>        
            );
        } else { 
            if (password.length < 8) {
                return (
                    <View>
                         <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Password" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            secureTextEntry={true}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                        <Text style={styles.errorMessage}>Password should be at least 8 characters long</Text>
                    </View>
                );
            } else {
                return (
                    <View>
                         <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Password" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#1B5E20'}]} 
                            secureTextEntry={true}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </View>
                );
            }
        }
    }

    onVerifyPasswordChange(text) {
        text=text.trim();
        this.props.signupVerifyPasswordChanged(text);
    }

    validateVerifyPassword = (verifyPassword) => {
        if (!this.props.verifyPasswordTouched) {
            return (  
                <View>
                    <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Verify Password" 
                            placeholderColor="#c4c3cb" 
                            style={styles.loginFormTextInput} 
                            secureTextEntry={true}
                            onChangeText={this.onVerifyPasswordChange.bind(this)}
                            value={this.props.verifyPassword}
                        />
                </View>        
            );
        } else {
            if (verifyPassword.length < 8) {
                return (
                    <View>
                         <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Verify Password" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            secureTextEntry={true}
                            onChangeText={this.onVerifyPasswordChange.bind(this)}
                            value={this.props.verifyPassword}
                        />
                        <Text style={styles.errorMessage}>Password should be at least 8 characters long</Text>
                    </View>
                );
            } else if (verifyPassword!=this.props.password) {
                return (
                    <View>
                         <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Verify Password" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#DD2C00'}]} 
                            secureTextEntry={true}
                            onChangeText={this.onVerifyPasswordChange.bind(this)}
                            value={this.props.verifyPassword}
                        />
                        <Text style={styles.errorMessage}>Passwords do not match!!!</Text>
                    </View>
                );
            } else {
                return (
                    <View>
                         <TextInput
                            underlineColorAndroid="transparent" 
                            placeholder="Password" 
                            placeholderColor="#c4c3cb" 
                            style={[styles.loginFormTextInput, {borderColor: '#1B5E20'}]} 
                            secureTextEntry={true}
                            onChangeText={this.onVerifyPasswordChange.bind(this)}
                            value={this.props.verifyPassword}
                        />
                    </View>
                );
            }
        }
    }

    navigateToSignUpDetails() {
        const url = ROOT_URL+'/usrg/create';
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
            });
    }

    enableNextButton = (email, password, verifyPassword) => {
        if (
            (password.length<8)||
            (email.indexOf('.') === -1)||
            (email.split('').filter(x => x === '@').length !== 1)||
            (email.length < 5)||
            (verifyPassword.length < 8)||
            (verifyPassword!=password)
            ) {
                return (
                    <TouchableOpacity 
                        style={styles.nextButton}
                        onPress={this.navigateToSignUpDetails.bind(this)}
                        disabled
                        >
                        <Icon
                            raised
                            name='arrow-right'
                            type='entypo'
                            color='#777777'
                            style={styles.nextButtonLayout} 
                        />
                    </TouchableOpacity>
                );
        } else {
            return(
                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={this.navigateToSignUpDetails.bind(this)}
                    >
                    <Icon
                        raised
                        name='arrow-right'
                        type='entypo'
                        color='#E65100'
                        style={styles.nextButtonLayout} />
                </TouchableOpacity>
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar barStyle = "dark-content" hidden = {true} translucent = {true}/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>

                        <Spinner visible={this.state.isAuthenticating} />

                        <View style={styles.loginFormView}>

                            <Text style={styles.logoText}>Sign Up</Text>
                            {this.validateEmail(this.props.email)}
                            {this.validatePassword(this.props.password)}
                            {this.validateVerifyPassword(this.props.verifyPassword)}
                            {this.enableNextButton(this.props.email, this.props.password, this.props.verifyPassword)}
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
})(SignupScreen);