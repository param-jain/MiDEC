import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createBottomTabNavigator, createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Reducers from './src/Reducers';
import LoginSignupSelectionScreen from './src/Modules/Auth/LoginSignupSelectionScreen';
import HomeScreen from './src/Modules/Main/Home';
import LoginScreen from './src/Modules/Auth/LoginScreen';
import SignupScreen from './src/Modules/Auth/SignupScreen';
import DrawerScreen from './src/Components/DrawerScreen';
import { Icon } from 'react-native-elements';
import AdviseeDetailsScreen from './src/Modules/Main/AdviseeDetailsPage';
import Notifications from './src/Modules/Main/Notifications';
import MyAppointments from './src/Modules/Main/MyAppointments';
import AdviseeProfilePage from './src/Modules/Main/AdviseeProfilePage';
import Bookmarks from './src/Modules/Main/Bookmarks';
import Settings from './src/Modules/Main/Settings';
import AboutUs from './src/Modules/Main/AboutUs';
import AdviseeEditContactDetails from './src/Modules/Main/AdviseeEditContactPage';
import AdviseeEditPersonalDetails from './src/Modules/Main/AdviseeEditPersonalDetails';
import AdviseeEditProfessionalDetails from './src/Modules/Main/AdviseeEditProfessionalDetails';
import AdviseeEditEducationDetails from './src/Modules/Main/AdviseeEditEducationDetails';
import HomeFilterPage from './src/Modules/Main/HomeFilterPage';
import ForgotPasswordScreen from './src/Modules/Auth/ForgotPasswordScreen';
import ConfirmPaymentScreen from './src/Modules/Main/ConfirmPaymentScreen';
import FeeAndBankDetails from './src/Modules/Main/FeeAndBankDetails';
import TimeSlots from './src/Modules/Main/TimeSlots';
import PaymentScreen from './src/Modules/Main/Payment';

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Icon name="home" type="font-awesome" size={22} color={tintColor} />
  }else{
      return <Icon name="menu" type="font-awesome" size={22} color={tintColor} />
  }
}

const selectionStacker = createStackNavigator({
  selection: { screen: LoginSignupSelectionScreen },
  login_signup: { screen: createBottomTabNavigator({
    login: { screen:  LoginScreen, navigationOptions: { tabBarVisible: false } },
    signup: { screen:  SignupScreen, navigationOptions: { tabBarVisible: false } },
    forgotPassword: { screen: ForgotPasswordScreen, navigationOptions: { tabBarVisible: false }},
  }, { navigationOptions: { tabBarVisible: false } })}
});

selectionStacker.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const TabsNavigator = createBottomTabNavigator({
  loginSignupSelection: { screen: selectionStacker, navigationOptions: { tabBarVisible: false }},
  adviseeDetails: { screen: AdviseeDetailsScreen, navigationOptions: { tabBarVisible: false } },
  main: { screen: createBottomTabNavigator({
      home: { screen: HomeScreen }
    }, {navigationOptions: { tabBarVisible: false }})
  }
});



const MainNavigator = createDrawerNavigator({
  Home:{
      screen: TabsNavigator
  },
  notifications: { screen: Notifications },
  adviseeProfile: { screen: AdviseeProfilePage },
  adviseeEditContact: { screen: AdviseeEditContactDetails },
  adviseeEditPersonalDetails: { screen: AdviseeEditPersonalDetails },
  adviseeEditProfessionalDetails: {screen: AdviseeEditProfessionalDetails },
  adviseeEditEducationDetails: {screen: AdviseeEditEducationDetails },
  myAppointments: { screen: MyAppointments },
  bookmarks: { screen: Bookmarks },
  settings: { screen: Settings },
  homeFilter: { screen: HomeFilterPage },
  about_us: { screen: AboutUs },
  feeAndBankDetails: {screen: FeeAndBankDetails},
  timeSlots: {screen: TimeSlots},
  confirmPayment: { screen: ConfirmPaymentScreen },
  payment: {screen: PaymentScreen }
},{
  //initialRouteName: 'Home',
  contentComponent: DrawerScreen,
  drawerWidth: 290
});


const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {

  render() {
    
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer
            ref={nav => {
              this.navigator = nav;
            }}
          />
      </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
 