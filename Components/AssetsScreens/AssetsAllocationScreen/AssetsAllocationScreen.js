import React, { Component } from 'react'
import { Image,Text, StyleSheet, ScrollView,View,TouchableOpacity,Dimensions} from 'react-native'
import AssetsAllocationAccordion from './AssetsAllocationAccordion';
import {MaterialIcons} from '@expo/vector-icons'
import {VictoryPie ,VictoryTheme} from 'victory-native'

export default class AssetsAllocationScreen extends Component {

    static navigationOptions = {
        headerTitle:'Assets Allocation',
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

           tabBarIcon: ({tintColor}) => (
            <Image
                source={require("../../../assets/assetsIcon.png")}
                style={{ width: 26, height: 26, tintColor:tintColor}}
              />
           ),
    }
    state = {
        expanded:true,
        type:'categories',
        activeAC:true,
        activeAT:false,
        colorAC:'#416ce1',
        colorAT:'#b3b3b3',
        bwidthAC:5,
        bwidthAT:0
    }
    renderType = ()=>{
        return(
            <View style = {styles.container}>
            <View>
               <VictoryPie
                   height={280}
                   colorScale={[ "#416ce1",'green' ]}
                   data={[
                       { x: "Cats", y: 10 },
                       { x: "Dogs", y: 10 },
                       { x: "Birds", y: 30 }
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
           
           
       </View> 
        );
    }
    renderCategories = () =>{
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
            </View>    
        );
    }
    
    onPressAC = () =>{
        this.setState({activeAC:true,activeAT:false,type:'categories',bwidthAC:5,bwidthAT:0,colorAC:'#416ce1',colorAT:'#b3b3b3'})
    }
    onPressAT = () =>{
        this.setState({activeAT:true,activeAC:false,type:'type',bwidthAT:5,bwidthAC:0,colorAT:'#416ce1',colorAC:'#b3b3b3'})
    }

    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
    renderAccordians=()=> {
        const items = [];
        
        for (item of mydata1) {
            items.push(
                <AssetsAllocationAccordion
                    total={item.total}
                    title={item.title}
                    value={item.value}
                    color={item.color}
                    costBasis={item.costBasis}
                    key={item.key}
                    dest={item.dest}
                />
            );
            
        }
        return items;
    }
    render() {
        
        return (
            <View style = {styles.mainContainer}>
                <View style={styles.tabNavigation}>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorAC,
                            borderBottomWidth:this.state.bwidthAC,width:140,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressAC()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorAC}]}>Asset Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{borderBottomColor: this.state.colorAT,
                                borderBottomWidth:this.state.bwidthAT,
                                width:120,alignItems:'center'
                                }} 
                        onPress={()=>this.onPressAT()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorAT}]}>Asset Types</Text>
                    </TouchableOpacity>
                </View>
                {this.state.type =='categories'?this.renderCategories():this.renderType()}
                <ScrollView>
                {this.state.expanded && this.renderAccordians()}
                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
      flex:1 
    },
    tabNavigation:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#b3b3b3',
        borderBottomWidth:1,
        marginLeft:30,marginRight:30,
        padding:15,
        paddingBottom:-3
    },
    tabElementAC:{
       
    },
    tabElementAT:{
        
    },
    tabElementText:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:15,
        color:'#b3b3b3'
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
})

mydata1=[
    {
        key:'1',
        title:'401(k)',
        value:'$1000',
        color:'#416ce1',
        accno:'8345376454894',
        dest:'Proposed401KFundScreen',
        costBasis:'169,257.10'
    },
    {
        key:'2',
        title:'529',
        value:'$1000',
        color:'green',
        accno:'8945648757495',
        dest:'Plan529Screen',
        costBasis: '1000'
    },
    {
        key:'3',
        title:'Real Estate',
        value:'$1000',
        color:'#416ce1',
        accno:'8945648757495',
        dest:'RealEstateScreen',
        costBasis: '1000'
    },
    {
        key:'3',
        title:'Bank Account',
        value:'$1000',
        color:'#416ce1',
        accno:'8945648757495',
        dest:'BankAccountScreen',
        costBasis: '1000'
    },
    {
        key:'3',
        title:'Retirement Plans',
        value:'$1000',
        color:'#416ce1',
        accno:'8945648757495',
        dest:'RetirementPlansScreen',
        costBasis: '1000'
    },
    {
        key:'3',
        title:'Other Assets',
        value:'$1000',
        color:'#416ce1',
        accno:'8945648757495',
        dest:'OtherAssets',
        costBasis: '1000'
    },
    
]