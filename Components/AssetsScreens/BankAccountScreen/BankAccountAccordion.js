import React, { Component } from 'react'
import {View,StyleSheet,Text,Dimensions} from 'react-native';

export default class BankAccountAccordion extends Component{
   
    render(){
        return(
            <View>
                    <View style={styles.child}>
                            <View key={item.key} style = {styles.subChild} >
                                <View style={{padding:16,flexDirection:'row',justifyContent:'space-between',paddingBottom:10,paddingTop:10}} >
                                    <View >
                                        <View style={{width:Dimensions.get('window').width-150,flexDirection:'row'}}>
                                        <Text style={{color:this.props.color,fontSize:60,marginTop:-43,marginRight:5}}>.</Text>
                                        <Text style={{fontWeight:'bold'}}>{this.props.title}</Text>
                                        </View>
                                        <Text style={{color:'gray'}}>{this.props.type}-{this.props.accno}</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'green'}}>{this.props.value}</Text>
                                    </View>
                                </View>
                            </View>
                            
                    </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    child:{
        backgroundColor: '#ffffff',
    },
    subChild:{
        borderBottomColor:'#c6cbde',
        borderBottomWidth: 1,
    }
    
});
