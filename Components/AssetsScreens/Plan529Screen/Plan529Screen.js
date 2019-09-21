import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native';
import Accordion529 from './Accordion529';
import PieChart from '../../common/PieChart';	

mydata8=[
    {
        key:'123478',
        title:'***RSP',
        value:'$1,000',
        color:'#416ce1',
        un:'0027DDCC/11',
        
    },
    {
        key:'2345656',
        title:'***PLAN',
        value:'$1,000',
        color:'green',
        un:'0027DDCC/11',
       
    },
    

]

var plan529_data = [		
    { x: "Plan A", y: 75 ,r:120,ir:90},		
    { x: "Plan B", y: 140 ,r:120,ir:90},		
    { x: "Plan C", y: 65 ,r:120,ir:90},		
    { x: "Plan D", y: 25 ,r:120,ir:90}		
    ]

export default class Plan529Screen extends Component{

    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets });
    }
    addOtherAssets = ()=>{
        alert("Assets added successfully")
        console.log("Assets added successfully")
    }
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'529 Plan',
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
       
          
        };
      }
  
    renderAccordians=()=> {
        const items = [];
        
        for (item of mydata8) {
            items.push(
                <Accordion529
                    title={item.title}
                    value={item.value}
                    color={item.color}
                    un={item.un}
                    key={item.key}
                    
                />
            );
        }
        return items;
    }
    render(){
        return(
            <View style = {styles.container}>
                 <View>
                    <PieChart data = {plan529_data}/>	
                </View>
                <View style = {styles.totalTextStyle}>
                    <Text style = {{color:'#1e2133',fontSize:16,fontWeight:'300'}}>Total</Text>
                    <Text style = {{color:'#1e2133',fontSize:20,fontWeight:'bold'}}>$450</Text>
                </View>
                <ScrollView >
                        { this.renderAccordians() }
                </ScrollView>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex:1
    },
    totalTextStyle:{
        flexDirection:'row',
        height:43,
        backgroundColor:'#f8f8f8',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#c6cbde',
        borderWidth:1
    },
  });