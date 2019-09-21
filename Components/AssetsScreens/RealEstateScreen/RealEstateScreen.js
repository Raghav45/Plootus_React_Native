import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,Dimensions} from 'react-native'
import RealEstateAccordion from './RealEstateAccordion';
import {MaterialIcons,AntDesign} from '@expo/vector-icons'
import PieChart from '../../common/PieChart'

var realstate_data = [	
    { x: "Land A", y: 75 ,r:120,ir:90},		
    { x: "Land B", y: 140 ,r:120,ir:90},		
    { x: "Land C", y: 65 ,r:120,ir:90},		
    { x: "Land D", y: 25 ,r:120,ir:90}		
    ]

export default class RealEstateScreen extends Component {
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'Real State',
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
    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets });
    }
    addOtherAssets = ()=>{
        alert("Assets added successfully")
        console.log("Assets added successfully")
    }
    state={
        
        expanded:true
    }
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
    renderAccordians=()=> {
        const items = [];
        
        for (item of mydata5) {
            items.push(
                <RealEstateAccordion
                    total={item.total}
                    title={item.title}
                    value={item.value}
                    color={item.color}
                    accno={item.accno}
                    type={item.type}
                    key={item.key}
                    dest={item.dest}
                />
            );
        }
        return items;
    }
    render() {
        return (
            <View style = {styles.container}>
                 <View>
                    <PieChart data={realstate_data}/>	
                </View>
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                        <Text style={[styles.title]}>Total</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:'#1e2133',marginRight:10}}>$10,000</Text>
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

  mydata5=[
    {
        key:'1',
        title:'Bank of America',
        value:'$1,000',
        color:'#416ce1',
        accno:'8345376454894',
        type:'REGULAR CHECKING',
        dest:'Testscreen'
    },
    {
        key:'2',
        title:'Bank of America',
        value:'$1,000',
        color:'green',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD',
        dest:'Testscreen'
    }
]