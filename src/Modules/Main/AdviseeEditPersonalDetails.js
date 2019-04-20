import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card, Header } from 'react-native-elements';


class AdviseeEditPersonalDetails extends Component {
  constructor(props) {
    super(props)
    state = {
      firstname: '',
      lastname: '',
      mobile_no: ''
    }
  }

  handleFirstName = (text) => {
    this.setState({ firstname: text})
  }

  handleLastName = (text) => {
    this.setState({ lastname: text})
  }

  handleMobileNumber = (text) => {
    this.setState({ mobile_no: text})
  }

  renderHeader = () => {
    return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'Edit Personal Details' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          leftComponent={{ icon: 'arrow-left', type:'font-awesome', color: '#fff', onPress: () => this.props.navigation.navigate('adviseeProfile') }}
        />
      );
    }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
        {this.renderHeader()}

          <Text style={styles.heading}> First Name </Text>
          <TextInput style={styles.textInput} onChangeText={this.handleFirstName} placeholder={JSON.parse(global.isCurrentLoggedInUser).firstName}/>

          <Text style={styles.heading}> Last Name </Text>
          <TextInput style={styles.textInput} onChangeText={this.handleLastName} placeholder={JSON.parse(global.isCurrentLoggedInUser).lastName}/>

          <Text style={styles.heading}> Mobile Number </Text>
          <TextInput style={styles.textInput} keyboardType='phone-pad' maxLength={10} onChangeText={this.handleMobileNumber} placeholder={JSON.parse(global.isCurrentLoggedInUser).phoneNumber}/>
          
          <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('adviseeProfile')}} >
                <Text style={styles.customBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    heading:{
        fontSize: 15,
        paddingLeft:20,
        paddingTop: 30,
    },
    textInput: {
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(0,0,0)',
    },
    customBtnBG: {
      backgroundColor: "#FF9800",
      paddingHorizontal: 100,
      paddingVertical: 15,
      marginTop: 20,
      borderRadius: 5
  },
  customBtnText: {
      fontSize: 18,
      alignSelf: 'center',
      color: "#fff",
  }
})

export default AdviseeEditPersonalDetails