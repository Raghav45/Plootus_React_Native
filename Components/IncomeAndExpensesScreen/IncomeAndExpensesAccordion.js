import React, { Component } from 'react'
import {View,StyleSheet,TouchableOpacity,FlatList,Text,Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default class IncomeAndExpensesAccordion extends Component{
    
    state={
        data:this.props.data,
        expanded:true
    }
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
    render(){
        return(
            <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:this.props.color,fontSize:60,marginTop:-33,marginRight:5}}>.</Text>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:16,color:'green',marginRight:10}}>{this.props.value}</Text>
                    <MaterialIcons name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
                </View>                
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                   <FlatList
                    keyExtractor={(item, index) => item.key}
                    data={this.state.data}
                    numColumns={1}
                    scrollEnabled={false}
                    renderItem={({item, index}) => 
                        <View key={item.key} style = {styles.subChild} >
                            <View style={{padding:16,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}} >
                                <View >
                                    <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                                    <Text style={{color:'gray'}}>{item.key}</Text>
                                </View>
                                <View>
                                    <Text style={{color:'green'}}>{item.value}</Text>
                                </View>
                            </View>
                        </View>
                        }/> 
                </View>
            }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#1e2133',
    },
    row:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        height:50,
        paddingLeft:15,
        paddingRight:10,
        alignItems:'center',
        backgroundColor: '#ffffff',
        borderBottomColor:'#c6cbde',
        borderBottomWidth: 1,
        width:'100%'
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%',
    },
    child:{
        backgroundColor: '#f8f8f8',
        // padding:16,
    },
    subChild:{
        borderBottomColor:'#c6cbde',
        borderBottomWidth: 1,
    }
    
});