import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {VictoryPie ,VictoryTheme} from 'victory-native'
import OtherAssetsAccordion from './OtherAssetsAccordion';
// mydata = [
//     {
//         key:'1',
//         title:'Ahjfhjfjjhhfghgfjnhgf',
//         value:100,
//         items:[
//             {key:'xxxxx',value:50,desc:'lorem ipsem lorem ipsum'},
//             {key:'yyyyy',value:30,desc:'lorem ipsem lorem ipsum'},
//             {key:'rajat',value:400,desc:'Rajat Verma'}
//         ]
//     },
//     {   
//         key:'2',
//         title:'BBBBBBBB',
//         value:200,
//         items:[
//             {key:'pppppp',value:150,desc:'lorem ipsem lorem ipsum'},
//             {key:'qqqqqq',value:50,desc:'lorem ipsem lorem ipsum'},
//             {key:'kkkkk',value:50,desc:'lorem ipsem lorem ipsum'}
//         ]
//     },
//     {
//         key:'3',
//         title:'CCCCCCCCCCCCC',
//         value:100,
//         items:[
//             {key:'mmmmmmm',value:100,desc:'lorem ipsem lorem ipsum'}
//         ]
//     }
//   ]
mydata=[
    {
        key:'1',
        title:'Gold',
        value:'$1000',
        color:'#416ce1',
        items:[
            {key:'024DDMB754',name:'International Equity Index',value:'$1000'}
        ]
    },
    {
        key:'2',
        title:'Silver',
        value:'$1000',
        color:'green',
        items:[
            {key:'024DDMB754',name:'International Equity Index',value:'$1000'}
        ]
    },
    
]

export default class OtherAssets extends Component{

    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets });
    }
    addOtherAssets = ()=>{
        alert("Assets added successfully")
        console.log("Assets added successfully")
    }
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'OtherAssets',
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
           <TouchableOpacity onPress={()=>{const iconPress = navigation.getParam('addotherassets');iconPress()}}>
                <AntDesign   
                name='pluscircle'
                size={30}
                style={{color:'green',marginRight:10}}
                />
           </TouchableOpacity>
           )
        };
      }
  
    renderAccordians=()=> {
        const items = [];
        
        for (item of mydata) {
            items.push(
                <OtherAssetsAccordion
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