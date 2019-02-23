import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Reducers from './src/Reducers';
import LoginSignupSelectionScreen from './src/Modules/Auth/LoginSignupSelectionScreen';
import HomeScreen from './src/Modules/Main/Home';
import LoginScreen from './src/Modules/Auth/LoginScreen';
import SignupScreen from './src/Modules/Auth/SignupScreen';

const selectionStacker = createStackNavigator({
  selection: { screen: LoginSignupSelectionScreen },
  login_signup: { screen: createBottomTabNavigator({
    login: { screen:  LoginScreen, navigationOptions: { tabBarVisible: false } },
    signup: { screen:  SignupScreen, navigationOptions: { tabBarVisible: false } }
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

const MainNavigator = createBottomTabNavigator({
  loginSignupSelection: { screen: selectionStacker, navigationOptions: { tabBarVisible: false }},
    main: { screen: createBottomTabNavigator({
    home: { screen: HomeScreen }
  }, {navigationOptions: { tabBarVisible: false }})
  }
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
 