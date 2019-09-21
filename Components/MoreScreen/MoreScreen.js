import React, { Component } from 'react'
import { Image,Text, StyleSheet, ScrollView,View,TouchableHighlight,Dimensions} from 'react-native'

export default class MoreScreen extends Component{

    static navigationOptions = {
        headerTitle:'More',
        headerStyle: {
            backgroundColor: '#f8f8f8',
            height: 50,
            elevation: 0,
            shadowOpacity: 0
          },
         
          headerTitleStyle: {  
            flex:1,
            fontSize: 24,
            color: '#404a57',
            
           },

           tabBarIcon: ({tintColor}) => (
            <Image
                source={require("../../assets/moreIcon.png")}
                style={{ width: 30, height: 37, tintColor:tintColor}}
              />
           ),
    }

render(){
return(

<View>
<TouchableHighlight underlayColor='#d6d4d4' style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate("IncomeAndExpensesScreen")}}>
<View flexDirection='row'  style={{alignItems:'center'}}>
    <Image
      source={require("../../assets/incomeIcon.png")}
      style={styles.imageStyle}
      />
    <Text style = {styles.textStyle}>Income and Expenses</Text>
</View>
</TouchableHighlight>

<TouchableHighlight underlayColor='#d6d4d4' style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate("NetWorthScreen")}}>
<View flexDirection='row'  style={{alignItems:'center'}}>
    <Image
      source={require("../../assets/netWorthIcon.png")}
      style={styles.imageStyle}
      />
    <Text style = {styles.textStyle}>Net Worth</Text>
</View>
</TouchableHighlight>

<TouchableHighlight underlayColor='#d6d4d4' style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate("SettingsScreen")}}>
<View flexDirection='row'  style={{alignItems:'center'}}>
    <Image
      source={require("../../assets/settingsIcon.png")}
      style={styles.imageStyle}
      />
    <Text style = {styles.textStyle}>Settings</Text>
</View>
</TouchableHighlight>


</View>

);}

}

const styles = StyleSheet.create({

  buttonStyle:{
    height:80,
    paddingTop:13
  },

  textStyle:{
    fontSize:22,
    fontWeight:'500',
    color:'#2b2d38',
    marginLeft:10,
    },
  imageStyle:{
    width:50,
    height:50,
    marginLeft:10
  }
})