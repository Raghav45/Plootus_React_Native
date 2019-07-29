import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text,Image} from 'react-native';
import {ProgressCircle} from "react-native-svg-charts";
import { List, Checkbox } from 'react-native-paper';

class Assets extends Component{

    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        },
        
    tabBarIcon: ({tintColor}) => (
        <Image
            source={require("../../assets/linkAccountsIcon.png")}
            style={{ width: 26, height: 26, tintColor:tintColor}}
          />
    ),

     };

    render(){
        return (
            <View>
                <Text>Link Account</Text>
                <Text>Link Account</Text>
                <Text>Link Account</Text>
                <Text>Link Account</Text>
                <Text>Link Account</Text>
            </View>
         );
    }



}

export default Assets;


