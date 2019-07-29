import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,Dimensions} from 'react-native'
import {VictoryPie ,VictoryTheme} from 'victory-native'
import BankAccountAccordion from './BankAccountAccordion';
import {MaterialIcons} from '@expo/vector-icons'

export default class BankAccountScreen extends Component {
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'Bank Account',
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

     
      state={
        
        expanded:true
    }
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
    renderAccordians=()=> {
        const items = [];
        
        for (item of mydata2) {
            items.push(
                <BankAccountAccordion
                    total={item.total}
                    title={item.title}
                    value={item.value}
                    color={item.color}
                    accno={item.accno}
                    type={item.type}
                    key={item.key}
                />
            );
        }
        return items;
    }
    render() {
        return (
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
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                        <Text style={[styles.title]}>Total</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:'#1e2133',marginRight:10}}>$10000</Text>
                        <MaterialIcons name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
                    </View>                
                </TouchableOpacity>
                {/* <View style={styles.parentHr}/> */}
                <ScrollView>
                { this.state.expanded && this.renderAccordians()}
                </ScrollView>
                
            </View>    
        )
    }
}
const styles = StyleSheet.create({
    container: {
     flex:1
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#1e2133',
    },
    row:{
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
    parentHr:{
        height:1,
        color: 'white',
        width:'100%',
    },
  });

  mydata2=[
    {
        key:'1',
        title:'Bank of America',
        value:'$1000',
        color:'#416ce1',
        accno:'8345376454894',
        type:'REGULAR CHECKING'
    },
    {
        key:'2',
        title:'Bank of America',
        value:'$1000',
        color:'green',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    {
        key:'3',
        title:'Bank of America',
        value:'$1000',
        color:'#416ce1',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    {
        key:'4',
        title:'Bank of America',
        value:'$1000',
        color:'green',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    {
        key:'5',
        title:'Bank of America',
        value:'$1000',
        color:'#416ce1',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    
]

