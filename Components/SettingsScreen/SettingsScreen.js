import React, { Component } from 'react'
import {Linking,Image,Text, StyleSheet, ScrollView,View,TouchableHighlight,Dimensions} from 'react-native'
import Dialog, {DialogButton, DialogContent,DialogTitle,DialogFooter} from 'react-native-popup-dialog';



export default class SettingsScreen extends Component{

    static navigationOptions = {
        headerTitle:'Settings',
        headerStyle: {
            backgroundColor: '#f8f8f8',
            height: 60,
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
                source={require("../../assets/settingsIcon.png")}
                style={{ width: 37, height: 37, tintColor:tintColor}}
              />
           ),
    }

    constructor(props){
      super(props);
      this.state = 
      { visible: false,
       
     
     
     
         };
    }

  
    

//d3dded
render(){
return(

<View style={{flex:1}}>
<View style={{flex:1}}>
<TouchableHighlight underlayColor= '#bac5d4' style={[this.styles.buttonStyle,{}]} onPress={()=>{Linking.openURL('https://www.plootus.com/faq.html')}}><Text style={this.styles.textStyle}>FAQs</Text></TouchableHighlight>
<Dialog
    width={0.8}
    
    visible={this.state.visible}
    dialogTitle={<DialogTitle style={{backgroundColor:'white',borderBottomWidth:0}}title='Send Feedback'/>}
  >
  
    <DialogContent style={{height:60}}>
      <Text>Please send your queries to support@plootus.com and we will get back to you in 2 business days.</Text>
    </DialogContent>
    <DialogFooter style={{backgroundColor:'white',borderColor:'white'}}> 
    <DialogButton
          text="Ok"
          onPress={() => {this.setState({visible:false})}}background
        />
    </DialogFooter>

    
  </Dialog>
<TouchableHighlight underlayColor= '#bac5d4' style={[this.styles.buttonStyle,{backgroundColor:'#cfd1e3'}]} onPress={()=>{this.setState({visible:true})}}><Text style={this.styles.textStyle}>Send Feedback</Text></TouchableHighlight>
<TouchableHighlight underlayColor= '#bac5d4' style={this.styles.buttonStyle} onPress={()=>{Linking.openURL('https://www.plootus.com/privacy.html')}}><Text style={this.styles.textStyle}>Privacy Policy</Text></TouchableHighlight>
<TouchableHighlight underlayColor= '#bac5d4' style={[this.styles.buttonStyle,{backgroundColor:'#cfd1e3'}]} onPress={()=>{Linking.openURL('https://www.plootus.com/termAndCondition.html')}}><Text style={this.styles.textStyle}>Terms and Conditions</Text></TouchableHighlight>
<TouchableHighlight underlayColor= '#bac5d4' style={this.styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Onboard')}}><Text style={this.styles.textStyle}>Logout</Text></TouchableHighlight>





</View>


</View>

);}

styles = StyleSheet.create({
  buttonStyle:{
    height:'10%',
    alignItems:'flex-start',
    paddingLeft:'10%',
    
    justifyContent:'center',
    borderColor:'black',
    
    borderTopWidth:0
  },
  textStyle:{
    fontSize:20
  }
});



}