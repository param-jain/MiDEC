//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet, 
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import SelectMultiple from 'react-native-select-multiple';
import { DatePicker } from 'native-base';




const timeslots = [
  '17:30 hrs to 18:00 hrs', 
  '18:00 hrs to 18:30 hrs', 
  '18:30 hrs to 19:00 hrs',
  '19:00 hrs to 19:30 hrs',
  '19:30 hrs to 20:00 hrs',
  '20:00 hrs to 20:30 hrs',
  '20:30 hrs to 21:00 hrs',
  '21:30 hrs to 22:00 hrs',
  '22:00 hrs to 22:30 hrs',
  '22:30 hrs to 23:00 hrs',
];

const sort_by = [
  'Ratings high to low',
  'Ratings low to high',
  'Hourly fee high to low',
  'Hourly fee low to high',
];


const past_companies = [
  'A. T. Kearney',
  'Amazon',
  'Avendus',
  'Axis Bank',
  'Bharti Axa',
  'Bloomberg Quint',
  'Capgemini',
  'Deloitte',
  'DXC Technology',
  'Exide Life Insurance',
  'EY',
  'Facebook',
  'Flipkart',
  'Godrej',
  'Google',
  'Hampton',
  'HDFC Bank',
  'HP',
  'HSBC',
  'ICICI Bank',
  'ICICI Prudential',
  'ICICI Securities',
  'Induslnd Bank',
  'Infosys',
  'Kotak Mahindra Bank',
  'KPMG',
  'Mastercard',
  'PWC',
  'RBL Bank',
  'ThoughtWorks',
  'Trafigura',
  'Unilever',
  'Visa',
  'Which',
  'Wipro',
  'Wyatt',
  'Yes Bank'
]


const current_companies = [
  'A. T. Kearney',
  'Amazon',
  'Avendus',
  'Axis Bank',
  'Bharti Axa',
  'Bloomberg Quint',
  'Capgemini',
  'Deloitte',
  'DXC Technology',
  'Exide Life Insurance',
  'EY',
  'Facebook',
  'Flipkart',
  'Godrej',
  'Google',
  'Hampton',
  'HDFC Bank',
  'HP',
  'HSBC',
  'ICICI Bank',
  'ICICI Prudential',
  'ICICI Securities',
  'Induslnd Bank',
  'Infosys',
  'Kotak Mahindra Bank',
  'KPMG',
  'Mastercard',
  'PWC',
  'RBL Bank',
  'ThoughtWorks',
  'Trafigura',
  'Unilever',
  'Visa',
  'Which',
  'Wipro',
  'Wyatt',
  'Yes Bank'
]


const current_functional_area = [
  'Banking/Financial Services',
  'Content Writer/Editors',
  'Corporate Planning/Consulting',
  'Design',
  'Education/Language Specialist',
  'Entreprenuer/Businessman',
  'Executive Assistant',
  'Export/Import/Merchandising',
  'Hotels/Restaurant Management',
  'HR/IR',
  'Instructional Designer',
  'Insurance',
  'IT',
  'ITeS/BPO/Customer Service',
  'KPO/Research',
  'Legal/Law/Company Secretary',
  'Marketing/Advertising',
  'Media/Entertainment',
  'Pharma/Biotech/Healthcare',
  'Production/Maintenance',
  'Purchase/Supply Chain',
  'Research & Development',
  'Sales/Business Development',
  'Top Management',
  'Training & Development',
  'Travel/Hospitality',
  'Visual Merchandising',
  'Other',
]


const past_functional_area = [
  'Banking/Financial Services',
  'Content Writer/Editors',
  'Corporate Planning/Consulting',
  'Design',
  'Education/Language Specialist',
  'Entreprenuer/Businessman',
  'Executive Assistant',
  'Export/Import/Merchandising',
  'Hotels/Restaurant Management',
  'HR/IR',
  'Instructional Designer',
  'Insurance',
  'IT',
  'ITeS/BPO/Customer Service',
  'KPO/Research',
  'Legal/Law/Company Secretary',
  'Marketing/Advertising',
  'Media/Entertainment',
  'Pharma/Biotech/Healthcare',
  'Production/Maintenance',
  'Purchase/Supply Chain',
  'Research & Development',
  'Sales/Business Development',
  'Top Management',
  'Training & Development',
  'Travel/Hospitality',
  'Visual Merchandising',
  'Other',
]




