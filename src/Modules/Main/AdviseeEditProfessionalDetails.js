import React, { Component } from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Header } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const items_target_job_roles = [
  {  
    name: "Target Job Roles",
    id: 0,
    children: [{
        name: "Internship",
        id: 1,
      },{
        name: "Associate (Associate consultant, Junior business analyst, Credit analyst, Correspondent)",
        id: 2,
      },{
        name: "Entry level (Developer, Consultant, Business analyst, Senior Correspondent)",
        id: 3,
      },{
        name: "Mid level (Manager, Team lead, Senior consultant, Senior business analyst)",
        id: 4,
      },{
        name: "Senior level (Senior manager, Associate director, Head of department, etc.)",
        id: 5,
      },{
        name: "Director (Director, Executive director, Head of department, AVP, etc.) fruit",
        id: 6,
      },{
        name: "Executive (CXO, President, VP, Partner, Founder, etc.)",
        id: 7,
      }]
  },
]

const items_target_functional_areas = [
  {  
    name: "Target Functional Areas",
    id: 0,
    children: [{
        name: "Accounting / Taxation / Audit",
        id: 1,
      },{
        name: "Administration",
        id: 2,
      },{
        name: "Analytics & Business Intelligence",
        id: 3,
      },{
        name: "Banking / Financial Services",
        id: 4,
      },{
        name: "Content Writer/ Editors",
        id: 5,
      },{
        name: "Corporate Planning / Consulting / Strategy",
        id: 6,
      },{
        name: "Design",
        id: 7,
      },{
        name: "Education / Language Specialist",
        id: 8,
      },{
        name: "Entrepreneur / Businessman / Outside Management Consultant",
        id: 9,
      },{
        name: "Executive Assistant/Personal Secretary",
        id: 10,
      },{
        name: "Export / Import / Merchandising",
        id: 11,
      },{
        name: "Hotels / Restaurant Management",
        id: 12,
      },{
        name: "HR / IR",
        id: 13,
      },{
        name: "Instructional Designer",
        id: 14,
      },{
        name: "Insurance",
        id: 15,
      },{
        name: "IT",
        id: 16,
      },{
        name: "ITeS / BPO / Customer Service",
        id: 17,
      },{
        name: "KPO / Research",
        id: 18,
      },{
        name: "Legal / Law / Company Secretary",
        id: 19,
      },{
        name: "Marketing / Advertising / Public Relation",
        id: 20,
      },{
        name: "Media / Entertainment",
        id: 21,
      },{
        name: "Pharma / Biotech / Healthcare / Medical / R&D",
        id: 22,
      },{
        name: "Production / Maintenance / Quality Assurance",
        id: 23,
      },{
        name: "Purchase / Supply Chain / Logistics",
        id: 24,
      },{
        name: "Research & Development",
        id: 25,
      },{
        name: "Sales / Business Development / Client Servicing",
        id: 26,
      },{
        name: "Top Management",
        id: 27,
      },{
        name: "Training & Development",
        id: 28,
      },{
        name: "Travel / Hospitality",
        id: 29,
      },{
        name: "Visual Merchandising",
        id: 30,
      },{
        name: "Other",
        id: 31,
      }]
  },
]



