import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import {WhiteSpace, WingBlank } from '@ant-design/react-native';
import { Button } from 'react-native-elements';
import StepIndicatorBar from './StepIndicatorBar';


const pic = require('../../assets/artboard-5.png')


class EnterPasswordScreen extends Component{

    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };


    render(){
        return(
            <View style = {styles.container}>
                <StepIndicatorBar position = {4}/>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.imageStyle} source = {pic}/>
                </View>

                <TextField
                containerStyle={styles.inputStyle}
                label="Set your password"
                />
                <View style={styles.textcontainer}>
                    <Text style={{alignItems:'center' ,marginTop:10}}>or</Text>
                </View>
                <TextField
                containerStyle={styles.inputStyle}
                label="Set your passcode"
                />

<Button title='Next' titleStyle={{fontSize:20}}buttonStyle={styles.buttonStyle} 
            onPress = {()=>this.props.navigation.navigate('Tabs')}/>
            
            </View>
        );}

}

export default withNavigation(EnterPasswordScreen);

const styles = StyleSheet.create({
    
    buttonStyle: {
        backgroundColor: "#416ce1",
        borderColor: "#416ce1",
        margin:20
      
    },
    
    
    dropdownContainer: {
        marginLeft:20,
        marginRight:20
    },

    imageStyle: {
      
      flex:1,
      resizeMode:'contain',
      justifyContent:'flex-start',
      width:null,
      height:null,
      
     
    },

    container: {
        flex:1,
        
    }, 
    textcontainer: {
        flex:1,
        alignItems:'center'
    }, 

    row: {
        flex:1,
        flexDirection:'row',
        margin:0,
    },
    inputWrap: {

        flex:1,
    
        height:65,

    },
    test: {
        
        margin:0,
        padding:0,
    },
    inputStyle: {
        marginRight:20,
        padding:0,
        marginLeft:20

    },
    
    imageContainer: {
        height: 330,
        alignContent: 'center',
        
    },
  
  });
