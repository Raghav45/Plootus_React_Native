/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react'
import {Image,TouchableOpacity,TouchableHighlight,View,StyleSheet,Text,Dimensions,ScrollView} from 'react-native';
import { SearchBar ,Card,Avatar,Icon,Overlay,Input,Button} from 'react-native-elements';
import {MaterialIcons,Feather} from '@expo/vector-icons'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import LogInScreen from './Components/LogInScreen/LogInScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import slidertest from './Components/HomeScreen/slidertest';
import BeginnerVersionScreen from './Components/BeginnerVersionScreen/BeginnerVersionScreen';
import PasscodeScreen from "./Components/PasscodeScreen/PasscodeScreen";
import NetWorthScreen from "./Components/NetWorthScreen/NetWorthScreen";
import RetirementPlanner from "./Components/RetirementPlannerScreen/RetirementPlanner";
import LinkAccounts from "./Components/LinkAccountsScreen/LinkAccounts";
import WellsFargoSampleLogin from "./Components/LinkAccountsScreen/WellsFargoSampleLogin";
import OnboardingScreen from './Components/OnboardingScreen';
import EnterNameScreen from './Components/SignupScreens/EnterNameScreen';
import EnterStrategyScreen from './Components/SignupScreens/EnterStrategyScreen';
import EnterZipcodeScreen from './Components/SignupScreens/EnterZipcodeScreen';
import EnterPasswordScreen from './Components/SignupScreens/EnterPasswordScreen';
import EnterEmployerScreen from './Components/SignupScreens/EnterEmployerScreen';
import passcode from './Components/PasscodeScreen/PasscodeScreen'
import AssetsAllocationScreen from './Components/AssetsScreens/AssetsAllocationScreen/AssetsAllocationScreen'
import BankAccountScreen from './Components/AssetsScreens/BankAccountScreen/BankAccountScreen';
import OtherAssets from './Components/AssetsScreens/OtherAssets/OtherAssets';
import Plan529Screen from './Components/AssetsScreens/Plan529Screen/Plan529Screen';
import PlanScreen from './Components/AssetsScreens/Proposed401KFundScreen/PlanScreen';
import Proposed401KFundScreen from './Components/AssetsScreens/Proposed401KFundScreen/Proposed401KFundScreen';
import RealEstateScreen from './Components/AssetsScreens/RealEstateScreen/RealEstateScreen';
import RetirementPlansScreen from './Components/AssetsScreens/RetirementPlansScreen/RetirementPlansScreen';
import RspScreen from './Components/AssetsScreens/Proposed401KFundScreen/RspScreen';
import IncomeAndExpensesScreen from './Components/IncomeAndExpensesScreen/IncomeAndExpensesScreen';
import MoreScreen from './Components/MoreScreen/MoreScreen';
import SettingsScreen from './Components/SettingsScreen/SettingsScreen'
import ProfileScreen from './Components/ProfileScreen/ProfileScreen'
import LiabilitiesScreen from './Components/LiabilitiesScreen/LiabilitiesScreen'

import EmployerSearchScreen from './Components/AssetsScreens/Proposed401KFundScreen/EmployerSearchScreen';




const secondTabRow = createBottomTabNavigator({
  "Proposed 401k":Proposed401KFundScreen,
  "Inc. & Exp.":IncomeAndExpensesScreen,
  "Net Worth":NetWorthScreen,
  "Liabilities": LiabilitiesScreen,
  "Settings":SettingsScreen

  },
  {
    tabBarOptions: {
      activeTintColor:"white",
      inactiveTintColor:"#274087",
      activeBackgroundColor:'#416CE1',
      inactiveBackgroundColor:'#416CE1',
      style:{
        height:67,
       
        borderTopColor:'#416CE1',
        borderWidth:1,
        borderColor:'#416CE1'
        
      },
      labelStyle:{
        fontSize:10,
        marginBottom:'8%'
      }
    }
  }
  );

  
  secondTabRow.navigationOptions = ({ navigation }) => {
    return{

      tabBarIcon: ({tintColor}) => (
        <Feather style={{paddingTop:'7%'}} name='more-horizontal' size={40} color={tintColor}/>
       )


    }
  
     
     
  };

  


const firstTabRow = createBottomTabNavigator({

  Home: {
    screen:HomeScreen,
    navigationOptions:{
      headerTitle:'Home',
      headerTitleStyle: {  
        flex:1,fontSize: 18,
        color: '#404a57'
       },
    } },
  Planner: RetirementPlanner,
  Assets:AssetsAllocationScreen,
  "Link Accounts":LinkAccounts,
  More:secondTabRow
  
},

{
  tabBarOptions: {
    activeTintColor:"white",
    inactiveTintColor:"#274087",
    activeBackgroundColor:'#416CE1',
    inactiveBackgroundColor:'#416CE1',
    style:{
      height:57

    },
    labelStyle:{
      marginBottom:'8%'
    }
  }
}
);

