import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,Dimensions} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { Icon } from 'react-native-elements';
const screen_width = Dimensions.get('window').width
export default class PlanScreen extends Component {
    componentDidMount(){
        this.props.navigation.setParams({ refreshScreen: this.refreshScreen });
    }
    refreshScreen = ()=>{
        alert("Refresh successfully")
        
    }
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'***Plan',
        headerStyle: {
            backgroundColor: '#f8f8f8',
            height: 60,
            elevation: 0,
            shadowOpacity: 0
          },
         
          headerTitleStyle: {  
            flex:1,fontSize: 18,
            color: '#404a57'
           },
           headerRight:(
            <TouchableOpacity onPress={()=>{const iconPress = navigation.getParam('refreshScreen');iconPress()}}>
                 <MaterialIcons   
                 name='refresh'
                 size={30}
                 style={{marginRight:10}}
                 />
            </TouchableOpacity>
            )
        };
      }
    render() {
        return (
            <View style = {styles.container}>
               <View style = {[styles.subContainer,{backgroundColor:'#416ce1'}]}>
                    <MaterialIcons   
                    name='monetization-on'
                    size={30}
                    style={{marginRight:10,color:'white'}}
                    />
                    <TouchableOpacity>
                        <Text style ={{color:'white',textDecorationLine: 'underline'}}>Access retirement account to change investment option</Text>
                    </TouchableOpacity>
               </View>
               <View style = {[styles.subContainer,{backgroundColor:'#ffffff'}]}>
                    <Text style = {{color:'#416ce1',fontSize:20}}>ING FINANCIAL SERVICE LLC</Text>
                    <Icon
                    reverse
                    color='green'
                    size={15}
                    type='material'
                    name='edit'
                    onPress = {()=>{alert("Edit ING ")}}
                    />
               </View>
               <View style = {[styles.subContainer,{backgroundColor:'#f8f8f8'}]}>
                   <Text style = {styles.textTableHeader}>FUNDS</Text>
                   <Text style = {styles.textTableHeader}>CURRENT</Text>
                   <Text style = {styles.textTableHeader}>PROPOSED</Text>
               </View>
               <View style = {styles.subContainer}>
                   <View >
                       <Text style = {[styles.textTableContent,{fontSize:18}]}>TRP STABLE VALUE</Text>
                       <Text style = {styles.textTableContent}>FI:OT6J/24</Text>
                   </View>
                   <Text style = {styles.textTableContent}>0%</Text>
                   <Text style = {styles.textTableContent}>0%</Text>
               </View>
               <View style = {styles.subContainer}>
                    <Text style = {[styles.textTableContent,{fontSize:18,fontWeight:'600'}]}>Total</Text>
                    <Text style = {[styles.textTableContent,{fontSize:18,fontWeight:'600'}]}>100%</Text>
                    <Text style = {[styles.textTableContent,{fontSize:18,fontWeight:'600'}]}>__</Text>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    subContainer:{
        flexDirection:'row',justifyContent:'space-around',
        alignItems:'center',backgroundColor:'#ffffff',
        padding:15,borderTopColor:'#c6cbde',borderTopWidth:1
    },
    textTableHeader:{
        fontSize:18,fontWeight:'700',width:screen_width/3-20,textAlign:'center'
    },
    textTableContent:{
        fontSize:15,fontWeight:'400',width:screen_width/3-20,textAlign:'center'
    }
})
