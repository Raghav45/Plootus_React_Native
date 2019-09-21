import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

const logoPNG = require('./../assets/logo.png');

const logo = (props)=>{

    imageStyle = {
        height: 68,
        width: 49,
        
        marginLeft: 40
    };

    textStyle = {
        color: "#094392",
        fontWeight: 'bold',
        fontSize: 28,
        marginTop:'5%',
        marginLeft: '10%',
        marginBottom:'5%'
    };

    return(
        <View>
        <Image
            source={logoPNG}
            style={imageStyle}
        />

            <Text
                style={textStyle}
            >
                401K Simplified
            </Text>
        </View>

    );
};

export default logo;