const current_industry = [
  'Accounting/Finance/Audit',
  'Advertising/PR/MR/Events',
  'Agriculture/Dairy',
  'Animation',
  'Architecture/Interior Design',
  'Auto/Auto Ancillary',
  'Aviation/Aerospace',
  'Banking/Financial Services',
  'BPO/ITES',
  'Brewery/Distillery',
  'Ceramics/Sanitary ware',
  'Chemicals/Petrochemical/Plastic',
  'Construction/Engineering/Cement',
  'Conslting',
  'Consumer Durables',
  'Courier/Transportation/Freight',
  'Defence/Government',
  'Education/Teaching/Training',
  'Electricals/Switchgears',
  'Export/Import',
  'Facility Management',
  'Fertilizers/Pesticides',
  'FMCG/Foods/Beverage',
  'Food Processing',
  'Gems & Jewellery',
  'Glass',
  'Healthcare/Medical/Hospital',
  'Air Conditioning',
  'Hotels/Restaurants/Airlines',
  'Industrial Products',
  'Infrastructure/Oil & Gas',
  'Insurance',
  'Internet/Online/eCommerce',
  'IT',
  'IT-Software',
  'IT-Hardware & Networking',
  'KPO/Research',
  'Legal',
  'Logistics/SCM/Freight',
  'Manufacturing',
  'Media/Dotcom/Entertainment',
  'Medical/Healthcare/Hospital',
  'Mining/Steel/Shipping',
  'NGO/Social Service',
  'Oil & Gas/ Power/ Energy',
  'Office Equipment/ Automation',
  'Paper',
  'Pharma/Biotech',
  'Printing/Packaging',
  'Publishing',
  'Real Estate/Property',
  'Recruitment/Staffing',
  'Retail',
  'Security',
  'Semiconductors/Electronics',
  'Shipping/Marine',
  'Steel',
  'Strategy',
  'Telecom/ISP',
  'Textile/Garments/Accessories',
  'Travel/Hospitality',
  'Tyres',
  'Water/Waste Treatment',
  'Wellness/Fitness/Sports'
];


const past_industry = [
  'Accounting/Finance/Audit',
  'Advertising/PR/MR/Events',
  'Agriculture/Dairy',
  'Animation',
  'Architecture/Interior Design',
  'Auto/Auto Ancillary',
  'Aviation/Aerospace',
  'Banking/Financial Services',
  'BPO/ITES',
  'Brewery/Distillery',
  'Ceramics/Sanitary ware',
  'Chemicals/Petrochemical/Plastic',
  'Construction/Engineering/Cement',
  'Conslting',
  'Consumer Durables',
  'Courier/Transportation/Freight',
  'Defence/Government',
  'Education/Teaching/Training',
  'Electricals/Switchgears',
  'Export/Import',
  'Facility Management',
  'Fertilizers/Pesticides',
  'FMCG/Foods/Beverage',
  'Food Processing',
  'Gems & Jewellery',
  'Glass',
  'Healthcare/Medical/Hospital',
  'Air Conditioning',
  'Hotels/Restaurants/Airlines',
  'Industrial Products',
  'Infrastructure/Oil & Gas',
  'Insurance',
  'Internet/Online/eCommerce',
  'IT',
  'IT-Software',
  'IT-Hardware & Networking',
  'KPO/Research',
  'Legal',
  'Logistics/SCM/Freight',
  'Manufacturing',
  'Media/Dotcom/Entertainment',
  'Medical/Healthcare/Hospital',
  'Mining/Steel/Shipping',
  'NGO/Social Service',
  'Oil & Gas/ Power/ Energy',
  'Office Equipment/ Automation',
  'Paper',
  'Pharma/Biotech',
  'Printing/Packaging',
  'Publishing',
  'Real Estate/Property',
  'Recruitment/Staffing',
  'Retail',
  'Security',
  'Semiconductors/Electronics',
  'Shipping/Marine',
  'Steel',
  'Strategy',
  'Telecom/ISP',
  'Textile/Garments/Accessories',
  'Travel/Hospitality',
  'Tyres',
  'Water/Waste Treatment',
  'Wellness/Fitness/Sports'
];


