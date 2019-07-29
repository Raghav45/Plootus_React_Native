import React, { Component } from 'react'
import {View,StyleSheet,Text,Dimensions,TouchableHighlight} from 'react-native';
import {withNavigation} from 'react-navigation'

class Accordion529 extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
   
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
                                        <Text style={{color:'gray'}}>UN: {this.props.un}</Text>
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

export default withNavigation(Accordion529);
