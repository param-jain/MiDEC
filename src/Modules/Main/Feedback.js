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

import { Header, Icon, Card } from 'react-native-elements';



class Feedback extends Component {

  state = {
    activeSections: [],
    testactiveSections: [],
    test2activeSections: [],
    test3activeSections: [],
    selectedHours: 0,
    selectedMinutes: 0,
    isSection3Visible: false,
    isSection1Visible: false
  };



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


    renderRightIcons = () => {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('homeFilter')}} style={{marginHorizontal: 7}}>
            <Icon name="send" type="material-community" color="#fff" size={20} style={{alignContent:'center', paddingHorizontal: 10}}></Icon>
          </TouchableOpacity>
        </View>
      );
    }


    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'Send Feedback' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
              rightComponent={ this.renderRightIcons() }
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

                            <View style={{flexDirection: 'column'}}>
                            
                              <Text style={{padding: 10, marginTop: 20}}>Write your feedback here</Text>
                              <Card style={{width: '100%', height:400}}>
                                <TextInput
                                multiline={true}></TextInput>
                              </Card>

                              <Text style={{padding: 10, marginTop: 20}}>Attach Screenshots</Text>

                              <Card style={{width: '100%', height:200}}>

                              </Card>

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
    customBtnBG: {
      backgroundColor: "#FF9800",
      paddingHorizontal: 15,
      paddingVertical: 5,
      margin: 20,
      borderRadius: 5
  },
  customBtnText: {
      fontSize: 15,
      alignSelf: 'center',
      color: "#fff",
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
    timeslotButtonActive: {
      borderRadius: 5,
      borderColor: '#FF9800', 
      borderWidth: 1,
      marginLeft: 2,
      marginRight: 2,
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginBottom: 5,
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
    customBtnBG: {
        backgroundColor: "#FF9800",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5
    },
    rule: {
      borderBottomColor: "#F0F0F0",
      borderBottomWidth: 1,
    },
    button: {
      width: 250,
      height: 50,
      backgroundColor: '#FF6D00',
      borderRadius: 30,
      justifyContent: 'center',
    },
    proceedButton: {
        width: '100%',
        height: 100,
        marginTop: 220,
        backgroundColor: '#FF6D00',
        justifyContent: 'center'
      },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }, 
    proceedText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
  });

export default Feedback