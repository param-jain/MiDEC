import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Keyboard, Platform, Text, View, TextInput, Alert, TouchableWithoutFeedback, Image, KeyboardAvoidingView, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

import { emailChanged, passwordChanged, loginUser, loggedInUser } from '../../Actions/index';
import axios from 'axios';

const ROOT_URL = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec'

class LoginScreen extends Component {


    SHA256(s){
        var chrsz  = 8;
        var hexcase = 0;
        function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
        }
        function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
        function R (X, n) { return ( X >>> n ); }
        function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
        function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
        function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
        function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
        function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
        function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
        function core_sha256 (m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
        for ( var i = 0; i<m.length; i+=16 ) {
        a = HASH[0];
        b = HASH[1];
        c = HASH[2];
        d = HASH[3];
        e = HASH[4];
        f = HASH[5];
        g = HASH[6];
        h = HASH[7];
        for ( var j = 0; j<64; j++) {
        if (j < 16) W[j] = m[j + i];
        else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
        T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
        T2 = safe_add(Sigma0256(a), Maj(a, b, c));
        h = g;
        g = f;
        f = e;
        e = safe_add(d, T1);
        d = c;
        c = b;
        b = a;
        a = safe_add(T1, T2);
        }
        HASH[0] = safe_add(a, HASH[0]);
        HASH[1] = safe_add(b, HASH[1]);
        HASH[2] = safe_add(c, HASH[2]);
        HASH[3] = safe_add(d, HASH[3]);
        HASH[4] = safe_add(e, HASH[4]);
        HASH[5] = safe_add(f, HASH[5]);
        HASH[6] = safe_add(g, HASH[6]);
        HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
        }
        function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
        bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
        }
        function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
        utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
        }
        }
        return utftext;
        }
        function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
        hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
        }
        return str;
        }
        s = Utf8Encode(s);
        return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
       }

    constructor(props) {
        super(props);
    
        this.state = {
            errorMessage: '',
            isAuthenticating: false,
            data: [],
            hashedPassword: ''
        }
    }

    onEmailChange(text) {
        text=text.trim();
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        text=text.trim();
        global.currentLoggedUserPassword = text;
        this.props.passwordChanged(text);
    }

    async onLoginPress() {

        let hashedPassword = this.SHA256(this.props.password);
        //let ciphertext = CryptoJS.AES.encrypt('testMiDEC@123', 'secret key 123').toString();
        console.log("onLoginPress Password: " + this.props.password);
        console.log("Hashed Password: " + hashedPassword);

        // const url = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/usrg/chk?email=testmidec1%40gmail.com&pwd=B6A730A04995EAEAB212EC02C4BA2CEE6371A459BBE96327FA2A47FF735E9A4A';
           const url = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/usrg/chk?email='+`${this.props.email}`+'&pwd='+`${hashedPassword}`
        // const url = 'http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/usrg/chk'
        this.setState({ isAuthenticating: true });

        const postData = {
            email: "testmidec1@gmail.com",
            pwd: "B6A730A04995EAEAB212EC02C4BA2CEE6371A459BBE96327FA2A47FF735E9A4A",
        }

          fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
            },
            //body: JSON.stringify(postData),
            })
            //.then((response) => response.json())
            .then(res => {
                    console.log("Login Screen Data: " + JSON.stringify(JSON.parse(res._bodyInit)))
                    this.setState({ data: JSON.parse(res._bodyInit), isAuthenticating: false });
                    this.setState({data: JSON.stringify(this.state.data)})
                    console.log('LSASASASA: ' + this.state.data);
                    global.isCurrentLoggedInUser = this.state.data;
                    global.isLoggedIn = true;
                    if (JSON.parse(res._bodyInit).status === 'APRV' && JSON.parse(res._bodyInit).userType === 'adviser') {
                        this.props.loginUser(this.state.data);
                        global.isCurrentLoggedInUser = this.state.data;
                        global.isLoggedIn = true;
                        global.currentLoggedUserPassword = this.props.password; 
                        this.props.navigation.navigate('adviseeProfile', {loggedInUser: this.state.data});
                    } else if (JSON.parse(res._bodyInit).status === 'APRV' && JSON.parse(res._bodyInit).userType === 'advisee') {
                        this.props.loginUser(this.state.data);
                        global.isCurrentLoggedInUser = this.state.data;
                        global.isLoggedIn = true;
                        global.currentLoggedUserPassword = this.props.password; 
                        this.props.navigation.navigate('home', {loggedInUser: this.state.data});
                    } else {
                    this.setState({errorMessage: 'Invalid Credentials! Please Try Again'});
                    }
            })
            .catch(err => {
                this.setState({ error: errorMessage, isAuthenticating: false });
                console.log("Error: Login Screen Data: " + err)
            });

    }

    onForgotPwdPress() {
        this.setState({ errorMessage: '' });
        this.props.navigation.navigate('forgotPassword');
    }

    loginButtonDisabled = (email, password) => {
        if (
            (password.length<8) ||
            (email.indexOf('.') === -1) ||
            (email.split('').filter(x => x === '@').length !== 1) ||
            (email.length < 5)
        ) {
            return true;
        } else {
            return false;
        }
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

    render() {
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <StatusBar barStyle = "dark-content" hidden = {true} translucent = {true}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerView}>
                    <View style={styles.loginFormView}>
                        {/*
                        <View style={styles.logoImageView}>
                            <Image 
                                style={styles.logoImage}
                                source={require('../../../assets/bunksheet_logos/White_Background.png')}
                            />
                        </View>*/}
                        <Text style={styles.logoText}>Sign In</Text>
                        {this.validateEmail(this.props.email)}
                        {this.validatePassword(this.props.password)}
                        <Spinner visible={this.state.isAuthenticating} />
                        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => this.onLoginPress()}
                            title="Login"
                            disabled={this.loginButtonDisabled(this.props.email, this.props.password)}
                            ViewComponent={require('expo').LinearGradient}
                            linearGradientProps={{
                                colors: ['#FF6F00', '#FFA000'],
                                start: [1, 0],
                                end: [0.2, 0],
                            }}
                        />
                        <TouchableOpacity 
                            style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 10 }} 
                            onPress={() => this.onForgotPwdPress()}
                            >
                            <Text style={{color: '#424242'}} >Forgotten Password?</Text>
                        </TouchableOpacity>
                        {/*
                        <View style={styles.rectangle} />
                        <Button
                            buttonStyle={styles.signUpButton}
                            onPress={() => this.onSignUpPress()}
                            title="Sign Up"
                            ViewComponent={require('expo').LinearGradient}
                            linearGradientProps={{
                                colors: ['#FFA000', '#FFC110'],
                                start: [1, 0],
                                end: [0.2, 0],
                            }} 
                        /> 
                        */}
                    </View>
                </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        );
    }
}
const styles = {
    containerView: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    logoImageView: { 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 30,
        textAlign: 'center',
    },
    logoImage: {
        marginTop: 10,
    },
    loginFormView: {
        justifyContent: 'center',
        flex: 1,
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
    loginButton: {
        backgroundColor: '#FF6D00',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    signUpButton: {
        backgroundColor: '#FFAB00',
        borderRadius: 5,
        height: 45,
        marginLeft: 15,
        marginRight: 15,
    },
    rectangle: {
        width: 'auto',
        height: 1,
        backgroundColor: 'blue',
        marginTop: 30,
        marginLeft: 120,
        marginRight: 120,
        marginBottom: 30
    }
    
  };

  const mapStateToProps = (state) => {
      return {
          email: state.auth.email,
          password: state.auth.password,
          emailTouched: state.auth.emailTouched,
          passwordTouched: state.auth.passwordTouched,
      }
  }

  export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