const total_work_xp = [
  '0 Year',
  '1 Year',
  '2 Years',
  '3 Years',
  '4 Years',
  '5 Years',
  '6 Years',
  '7 Years',
  '8 Years',
  '9 Years',
  '10 Years',
  '11 Years',
  '12 Years',
  '13 Years',
  '14 Years',
  '15 Years',
  '16 Years',
  '17 Years',
  '18 Years',
  '19 Years',
  '20 Years',
  '21 Years',
  '22 Years',
  '23 Years',
  '24 Years',
  '25 Years',
  '26 Years',
  '27 Years',
  '28 Years',
  '29 Years',
  '30 Years',
  '30 Plus'
];

const current_area_work_xp = [
  '0 Year',
  '1 Year',
  '2 Years',
  '3 Years',
  '4 Years',
  '5 Years',
  '6 Years',
  '7 Years',
  '8 Years',
  '9 Years',
  '10 Years',
  '11 Years',
  '12 Years',
  '13 Years',
  '14 Years',
  '15 Years',
  '16 Years',
  '17 Years',
  '18 Years',
  '19 Years',
  '20 Years',
  '21 Years',
  '22 Years',
  '23 Years',
  '24 Years',
  '25 Years',
  '26 Years',
  '27 Years',
  '28 Years',
  '29 Years',
  '30 Years',
  '30 Plus'
];

const languages_known = [
  'Adi',
  'Angami',
  'Ao',
  'Assamese',
  'Bengali',
  'Bhili',
  'Bodo',
  'Coorgi',
  'Dimasa',
  'Dogri',
  'English',
  'Garo',
  'Gondi',
  'Gujarati',
  'Halabi',
  'Hindi',
  'Ho',
  'Kannada',
  'Karbi',
  'Kashmiri',
  'Khandeshi',
  'Kharia',
  'Khasi',
  'Khond',
  'Kisan',
  'Kolami',
  'Konkani',
  'Konyak',
  'Korku',
  'Koya',
  'Kui',
  'Kurukh',
  'Ladakhi',
  'Lotha',
  'Lushai',
  'Maithili',
  'Malayalam',
  'Matto',
  'Manipuri',
  'Marathi',
  'Miri',
  'Munda',
  'Nepali',
  'Nissi',
  'Odia',
  'Phom',
  'Punjabi',
  'Rabha',
  'Sanskrit',
  'Santali',
  'Savara',
  'Sema',
  'Sindhi',
  'Tamil',
  'Tangkhul',
  'Telugu',
  'Thado',
  'Tripuri',
  'Tulu',
  'Urdu'
];


const areas_of_expertise = [
  'Accounting',
  'Administrative',
  'Advertising',
  'Android Development',
  'Architecture',
  'Art Curation',
  'Auction House',
  'Automotive',
  'Banking',
  'Barista',
  'Bartender',
  'Beautician',
  'Big Data',
  'Biomedical Engineer',
  'Black Belt - Six Sigma',
  'Blue Collar Jobs',
  'Boilermaker',
  'Bookkeeping',
  'Brick Mason',
  'Broadcaster',
  'Business analysis',
  'Business development',
  'Business Intelligence',
  'Business management',
  'Business storytelling',
  'Career Counselor',
  'Carpentry',
  'Cashier',
  'Channel marketing',
  'Chef',
  'Chiropractor',
  'Civil Engineer',
  'Claims Adjuster',
  'Clinical Laboratory Technician',
  'Coaching',
  'College Admissions',
  'Computer Hardware Specialist',
  'Computer Programming',
  'Concierge',
  'Construction',
  'Consulting',
  'Content Management',
  'Content marketing',
  'Content strategy',
  'Copywriting',
  'Counseling',
  'Crticial thinking',
  'Custodian',
  'Customer Service',
  'Data analysis',
  'Data presentation',
  'Data Scientist',
  'Database administration',
  'Delegating tasks',
  'Dietician/Nutritionist',
  'Digital Media',
  'Digital Project Implementation',
  'Digitization',
  'Economics',
  'Editing',
  'Electrician',
  'Esthetician',
  'Executive',
  'Executive Assistant',
  'Fashion Buyer',
  'Fashion Design',
  'Finance',
  'Financial Advisor/Planner',
  'Flight Attendant',
  'Front End Web Developer',
  'Fundraiser',
  'Graphic Design',
  'Hair Stylist',
  'Healthcare/Hospital Administration',
  'Heavy Equipment Operator',
  'Home Health Aide',
  'Hospitality Industry',
  'Hotel Front Desk/Guest Services Skills',
  'Human Resources',
  'Information Security Analysis',
  'Information Technology',
  'Inside Sales',
  'Insurance',
  'Interior Design',
  'Investment Banking Analyst',
  'iOS Developer',
  'IT Manager',
  'IT Project Implementation',
  'IT Soft Skills',
  'Jounalism',
  'Law Enforcement Skills',
  'Leadership',
  'Legal',
  'Librarian',
  'Licensed Practical Nurse(LPN) Skills',
  'Machinist',
  'Maintenance and Janitorial',
  'Makeup Artist',
  'Management',
  'Market Research',
  'Marketing',
  'Massage Therapist',
  'Master Black Belt - Six Sigma',
  'Mechanical Engineering'

];


class HomeFilterPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'ratings_high_to_low',
      selectedTimeslots: [],
      pastCompanies: [],
      currentCompanies: [],
      currentIndustry: [],
      totalWorkExp: '0',
      languagesKnown: [],
      areasOfExpertise: [],
      currentFunctionalArea: [],
      currentAreaWorkEXp: '0',
      pastIndustry: [],
      pastFunctionalArea: [],
      tabSelected: 'sort_by',
      date: new Date(),
    }
  }

  getFilterObject(){
    return {
        "slotDate":"",
        "slotTimes":[],
        "pastCompanies": [],
        "currCompanies": [],  
        "currIndustry": [], 
        "languagesKnown":[],
        "totalExp": 0,
        "expAreas": [],
        "currFnclArea": [],
        "currFnclAreaExp": 0,
        "pastIndustry": [],
        "pastFnclArea": []
    }
}

resetFilters = () => {
    this.setState({
        sortBy: 'ratings_high_to_low',
        selectedTimeslots: [],
        pastCompanies: [],
        currentCompanies: [],
        currentIndustry: [],
        totalWorkExp: '0',
        languagesKnown: [],
        areasOfExpertise: [],
        currentFunctionalArea: [],
        currentAreaWorkEXp: '0',
        pastIndustry: [],
        pastFunctionalArea: [],
        tabSelected: 'sort_by',
        date: new Date(), 
    });

    let filters = {
        "slotDate": this.state.date,
        "slotTimes": this.state.selectedTimeslots,
        "pastCompanies": this.state.pastCompanies,
        "currCompanies": this.state.currentCompanies,  
        "currIndustry": this.state.currentIndustry, 
        "languagesKnown": this.state.languagesKnown,
        "totalExp": this.state.totalWorkExp,
        "expAreas": this.state.areasOfExpertise,
        "currFnclArea": this.state.currentFunctionalArea,
        "currFnclAreaExp": this.state.currentAreaWorkEXp,
        "pastIndustry": this.state.pastIndustry,
        "pastFnclArea": this.state.pastFunctionalArea
    }

    this.props.navigation.navigate('home', {"filters": filters});
}