const items_areas_of_expertise = [
  {  
    name: "Areas of Expertise",
    id: 0,
    children: [{
        name: "Accounting",
        id: 1,
      },{
        name: "Administrative",
        id: 2,
      },{
        name: "Advertising",
        id: 3,
      },{
        name: "Android Development",
        id: 4,
      },{
        name: "Architecture",
        id: 5,
      },{
        name: "Art Curation",
        id: 6,
      },{
        name: "Auction House",
        id: 7,
      },{
        name: "Automotive",
        id: 8,
      },{
        name: "Banking",
        id: 9,
      },{
        name: "Barista",
        id: 10,
      },{
        name: "Bartender",
        id: 11,
      },{
        name: "Beautician",
        id: 12,
      },{
        name: "Big Data",
        id: 13,
      },{
        name: "Biomedical Engineer",
        id: 14,
      },{
        name: "Black Belt - Six Sigma",
        id: 15,
      },{
        name: "Blue Collar Jobs",
        id: 16,
      },{
        name: "Boilermaker",
        id: 17,
      },{
        name: "Bookkeeping",
        id: 18,
      },{
        name: "Brick Mason",
        id: 19,
      },{
        name: "Broadcaster",
        id: 20,
      },{
        name: "Business analysis",
        id: 21,
      },{
        name: "Business development",
        id: 22,
      },{
        name: "Business Intelligence",
        id: 23,
      },{
        name: "Business management",
        id: 24,
      },{
        name: "Business storytelling",
        id: 25,
      },{
        name: "Career Counselor",
        id: 26,
      },{
        name: "Carpentry",
        id: 27,
      },{
        name: "Cashier",
        id: 28,
      },{
        name: "Channel marketing",
        id: 29,
      },{
        name: "Chef",
        id: 30,
      },{
        name: "Chiropractor",
        id: 31,
      },{
        name: "Civil Engineer",
        id: 32,
      },{
        name: "Claims Adjuster",
        id: 33,
      },{
        name: "Clinical Laboratory Technician",
        id: 34,
      },{
        name: "Coaching",
        id: 35,
      },{
        name: "College Admissions",
        id: 36,
      },{
        name: "Computer Hardware Specialist",
        id: 37,
      },{
        name: "Computer Programming",
        id: 38,
      },{
        name: "Concierge",
        id: 39,
      },{
        name: "Construction",
        id: 40,
      },{
        name: "Consulting",
        id: 41,
      },{
        name: "Content management",
        id: 42,
      },{
        name: "Content marketing",
        id: 43,
      },{
        name: "Content strategy",
        id: 44,
      },{
        name: "Copywriting",
        id: 45,
      },{
        name: "Counseling",
        id: 46,
      },{
        name: "Critical thinking",
        id: 47,
      },{
        name: "Custodian",
        id: 48,
      },{
        name: "Customer Service",
        id: 49,
      },{
        name: "Data analysis",
        id: 50,
      },{
        name: "Data presentation",
        id: 51,
      },{
        name: "Data Scientist",
        id: 52,
      },{
        name: "Database administration",
        id: 53,
      },{
        name: "Delegating tasks",
        id: 54,
      },{
        name: "Dental Assistant",
        id: 55,
      },{
        name: "Dentist",
        id: 56,
      },{
        name: "Dietician / Nutritionist",
        id: 57,
      },{
        name: "Digital media",
        id: 58,
      },{
        name: "Digital Project Implementation",
        id: 59,
      },{
        name: "Digitization Specialist",
        id: 60,
      },{
        name: "Economics",
        id: 61,
      },{
        name: "Editing",
        id: 62,
      },{
        name: "Electrician",
        id: 63,
      },{
        name: "EMT / Firefighter",
        id: 64,
      },{
        name: "Engineering",
        id: 65,
      },{
        name: "Esthetician",
        id: 66,
      },{
        name: "Executive",
        id: 67,
      },{
        name: "Executive Assistant",
        id: 68,
      },{
        name: "Fashion Buyer",
        id: 69,
      },{
        name: "Fashion Design",
        id: 70,
      },{
        name: "Finance",
        id: 71,
      },{
        name: "Financial Advisor / Planner",
        id: 72,
      },{
        name: "Flight Attendant",
        id: 73,
      },{
        name: "Front End Web Developer",
        id: 74,
      },{
        name: "Fundraiser",
        id: 75,
      },{
        name: "Gardening, Landscaping, and Groundskeeping",
        id: 76,
      },{
        name: "Graphic Design",
        id: 77,
      },{
        name: "Hair Stylist",
        id: 78,
      },{
        name: "Healthcare / Hospital Administration",
        id: 79,
      },{
        name: "Heavy Equipment Operator",
        id: 80,
      },{
        name: "Home Health Aide",
        id: 81,
      },{
        name: "Hospitality Industry",
        id: 82,
      },{
        name: "Hotel Front Desk / Guest Services Skills",
        id: 83,
      },{
        name: "Human Resources",
        id: 84,
      },{
        name: "Information Security Analysis",
        id: 85,
      },{
        name: "Information Technology",
        id: 86,
      },{
        name: "Inside Sales",
        id: 87,
      },{
        name: "Insurance",
        id: 88,
      },{
        name: "Interior Design",
        id: 89,
      },{
        name: "Investment Banking Analyst",
        id: 90,
      },{
        name: "iOS Developer",
        id: 91,
      },{
        name: "IT Manager",
        id: 92,
      },{
        name: "IT Project Implementation",
        id: 93,
      },{
        name: "IT Soft Skills",
        id: 94,
      },{
        name: "Journalism",
        id: 95,
      },{
        name: "Law Enforcement Skills",
        id: 96,
      },{
        name: "Leadership",
        id: 97,
      },{
        name: "Legal",
        id: 98,
      },{
        name: "Librarian",
        id: 99,
      },{
        name: "Licensed Practical Nurse (LPN) Skills",
        id: 100,
      },{
        name: "Machinist",
        id: 101,
      },{
        name: "Maintenance and Janitorial",
        id: 102,
      },{
        name: "Makeup Artist",
        id: 103,
      },{
        name: "Management",
        id: 104,
      },{
        name: "Market research",
        id: 105,
      },{
        name: "Marketing",
        id: 106,
      },{
        name: "Marketing Automation Specialist / Manager",
        id: 107,
      },{
        name: "Massage Therapist",
        id: 108,
      },{
        name: "Master Black Belt - Six Sigma",
        id: 109,
      },{
        name: "Mechanical Engineer",
        id: 110,
      },{
        name: "Media planning",
        id: 111,
      },{
        name: "Medical Assistant",
        id: 112,
      },{
        name: "Medical Secretary",
        id:113,
      },{
        name: "Meteorologist",
        id: 114,
      },{
        name: "Microsoft Office",
        id: 115,
      },{
        name: "Middleware and integration software",
        id: 116,
      },{
        name: "Mobile development",
        id: 117,
      },{
        name: "Museum Curator",
        id: 118,
      },{
        name: "Naturopathic Physician",
        id: 119,
      },{
        name: "Negotiation",
        id: 120,
      },{
        name: "Network and information security",
        id: 121,
      },{
        name: "Newsletters",
        id: 122,
      },{
        name: "Nonverbal communication",
        id: 123,
      },{
        name: "Nursing",
        id: 124,
      },{
        name: "Nursing Assistant",
        id: 125,
      },{
        name: "Occupational Therapist",
        id: 126,
      },{
        name: "Occupational Therapy Assistant",
        id: 127,
      },{
        name: "Office Assistant",
        id: 128,
      },{
        name: "Office Manager",
        id: 129,
      },{
        name: "Online marketing",
        id: 130,
      },{
        name: "Optician",
        id: 131,
      },{
        name: "Painter",
        id: 132,
      },{
        name: "Paralegal / Legal Assistant",
        id: 133,
      },{
        name: "Personal Assistant",
        id: 134,
      },{
        name: "Personal Trainer",
        id: 135,
      },{
        name: "Pharmaceutical Sales",
        id: 136,
      },{
        name: "Pharmacist",
        id: 137,
      },{
        name: "Pharmacy Technician",
        id: 138,
      },{
        name: "Phlebotomist",
        id: 139,
      },{
        name: "Photography",
        id: 140,
      },{
        name: "Physical Therapist",
        id: 141,
      },{
        name: "Physical Therapy Assistant",
        id: 142,
      },{
        name: "Physician",
        id: 143,
      },{
        name: "Physician Assistant",
        id: 144,
      },{
        name: "Pilot",
        id: 145,
      },{
        name: "Pipefitter",
        id: 146,
      },{
        name: "Plumber",
        id: 147,
      },{
        name: "Policy Analyst",
        id: 148,
      },{
        name: "Presentation",
        id: 149,
      },{
        name: "Problem-solving",
        id: 150,
      },{
        name: "Product Manager",
        id: 151,
      },{
        name: "Project Implementation",
        id: 152,
      },{
        name: "Project management",
        id: 153,
      },{
        name: "Project Manager",
        id: 154,
      },{
        name: "Public / Non Profit Administrator",
        id: 155,
      },{
        name: "Public Health",
        id: 156,
      },{
        name: "Public Relations",
        id: 157,
      },{
        name: "Radiologic Technologist",
        id: 158,
      },{
        name: "Real Estate",
        id: 159,
      },{
        name: "Receptionist",
        id: 160,
      },{
        name: "Relationship management",
        id: 161,
      },{
        name: "Research",
        id: 162,
      },{
        name: "Research Assistant",
        id: 163,
      },{
        name: "Respiratory Therapist",
        id: 164,
      },{
        name: "Restaurant and Food Service",
        id: 165,
      },{
        name: "Restaurant Host / Hostess",
        id: 166,
      },{
        name: "Retail",
        id: 167,
      },{
        name: "Sales",
        id: 168,
      },{
        name: "Sales Associate",
        id: 169,
      },{
        name: "School Psychologist",
        id: 170,
      },{
        name: "Scrum Master",
        id: 171,
      },{
        name: "Search Engine Optimization (SEO)",
        id: 172,
      },{
        name: "Secretarial",
        id: 173,
      },{
        name: "Server",
        id: 174,
      },{
        name: "Social Media",
        id: 175,
      },{
        name: "Social Work",
        id: 176,
      },{
        name: "Software Developer",
        id: 177,
      },{
        name: "Software Engineer",
        id: 178,
      },{
        name: "Software engineering",
        id: 179,
      },{
        name: "Software management",
        id: 180,
      },{
        name: "Software Quality Assurance (QA) Engineer",
        id: 181,
      },{
        name: "Software Sales Representative",
        id: 182,
      },{
        name: "Speech Pathologist",
        id: 183,
      },{
        name: "Storage systems and management",
        id: 184,
      },{
        name: "Strategic planning",
        id: 185,
      },{
        name: "Surveyor",
        id: 186,
      },{
        name: "Teaching",
        id: 187,
      },{
        name: "Tech Skills Listed by Job",
        id: 188,
      },{
        name: "Tech support",
        id: 189,
      },{
        name: "Technical Support Engineer",
        id: 190,
      },{
        name: "Telecommunications Equipment Installer",
        id: 191,
      },{
        name: "Television / Film Producer",
        id: 192,
      },{
        name: "Training Coordinator",
        id: 193,
      },{
        name: "Travel Agent / Coordinator",
        id: 194,
      },{
        name: "Truck Driver",
        id: 195,
      },{
        name: "UI/UX",
        id: 196,
      },{
        name: "Ultrasound Technician",
        id: 197,
      },{
        name: "Underwriter",
        id: 198,
      },{
        name: "User interface design",
        id: 199,
      },{
        name: "Veterinary Technician",
        id: 200,
      },{
        name: "Waiter / Waitress",
        id: 201,
      },{
        name: "Web architecture and development framework",
        id: 202,
      },{
        name: "Web Design",
        id: 203,
      },{
        name: "Wedding / Special Events Planner",
        id: 204,
      },{
        name: "Welder",
        id: 205,
      },{
        name: "Writing",
        id: 206,
      }]
  },
]


