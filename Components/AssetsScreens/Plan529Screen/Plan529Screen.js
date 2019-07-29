import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native'
import {VictoryPie ,VictoryTheme} from 'victory-native'
import Accordion529 from './Accordion529';

mydata8=[
    {
        key:'123478',
        title:'***RSP',
        value:'$1000',
        color:'#416ce1',
        un:'0027DDCC/11',
        
    },
    {
        key:'2345656',
        title:'***PLAN',
        value:'$1000',
        color:'green',
        un:'0027DDCC/11',
       
    },
    

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
        headerTitle:'Plan529',
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
                    <VictoryPie
                        height={280}
                        colorScale={[ "#416ce1",'green' ]}
                        data={[
                            { x: "Cats", y: 35 },
                            { x: "Dogs", y: 40 },
                            { x: "Birds", y: 155 }
                            ]}
                        innerRadius={90}
                        radius={120}
                        theme={VictoryTheme.material}
                        labels={(d) => `${d.y}`}
                        labelPosition="centroid"
                        labelRadius={100}
                        style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}
                    />
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