firstTabRow.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  console.log(routeName);
  // You can do whatever you like here to pick the title based on the route name
  if(routeName=='Home'){
    headerTitle='Welcome back, Raghav!'
  }
  else if(routeName==='More'){
    headerTitle = (navigation.state.routes[navigation.state.index]["routes"])[(navigation.state.routes[navigation.state.index]["index"])].routeName;
  }
  else{
    headerTitle = routeName;
  }
  return {
    headerTitle,
    headerStyle: {
      backgroundColor: '#416ce1',
      height: 60,
      elevation: 0,
      shadowOpacity: 0,
      
    },
    headerTitleStyle:{
      textAlign:'center',
      color:'white',
      flex:1
    },
    headerRight:(<View/>)
  ,
  headerLeft:(
    <View style={{flexDirection:'row',marginLeft:14}}>
        <TouchableOpacity>
        <Image
        source={require("./assets/NotificationBell.png")}Homescreen
        style={{ width: 30, height: 30}}/>
        </TouchableOpacity>
        
    </View>
   ),
   headerRight:(
    <View style={{flexDirection:'row',marginRight:11,borderRadius:42/2}}>
        <TouchableHighlight style={{borderRadius:42/2}} onPress={()=>(navigation.navigate('BeginnerTabs'))}>
        <Image
        source={require("./assets/beginnercircle.png")}
        style={{ width: 42, height: 42}}
      />
        </TouchableHighlight>
    </View>
   )
 
};
}


const beginnerTabRow = createBottomTabNavigator({

  'Beginner Home': {
    screen:BeginnerVersionScreen,
    navigationOptions:{
      
      headerTitleStyle: {  
        flex:1,fontSize: 18,
        color: '#404a57'
       },
    } },
 
  "Link Accounts":LinkAccounts,
  "Settings":SettingsScreen
  
},

{
  tabBarOptions: {
    activeTintColor:"white",
    inactiveTintColor:"#274087",
    activeBackgroundColor:'#416CE1',
    inactiveBackgroundColor:'#416CE1',
    style:{
      height:57

    },
    labelStyle:{
      marginBottom:'8%'
    }
  }
}
);

beginnerTabRow.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  console.log(routeName);
  // You can do whatever you like here to pick the title based on the route name
  if(routeName=='Beginner Home'){
    headerTitle='Welcome back, Raghav!'
  }
  
  else{
    headerTitle = routeName;
  }
  return {
    headerTitle,
    headerStyle: {
      backgroundColor: '#416ce1',
      height: 60,
      elevation: 0,
      shadowOpacity: 0,
      
    },
    headerTitleStyle:{
      textAlign:'center',
      color:'white',
      flex:1
    },
    headerRight:(<View/>)
  ,
  headerLeft:(
    <View style={{flexDirection:'row',marginLeft:14}}>
        <TouchableOpacity>
        <Image
        source={require("./assets/NotificationBell.png")}Homescreen
        style={{ width: 30, height: 30}}
      />
        </TouchableOpacity>
        
    </View>
   ),
   headerRight:(
    <View style={{flexDirection:'row',marginRight:11,borderRadius:42/2}}>
        <TouchableHighlight style={{borderRadius:42/2}} onPress={()=>(navigation.navigate('Tabs'))}>
        <Image
        source={require("./assets/procircle.png")}Homescreen
        style={{ width: 42, height: 42}}
      />
        </TouchableHighlight>
    </View>
   )
 
};
}

const AppNavigator = createAppContainer(createStackNavigator({
  Onboard: OnboardingScreen,
  BeginnerTabs:beginnerTabRow,
  Login:LogInScreen,
  Tabs: firstTabRow,

  AssetsAllocationScreen:AssetsAllocationScreen,

  SettingsScreen:SettingsScreen,

 
  NetWorthScreen:NetWorthScreen,

  RetirementPlanner:RetirementPlanner,

  
  RspScreen:RspScreen,
  EmployerSearchScreen:EmployerSearchScreen,
  
  

  Home:HomeScreen,
  
  
  Proposed401KFundScreen:Proposed401KFundScreen,
  



 
  
  slidertest:slidertest,
 
  IncomeAndExpensesScreen:IncomeAndExpensesScreen,
  
 

  
  
  

  
  Planscreen:PlanScreen,
  
  OtherAssets:OtherAssets,
 
  
  "Link Accounts":LinkAccounts,
  Login:LogInScreen,
  Passcode:PasscodeScreen,
  
  EnterName: EnterNameScreen,
  Zipcode: EnterZipcodeScreen,
  Strategy: EnterStrategyScreen,
  Employer: EnterEmployerScreen,
  Password: EnterPasswordScreen,
  Passcode: passcode,
  
  Plan529Screen:Plan529Screen,
  RealEstateScreen:RealEstateScreen,
  BankAccountScreen:BankAccountScreen,
  RetirementPlansScreen:RetirementPlansScreen,
  
  
  
  
  WellsFargoSampleLogin:WellsFargoSampleLogin
},


));


export default class App extends Component{

  
render() {
  return(
  
    <AppNavigator/>
  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