const items_target_industries = [
  {  
    name: "Target Industries",
    id: 0,
    children: [{
        name: "Accounting / Finance / Audit",
        id: 1,
      },{
        name: "Advertising / PR / MR / Events",
        id: 2,
      },{
        name: "Agriculture / Dairy",
        id: 3,
      },{
        name: "Animation",
        id: 4,
      },{
        name: "Architecture / Interior Design",
        id: 5,
      },{
        name: "Auto / Auto Ancillary",
        id: 6,
      },{
        name: "Aviation / Aerospace Firm",
        id: 7,
      },{
        name: "Banking / Financial Services / Broking",
        id: 8,
      },{
        name: "BPO / ITES",
        id: 9,
      },{
        name: "Brewery / Distillery",
        id: 10,
      },{
        name: "Ceramics / Sanitary ware",
        id: 11,
      },{
        name: "Chemicals / Petrochemical / Plastic / Rubber",
        id: 13,
      },{
        name: "Construction / Engineering / Cement / Metals",
        id: 14,
      },{
        name: "Consulting",
        id: 15,
      },{
        name: "Consumer Durables",
        id: 16,
      },{
        name: "Courier / Transportation / Freight",
        id: 17,
      },{
        name: "Defence / Government",
        id: 18,
      },{
        name: "Education / Teaching / Training",
        id: 19,
      },{
        name: "Electricals / Switchgears",
        id: 20,
      },{
        name: "Export / Import",
        id: 21,
      },{
        name: "Facility Management",
        id: 22,
      },{
        name: "Fertilizers / Pesticides",
        id: 23,
      },{
        name: "FMCG / Foods / Beverage",
        id: 24,
      },{
        name: "Food Processing",
        id: 25,
      },{
        name: "Gems & Jewellery",
        id: 26,
      },{
        name: "Glass",
        id: 27,
      },{
        name: "Healthcare / Medical / Hospital",
        id: 28,
      },{
        name: "Heating Ventilation Air Conditioning",
        id: 29,
      },{
        name: "Hotels / Restaurants / Airlines",
        id: 30,
      },{
        name: "Industrial Products / Heavy Machinery",
        id: 31,
      },{
        name: "Infrastructure / Oil & Gas / Power / Energy",
        id: 32,
      },{
        name: "Insurance",
        id: 33,
      },{
        name: "Internet / Online / eCommerce",
        id: 34,
      },{
        name: "IT",
        id: 35,
      },{
        name: "IT-Software / Software Services",
        id: 36,
      },{
        name: "IT-Hardware & Networking",
        id: 37,
      },{
        name: "KPO / Research / Analytics",
        id: 38,
      },{
        name: "Legal",
        id: 39,
      },{
        name: "Logistics / SCM / Freight / Shipping",
        id: 40,
      },{
        name: "Manufacturing",
        id: 41,
      },{
        name: "Media / Dotcom / Entertainment",
        id: 42,
      },{
        name: "Medical / Healthcare / Hospital",
        id: 43,
      },{
        name: "Mining / Steel / Shipping",
        id: 44,
      },{
        name: "NGO / Social Service",
        id: 45,
      },{
        name: "Oil and Gas / Power / Infrastructure / Energy",
        id: 46,
      },{
        name: "Office Equipment / Automation",
        id: 47,
      },{
        name: "Paper",
        id: 48,
      },{
        name: "Pharma / Biotech / Clinical Research",
        id: 49,
      },{
        name: "Printing / Packaging",
        id: 50,
      },{
        name: "Publishing",
        id: 51,
      },{
        name: "Real Estate / Property",
        id: 52,
      },{
        name: "Recruitment / Staffing",
        id: 53,
      },{
        name: "Retail",
        id: 54,
      },{
        name: "Security / Law Enforcement",
        id: 55,
      },{
        name: "Semiconductors / Electronics",
        id: 56,
      },{
        name: "Shipping / Marine",
        id: 57,
      },{
        name: "Steel",
        id: 58,
      },{
        name: "Strategy / Management Consulting Firms",
        id: 59,
      },{
        name: "Telecom / ISP",
        id: 60,
      },{
        name: "Textile / Garments / Accessories / Fashion",
        id: 61,
      },{
        name: "Travel / Hospitality",
        id: 62,
      },{
        name: "Tyres",
        id: 63,
      },{
        name: "Water Treatment / Waste Management",
        id: 64,
      },{
        name: "Wellness / Fitness / Sports",
        id: 65,
      }]
  },
]

