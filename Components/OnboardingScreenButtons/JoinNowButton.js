import React, {Component} from 'react';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';
import {StyleSheet,Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import { Button } from 'react-native-elements';

const join_now_btn = (props)=>{

    const joinNowBtnStyles = {
        backgroundColor: "#52da9c",
        borderColor: "#52da9c",
        
      
    };

    return(
            <WingBlank>
            <Button title='Join Now' titleStyle={{fontSize:20,fontFamily:'sans-serif'}}buttonStyle={joinNowBtnStyles} 
            onPress = {()=>props.navigation.navigate('EnterName')}/>
            <WhiteSpace/> 
            </WingBlank>
            
        
    );
};

export default withNavigation(join_now_btn);