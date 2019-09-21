import React, { Component } from 'react'
import { Image, Text, StyleSheet, ScrollView,View,TouchableOpacity,Dimensions,Picker,Icon} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {VictoryPie ,VictoryTheme,VictoryAxis,VictoryBar,VictoryChart} from 'victory-native'
import Accordions from './IncomeAndExpensesAccordion';
import IncomeAndExpensesAccordion from './IncomeAndExpensesAccordion'
import { Dropdown } from 'react-native-material-dropdown';
import PieChart from '../common/PieChart';
var income_data = [
    { x: "Income A", y: 75 ,r:120,ir:90},
    { x: "Income B", y: 140 ,r:120,ir:90},
    { x: "Income C", y: 65 ,r:120,ir:90},
    { x: "Income D", y: 25 ,r:120,ir:90}
    ]
    var expense_data = [
        { x: "Expense A", y: 75 ,r:120,ir:90},
        { x: "Expense B", y: 140 ,r:120,ir:90},
        { x: "Expense C", y: 65 ,r:120,ir:90},
        { x: "Expemse D", y: 25 ,r:120,ir:90}
        ]






export default class IncomeAndExpensesScreen extends Component {

    static navigationOptions = {
        headerTitle:'Income & Expenses',
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
                source={require("../../assets/incomeIcon.png")}
                style={{ width: 37, height: 37, tintColor:tintColor}}
              />
        ),
    }
    state = {
        language:'this_month',
        expanded:true,
        type:'income',
        activeC:true,
        activeI:false,
        activeE:false,
        colorI:'#416ce1',
        colorC:'#b3b3b3',
        colorE:'#b3b3b3',
        bwidthI:5,
        bwidthC:0,
        bwidthE:0
    }
    renderCashFlow = () =>{
        return(
            <View style = {styles.container}>
            <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginLeft:10,marginRight:10}}>
               <View style = {{padding:2,marginLeft:10,marginRight:10,alignItems:'center'}}>
                   <Text style = {{fontSize:25,fontWeight:'bold',color:'#404a57'}}>Date Range</Text>
               </View>
                    <View style={styles.pickerWrapper}>
                        <MaterialIcons name='keyboard-arrow-down'size={30} style={styles.pickerIcon}/>
                        <Picker
                            selectedValue={this.state.language}
                            style={styles.pickerContent}
                            // style={{height: 50, width:130,background Color:'#416ce1',color:'white'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="This Month" value="this_month" />
                            <Picker.Item label="Last Month" value="last_month" />
                            <Picker.Item label="This Year" value="this_year" />
                            <Picker.Item label="Last Year" value="last_year" />
                            <Picker.Item label="custom" value="custom" />
                        </Picker>
                    </View>
                </View>
                <View style = {{paddingLeft:6,paddingTop:-20}}>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x:[15,0]}}
                   
                    //padding={{left:40}} 
                    height = {250}
                    
                    >
                    <VictoryAxis
                        style={{grid: {
                            stroke: "white"
                        }}} 
                        tickValues={['Sept \'19','Oct \'19','Nov \'19','Dec \'19','Jan \'20']}
                        offsetY={49}
                       
                        /> 
                   <VictoryAxis
                         
                        dependentAxis
                       
                        tickFormat={(t) => (t<0)?`-${t*-1}.0k`:`${t}.0k`}
                        style={{marginLeft:10}} 
                        crossAxis={false}
                    />
                   
                    <VictoryBar
                    
                    
                    data={[
                        { x: 1, y: -1},
                        { x: 2, y: 1},
                        { x: 3, y: -3},
                        { x: 4, y: 3},
                        { x: 5, y: 3}
                    ]}
                    style={{data:{fill:(d) => d.y < 0 ? "red" : "green"}}}
                    />



                
                    
                </VictoryChart>
                </View>
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                        <Text style={[styles.title]}>Total  cashflow</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:'red',marginRight:10}}> - $1,000</Text>
                        <MaterialIcons name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
                    </View>                
                </TouchableOpacity>  
            </View> 
        )
    }
    renderCashAccordian = () =>{
        return(
            <Text>Acsg</Text>
        );
;    }
    renderExpense = ()=>{
        return(
            <View style = {styles.container}>
                 <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginLeft:10,marginRight:10}}>
                    <View style = {{padding:2,marginLeft:10,marginRight:10}}>
                        <Text style = {{fontSize:15,fontWeight:'bold',color:'#404a57'}}>Total Expenses</Text>
                        <Text style ={{color:'#f25f5f',fontSize:20,fontWeight:'bold'}}>$ -30,690.0</Text>
                    </View>
                    <View style={styles.pickerWrapper}>
                        <MaterialIcons name='keyboard-arrow-down'size={30} style={styles.pickerIcon}/>
                        <Picker
                            selectedValue={this.state.language}
                            style={styles.pickerContent}
                            // style={{height: 50, width:130,backgroundColor:'#416ce1',color:'white'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="This Month" value="this_month" />
                            <Picker.Item label="Last Month" value="last_month" />
                            <Picker.Item label="This Year" value="this_year" />
                            <Picker.Item label="Last Year" value="last_year" />
                            <Picker.Item label="Custom" value="Custom" />
                        </Picker>
                    </View>
                </View>
            <View style = {{marginBottom:-5}}>
                <PieChart data={expense_data}/>
           </View>
           <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
               <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                   <Text style={[styles.title]}>Total</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:18,fontWeight:'600',color:'red',marginRight:10}}>$10,000</Text>
                   <MaterialIcons name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
               </View>                
           </TouchableOpacity>
           {/* <View style={styles.parentHr}/> */}
           
           
       </View> 
        );
    }
    renderIncome = ()=>{
        return(
            <View style = {styles.container}>
                 <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginLeft:10,marginRight:10}}>
                    <View style = {{padding:2}}>
                        <Text style = {{fontSize:15,fontWeight:'bold',color:'#404a57'}}>Total income</Text>
                        <Text style ={{color:'#34d86a',fontSize:20,fontWeight:'bold'}}>$ 30,690.0</Text>
                    </View>
                    <View style={styles.pickerWrapper}>
                        <MaterialIcons name='keyboard-arrow-down'size={30} style={styles.pickerIcon}/>
                        <Picker
                            selectedValue={this.state.language}
                            style={styles.pickerContent}
                            // style={{height: 50, width:130,backgroundColor:'#416ce1',color:'white'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="This Month" value="this_month" />
                            <Picker.Item label="Last Month" value="last_month" />
                            <Picker.Item label="This Year" value="this_year" />
                            <Picker.Item label="Last Year" value="last_year" />
                            <Picker.Item label="Custom" value="Custom" />
                        </Picker>
                    </View>
                </View>
                    <View style = {{marginBottom:-5}}>
                    <PieChart data={income_data}/>
                </View>
           <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
               <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                   <Text style={[styles.title]}>Misc. Inflow</Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Text style={{fontSize:18,fontWeight:'600',color:'green',marginRight:10}}>$10,000</Text>
                   <MaterialIcons name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
               </View>                
           </TouchableOpacity>
           {/* <View style={styles.parentHr}/> */}
           
           
       </View> 
        );
    }
   
    
    onPressC = () =>{
        this.setState({activeC:true,
            activeI:false,
            activeE:false,
            type:'cashflow',
            bwidthC:5,bwidthI:0,
            bwidthE:0,
            colorC:'#416ce1',
            colorI:'#b3b3b3',
            colorE:'#b3b3b3'
        })
    }
    onPressI = () =>{
        this.setState({activeI:true,
            activeC:false,
            activeE:false,
            type:'income',
            bwidthI:5,bwidthC:0,
            bwidthE:0,
            colorI:'#416ce1',
            colorC:'#b3b3b3',
            colorE:'#b3b3b3'
        })
    }
    onPressE = () =>{
        this.setState({activeE:true,
            activeI:false,
            activeC:false,
            type:'expense',
            bwidthE:5,bwidthI:0,
            bwidthC:0,
            colorE:'#416ce1',
            colorI:'#b3b3b3',
            colorC:'#b3b3b3'
        })
    }
  
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }




    renderCashflowAccordion=()=> {
        const items = [];
        
        for (item of CashflowData) {
            
            items.push(
                <IncomeAndExpensesAccordion
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

    renderIncomeAccordion=()=> {
        const items = [];
        
        for (item of IncomeData) {
            items.push(
                <Accordions
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


    renderExpensesAccordion=()=> {
        const items = [];
        
        for (item of ExpensesData) {
            items.push(
                <Accordions
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




    render() {
        return (
            <ScrollView style = {styles.mainContainer}>
                <View style={styles.tabNavigation}>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorC,
                            borderBottomWidth:this.state.bwidthC,width:100,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressC()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorC}]}>Cash Flow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorI,
                            borderBottomWidth:this.state.bwidthI,width:100,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressI()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorI}]}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorE,
                            borderBottomWidth:this.state.bwidthE,width:100,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressE()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorE}]}>Expenses</Text>
                    </TouchableOpacity>
                    
                </View>
               
                {this.state.type =='income'?this.renderIncome(): this.state.type == 'expense'?this.renderExpense():this.renderCashFlow()}
                <ScrollView>
                    {this.state.type=='income' && this.state.expanded ?this.renderCashflowAccordion():this.state.type=='expense' && this.state.expanded?this.renderIncomeAccordion(): this.state.type=='cashflow' && this.state.expanded ?this.renderExpensesAccordion():<Text></Text>}
                </ScrollView>
                
            </ScrollView>
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
        // marginLeft:30,marginRight:30,
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
    pickerWrapper: {
        backgroundColor: "#416ce1",
        borderRadius: 4,
        alignItems:'center',
        padding:2,
        height:40,
        marginTop:10
     },
     pickerIcon: {
        color: '#ffffff',
        position: "absolute",
        bottom: 7,
        right: 17,
        marginTop:10,
        fontSize: 20,
        
     },
    
     pickerContent: {
        color:'white',
        backgroundColor: "transparent",
        height: 40, width:130,
     },
})

