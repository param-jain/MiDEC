import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card, Header } from 'react-native-elements';

class AdviseeEditEducationDetails extends Component {
    constructor(props) {
        super(props)
        state= {
            college_name: '',
            course: ''
        }
      }

      handleCollegeName = (text) => {
          this.setState({college_name: text})
      }

      handleCourse = (text) => {
          this.setState({course: text})
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
            <Text style={styles.heading}> University/College Name</Text>
            <TextInput style={styles.textInput} onChangeText={this.handleCollegeName}/>

            <Text style={styles.heading}> Course </Text>
            <TextInput style={styles.textInput} onChangeText={this.handleCourse}/>
            
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


export default AdviseeEditEducationDetails