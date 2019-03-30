import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Header } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const items_target_job_roles = [
  {  
    name: "Job Roles",
    id: 0,
    children: [{
        name: "Apple",
        id: 1,
      },{
        name: "Strawberry",
        id: 2,
      },{
        name: "Pineapple",
        id: 3,
      },{
        name: "Banana",
        id: 4,
      },{
        name: "Watermelon",
        id: 5,
      },{
        name: "Kiwi fruit",
        id: 6,
      }]
  },
]

const items_target_functional_areas = [
  {  
    name: "Job Roles",
    id: 0,
    children: [{
        name: "Apple",
        id: 1,
      },{
        name: "Strawberry",
        id: 2,
      },{
        name: "Pineapple",
        id: 3,
      },{
        name: "Banana",
        id: 4,
      },{
        name: "Watermelon",
        id: 5,
      },{
        name: "Kiwi fruit",
        id: 6,
      }]
  },
]


const items_areas_of_expertise = [
  {  
    name: "Job Roles",
    id: 0,
    children: [{
        name: "Apple",
        id: 1,
      },{
        name: "Strawberry",
        id: 2,
      },{
        name: "Pineapple",
        id: 3,
      },{
        name: "Banana",
        id: 4,
      },{
        name: "Watermelon",
        id: 5,
      },{
        name: "Kiwi fruit",
        id: 6,
      }]
  },
]


const items_target_industries = [
  {  
    name: "Target Industries",
    id: 0,
    children: [{
        name: "Apple",
        id: 1,
      },{
        name: "Strawberry",
        id: 2,
      },{
        name: "Pineapple",
        id: 3,
      },{
        name: "Banana",
        id: 4,
      },{
        name: "Watermelon",
        id: 5,
      },{
        name: "Kiwi fruit",
        id: 6,
      }]
  },
]


const items_target_companies = [
  {  
    name: "Target Industries",
    id: 0,
    children: [{
        name: "Apple",
        id: 1,
      },{
        name: "Strawberry",
        id: 2,
      },{
        name: "Pineapple",
        id: 3,
      },{
        name: "Banana",
        id: 4,
      },{
        name: "Watermelon",
        id: 5,
      },{
        name: "Kiwi fruit",
        id: 6,
      }]
  },
]



const items_current_functional_areas = [
  {  
    name: "Current functinal area",
    id: 0,
    children: [{
        name: "Apple",
        id: 1,
      },{
        name: "Strawberry",
        id: 2,
      },{
        name: "Pineapple",
        id: 3,
      },{
        name: "nana",
        id: 4,
      },{
        name: "Watermelon",
        id: 5,
      },{
        name: "Kiwi fruit",
        id: 6,
      },{
        name: "abcd",
        id: 7,
      }]
  },
]
class AdviseeEditProfessionalDetails extends Component {
  constructor(props) {
    state = { selectedTargetJobRoles: [],
      selectedCurrentFunctioanlAreas: [],
      selectedTargetFunctionalAreas: [],
      selectedTargetIndustries: [],
      selectedAreasOfExpertise: [],
      selectedTargetCompanies: [],
      linkedinprofile: '',  }
    super(props);  
  }


  onTargetJobRolesChanged = (selectedTargetJobRoles) => {
    this.setState({ selectedTargetJobRoles });
  }

  onSelectedCurrChange = (selectedCurrentFunctioanlAreas) => {
    this.setState({ selectedCurrentFunctioanlAreas });
  }

  onSelectedTargetFunctionalAreas = (selectedTargetFunctionalAreas) => {
    this.setState({ selectedTargetFunctionalAreas });
  }

  onSelectedTargetIndustries = (selectedTargetIndustries) => {
    this.setState({ selectedTargetIndustries });
  }

  onSelectedAreasOfExpertise = (selectedAreasOfExpertise) => {
    this.setState({ selectedAreasOfExpertise});
  }


  onSelectedTargetCompanies = (selectedTargetCompanies) => {
    this.setState({ selectedTargetCompanies});
  }

  state = {curr_job_role: ''}
  updateCurrJobRole = (curr_job_role) => {
     this.setState({ curr_job_role: curr_job_role })
  }

  state = {industry: ''}
  updateIndustry = (industry) => {
     this.setState({ industry: industry })
  }