const items_current_industries = [
  {  
    name: "Current Industry",
    id: 0,
    children: [{
        name: "Accounting / Finance / Audit",
        id: 1,
      },{
        name: "Advertising / PR / MR / Events",
        id: 2,
      },{
        name: "Agriculture / Dairy",
        id: 3,
      },{
        name: "Animation",
        id: 4,
      },{
        name: "Architecture / Interior Design",
        id: 5,
      },{
        name: "Auto / Auto Ancillary",
        id: 6,
      },{
        name: "Aviation / Aerospace Firm",
        id: 7,
      },{
        name: "Banking / Financial Services / Broking",
        id: 8,
      },{
        name: "BPO / ITES",
        id: 9,
      },{
        name: "Brewery / Distillery",
        id: 10,
      },{
        name: "Ceramics / Sanitary ware",
        id: 11,
      },{
        name: "Chemicals / Petrochemical / Plastic / Rubber",
        id: 13,
      },{
        name: "Construction / Engineering / Cement / Metals",
        id: 14,
      },{
        name: "Consulting",
        id: 15,
      },{
        name: "Consumer Durables",
        id: 16,
      },{
        name: "Courier / Transportation / Freight",
        id: 17,
      },{
        name: "Defence / Government",
        id: 18,
      },{
        name: "Education / Teaching / Training",
        id: 19,
      },{
        name: "Electricals / Switchgears",
        id: 20,
      },{
        name: "Export / Import",
        id: 21,
      },{
        name: "Facility Management",
        id: 22,
      },{
        name: "Fertilizers / Pesticides",
        id: 23,
      },{
        name: "FMCG / Foods / Beverage",
        id: 24,
      },{
        name: "Food Processing",
        id: 25,
      },{
        name: "Gems & Jewellery",
        id: 26,
      },{
        name: "Glass",
        id: 27,
      },{
        name: "Healthcare / Medical / Hospital",
        id: 28,
      },{
        name: "Heating Ventilation Air Conditioning",
        id: 29,
      },{
        name: "Hotels / Restaurants / Airlines",
        id: 30,
      },{
        name: "Industrial Products / Heavy Machinery",
        id: 31,
      },{
        name: "Infrastructure / Oil & Gas / Power / Energy",
        id: 32,
      },{
        name: "Insurance",
        id: 33,
      },{
        name: "Internet / Online / eCommerce",
        id: 34,
      },{
        name: "IT",
        id: 35,
      },{
        name: "IT-Software / Software Services",
        id: 36,
      },{
        name: "IT-Hardware & Networking",
        id: 37,
      },{
        name: "KPO / Research / Analytics",
        id: 38,
      },{
        name: "Legal",
        id: 39,
      },{
        name: "Logistics / SCM / Freight / Shipping",
        id: 40,
      },{
        name: "Manufacturing",
        id: 41,
      },{
        name: "Media / Dotcom / Entertainment",
        id: 42,
      },{
        name: "Medical / Healthcare / Hospital",
        id: 43,
      },{
        name: "Mining / Steel / Shipping",
        id: 44,
      },{
        name: "NGO / Social Service",
        id: 45,
      },{
        name: "Oil and Gas / Power / Infrastructure / Energy",
        id: 46,
      },{
        name: "Office Equipment / Automation",
        id: 47,
      },{
        name: "Paper",
        id: 48,
      },{
        name: "Pharma / Biotech / Clinical Research",
        id: 49,
      },{
        name: "Printing / Packaging",
        id: 50,
      },{
        name: "Publishing",
        id: 51,
      },{
        name: "Real Estate / Property",
        id: 52,
      },{
        name: "Recruitment / Staffing",
        id: 53,
      },{
        name: "Retail",
        id: 54,
      },{
        name: "Security / Law Enforcement",
        id: 55,
      },{
        name: "Semiconductors / Electronics",
        id: 56,
      },{
        name: "Shipping / Marine",
        id: 57,
      },{
        name: "Steel",
        id: 58,
      },{
        name: "Strategy / Management Consulting Firms",
        id: 59,
      },{
        name: "Telecom / ISP",
        id: 60,
      },{
        name: "Textile / Garments / Accessories / Fashion",
        id: 61,
      },{
        name: "Travel / Hospitality",
        id: 62,
      },{
        name: "Tyres",
        id: 63,
      },{
        name: "Water Treatment / Waste Management",
        id: 64,
      },{
        name: "Wellness / Fitness / Sports",
        id: 65,
      }]
  },
]


