import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text,Image,TouchableHighlight} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Searchbar } from 'react-native-paper';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';

export default class WellsFargoSampleLogin extends Component{

render(){
return(

    <View style>
        <View style={{alignItems:'center'}}>
        <Image source={require("../../assets/wellsFargoIcon.png")} style={styles.imageStyle}/>
        </View>
        <TextField
                    label='Username'
                    animationDuration={200}
                    inputContainerStyle={styles.inputStyle}
                    />
        <TextField
                    label='Password'
                    animationDuration={200}
                    inputContainerStyle={styles.inputStyle}
                    />
        <Text/>
        <Text/>
        <WingBlank>
            <Button type="primary"
            >
                Log In
            </Button>
            <WhiteSpace />
        </WingBlank>


    </View>


);}



}

const styles = StyleSheet.create({

    imageStyle:{
        width:300,
        height:73,
        resizeMode:'stretch',
        marginTop:20
        
    },

    inputStyle:{
        padding:8,
        marginLeft: 20,
        marginRight: 20,
        marginTop:20,
       
      },



});