import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text,Image,TouchableHighlight} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Searchbar } from 'react-native-paper';


class LinkAccounts extends Component{

    static navigationOptions = {

        headerTitle:'Link Accounts',

        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        },
        
    tabBarIcon: ({tintColor}) => (
        
        <Image
            source={require("../../assets/linkAccountsIcon.png")}
            style={{ width: 37, height: 37, tintColor:tintColor}}
          />
    ),

     };

    render(){
        return (
            <View style = {{alignItems:'center'}}>
                <Searchbar style={{width:300,marginTop:20}}
                    placeholder="Search here"/>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('WellsFargoSampleLogin')}} style={{marginTop:20,borderColor:'#c7c5c1',
                borderWidth:1,borderRadius:5}}>
                    <Image source={require("../../assets/wellsFargoIcon.png")} style={styles.imageStyle}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('WellsFargoSampleLogin')}} style={{marginTop:20,borderColor:'#c7c5c1',
                borderWidth:1,borderRadius:5}}>
                    <Image source={require("../../assets/BankOfAmericaIcon.png")} style={styles.imageStyle}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('WellsFargoSampleLogin')}} style={{marginTop:20,borderColor:'#c7c5c1',
                borderWidth:1,borderRadius:5}}>
                    <Image source={require("../../assets/chaseIcon.png")} style={styles.imageStyle}/>
                </TouchableHighlight>
                
                
            </View>
         );
    }



}

const styles = StyleSheet.create({

    imageStyle:{
        width:300,
        height:73,
        resizeMode:'stretch',
        
        
    },



});

export default LinkAccounts;


