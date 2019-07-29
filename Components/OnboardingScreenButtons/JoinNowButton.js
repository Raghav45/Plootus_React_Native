import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import {StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const join_now_btn = (props)=>{

    const joinNowBtnStyles = {
        backgroundColor: "#52da9c",
        borderColor: "#52da9c"
    };

    return(
        <WingBlank>
            <Button style={joinNowBtnStyles} type="primary"
            onPress = {()=>props.navigation.navigate('EnterName')}>Join Now</Button>
            <WhiteSpace />
        </WingBlank>
    );
};

export default withNavigation(join_now_btn);