const items_target_companies = [
  {  
    name: "Target Industries",
    id: 0,
    children: [{
        name: "A. T. Kearney",
        id: 1,
      },{
        name: "Accenture",
        id: 2,
      },{
        name: "Amazon",
        id: 3,
      },{
        name: "Avendus",
        id: 4,
      },{
        name: "Axis Bank",
        id: 5,
      },{
        name: "Bharti Axa",
        id: 6,
      },{
        name: "Bloomberg Quint",
        id: 7,
      },{
        name: "Capgemini",
        id: 8,
      },{
        name: "Deloitte",
        id: 9,
      },{
        name: "DXC Technology",
        id: 10,
      },{
        name: "Exide Life Insurance",
        id: 11,
      },{
        name: "EY",
        id: 12,
      },{
        name: "Facebook",
        id: 13,
      },{
        name: "Flipkart",
        id: 14,
      },{
        name: "Godrej",
        id: 15,
      },{
        name: "Google",
        id: 16,
      },{
        name: "Hampton",
        id: 17,
      },{
        name: "HDFC Bank",
        id: 18,
      },{
        name: "HP",
        id: 19,
      },{
        name: "HSBC",
        id: 20,
      },{
        name: "ICICI Bank",
        id: 21,
      },{
        name: "ICICI Securities",
        id: 22,
      },{
        name: "IndusInd Bank",
        id: 23,
      },{
        name: "Infosys",
        id: 24,
      },{
        name: "Kotak Mahindra Bank",
        id: 25,
      },{
        name: "KPMG",
        id: 26,
      },{
        name: "Mastercard",
        id: 27,
      },{
        name: "PWC",
        id: 28,
      },{
        name: "RBL Bank",
        id: 29,
      },{
        name: "ThoughtWorks",
        id: 30,
      },{
        name: "Trafigura",
        id: 31,
      },{
        name: "Unilever",
        id: 32,
      },{
        name: "Visa",
        id: 33,
      },{
        name: "Which",
        id: 34,
      },{
        name: "Wipro",
        id: 35,
      },{
        name: "Wyatt",
        id: 36,
      },{
        name: "Yes Bank",
        id: 37,
      }]
  },
]