CashflowData=[
    {
        key:'0987',
        title:'June 2019',
        value:'$1,000',
        color:'#416ce1',
        items:[
            {key:'024DDMB750',name:'Misc Inflows',value:'$1,000',date:"Jan 9 2018", balance:'Directpay Full Balance'},
            {key:'024DDMB757',name:'Uncategorized',value:'$1,000',date:"Jan 9 2018", balance:'Directpay Full Balance'},
            {key:'024DDMB7500',name:'Misc Inflows',value:'$1,000',date:"Jan 9 2018", balance:'Directpay Full Balance'},
        ]
    },
    
]


IncomeData = [
    {
        key:'6987',
        title:'Misc Inflow',
        value:'$1,000',
        color:'#416ce1',
        items:[
            {key:'024DDMB75000',name:'Directpay Full Balance',value:'$1,000',date:"Jan 9 2018", institution:'Discover'},
            {key:'024DDMB7570000',name:'Directpay Full Balance',value:'$1,000',date:"Jan 9 2018", institution:'Discover'},
            {key:'024DDMB75777',name:'Directpay Full Balance',value:'$1,000',date:"Jan 9 2018", institution:'Discover'},
        ]
    },
    
]

ExpensesData = [
{
    key:'6345',
    title:'Mortgages',
    value:'$1,000',
    color:'#416ce1',
    items:[
        {key:'024DDMB75000',name:'GEEFCU DES:MTG PYMT ID XXX',value:'$1,000',date:"Jan 9 2018", institution:'Bank Of America'},
        {key:'024DDMB7570000',name:'GEEFCU DES:MTG PYMT ID XXX',value:'$1,000',date:"Jan 9 2018", institution:'Bank Of America'},
        {key:'024DDMB75777',name:'GEEFCU DES:MTG PYMT ID XXX',value:'$1,000',date:"Jan 9 2018", institution:'Bank Of America'},
    ]
}

];
