import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card, Header } from 'react-native-elements';

class AdviseeEditContactDetails extends Component {
    constructor(props) {
        super(props)
        state = {
            email: '',
            phone: ''
        }
      }

      handleEmailId = (text) => {
          this.setState({ email : text})
      }

      handlePhoneNumber = (text) => {
          this.setState({phone: text})
      }


      renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'Edit Contact Details' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'arrow-left', type:'font-awesome', color: '#fff', onPress: () => this.props.navigation.navigate('adviseeProfile') }}
            />
          );
        }

  render() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
        {this.renderHeader()}

        <Card>

            <Text style={styles.heading}> Email Id </Text>
            <TextInput style={styles.textInput} onChangeText = {this.handleEmailId}/>

            <Text style={styles.heading}> Phone Number </Text>
            <TextInput style={styles.textInput} keyboardType='phone-pad' maxLength={10} onChangeText = {this.handlePhoneNumber}/>
            
            <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('adviseeProfile')}} >
                    <Text style={styles.customBtnText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('adviseeProfile')}} >
                    <Text style={styles.customBtnText}>Save</Text>
                </TouchableOpacity>
            </View>

        </Card>

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
        paddingHorizontal: 30,
        paddingVertical: 15,
        margin: 30,
        borderRadius: 5
    },
    customBtnText: {
        fontSize: 15,
        alignSelf: 'center',
        color: "#fff",
    }
})


export default AdviseeEditContactDetails
