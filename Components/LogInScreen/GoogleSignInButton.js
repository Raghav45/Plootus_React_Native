import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import {Image,TouchableOpacity,StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Google } from 'expo';


class GoogleSignInButton extends Component{

  buttonStyle={
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation:5,
    backgroundColor:"#2E9298"
  }

render(){
return(

<TouchableOpacity style={this.buttonStyle} onPress={async() => {
    const config = {
        //expoClientId: `<YOUR_WEB_CLIENT_ID>`,
        //iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `380327003388-ch95s9r833e66a9ond5f8tua6jqafuf0.apps.googleusercontent.com`,
        
      };
      const { type, accessToken } = await Google.logInAsync(config);
      
      if (type === 'success') {
        this.props.navigation.navigate('Tabs');
      }
}
}>

<Image source={require('../../assets/GoogleIcon.png')} style={{width:192,height:38}}/>

</TouchableOpacity>

);



}
}

export default withNavigation(GoogleSignInButton);