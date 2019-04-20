import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';

class AboutUs extends React.Component {

    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'About MiDEC' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            />
          );
        }

    render() {
        return(
            <View>
                <ImageBackground source={require('../../../assets/bg-work-in-progress-1.png')} style={{width: '100%', height: '100%'}}>
                    {this.renderHeader()}
                </ImageBackground>
            </View>
        )
    }
}

export default AboutUs;
