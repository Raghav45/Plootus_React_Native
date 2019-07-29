import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const LoginWithPasscodeButton = (props)=>{

    // const loginBtnStyles = {
    //     backgroundColor:
    // };
    
    return(
        <WingBlank>
            <Button type="primary"
            onPress={() => props.navigation.navigate('Passcode')}>
                Log In With Passcode
            </Button>
            <WhiteSpace />
        </WingBlank>
    );
};

export default withNavigation(LoginWithPasscodeButton);