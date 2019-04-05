//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  TextInput,
  Picker
} from 'react-native'
import { Icon, Card, Header } from 'react-native-elements';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { DrawerActions } from 'react-navigation';


const banks = [
    {  
      name: "Select your bank",
      id: 0,
      children: [{
          name: "Airtel Payments Bank",
          id: 1,
        },{
          name: "Allahabad Bank",
          id: 2,
        },{
          name: "Andhra Bank",
          id: 3,
        },{
          name: "Axis Bank",
          id: 4,
        },{
          name: "Bank of Bahrein and Kuwait",
          id: 5,
        },{
          name: "Bank of Baroda - Retail Banking",
          id: 6,
        },{
            name: "Bank of India",
            id: 7,
          },{
            name: "Bank of Maharashtra",
            id: 8,
          },{
            name: "Canara Bank",
            id: 9,
          },{
            name: "Catholic Syrian Bank",
            id: 10,
          },{
            name: "Central Bank of India",
            id: 11,
          },{
            name: "City Union Bank",
            id: 12,
          },{
            name: "Corporation Bank",
            id: 13,
          },{
            name: "Cosmos Co-operative Bank",
            id: 14,
          },{
            name: "DCB Bank",
            id: 15,
          },{
            name: "Dena Bank",
            id: 16,
          },{
            name: "Deutsche Bank",
            id: 17,
          },{
            name: "Development Bank of Singapore",
            id: 18,
          },{
            name: "Dhanlaxmi Bank",
            id: 19,
          },{
            name: "Euitas Small Finance Bank",
            id: 20,
          },{
            name: "Federal Bank",
            id: 21,
          },
          {
            name: "HDFC Bank",
            id: 22,
          },
          {
            name: "ICICI Bank",
            id: 23,
          },
          {
            name: "IDBI",
            id: 24,
          },
          {
            name: "IDFC Bank",
            id: 25,
          },
          {
            name: "Indian Bank",
            id: 26,
          },
          {
            name: "Indian Overseas Bank",
            id: 27,
          },
          {
            name: "Indusind Bank",
            id: 28,
          },
          {
            name: "Jammu and Kashmir Bank",
            id: 29,
          },
          {
            name: "Janata Sahakari Bank (Pune)",
            id: 30,
          },
          {
            name: "Karnataka Bank",
            id: 31,
          },
          {
            name: "Karur Vyas Bank",
            id: 32,
          },{
            name: "Lakshmi Vilas Bank - Corporate Banking",
            id: 33,
          },{
            name: "Lakshmi Vilas Bank - Retail Banking",
            id: 34,
          },{
            name: "NKGSB Co-operative Bank",
            id: 35,
          },{
            name: "Oriental Bank of Commerce",
            id: 36,
          },{
            name: "Punjab & Maharashtra Co-operative Bank",
            id: 37,
          },{
            name: "Punjab & Sind Bank",
            id: 38,
          },{
            name: "Punjab National Bank - Retail Banking",
            id: 39,
          },{
            name: "RBL Bank",
            id: 40,
          },{
            name: "Saraswat Co-operative Bank",
            id: 41,
          },{
            name: "Shamrao Vithal Co-operative Bank",
            id: 42,
          },{
            name: "South Indian Bank",
            id: 43,
          },{
            name: "Standard Chartered Bank",
            id: 44,
          },{
            name: "State Bank of Bikaner and Jaipur",
            id: 45,
          },{
            name: "State Bank of Hyderabad",
            id: 46,
          },{
            name: "State Bank of India",
            id: 47,
          },{
            name: "State Bank of Mysore",
            id: 48,
          },{
            name: "State Bank of Patiala",
            id: 49,
          },{
            name: "State Bank of Travancore",
            id: 50,
          },{
            name: "Syndicate Bank",
            id: 51,
          },{
            name: "Tamilnadu Mercantile Bank",
            id: 52,
          },{
            name: "Tamilnadu State Apex Co-operative Bank",
            id: 53,
          },{
            name: "UCO Bank",
            id: 54,
          },{
            name: "Union Bank of India",
            id: 55,
          },{
            name: "United Bank of India",
            id: 56,
          },{
            name: "Vijaya Bank",
            id: 57,
          },{
            name: "Yes Bank",
            id: 58,
          }
        ]
    },
  ]




class FeeAndBankDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
        tabSelected: 'bank_transfer',
        selectedBanks: [],
        bank_ifsc_code: '',
        bank_account_number: '',
        re_bank_account_number: '',
        account_type: '',
        pan_number: '',
        thirty_min_fee: '',
        fifteen_min_fee: '',

    }
  }


  updateAccountType = (account_type) => {
     this.setState({ account_type: account_type })
  }

  onBanksChanged = (selectedBanks) => {
    this.setState({ selectedBanks });
  }

  loadBottomView = () => {
    if (this.state.tabSelected === 'bank_transfer') {
      return(
        <View style={{height: 1500}}>

            <Card>
              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>Bank Name:</Text>
                  <SectionedMultiSelect
                    items={banks} 
                    single = {true}
                    hideConfirm = {true}
                    colors={{
                        selectToggleTextColor: 'gray'
                    }}
                    uniqueKey='id'
                    subKey='children'
                    selectText='Select your bank'
                    searchPlaceholderText='Search'
                    showDropDowns={false}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={this.onBanksChanged}
                    selectedItems={this.state.selectedBanks}/>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>Bank IFSC Code:</Text>
                  <TextInput onChangeText={(bank_ifsc_code) => this.setState({bank_ifsc_code})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>Bank Account Number:</Text>
                  <TextInput onChangeText={(bank_account_number) => this.setState({bank_account_number})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>Re-enter Bank Account Number:</Text>
                  <TextInput onChangeText={(re_bank_account_number) => this.setState({re_bank_account_number})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>Account Type:</Text>
                  <Picker selectedValue = {this.state.account_type} onValueChange = {this.updateAccountType} style={{height:40, color:'gray'}}>
                    <Picker.Item label = "Savings" value = "savings" />
                    <Picker.Item label = "Current" value = "current" />
                    <Picker.Item label = "Overdraft" value = "overdraft" />
                  </Picker>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>PAN Number:</Text>
                  <TextInput onChangeText={(pan_number) => this.setState({pan_number})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
              </View>
          </Card>


          <Card>

            <View>
                <Text style={{alignSelf: 'center', fontSize: 15, padding: 10, fontWeight: 'bold'}}>Enter your fee for a half hour/15 min call</Text>
            </View>


            <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>INR xx/30 min</Text>
                  <TextInput style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
                  <Text onChangeText={(thirty_min_fee) => this.setState({thirty_min_fee})} style={{fontSize: 10, color: '#696969'}}>Please note that fee settlements are usually done latest by Friday for
                    all appointments up to the previous Thursday.</Text>
              </View>
              <View style={styles.rule}/>

              <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                  <Text style={{fontSize: 15, color: '#696969'}}>INR xx/15 min</Text>
                  <TextInput onChangeText={(fifteen_min_fee) => this.setState({fifteen_min_fee})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
                  <Text style={{fontSize: 10, color: '#696969'}}>Please note that fee settlements are usually done latest by Friday for
                    all appointments up to the previous Thursday.</Text>
              </View>

          </Card>

          <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                <Text style={styles.customBtnText}>Save</Text>
            </TouchableOpacity>
          </View>

        </View>
      );
    } else if (this.state.tabSelected === 'voucher') {
      return(
        <View>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 13, padding: 10}}>Thank you for selecting vouchers as preferred payout mode, our representative 
                        will get in touch while processing your payout and sharing the available voucher options.</Text>
                </View>
                <Card>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 15, padding: 10, fontWeight: 'bold'}}>Enter your fee for a half hour/15 min call</Text>
                </View>
                <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                    <Text style={{fontSize: 15, color: '#696969'}}>INR xx/30 min</Text>
                    <TextInput onChangeText={(thirty_min_fee) => this.setState({thirty_min_fee})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
                    <Text style={{fontSize: 10, color: '#696969'}}>Please note that fee settlements are usually done latest by Friday for
                        all appointments up to the previous Thursday.</Text>
                </View>
                <View style={styles.rule}/>
                <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                    <Text style={{fontSize: 15, color: '#696969'}}>INR xx/15 min</Text>
                    <TextInput style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
                    <Text onChangeText={(fifteen_min_fee) => this.setState({fifteen_min_fee})} style={{fontSize: 10, color: '#696969'}}>Please note that fee settlements are usually done latest by Friday for
                        all appointments up to the previous Thursday.</Text>
                </View>
                </Card>
                <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                    <Text style={styles.customBtnText}>Save</Text>
                </TouchableOpacity>
                </View>
      </View>
      );
    } else if (this.state.tabSelected === 'donate') {
      return(
        <View>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 13, padding: 10}}>Thank you, we will donate the payout to our partnered 
                    NGO and share the contribution receipt with you.</Text>
                </View>
                <Card>
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 15, padding: 10, fontWeight: 'bold'}}>Enter your fee for a half hour/15 min call</Text>
                </View>
                <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                    <Text style={{fontSize: 15, color: '#696969'}}>INR xx/30 min</Text>
                    <TextInput onChangeText={(thirty_min_fee) => this.setState({thirty_min_fee})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
                    <Text style={{fontSize: 10, color: '#696969'}}>Please note that fee settlements are usually done latest by Friday for
                        all appointments up to the previous Thursday.</Text>
                </View>
                <View style={styles.rule}/>
                <View style={{flexDirection:'column', paddingTop:15, paddingBottom: 10}}>
                    <Text style={{fontSize: 15, color: '#696969'}}>INR xx/15 min</Text>
                    <TextInput onChangeText={(fifteen_min_fee) => this.setState({fifteen_min_fee})} style={{fontSize: 13, borderRadius: 5, borderColor: '#d3d3d3', borderWidth: 1}}></TextInput>
                    <Text style={{fontSize: 10, color: '#696969'}}>Please note that fee settlements are usually done latest by Friday for
                        all appointments up to the previous Thursday.</Text>
                </View>
                </Card>
                <View style={{flexDirection: 'row', paddingTop:10,paddingBottom: 30, justifyContent:'space-evenly'}}>
                <TouchableOpacity style={styles.customBtnBG} onPress={() => {}} >
                    <Text style={styles.customBtnText}>Save</Text>
                </TouchableOpacity>
                </View>
      </View>
      );
    }
  }

  renderHeader = () => {
    return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'Payment & Fees' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
        />
      );
    }
  

  render() {

    return (
      <View style={styles.container}>

        {this.renderHeader()}

        <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>

        <View>
            <Text style={{alignSelf: 'center',color: '#ff6600', fontSize: 15, padding: 10}}>Select your preffered mode of payout</Text>
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-evenly', backgroundColor:'#f3f3f3'}}>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'bank_transfer'})} style={styles.newButton}>
                <Icon type='material-community' name='bank' color='#ff6600'/>
                  <Text style={styles.buttonText}>Bank Transfer</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'voucher'})} style={styles.newButton}>
                <Icon type='material-community' name='ticket-percent' color='#ff6600'/>
                  <Text style={styles.buttonText}>Voucher</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'donate'})} style={styles.newButton}>
                <Icon type='material-community' name='coins' color='#ff6600'/>
                <Text style={styles.buttonText}>Donate to Charity</Text>
              </TouchableOpacity>

        </View>
            <Text style={{alignSelf: 'center',color: 'red', fontSize: 13, padding: 10}}>(All fields are mandatory)</Text>
        <View>

        </View>

        
        <ScrollView showsVerticalScrollIndicator={false} style={{flexDirection:'column'}}>
          {this.loadBottomView()}
        </ScrollView>

        </View>

       </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFF'
  },
  toolbar: {
    height: 56,
  },
  title: {
    alignSelf: 'center',
    color: 'white'
  },
  IconText: {
    color: 'orange'
  },
  rule: {
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  newButton: {
     alignContent: 'center',
     justifyContent: 'center',
     height: 90
 },
 buttonText: {
   alignSelf: 'center',
   color: '#ff6600',
   textAlign:'center'
 },
 customBtnBG: {
     backgroundColor: "#FF9800",
     paddingHorizontal: 50,
     paddingVertical: 15,
     margin: 40,
     borderRadius: 5
 },
 customBtnText: {
     fontSize: 17,
     alignSelf: 'center',
     color: "#fff",
 }
})

export default FeeAndBankDetails