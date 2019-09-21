import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import {WhiteSpace, WingBlank } from '@ant-design/react-native';
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import StepIndicatorBar from './StepIndicatorBar';


const pic = require('../../assets/artboard-3.png')

class EnterStrategyScreen extends Component{

    


    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };

    render(){

        let data = [{

            value: 'Moderate',
        }, {
            value: 'Conservative',
        },{
            value: 'Growth',
        },{
            value: 'Super Growth',
        }];

        return(

            <View style = {styles.container}>
                <StepIndicatorBar position = {3}/>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.imageStyle} source = {pic}/>
                </View>

                <Dropdown
                label="What's your investment strategy?"
                data={data}
                containerStyle={styles.dropdownContainer}
                />
                
                <Button title='Next' titleStyle={{fontSize:20}}buttonStyle={styles.buttonStyle} 
            onPress = {()=>this.props.navigation.navigate('Password')}/>
            
            </View>
        );}

}

const styles = StyleSheet.create({
            
    buttonStyle: {
        backgroundColor: "#416ce1",
        borderColor: "#416ce1",
        margin:10,
        marginBottom:30
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
    firstStyle: {
        marginRight:20,
        padding:0,
        marginLeft:20
    },
    lastStyle: {
        marginRight:20,

    },
    imageContainer: {
        height: 370,
        alignContent: 'center',
        
    },
    
          });


export default withNavigation(EnterStrategyScreen);