const items_current_companies = [
  {  
    name: "Your current or Last company",
    id: 0,
    children: [{
        name: "A. T. Kearney",
        id: 1,
      },{
        name: "Accenture",
        id: 2,
      },{
        name: "Amazon",
        id: 3,
      },{
        name: "Avendus",
        id: 4,
      },{
        name: "Axis Bank",
        id: 5,
      },{
        name: "Bharti Axa",
        id: 6,
      },{
        name: "Bloomberg Quint",
        id: 7,
      },{
        name: "Capgemini",
        id: 8,
      },{
        name: "Deloitte",
        id: 9,
      },{
        name: "DXC Technology",
        id: 10,
      },{
        name: "Exide Life Insurance",
        id: 11,
      },{
        name: "EY",
        id: 12,
      },{
        name: "Facebook",
        id: 13,
      },{
        name: "Flipkart",
        id: 14,
      },{
        name: "Godrej",
        id: 15,
      },{
        name: "Google",
        id: 16,
      },{
        name: "Hampton",
        id: 17,
      },{
        name: "HDFC Bank",
        id: 18,
      },{
        name: "HP",
        id: 19,
      },{
        name: "HSBC",
        id: 20,
      },{
        name: "ICICI Bank",
        id: 21,
      },{
        name: "ICICI Securities",
        id: 22,
      },{
        name: "IndusInd Bank",
        id: 23,
      },{
        name: "Infosys",
        id: 24,
      },{
        name: "Kotak Mahindra Bank",
        id: 25,
      },{
        name: "KPMG",
        id: 26,
      },{
        name: "Mastercard",
        id: 27,
      },{
        name: "PWC",
        id: 28,
      },{
        name: "RBL Bank",
        id: 29,
      },{
        name: "ThoughtWorks",
        id: 30,
      },{
        name: "Trafigura",
        id: 31,
      },{
        name: "Unilever",
        id: 32,
      },{
        name: "Visa",
        id: 33,
      },{
        name: "Which",
        id: 34,
      },{
        name: "Wipro",
        id: 35,
      },{
        name: "Wyatt",
        id: 36,
      },{
        name: "Yes Bank",
        id: 37,
      }]
  },
]



