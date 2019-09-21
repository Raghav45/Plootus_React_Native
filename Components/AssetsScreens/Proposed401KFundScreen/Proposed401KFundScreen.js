import React, { Component } from 'react'
import {Image,View,StyleSheet,ScrollView,TouchableOpacity,Text,Dimensions} from 'react-native'
import Accordion401k from './Accordion401k';
import {MaterialIcons} from '@expo/vector-icons'
import { withNavigation } from 'react-navigation';
import PieChart from '../../common/PieChart';	
	
var proposed401kfund_data = [		
    { x: "401k A", y: 75 ,r:120,ir:90},		
    { x: "401k A", y: 140 ,r:120,ir:90},		
    { x: "401k A", y: 65 ,r:120,ir:90},		
    { x: "401k A", y: 25 ,r:120,ir:90}		   
    ]

class Proposed401KFundScreen extends Component {

    constructor(props){super(props);}
    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets });
    }
    addOtherAssets = ()=>{
        alert("Refresh successfully")
        
    }
    static navigationOptions ={
        
        headerTitle:'Proposed 401(k) Fund',
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
                 <MaterialIcons   
                 name='refresh'
                 size={30}
                 style={{marginRight:10}}
                 />
            </TouchableOpacity>
            ),
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require("../../../assets/icon401k.png")}
                    style={{ width: 37, height: 37, tintColor:tintColor}}
                  />
               ),
        
      }
      state={
        
        expanded:true
    }
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
    renderAccordians=()=> {
        const items = [];
        
        
        for (item of mydata4) {
            items.push(
                <Accordion401k
                    
                    title={item.title}
                    value={item.value}
                    color={item.color}
                    employer={item.employer}
                    key={item.key}
                    dest={item.dest}
                />
            );
           
        }
        return items;
    }
    render() {
        return (
            <ScrollView style = {styles.container}>
                 <View>
                    <PieChart data={proposed401kfund_data}/>	
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
                
            </ScrollView>    
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

  mydata4=[
    {
        key:'1234',
        title:'***RSP',
        value:'$1,000',
        color:'#416ce1',
        employer:'General Electric Company',
        dest:'RspScreen'
    },
    {
        key:'23456',

        title:'***PLAN',
        value:'$1,000',
        color:'green',
        employer:'ING Financial Service LLC',
        dest:'Planscreen'
    },
    

]

export default withNavigation(Proposed401KFundScreen);