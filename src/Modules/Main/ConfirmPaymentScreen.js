import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Header } from 'react-native-elements';

const RAZORPAY_KEY = "rzp_live_nqbZ3Kcsswj6ul"

export default class ConfirmPaymentScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            dateSelected: '',
            slotSelected: '',
            adviserSelected: [],
            advisee: '',
            agenda: '',
            currentLoggedInUser: ''
          }
      
        this.arrayHolder = [];
      }

    componentDidMount() {
        const { navigation } = this.props;
        const dateSelected = navigation.getParam('dateSelected', 'Oops');
        const slotSelected = navigation.getParam('slotSelected', 'Duh');
        const adviserSelected = navigation.getParam('adviserSelected', 'Hola');

       this.setState({dateSelected, slotSelected, adviserSelected, currentLoggedInUser: global.isCurrentLoggedInUser,});
       console.log("Payment Screen: " + this.state.dateSelected + " " + this.state.slotSelected + " " + this.state.adviserSelected + " " + this.state.currentLoggedInUser);

       this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
        this.forceUpdate();
        
    }

    componentWillMount() {
        this.setState({ currentLoggedInUser: global.isCurrentLoggedInUser });
        this.forceUpdate();
    }

    openPaymentPage = () => {
        if (global.isLoggedIn === false) {
            Alert.alert(
                'Please Login First!!!',
                '',
                [
                    {text: 'Go to Login', onPress: () => this.props.navigation.navigate('loginSignupSelection')},
                    {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            )
        } else {
            if (this.state.adviserSelected.feePer30Mins > 0) {
                
            }
        }
    }

    renderAgendaInput = () => {
        return (
            <View style={{margin: 10, borderWidth: 1, borderColor: '#666', borderRadius: 5, padding: 10}}>  
                <Text style={{marginLeft: 10}}>Agenda of Your Call: </Text>
                <TextInput
                    style={{height: 100, padding: 10, borderBottomColor:'red', borderBottomWidth:1, borderWidth:0, borderColor: 'gray', margin: 10}}
                    onChangeText={(text) => this.setState({agenda: text})}
                    placeholder="State your call’s agenda here in < 500 chars. Make sure you mention key points to discuss with your adviser. If required,give a brief background about yourself here. This will be shared with your adviser"
                    value={this.state.agenda}
                    multiline={true}
                    maxLength={500}
                />
            </View>
        )
    }

    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'Confirm Booking' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'arrow-left', type: 'font-awesome', color: '#fff', onPress: () => this.props.navigation.navigate('adviseeDetails') }}
            />
          );
        }

    render(){
        return(
            <View style={styles.container}>
                {this.renderHeader()}
                <View style={{ justifyContent: 'center', alignContent: 'center'}}>
                    {this.renderAgendaInput()}
                </View>

                <View style={{margin: 10, borderWidth: 1, borderColor: '#666', borderRadius: 5, padding: 10}}>  
                    <Text style={{marginLeft: 10}}>Selected Date: {this.state.dateSelected}</Text>
                    <Text style={{marginLeft: 10}}>Selected Slot: {this.state.slotSelected}</Text>
                </View>

                <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0, marginVertical: 20}}>
                    <TouchableOpacity onPress={() => {this.openPaymentPage()}} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
                        <Text style={{alignSelf: 'center', padding: 5}}>Confirm Booking!</Text> 
                    </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

let styles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'transparent'
      },
}