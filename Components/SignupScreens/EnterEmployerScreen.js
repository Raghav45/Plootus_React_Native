import React, {Component} from 'react';
import {View, Image,TextInput, ScrollView, StyleSheet,KeyboardAvoidingView, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import { Searchbar } from 'react-native-paper';
import StepIndicatorBar from './StepIndicatorBar';
import { Button } from 'react-native-elements';


const pic = require('../../assets/artboard-4.png')


class EnterEmployerScreen extends Component{

    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };

    render(){
        return(

            <KeyboardAvoidingView
             behavior="height">
                 <StepIndicatorBar position = {2}/>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.imageStyle} source = {pic}/>
                </View>
                <View>
                
                <Searchbar 
                style={styles.searchStyle}
                placeholder="Enter Current Employer"/>
                </View>

                <WingBlank>
                <Button title='Next' titleStyle={{fontSize:20}} buttonStyle={styles.buttonStyle}
            onPress = {()=>this.props.navigation.navigate('Strategy')}/>
                </WingBlank>
                
            
            </KeyboardAvoidingView>
        );}

}


const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: "#416ce1",
        borderColor: "#416ce1",
        
      
    },
    imageStyle: {
      
      flex:1,
      resizeMode:'contain',
      width:null,
      height:null,
      margin:0,
     
      
      padding:0
    },
    container: {
        flex:1,
        
    },
    imageContainer: {
        height:400,
        alignContent: 'center',
        marginLeft:10,
        marginRight:10,
        
        padding:0,
    },
    searchStyle: {
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        marginBottom:20
    }

});

export default withNavigation(EnterEmployerScreen);