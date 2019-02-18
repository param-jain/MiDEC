import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Reducers from './src/Reducers';
import HomeScreen from './src/Components/HomeScreen';


const MainNavigator = createBottomTabNavigator({
  home: { screen: HomeScreen } 
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
 