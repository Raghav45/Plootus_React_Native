import React, {Component} from 'react';
import {WhiteSpace, WingBlank } from '@ant-design/react-native';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Button } from 'react-native-elements';


const login_btn = (props)=>{

    const loginBtnStyles = {
        
     };

    return(
        <WingBlank>
            <Button title='Log In' titleStyle={{fontSize:20,fontFamily:'sans-serif'}}
            onPress = {()=>props.navigation.navigate('Login')}/>
                
            <WhiteSpace />
            
        </WingBlank>
    );
};

export default withNavigation(login_btn);