const items_current_functional_areas = [
  {  
    name: "Current Functional Areas",
    id: 0,
    children: [{
        name: "Accounting / Taxation / Audit",
        id: 1,
      },{
        name: "Administration",
        id: 2,
      },{
        name: "Analytics & Business Intelligence",
        id: 3,
      },{
        name: "Banking / Financial Services",
        id: 4,
      },{
        name: "Content Writer/ Editors",
        id: 5,
      },{
        name: "Corporate Planning / Consulting / Strategy",
        id: 6,
      },{
        name: "Design",
        id: 7,
      },{
        name: "Education / Language Specialist",
        id: 8,
      },{
        name: "Entrepreneur / Businessman / Outside Management Consultant",
        id: 9,
      },{
        name: "Executive Assistant/Personal Secretary",
        id: 10,
      },{
        name: "Export / Import / Merchandising",
        id: 11,
      },{
        name: "Hotels / Restaurant Management",
        id: 12,
      },{
        name: "HR / IR",
        id: 13,
      },{
        name: "Instructional Designer",
        id: 14,
      },{
        name: "Insurance",
        id: 15,
      },{
        name: "IT",
        id: 16,
      },{
        name: "ITeS / BPO / Customer Service",
        id: 17,
      },{
        name: "KPO / Research",
        id: 18,
      },{
        name: "Legal / Law / Company Secretary",
        id: 19,
      },{
        name: "Marketing / Advertising / Public Relation",
        id: 20,
      },{
        name: "Media / Entertainment",
        id: 21,
      },{
        name: "Pharma / Biotech / Healthcare / Medical / R&D",
        id: 22,
      },{
        name: "Production / Maintenance / Quality Assurance",
        id: 23,
      },{
        name: "Purchase / Supply Chain / Logistics",
        id: 24,
      },{
        name: "Research & Development",
        id: 25,
      },{
        name: "Sales / Business Development / Client Servicing",
        id: 26,
      },{
        name: "Top Management",
        id: 27,
      },{
        name: "Training & Development",
        id: 28,
      },{
        name: "Travel / Hospitality",
        id: 29,
      },{
        name: "Visual Merchandising",
        id: 30,
      },{
        name: "Other",
        id: 31,
      }]
  },
]


