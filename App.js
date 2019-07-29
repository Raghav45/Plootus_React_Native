/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import LogInScreen from './Components/LogInScreen/LogInScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import PasscodeScreen from "./Components/PasscodeScreen/PasscodeScreen";
import NetWorthScreen from "./Components/NetWorthScreen/NetWorthScreen";
import RetirementPlanner from "./Components/RetirementPlannerScreen/RetirementPlanner";
import LinkAccounts from "./Components/LinkAccountsScreen/LinkAccounts";
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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const tabs = createBottomTabNavigator({

  Home: HomeScreen,
  "Retirement Planner": RetirementPlanner,
  "Net Worth":NetWorthScreen,
  Assets:AssetsAllocationScreen,
  "Link Account":LinkAccounts, 
  "Income and Expenses":IncomeAndExpensesScreen,
  

});

const AppNavigator = createAppContainer(createStackNavigator({
  Onboard: OnboardingScreen,
  Login:LogInScreen, 
  Passcode:PasscodeScreen,
  Tabs: tabs,
  EnterName: EnterNameScreen,
  Zipcode: EnterZipcodeScreen,
  Strategy: EnterStrategyScreen,
  Employer: EnterEmployerScreen,
  Password: EnterPasswordScreen,
  Passcode: passcode,
  Proposed401KFundScreen:Proposed401KFundScreen,
  Plan529Screen:Plan529Screen,
  RealEstateScreen:RealEstateScreen,
  BankAccountScreen:BankAccountScreen,
  RetirementPlansScreen:RetirementPlansScreen,
  OtherAssets:OtherAssets,
  AssetsAllocationScreen:AssetsAllocationScreen,
  PlanScreen:PlanScreen,
  RspScreen:RspScreen,

},
{

tabBarOptions: {
  activeTintColor:"#416CE1",
  inactiveTintColor:"grey"
}
}

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
