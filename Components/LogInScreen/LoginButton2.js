import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';


const login_btn = (props)=>{

    // const loginBtnStyles = {
    //     backgroundColor:
    // };

    return(
        <WingBlank>
            <Button type="primary"
            onPress={() => {
              
                    props.navigation.navigate('BeginnerTabs');
               
            }}>
                Log In
            </Button>
            <WhiteSpace />
        </WingBlank>
    );
};

export default withNavigation(login_btn);