import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native'
import RetirementPlansAccordion from './RetirementPlansAccordion';
import PieChart from '../../common/PieChart';	

mydata=[
    {
        key:'1',
        title:'Plan 1',
        value:'$1,000',
        color:'#416ce1',
        items:[
            {key:'024DDMB754',name:'International Equity Index',value:'$1,000'}
        ]
    },
    {
        key:'2',
        title:'Plan 2',
        value:'$1,000',
        color:'green',
        items:[
            {key:'024DDMB754',name:'International Equity Index',value:'$1,000'}
        ]
    },
    
]

var retirementplan_data = [		
    { x: "RPlan A", y: 75 ,r:120,ir:90},		
    { x: "RPlan B", y: 140 ,r:120,ir:90},		
    { x: "RPlan c", y: 65 ,r:120,ir:90},		
    { x: "RPlan D", y: 25 ,r:120,ir:90}		
    ]

export default class RetirementPlansScreen extends Component{

    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets });
    }
    addOtherAssets = ()=>{
        alert("Assets added successfully")
        console.log("Assets added successfully")
    }
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'Retirement Plans',
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
        
        for (item of mydata) {
            items.push(
                <RetirementPlansAccordion
                    color={item.color}
                    key={item.key}
                    title = {item.title}
                    value = {item.value}
                    data = {item.items}
                />
            );
        }
        return items;
    }
    render(){
        return(
            <View style = {styles.container}>
                 <View>
                    <PieChart data={retirementplan_data}/>	
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