  state = {lastcompany: ''}
  updateLastCompany = (lastcompany) => {
     this.setState({ lastcompany: lastcompany })
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
      <ScrollView style={styles.container}>

<StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
        {this.renderHeader()}

          <Card>

              <Text style={{fontSize:15, paddingLeft:20, paddingTop:30, paddingBottom:15}}>Total Work Experience</Text>
              <View style={{flexDirection:'row', paddingLeft: 10}}>
                <NumericInput minValue={0} onChange={value => console.log(value)} totalWidth={100} rounded rightButtonBackgroundColor='orange' leftButtonBackgroundColor='orange' iconStyle={{ color: 'white' }}/>
                <Text style={{alignSelf:'center', paddingLeft:5}}>Years</Text>

                <View style={{paddingLeft: 50, flexDirection:'row'}}>
                <NumericInput minValue={0} onChange={value => console.log(value)} totalWidth={100} rounded rightButtonBackgroundColor='orange' leftButtonBackgroundColor='orange' iconStyle={{ color: 'white' }}/>
                <Text style={{alignSelf:'center', paddingLeft:5}}>Months</Text>
              </View>
            </View>

            <View style={styles.rule}/>

            <Text style={{fontSize:15, paddingLeft:20, paddingTop:30, paddingBottom:15}}>Work experience in current functional area</Text>
            <View style={{flexDirection:'row', paddingLeft: 10}}>
                <NumericInput minValue={0} onChange={value => console.log(value)} totalWidth={100} rounded rightButtonBackgroundColor='orange' leftButtonBackgroundColor='orange' iconStyle={{ color: 'white' }}/>
                <Text style={{alignSelf:'center', paddingLeft:5}}>Years</Text>

                <View style={{paddingLeft: 50, flexDirection:'row'}}>
                <NumericInput minValue={0} onChange={value => console.log(value)} totalWidth={100} rounded rightButtonBackgroundColor='orange' leftButtonBackgroundColor='orange' iconStyle={{ color: 'white' }}/>
                <Text style={{alignSelf:'center', paddingLeft:5}}>Months</Text>
                </View>
            </View>

            <View style={styles.rule}/>

            <Text style={styles.heading}> LinkedIn Profile</Text>
            <TextInput style={styles.textInput} onChangeText={linkedinprofile => this.setState({linkedinprofile})}/>

            <View style={styles.rule}/>

              <Text style={styles.heading}> Current job role </Text>
              <Picker selectedValue = {this.state.curr_job_role} onValueChange = {this.updateCurrJobRole} style={{height:40, marginLeft:20, marginRight:20, color:'gray'}}>
                <Picker.Item label = "Manager" value = "manager" />
                <Picker.Item label = "Software Engineer" value = "software_engineer" />
                <Picker.Item label = "Trainee" value = "trainee" />
              </Picker>

              <View style={styles.rule}/>

              <Text style={styles.heading}>Target job roles</Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_target_job_roles} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              selectText='Select up to 5'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onTargetJobRolesChanged}
              selectedItems={this.state.selectedTargetJobRoles}/>
              </View>

              <View style={styles.rule}/>


              <Text style={styles.heading}>Current functional areas</Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_current_functional_areas} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              selectText='Select up to 5'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedCurrChange}
              selectedItems={this.state.selectedCurrentFunctioanlAreas}/>
              </View>


              <View style={styles.rule}/>


              <Text style={styles.heading}>Target functional areas</Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_target_functional_areas} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              selectText='Select up to 5'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedTargetFunctionalAreas}
              selectedItems={this.state.selectedTargetFunctionalAreas}/>
              </View>


              <View style={styles.rule}/>


              <Text style={styles.heading}> Current Industry </Text>
              <Picker selectedValue = {this.state.industry} onValueChange = {this.updateIndustry} style={{height:40, marginLeft:20, marginRight:20, color:'gray'}}>
                <Picker.Item label = "Manager" value = "manager" />
                <Picker.Item label = "Software Engineer" value = "software_engineer" />
                <Picker.Item label = "Trainee" value = "trainee" />
              </Picker>


              <View style={styles.rule}/>



              <Text style={styles.heading}>Target Industries</Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_target_industries} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              selectText='Select up to 5'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedTargetIndustries}
              selectedItems={this.state.selectedTargetIndustries}/>
              </View>


              <View style={styles.rule}/>


              <Text style={styles.heading}>Area(s) of expertise</Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_areas_of_expertise} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              selectText='Select up to 5'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedAreasOfExpertise}
              selectedItems={this.state.selectedAreasOfExpertise}/>
              </View>


              <View style={styles.rule}/>


              <Text style={styles.heading}> Current Company (or last company you worked with) </Text>
              <Picker selectedValue = {this.state.lastcompany} onValueChange = {this.updateLastCompany} style={{height:40, marginLeft:20, marginRight:20, color:'gray'}}>
                <Picker.Item label = "Manager" value = "manager" />
                <Picker.Item label = "Software Engineer" value = "software_engineer" />
                <Picker.Item label = "Trainee" value = "trainee" />
              </Picker>


              <View style={styles.rule}/>


              <Text style={styles.heading}>Target Companies</Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_target_companies} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              selectText='Select up to 5'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedTargetCompanies}
              selectedItems={this.state.selectedTargetCompanies}/>
              </View>

          </Card>


          <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('adviseeProfile')}} >
                <Text style={styles.customBtnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.props.navigation.navigate('adviseeProfile')}} >
                <Text style={styles.customBtnText}>Save</Text>
            </TouchableOpacity>
          </View>


      </ScrollView>
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
    rule: {
      borderBottomColor: "#F0F0F0",
      borderBottomWidth: 1,
      marginTop: 20,
    },
    customBtnBG: {
        backgroundColor: "#FF9800",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5
    },
    customBtnText: {
        fontSize: 15,
        color: "#fff",
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
    },
})

export default AdviseeEditProfessionalDetails