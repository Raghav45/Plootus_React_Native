import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Button} from 'react-native-elements'
import Test2 from './Test2';
var a = "First"
var b = "second"
export default class Test1 extends Component {

    state={
        activeA:true,
        activeB:false
    }
    A = ()=>{
        return( <Test2 data={a}/>)
    }
    B = () =>{
        return(<Test2 data={b}/>)
    }
    render() {
        return (
            <View style={{ flex:1,justifyContent:'center',padding:20}}>
               <Button buttonStyle={{ marginBottom: 10}} title="First" onPress={()=>{this.setState({activeA:true,activeB:false})}}/>
               <Button  buttonStyle={{ marginBottom: 10}} title="Second" onPress={()=>{this.setState({activeA:false,activeB:true,})}}/>

               {this.state.activeA?this.A():this.B()}

            </View>
        )
    }
}
