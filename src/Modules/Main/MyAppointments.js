import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';

class MyAppointments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          loading: false,
          searchLoad: false,
          searchBarText: '',
          searchBarTextTouched: false,
          data:[],
          error: '',
          bookSelected:[],
        }

        this.arrayHolder = [];
    }

    renderHeader = () => {
        return(
            <Header
              backgroundColor="#FF6D00"
              outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
              centerComponent={{ text: 'My Appointments' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
              leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
            />
          );
        }


    renderSearchBar = () => {
        return (
            <TextInput
                ref="searchBarInput"
                autoCapitalize = 'none'
                underlineColorAndroid="transparent" 
                placeholder="Find an Appointment ..." 
                placeholderTextColor="#616161" 
                style={styles.searchBarTextInput}
                onChangeText={(text) => this.onSearchTextChange(text)}
                value={this.state.searchBarText}
                />
        );
    }

    onSearchTextChange(text) {
        //text=text.trim();
        this.setState({
          searchBarText: text,
          searchBarTextTouched: true,
          searchLoad: true
        });
        //console.log("All Books Array Holder: " + this.arrayHolder);
        /*const newData = this.arrayHolder.filter(item => {
          const itemData = `${item.Author.toUpperCase()} ${item.Publisher.toUpperCase()} ${item.Title.toUpperCase()}`;
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
          searchLoad: false
        });*/
      }

    searchIconFunctionality = () => {
        return (
          <View style={{marginLeft: 15, marginRight: 10, alignContent:'center'}}>
            <Icon name='magnifying-glass' type='entypo' color='#FF8F00' onPress={() => this.focusTextInput()} />
          </View>
        );
      }
    
    rightIconFunctionality = () => {
       // if (this.state.searchBarTextTouched) {
          return (
            <View style={{marginRight: 15, alignContent:'center'}}>
              <Icon name='calendar' type='font-awesome' color='#FF8F00' size={16} underlayColor={'#64b5f6'}/>
            </View>
          );
        }
      //}
    
    render() {
        return(
            <View style={styles.container}>
                { this.renderHeader() }
                
                <View style={styles.sectionStyle}>
                    {this.searchIconFunctionality()}
                    {this.renderSearchBar()}
                    {this.rightIconFunctionality()}
                </View>

                <View style={{justifyContent: 'center', alignContent: 'center', marginHorizontal: 20, marginVertical: 8}}>
                    <Text style={{color: '#666'}}>On this page, you can view all your Appointments, request a cancellation or request a reschedule.</Text>
                </View>

                <View style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
                    <View style={{paddingHorizontal:70, paddingLeft:85, paddingTop:0, marginVertical: 20}}>
                        {/* <Button type="outline" title="Book an Appointment" buttonStyle={{borderColor: '#FF9800', borderRadius: 10}} titleStyle={{color: '#000'}}></Button> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={{borderWidth: 1, borderColor: '#FF9800', padding: 2, borderRadius: 10, justifyContent: 'center', alignContent: 'center'}}> 
                            <Text style={{alignSelf: 'center', padding: 5}}>Book an Appointment now.</Text> 
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    searchBarTextInput: {
        flex: 1
    },
    sectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      borderColor: '#F57C00',
      height: 35,
      borderRadius: 15,
      margin: 5
    },
}

export default MyAppointments;