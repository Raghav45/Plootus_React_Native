import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,Dimensions,ScrollView,FlatList} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { Icon } from 'react-native-elements';
const screen_width = Dimensions.get('window').width

export default class RspScreen extends Component {
    data = [
        {
            key:'1',
            fi:'TP8B/17',
            title:'Target Ret Income',
            propose:0,
            current:0
        },
        {
            key:'2',
            fi:'TP8B/17',
            title:'Target Ret Income',
            propose:0,
            current:0
        },
        {
            key:'3',
            fi:'TP8B/17',
            title:'Target Ret Income',
            propose:0,
            current:0
        },
        {
            key:'4',
            fi:'TP8B/17',
            title:'Target Ret Income',
            propose:0,
            current:0
        },
        {
            key:'5',
            fi:'TP8B/17',
            title:'Target Ret Income',
            propose:0,
            current:0
        },
        {
            key:'6',
            fi:'TP8B/17',
            title:'Target Ret Income',
            propose:0,
            current:0
        },
    ]
    componentDidMount(){
        this.props.navigation.setParams({ refreshScreen: this.refreshScreen });
    }
    refreshScreen = ()=>{
        alert("Refresh successfully")
        
    }
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'***RSP',
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
      renderTable = ({item,key}) =>{
          bcolor = item.key%2==0?'#f8f8f8':'#ffffff'
          console.log(bcolor)
          return(
            <View  style = {[styles.subContainer,{backgroundColor:bcolor}]}>
                <View>
                    <Text style = {[styles.textTableContent2,{fontSize:18}]}>{item.title}</Text>
                    <Text style = {styles.textTableContent2}>FI:{item.fi}</Text>
                </View>
                <Text style = {[styles.textTableContent,{marginLeft:-20}]}>{item.current}</Text>
                <Text style = {styles.textTableContent}>{item.propose}</Text>
            </View>
          );
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
                    <Text style = {{color:'#416ce1',fontSize:20}}>GENERAL ELECTRIC COMPANY</Text>
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
                   <Text style = {styles.textTableHeader2}>FUNDS</Text>
                   <Text style = {styles.textTableHeader}>CURRENT</Text>
                   <Text style = {[styles.textTableHeader]}>PROPOSED</Text>
               </View>
               <ScrollView>
                <FlatList
                    data={data}
                    renderItem={this.renderTable}
                />
               </ScrollView>
               <View style = {styles.subContainer}>
                    <Text style = {[styles.textTableContent2,{fontSize:18,fontWeight:'600'}]}>Total</Text>
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
        borderTopColor:'#c6cbde',borderTopWidth:1,padding:10
    },
    textTableHeader:{
        fontSize:18,fontWeight:'700',width:screen_width/4-10,textAlign:'center'
    },
    textTableContent:{
        fontSize:15,fontWeight:'400',width:screen_width/4-20,textAlign:'center'
    },
    textTableHeader2:{
        fontSize:18,fontWeight:'700',width:screen_width/2-10,textAlign:'center'
    },
    textTableContent2:{
        fontSize:15,fontWeight:'400',width:screen_width/2-20,textAlign:'center'
    }
})
