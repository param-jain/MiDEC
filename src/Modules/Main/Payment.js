import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';


class PaymentScreen extends Component {

   renderHeader = () => {
      return(
          <Header
            backgroundColor="#FF6D00"
            outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
            centerComponent={{ text: 'Confirm Payment' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
            leftComponent={{ icon: 'arrow-left', type: 'font-awesome', color: '#fff', onPress: () => this.props.navigation.navigate('confirmPayment') }}
          />
        );
      }

   render() {
      return (
         <View style = {styles.container}>
           {this.renderHeader()}
            <WebView
            source = {{ uri:
            'http://midec-dev.ap-south-1.elasticbeanstalk.com/#/razorpay/option' }}
            />
         </View>
      )
   }
}
export default PaymentScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1
   }
})