import React, {Component} from 'react';
import {Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import {View, Image,TouchableOpacity,StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import * as Facebook from 'expo-facebook';


class FacebookLoginButton extends Component{

buttonStyle={
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 1,  
  elevation:5,
  backgroundColor:"#2E9298",
  marginBottom:20
}

render(){
return(

<TouchableOpacity onPress={async() => {
    try {
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('505161726719599', {
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          this.props.navigation.navigate('Tabs');
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
}
}>

<View style = {this.buttonStyle}>
<Image source={require('../../assets/FacebookIcon.png')} style={{width:192,height:38}}/>
</View>
</TouchableOpacity>

);



}
}

export default withNavigation(FacebookLoginButton);