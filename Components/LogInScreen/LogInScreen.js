import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import LoginButton from './LoginButton2';
import LoginWithPasscodeButton from './LoginWithPasscodeButton'
import { SocialIcon } from 'react-native-elements'
import  GoogleSignInButton from './GoogleSignInButton';
import FacebookLoginButton from './FacebookLoginButton';

class login extends Component {

    constructor(props) {

        super(props);
        
    }

    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };

    textStyle = {
        color: "#5f6481",
        fontWeight: 'bold',
        fontSize: 28,
        padding: 12,
        paddingBottom: 20,
        padding:20

    };

    iconStyle={
      alignItems:"flex-start",
      paddingLeft:40,
      paddingTop:60
    };

    inputStyle={
      padding:8,
      marginLeft: 20,
      marginRight: 20,
      marginTop:20,
    };

    passwordStyle={
        padding:8,
        marginLeft: 20,
        marginRight: 20,
        marginTop:5,
        marginBottom: 50
    };

    forgotPasswordStyle={
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '30%',
        color: '#094392',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    };

    bottomTextStyle={
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginLeft: '22%',
        fontSize: 18,
        fontWeight: '400'
    };


    render() {
        return (
            
            <View>

                
                <Text
                    style={this.textStyle}
                >
                    Glad to see you!
                </Text>

                <LoginWithPasscodeButton/>
               
                
                <TextField
                    label='Email ID'
                    animationDuration={200}
                    inputContainerStyle={this.inputStyle}
                />

                <TextField
                    label='Password'
                    animationDuration={200}
                    inputContainerStyle={this.passwordStyle}
                />

                <LoginButton />

                <Text style={this.forgotPasswordStyle}>Forgot your password ?</Text>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#979797', height: 2, flex: 1, alignSelf: 'center', marginLeft: 40}} />
                        <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 14, color: '#72768c' }}>or</Text>
                        <View style={{backgroundColor: '#979797', height: 2, flex: 1, alignSelf: 'center', marginRight: 40}} />
                    </View>

                <Text/>

                <View style={{alignItems:'center'}}>
                    <GoogleSignInButton/>
                    <Text/>
                    <FacebookLoginButton/>
                    <Text/>
                    
                </View>

                <Text style={this.bottomTextStyle}>First time here ? <Text style={{color: '#34d86a', fontWeight: 'bold'}}>Join Now</Text></Text>

            </View>
        );
    }
}

export default login;