class AdviseeEditProfessionalDetails extends Component {
  constructor(props) {
    state = { selectedTargetJobRoles: [],
      selectedCurrentFunctioanlAreas: [],
      selectedTargetFunctionalAreas: [],
      selectedTargetIndustries: [],
      selectedCurrentIndustries: [],
      selectedAreasOfExpertise: [],
      selectedTargetCompanies: [],
      selectedCurrentCompany: [],
      linkedinprofile: '',  }
    super(props);  
  }


  onTargetJobRolesChanged = (selectedTargetJobRoles) => {
    if(selectedTargetJobRoles.length > 5){
      return;
    }
    this.setState({ selectedTargetJobRoles });
  }

  onSelectedCurrChange = (selectedCurrentFunctioanlAreas) => {
    if(selectedCurrentFunctioanlAreas.length > 5){
      return;
    }
    this.setState({ selectedCurrentFunctioanlAreas });
  }

  onSelectedTargetFunctionalAreas = (selectedTargetFunctionalAreas) => {
    if(selectedTargetFunctionalAreas.length > 5){
      return;
    }
    this.setState({ selectedTargetFunctionalAreas });
  }

  onSelectedTargetIndustries = (selectedTargetIndustries) => {
    if(selectedTargetIndustries.length > 5){
      return;
    }
    this.setState({ selectedTargetIndustries });
  }

  onSelectedCurrentIndustries = (selectedCurrentIndustries) => {
    this.setState({ selectedCurrentIndustries });
  }

  onSelectedAreasOfExpertise = (selectedAreasOfExpertise) => {
    if(selectedAreasOfExpertise.length > 5){
      return;
    }
    this.setState({ selectedAreasOfExpertise });
  }

  onSelectedTargetCompanies = (selectedTargetCompanies) => {
    if(selectedTargetCompanies.length > 5){
      return;
    }
    this.setState({ selectedTargetCompanies });
  }

  onSelectedCurrentCompany = (selectedCurrentCompany) => {
    this.setState({ selectedCurrentCompany });
  }

  state = {curr_job_role: ''}
  updateCurrJobRole = (curr_job_role) => {
     this.setState({ curr_job_role: curr_job_role })
  }


  renderHeader = () => {
    return(
        <Header
          backgroundColor="#FF6D00"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'Edit Professional Details' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
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
                <Picker.Item label = "Internship" value = "Internship" />
                <Picker.Item label = "Associate (Associate consultant, Junior business analyst, Credit analyst, Correspondent)" value = "Associate" />
                <Picker.Item label = "Entry level (Developer, Consultant, Business analyst, Senior Correspondent)" value = "Entry_Level" />
                <Picker.Item label = "Mid level (Manager, Team lead, Senior consultant, Senior business analyst)" value = "Mid_Level" />
                <Picker.Item label = "Senior level (Senior manager, Associate director, Head of department, etc.)" value = "Senior_Level" />
                <Picker.Item label = "Director (Director, Executive director, Head of department, AVP, etc.)" value = "Director" />
                <Picker.Item label = "Executive (CXO, President, VP, Partner, Founder, etc.)" value = "Executive" />
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
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_current_industries} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              single = {true}
              hideConfirm = {true}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              uniqueKey='id'
              subKey='children'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedCurrentIndustries}
              selectedItems={this.state.selectedCurrentIndustries}/>
              </View>


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


              <Text style={styles.heading}> Current Company </Text>
              <View style={{paddingLeft:15, paddingRight:20}}>
              <SectionedMultiSelect
              items={items_current_companies} 
              styles={{
                button: {
                  backgroundColor: 'orange'
                }
              }}
              colors={{
                selectToggleTextColor: 'gray'
              }}
              single = {true}
              hideConfirm = {true}
              uniqueKey='id'
              subKey='children'
              searchPlaceholderText='Search'
              showDropDowns={false}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedCurrentCompany}
              selectedItems={this.state.selectedCurrentCompany}/>
              </View>


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
    textInput: {
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(0,0,0)',
    },
    customBtnBG: {
        backgroundColor: "#FF9800",
        paddingHorizontal: 100,
        paddingVertical: 15,
        margin: 10,
        borderRadius: 5
    },
    customBtnText: {
        fontSize: 18,
        alignSelf: 'center',
        color: "#fff",
    },
})

export default AdviseeEditProfessionalDetails