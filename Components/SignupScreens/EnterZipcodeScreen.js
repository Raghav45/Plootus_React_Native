import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import {WhiteSpace, WingBlank } from '@ant-design/react-native';
import { Button } from 'react-native-elements';
import StepIndicatorBar from './StepIndicatorBar';


const pic = require('../../assets/artboard-2.png')

class EnterZipcodeScreen extends Component{


    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };
    


    render(){

        return(

            <View style = {styles.container}>
                <StepIndicatorBar position = {1}/>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.imageStyle} source = {pic}/>
                </View>
            
                    <View style = {styles.inputWrap}>
                    <TextField
                    containerStyle = {styles.fieldStyle}
                    label='Enter your Zip Code'
                    animationDuration={200}/>
                    </View>
            
                <WingBlank>
                <Button title='Next' titleStyle={{fontSize:20}}buttonStyle={styles.buttonStyle} 
            onPress = {()=>this.props.navigation.navigate('Employer')}/>
                </WingBlank>
                
            </View>


            
            
        );
    }
}

        const styles = StyleSheet.create({
            
            
            buttonStyle: {
                backgroundColor: "#416ce1",
                borderColor: "#416ce1",
                marginBottom:30
              
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
            fieldStyle: {
                marginRight:20,
                padding:0,
                marginLeft:20
            },
            
            imageContainer: {
                height: 390,
                alignContent: 'center',
               
            },
           
          });

export default withNavigation(EnterZipcodeScreen);






  




















