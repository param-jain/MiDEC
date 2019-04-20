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
import { DrawerActions } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';


const SECTIONS_1 = [
  {
    title: 'Today',
    content: 'Today'
  }
];

const SECTIONS_2 = [
  {
    title: 'Tomorrow',
    content: 'Tomorrow'
  }
]

const SECTIONS_3 = [
  {
    title: 'Custom Date',
    content: 'Custom Date'
  }
]


class HourScheduleReminder extends Component {

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


    handleSection1Picker = (time) => {
        this.setState({
          isSection1Visible: false,
          section1ChosenTime: moment(time).format('HH:mm')
        })
      }
  
      showSection1Picker = () => {
        this.setState({
          isSection1Visible: true
        })
      }
  
      hideSection1Picker = () => {
        this.setState({
          isSection1Visible: false
        })
      }

    handleSection2Picker = (time) => {
        this.setState({
          isSection2Visible: false,
          section2ChosenTime: moment(time).format('HH:mm')
        })
      }
  
      showSection2Picker = () => {
        this.setState({
          isSection2Visible: true
        })
      }
  
      hideSection2Picker = () => {
        this.setState({
          isSection2Visible: false
        })
      }


    handleSection3Picker = (datetime) => {
      this.setState({
        isSection3Visible: false,
        chosenDate: moment(datetime).format('MMMM, Do YYYY  HH:mm')
      })
    }

    showSection3Picker = () => {
      this.setState({
        isSection3Visible: true
      })
    }

    hideSection3Picker = () => {
      this.setState({
        isSection3Visible: false
      })
    }



    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'Hour Schedule Reminder' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            />
          );
        }


        _renderSectionTitle = section => {
          return (
            <View style={styles.content}>
              <Text>{section.content}</Text>
            </View>
          );
        };
       
        _renderHeader = section => {
          return (
            <Animatable.View
            duration={300}
            backgroundColor='white'>

            <View style={{padding: 50}}>
            <Text style={{fontSize: 20, alignSelf: 'center'}}>{section.title}</Text>
            </View>

            </Animatable.View>

          );
        };
       
        _renderContent1 = section => {
          return (
            <Animatable.View
            duration={300} style={{alignSelf: 'center'}}>
           
           <Text style={{color: '#FF6D00', fontSize: 20, marginBottom: 30, alignSelf: 'center'}}>
                    {this.state.section1ChosenTime}
                </Text>

                <TouchableOpacity style={styles.button} onPress={this.showSection1Picker}>
                <Text style={styles.text}>Select a time</Text>
                </TouchableOpacity>


                <DateTimePicker
                isVisible={this.state.isSection1Visible}
                onConfirm={this.handleSection1Picker}
                onCancel={this.hideSection1Picker}
                mode={'time'}
                is24Hour={false}
                />
           
            </Animatable.View>

          );
        };


        _renderContent2 = section => {
          const { selectedHours, selectedMinutes } = this.state;
          return (
            <Animatable.View
            duration={300} style={{alignSelf: 'center'}}>

               <Text style={{color: '#FF6D00', fontSize: 20, marginBottom: 30, alignSelf: 'center'}}>
                    {this.state.section2ChosenTime}
                </Text>

                <TouchableOpacity style={styles.button} onPress={this.showSection2Picker}>
                <Text style={styles.text}>Select a time</Text>
                </TouchableOpacity>

                <DateTimePicker
                isVisible={this.state.isSection2Visible}
                onConfirm={this.handleSection2Picker}
                onCancel={this.hideSection2Picker}
                    mode={'time' }
                    is24Hour={false}
                />
           
            </Animatable.View>

          );
        };


        _renderContent3 = section => {
          return (
            <Animatable.View
            duration={300} style={{alignSelf: 'center'}}>

                <Text style={{color: '#FF6D00', fontSize: 20, marginBottom: 30, alignSelf: 'center'}}>
                    {this.state.chosenDate}
                </Text>

                <TouchableOpacity style={styles.button} onPress={this.showSection3Picker}>
                <Text style={styles.text}>Select a date and time</Text>
                </TouchableOpacity>

                <DateTimePicker
                isVisible={this.state.isSection3Visible}
                onConfirm={this.handleSection3Picker}
                onCancel={this.hidesection3Picker}
                    mode={'datetime' }
                    is24Hour={false}
                />
           
                </Animatable.View>

          );
        };
       


        _testupdateSections = testactiveSections => {
          if(this.state.test2activeSections.length === 0 && this.state.test3activeSections.length === 0){
            this.setState({testactiveSections });
          }else{
            this.state.test2activeSections.length = 0;
            this.state.test3activeSections.length = 0;
            this.setState({testactiveSections});
          }
        }

          
        _test2updateSections = test2activeSections => {
          if(this.state.testactiveSections.length === 0 && this.state.test3activeSections.length === 0){
            this.setState({test2activeSections });
          }else{
            this.state.testactiveSections.length = 0;
            this.state.test3activeSections.length = 0;
            this.setState({test2activeSections});
          }
        }

        _test3updateSections = test3activeSections => {
          if(this.state.testactiveSections.length === 0 && this.state.test2activeSections.length === 0){
            this.setState({test3activeSections });
          }else{
            this.state.testactiveSections.length = 0;
            this.state.test2activeSections.length = 0;
            this.setState({test3activeSections});
          }
          
        }

    render() {
      
            return (
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>

                            {this.renderHeader()}



                              <Accordion
                              sections={SECTIONS_1}
                              activeSections={this.state.testactiveSections}
                              renderHeader={this._renderHeader}
                              renderContent={this._renderContent1}
                              onChange={this._testupdateSections}/>


                              <Accordion
                              sections={SECTIONS_2}
                              activeSections={this.state.test2activeSections}
                              renderHeader={this._renderHeader}
                              renderContent={this._renderContent2}
                              onChange={this._test2updateSections}/>


                              <Accordion
                              sections={SECTIONS_3}
                              activeSections={this.state.test3activeSections}
                              renderHeader={this._renderHeader}
                              renderContent={this._renderContent3}
                              onChange={this._test3updateSections}/>


                              <View>
                                <TouchableOpacity style={styles.proceedButton}>
                                  <Text style={styles.proceedText}>Proceed to Payment</Text>
                                </TouchableOpacity>
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

export default HourScheduleReminder