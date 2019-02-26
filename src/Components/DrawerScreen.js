import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Header, Icon } from 'react-native-elements';

class DrawerScreen extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  renderHeader = () => {
    return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'M i D E C' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          leftComponent={{ icon: 'chevron-left', type: 'font-awesome', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
        />
      );
    }

  render () {
    return (
      <View>
        { this.renderHeader() }
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Icon name="home" type="font-awesome" size={16} color='#666' style={{marginRight: 10}}/>
              <Text onPress={this.navigateToScreen('home')} style={{marginLeft: 10}}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="user" type="font-awesome" size={16} color='#666' style={{marginRight: 10}}/> 
              <Text onPress={this.navigateToScreen('login')} style={{marginLeft: 10}}>
               My Profile
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('signup')}>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
    }

}  

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
