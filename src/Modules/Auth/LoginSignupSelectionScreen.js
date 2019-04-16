import React, { Component } from 'react';
import {
    View, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Dimensions,
    StatusBar, 
    Keyboard, 
    TouchableOpacity, 
    Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';



class LoginSignupSelectionScreen extends Component {

    static navigationOptions = {
        tabBarVisible: false,
      };

    componentDidMount() {
        global.isCurrentLoggedInUser = 'FOOFOO';
        global.isLoggedIn = false;
    }

    goToHomeScreen = () => {
        this.props.navigation.navigate('home');
    }

    goToLoginScreen = () => {
        this.props.navigation.navigate('login');
    }

    goToSignupScreen = () => {
        this.props.navigation.navigate('signup');
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <StatusBar barStyle = "dark-content" hidden = {true} translucent = {true}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerView}>
                    <View style={styles.loginFormView}>
                    <Animatable.View animation="slideInUp" iterationCount={1}>
                       <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{flex: 1, marginHorizontal: 15,}}>
                                <Button
                                    style={{ width: '100%'}}
                                    buttonStyle={{ borderRadius: 200 }}
                                    onPress={() => this.goToLoginScreen()}
                                    title="Sign In"
                                    ViewComponent={require('expo').LinearGradient}
                                    linearGradientProps={{
                                        colors: ['#FF6F00', '#FFA000'],
                                        start: [1, 0],
                                        end: [0.2, 0],
                                    }}
                                />
                            </View>
                            <View style={{flex: 1, marginRight: 15,}}>
                                <Button
                                    style={{ width: '100%' }}
                                    buttonStyle={{ borderRadius: 200 }}
                                    onPress={() => this.goToSignupScreen()}
                                    title="Sign Up"
                                    ViewComponent={require('expo').LinearGradient}
                                    linearGradientProps={{
                                        colors: ['#FFA000', '#FFC110'],
                                        start: [1, 0],
                                        end: [0.2, 0],
                                    }} 
                                /> 
                            </View>
                       </View>
                       </Animatable.View>
                        <TouchableOpacity 
                            style={{flexDirection:'row', justifyContent: 'space-around', marginTop: 30 }} 
                            onPress={() => this.goToHomeScreen()}
                            >
                            <Text style={{color: '#424242'}} >Or Else</Text>
                        </TouchableOpacity>
                        <Icon name="chevron-down" type="font-awesome" color='#666' onPress={() => this.goToHomeScreen()}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )
    }
}

const styles = {
    containerView: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    loginFormView: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 50
    }
  };

export default LoginSignupSelectionScreen;