applyFilters = () => {

    let filters = {
        "slotDate": this.state.date,
        "slotTimes": this.state.selectedTimeslots,
        "pastCompanies": this.state.pastCompanies,
        "currCompanies": this.state.currentCompanies,  
        "currIndustry": this.state.currentIndustry, 
        "languagesKnown": this.state.languagesKnown,
        "totalExp": this.state.totalWorkExp,
        "expAreas": this.state.areasOfExpertise,
        "currFnclArea": this.state.currentFunctionalArea,
        "currFnclAreaExp": this.state.currentAreaWorkEXp,
        "pastIndustry": this.state.pastIndustry,
        "pastFnclArea": this.state.pastFunctionalArea
    }

    this.props.navigation.navigate('home', {"filters": filters});
}

  onTimeslotsChange = (selectedTimeslots) => {
    this.setState({selectedTimeslots});
  }

  onPastCompaniesChange = (pastCompanies) => {
    this.setState({pastCompanies});
  }

  onCurrentCompaniesChange = (currentCompanies) => {
    this.setState({currentCompanies});
  }

  onCurrentIndustryChange = (currentIndustry) => {
    this.setState({currentIndustry});
  }

  onLanguagesChange = (languagesKnown) => {
    this.setState({languagesKnown});
  }

  onExpertiseChange = (areasOfExpertise) => {
    this.setState({areasOfExpertise});
  }

  onCurrentFunctionalAreaChange = (currentFunctionalArea) => {
    this.setState({currentFunctionalArea});
  }

  onCurrentAreaWorkXpChange = (currentAreaWorkXp) => {
    this.setState({currentAreaWorkXp});
  }

  onPastIndustryChange = (pastIndustry) => {
    this.setState({pastIndustry});
  }

  onPastFunctionalArea = (pastFunctionalArea) => {
    this.setState({pastFunctionalArea});
  }


  loadRightView = () => {
    if (this.state.tabSelected === 'sort_by') {
      return(
        <View style={{paddingTop: 20}}>
          <RadioButton.Group onValueChange={sortBy => this.setState({sortBy})} value={this.state.sortBy}>
            <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton color={'#ff6600'} value="ratings_high_to_low"/>
              <View style={{paddingTop: 7}}>
                <Text>Ratings high to low</Text>
              </View>
            </View>
            <View style={styles.rule}></View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton color={'#ff6600'} value="ratings_low_to_high"/>
              <View style={{paddingTop: 7}}>
                <Text>Ratings low to high</Text>
              </View>
            </View>
            <View style={styles.rule}></View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton color={'#ff6600'} value="hourly_fee_high_to_low"/>
              <View style={{paddingTop: 7}}>
                <Text>Hourly fee high to low</Text>
              </View>
            </View>
            <View style={styles.rule}></View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton color={'#ff6600'} value="hourly_fee_low_to_high"/>
              <View style={{paddingTop: 7}}>
                <Text>Hourly fee low to high</Text>
              </View>
            </View>
            </View>
          </RadioButton.Group>
        </View>
      );
    } else if (this.state.tabSelected === 'dates') {
      return(
        <View>
          <DatePicker
          date={this.state.date}
          onDateChange={date => this.setState({date})}
          />
      </View>
      );
    } else if (this.state.tabSelected === 'timeslots') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={timeslots} selectedItems={this.state.selectedTimeslots} onSelectionsChange={this.onTimeslotsChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'past_companies') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={past_companies} selectedItems={this.state.pastCompanies} onSelectionsChange={this.onPastCompaniesChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'current_companies') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={current_companies} selectedItems={this.state.currentCompanies} onSelectionsChange={this.onCurrentCompaniesChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'current_industry') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={current_industry} selectedItems={this.state.currentIndustry} onSelectionsChange={this.onCurrentIndustryChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'total_work_xp') {
      return(
        <ScrollView>
          <View style={{paddingTop: 20, paddingBottom: 50}}>
            <RadioButton.Group onValueChange={totalWorkExp => this.setState({totalWorkExp})} value={this.state.totalWorkExp}>
              <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="0"/>
                <View style={{paddingTop: 7}}>
                  <Text>0 Year</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="1"/>
                <View style={{paddingTop: 7}}>
                  <Text>1 Year</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="2"/>
                <View style={{paddingTop: 7}}>
                  <Text>2 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="3"/>
                <View style={{paddingTop: 7}}>
                  <Text>3 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="4"/>
                <View style={{paddingTop: 7}}>
                  <Text>4 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="5"/>
                <View style={{paddingTop: 7}}>
                  <Text>5 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="6"/>
                <View style={{paddingTop: 7}}>
                  <Text>6 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="7"/>
                <View style={{paddingTop: 7}}>
                  <Text>7 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="8"/>
                <View style={{paddingTop: 7}}>
                  <Text>8 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="9"/>
                <View style={{paddingTop: 7}}>
                  <Text>9 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="10"/>
                <View style={{paddingTop: 7}}>
                  <Text>10 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="11"/>
                <View style={{paddingTop: 7}}>
                  <Text>11 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="12"/>
                <View style={{paddingTop: 7}}>
                  <Text>12 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="13"/>
                <View style={{paddingTop: 7}}>
                  <Text>13 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="14"/>
                <View style={{paddingTop: 7}}>
                  <Text>14 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="15"/>
                <View style={{paddingTop: 7}}>
                  <Text>15 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="16"/>
                <View style={{paddingTop: 7}}>
                  <Text>16 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="17"/>
                <View style={{paddingTop: 7}}>
                  <Text>17 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="18"/>
                <View style={{paddingTop: 7}}>
                  <Text>18 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="19"/>
                <View style={{paddingTop: 7}}>
                  <Text>19 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="20"/>
                <View style={{paddingTop: 7}}>
                  <Text>21 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="22"/>
                <View style={{paddingTop: 7}}>
                  <Text>22 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="23"/>
                <View style={{paddingTop: 7}}>
                  <Text>23 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="24"/>
                <View style={{paddingTop: 7}}>
                  <Text>24 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="25"/>
                <View style={{paddingTop: 7}}>
                  <Text>25 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="26"/>
                <View style={{paddingTop: 7}}>
                  <Text>26 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="27"/>
                <View style={{paddingTop: 7}}>
                  <Text>27 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="28"/>
                <View style={{paddingTop: 7}}>
                  <Text>28 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="29"/>
                <View style={{paddingTop: 7}}>
                  <Text>29 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="30"/>
                <View style={{paddingTop: 7}}>
                  <Text>30 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <RadioButton color={'#ff6600'} value="31"/>
                <View style={{paddingTop: 7}}>
                  <Text>30 Plus Years</Text>
                </View>
              </View>
              </View>
            </RadioButton.Group>
          </View>
        </ScrollView>
      );
    } else if (this.state.tabSelected === 'languages_known') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={languages_known} selectedItems={this.state.languagesKnown} onSelectionsChange={this.onLanguagesChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'areas_of_expertise') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={areas_of_expertise} selectedItems={this.state.areasOfExpertise} onSelectionsChange={this.onExpertiseChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'current_functional_area') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={current_functional_area} selectedItems={this.state.currentFunctionalArea} onSelectionsChange={this.onCurrentFunctionalAreaChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'work_xp_in_current_area') {
      return(
        <ScrollView>
          <View style={{paddingTop: 20, paddingBottom: 50}}>
            <RadioButton.Group onValueChange={currentAreaWorkEXp => this.setState({currentAreaWorkEXp})} value={this.state.currentAreaWorkEXp}>
              <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="0"/>
                <View style={{paddingTop: 7}}>
                  <Text>0 Year</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="1"/>
                <View style={{paddingTop: 7}}>
                  <Text>1 Year</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="2"/>
                <View style={{paddingTop: 7}}>
                  <Text>2 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="3"/>
                <View style={{paddingTop: 7}}>
                  <Text>3 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="4"/>
                <View style={{paddingTop: 7}}>
                  <Text>4 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="5"/>
                <View style={{paddingTop: 7}}>
                  <Text>5 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="6"/>
                <View style={{paddingTop: 7}}>
                  <Text>6 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="7"/>
                <View style={{paddingTop: 7}}>
                  <Text>7 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="8"/>
                <View style={{paddingTop: 7}}>
                  <Text>8 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="9"/>
                <View style={{paddingTop: 7}}>
                  <Text>9 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="10"/>
                <View style={{paddingTop: 7}}>
                  <Text>10 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="11"/>
                <View style={{paddingTop: 7}}>
                  <Text>11 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="12"/>
                <View style={{paddingTop: 7}}>
                  <Text>12 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="13"/>
                <View style={{paddingTop: 7}}>
                  <Text>13 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="14"/>
                <View style={{paddingTop: 7}}>
                  <Text>14 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="15"/>
                <View style={{paddingTop: 7}}>
                  <Text>15 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="16"/>
                <View style={{paddingTop: 7}}>
                  <Text>16 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="17"/>
                <View style={{paddingTop: 7}}>
                  <Text>17 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="18"/>
                <View style={{paddingTop: 7}}>
                  <Text>18 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="19"/>
                <View style={{paddingTop: 7}}>
                  <Text>19 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="20"/>
                <View style={{paddingTop: 7}}>
                  <Text>21 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="22"/>
                <View style={{paddingTop: 7}}>
                  <Text>22 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="23"/>
                <View style={{paddingTop: 7}}>
                  <Text>23 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="24"/>
                <View style={{paddingTop: 7}}>
                  <Text>24 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="25"/>
                <View style={{paddingTop: 7}}>
                  <Text>25 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="26"/>
                <View style={{paddingTop: 7}}>
                  <Text>26 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="27"/>
                <View style={{paddingTop: 7}}>
                  <Text>27 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="28"/>
                <View style={{paddingTop: 7}}>
                  <Text>28 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="29"/>
                <View style={{paddingTop: 7}}>
                  <Text>29 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton color={'#ff6600'} value="30"/>
                <View style={{paddingTop: 7}}>
                  <Text>30 Years</Text>
                </View>
              </View>
              <View style={styles.rule}></View>
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <RadioButton color={'#ff6600'} value="31"/>
                <View style={{paddingTop: 7}}>
                  <Text>30 Plus Years</Text>
                </View>
              </View>
              </View>
            </RadioButton.Group>
          </View>
        </ScrollView>
      );
    } else if (this.state.tabSelected === 'past_industries') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={past_industry} selectedItems={this.state.pastIndustry} onSelectionsChange={this.onPastIndustryChange}/>
        </View>
      );
    } else if (this.state.tabSelected === 'past_functional_areas') {
      return(
        <View style={{paddingBottom: 50}}>
          <SelectMultiple items={past_functional_area} selectedItems={this.state.pastFunctionalArea} onSelectionsChange={this.onPastFunctionalArea}/>
        </View>
      );
    }
  }


  

  render() {
    const {
      color,
      title
    } = this.props

    return (
      <View style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {true} translucent = {true}/>
        <View style={[ styles.toolbar, { backgroundColor: "#ff6600" }]}>

            <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 20}}>

            <View style={{flexDirection: 'row'}}>
            <Icon type='material-community' name='close' color='black' onPress={() => {this.props.navigation.navigate('home')}}/>
            <Text style={{fontSize:15, paddingLeft: 5,paddingTop: 2}}>Filter</Text>
            </View>


            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingHorizontal: 20, paddingVertical: 5}} onPress={() => {this.resetFilters()}} >
                <Text style={{fontSize:15, color: 'white'}}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.customBtnBG} onPress={() => {this.applyFilters()}} >
                <Text style={styles.customBtnText}>Apply</Text>
            </TouchableOpacity>

            </View>

            </View>

        </View>


        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>

        <View style={{flexDirection:'column', backgroundColor:'#f3f3f3', height: '100%', width:'30%', padding:10}}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'sort_by'})} style={styles.newButton}>
                <Icon type='material-community' name='calendar' color='#ff6600'/>
                  <Text style={styles.buttonText}>Sort By</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'dates'})} style={styles.newButton}>
                <Icon type='material-community' name='calendar' color='#ff6600'/>
                  <Text style={styles.buttonText}>Available Date</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({tabSelected: 'timeslots'})} style={styles.newButton}>
                <Icon type='entypo' name='time-slot' color='#ff6600'/>
                <Text style={styles.buttonText}>Available timeslots</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'past_companies'})} style={styles.newButton}>
                <Icon type='font-awesome' name='building-o' color='#ff6600'/>
                <Text style={styles.buttonText}>Past Companies</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'current_companies'})} style={styles.newButton}>
                <Icon type='font-awesome' name='building' color='#ff6600'/>
                <Text style={styles.buttonText}>Current Company</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'current_industry'})} style={[styles.newButton]}>
                <Icon type='font-awesome' name='industry' color='#ff6600'/>
                <Text style={styles.buttonText}>Current Industry</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'total_work_xp'})} style={[styles.newButton]}>
                <Icon type='material' name='explicit' color='#ff6600'/>
                <Text style={styles.buttonText}>Total Work Experience</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'languages_known'})} style={[styles.newButton]}>
                <Icon type='material' name='language' color='#ff6600'/>
                <Text style={styles.buttonText}>Languages known</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'areas_of_expertise'})} style={[styles.newButton]}>
                <Icon type='material-community' name='lightbulb-on-outline' color='#ff6600'/>
                <Text style={styles.buttonText}>Areas of expertise</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'current_functional_area'})} style={[styles.newButton]}>
                <Icon type='font-awesome' name='gears' color='#ff6600'/>
                <Text style={styles.buttonText}>Current functional area</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'work_xp_in_current_area'})} style={[styles.newButton]}>
                <Icon type='material-community' name='briefcase-check' color='#ff6600'/>
                <Text style={styles.buttonText}>Work experience in current area</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'past_industries'})} style={[styles.newButton]}>
                <Icon type='material-community' name='factory' color='#ff6600'/>
                <Text style={styles.buttonText}>Past Industries</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({tabSelected: 'past_functional_areas'})} style={[styles.newButton, {marginBottom: 100}]}>
                <Icon type='font-awesome' name='gear' color='#ff6600'/>
                <Text style={styles.buttonText}>Past functional areas</Text>
              </TouchableOpacity>
             
          </ScrollView>


        </View>

        <View style={{flexDirection:'column', width: '100%'}}>
          {this.loadRightView()}
        </View>

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
    justifyContent: 'center'
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
   backgroundColor: 'white',
  paddingHorizontal: 20,
  paddingVertical: 5,
  borderRadius: 5
},
customBtnText: {
  fontSize: 15,
  color: '#ff6600',
}
})

export default HomeFilterPage