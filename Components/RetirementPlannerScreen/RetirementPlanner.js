import React, { Component } from 'react'
import {Image,Text, StyleSheet,View,TouchableOpacity,Dimensions,ScrollView,Picker} from 'react-native'
import {VictoryArea,VictoryChart,createContainer } from 'victory-native';
import {MaterialIcons} from '@expo/vector-icons'
import {Icon,Input,Button,Overlay} from 'react-native-elements';
import {RegularSlider,CashSlider,PercentSlider} from '../common/Slider';
import {HeadingRowComponent, RowComponent} from "../common/FutureExpenseRow";
import { FlatList } from 'react-native-gesture-handler';
import BeforeRetirementChart from '../common/BeforeRetirementChart';
import AfterRetirementChart from '../common/AfterRetirementChart';
import FutureExpenseChart from '../common/FutureExpenseChart';
const sWidth = Dimensions.get('window').width
data = [
    {key:'1',x:25,y:100,},
    {key:'2',x:30,y:210,},
    {key:'3',x:35,y:290,},
    {key:'4',x:40,y:420,},
    {key:'5',x:45,y:500,},
    {key:'6',x:50,y:580,},

]

export default class RetirementPlannerScreen extends Component {

    static navigationOptions = {
        headerTitle:'Retirement Planner',
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
                source={require("../../assets/retirementIcon.png")}
                style={{ width: 37, height: 37, tintColor:tintColor}}
                />
            ),
    }
    state = {
        edit:false,
        type:'br',
        activeBR:true,
        activeAR:false,
        activeFE:false,
        colorBR:'#416ce1',
        colorAR:'#b3b3b3',
        colorFE:'#b3b3b3',
        bwidthBR:5,
        bwidthAR:0,
        bwidthFE:0,
        isVisible:false,
        isVisible2:false,
        startingBalance:1000,
        currentAge:10,
        retirementAge:50,
        lifeExpectency:80,
        annualContribution:5,
        annualRetirementExpenses:50,
        investmentStrategy:'conservative',
        b1C:'#416ce1',
        b2C:'white',
        b3C:'white',
        b4C:'white',
        toYear:'2048',
        fromYear:'2019',
        inflation:0
    }
   
    onPressBR = () =>{
        this.setState({
            activeBR:true,
            activeAR:false,
            activeFE:false,
            type:'br',
            bwidthBR:5,bwidthAR:0,
            bwidthFE:0,
            colorBR:'#416ce1',
            colorAR:'#b3b3b3',
            colorFE:'#b3b3b3'
        })
    }
    onPressAR = () =>{
        this.setState({
            activeAR:true,
            activeBR:false,
            activeFE:false,
            type:'ar',
            bwidthAR:5,bwidthBR:0,
            bwidthFE:0,
            colorAR:'#416ce1',
            colorBR:'#b3b3b3',
            colorFE:'#b3b3b3'
        })
    }
    onPressFE = () =>{
        this.setState({
            activeFE:true,
            activeAR:false,
            activeBR:false,
            type:'fe',
            bwidthFE:5,bwidthAR:0,
            bwidthBR:0,
            colorFE:'#416ce1',
            colorAR:'#b3b3b3',
            colorBR:'#b3b3b3'
        })
    }
      modalAction = (value)=>{
        this.setState({isVisible:value})
      }
      modalAction2 = (value)=>{
        this.setState({isVisible2:value})
      }
      inflationChanger = (value) =>{
          this.setState({inflation:value})
      }
      currentAgeChanger =(currentAge) =>{
        this.setState({currentAge})
      }
      retirementAgeChanger = (retirementAge)=>{
        this.setState({retirementAge})
      }
      lifeExpectancyChanger = (lifeExpectency)=>{
        this.setState({lifeExpectency})
      }
      annualContributionChanger = (annualContribution)=>{
        this.setState({annualContribution})
      }
      annualRetirementExpensesChanger = (annualRetirementExpenses)=>{
        this.setState({annualRetirementExpenses})
      }
      modalView=()=>{
        return(
        <View style={{ flex: 1,marginBottom:10,marginTop:15,marginLeft:2,marginRight:2}}>
          {/* <View style={{backgroundColor:'rgba(255,255,255,.5)',alignItems:'flex-end',marginTop:-4,marginBottom:2}}>
          <Icon
          type='material'
          name='close'
          size={30}
          onPress={()=>{this.setState({isVisible:false})}}
          />
            </View>
          */}
          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:5,marginRight:5,marginTop:10}}>
            <Text style = {{fontSize:18,paddingLeft:6,color:'#2b2d38',marginTop:5,marginRight:8}}>Starting Balance:</Text>
            <View style = {{flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#a7a7ab',height:40,width:155}}>
            <View style = {{backgroundColor:'#416ce1',width:40,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:18,color:'white'}}>$</Text>
            </View>
            <Input
              inputStyle={{fontSize:18}}
              placeholder="Enter"
              containerStyle={{width:115,borderLeftWidth:1,borderColor:'#a7a7ab'}}
              inputContainerStyle={{borderBottomWidth: 0}}
              keyboardType='number-pad'
            />
            </View>
          </View>
          
          <RegularSlider changeState = {this.currentAgeChanger} sliderValue = {this.state.currentAge} type='Current Age (Years)'/>
          <RegularSlider changeState = {this.retirementAgeChanger} sliderValue = {this.state.retirementAge} type='Retirement Age (Years)'/>
          <RegularSlider changeState = {this.lifeExpectancyChanger} sliderValue = {this.state.lifeExpectency} type='Life Expectancy (Years)'/>
          <CashSlider changeState = {this.annualContributionChanger} sliderValue = {this.state.annualContribution} type='Annual Contribution ($)'/>
          <CashSlider changeState = {this.annualRetirementExpensesChanger} sliderValue = {this.state.annualRetirementExpenses} type='Annual Retirement Expenses ($)'/>
          <Text style = {{fontSize:18,color:'#2b2d38',marginLeft:12,marginBottom:10}}>Investment Strategy:</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:10}}>
          <Button
            title="Conservative"
            type="outline"
            buttonStyle={{backgroundColor:this.state.b1C,height:30,borderColor:'#777676'}}
            titleStyle={{fontSize:13,fontWeight:'100',color:this.state.b1C==='#416ce1'?'white':'black'}}
            containerStyle={{width:94,}}
            onPress={()=>{this.setState({ b1C:'#416ce1',b2C:'white',b3C:'white',b4C:'white'})}}
          />
          <Button
            title="Moderate"
            type="outline"
            buttonStyle={{backgroundColor:this.state.b2C,height:30,borderColor:'#777676'}}
            containerStyle={{width:75}}
            titleStyle={{fontSize:13,color:this.state.b2C==='#416ce1'?'white':'black'}}
            onPress={()=>{this.setState({ b2C:'#416ce1',b1C:'white',b3C:'white',b4C:'white'})}}
          />
          <Button
            title="Growth"
            type="outline"
            buttonStyle={{height:30,backgroundColor:this.state.b3C,borderColor:'#777676'}}
            containerStyle={{width:65}}
            titleStyle={{fontSize:13,color:this.state.b3C==='#416ce1'?'white':'black'}}
            onPress={()=>{this.setState({ b3C:'#416ce1',b2C:'white',b1C:'white',b4C:'white'})}}
          />
          <Button
            title="S. Growth"
            type="outline"
            buttonStyle={{height:30,backgroundColor:this.state.b4C,borderColor:'#777676'}}
            containerStyle={{width:75}}
            titleStyle={{fontSize:13,color:this.state.b4C==='#416ce1'?'white':'black'}}
            onPress={()=>{this.setState({ b4C:'#416ce1',b2C:'white',b3C:'white',b1C:'white'})}}
          />
          </View>
        </View>
         );
      }

      modalView2 = () =>{
          return(
              <View style = {styles.modalContainer}>
                    <PercentSlider changeState = {this.inflationChanger} sliderValue = {this.state.inflation} type='Inflation'/>
                     <HeadingRowComponent/>
                    <View style = {{height:290}}>
                    {/* <ScrollView> */}
                       <FlatList
                       data = {dataSource}
                       numColumns={1}
                       renderItem = {({item,key})=>(
                       <View>
                           <RowComponent data = {item} />
                       </View>
                       )}
                       />
                    {/* </ScrollView> */}
                    </View>
                    
                    {/* <View style={{flexDirection:'row',borderTopWidth:0.5,borderTopColor:'#a7a7ab'}}>
                        <TouchableOpacity style={styles.modalActionButton} onPress={()=>this.modalAction2(false)}>
                            <Text style={[styles.modalActionButtonText,{color:'#416ce1'}]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalActionButton,{backgroundColor:'#416ce1'}]} onPress={()=>this.modalAction2(false)}>
                            <Text style ={styles.modalActionButtonText}>Apply</Text>
                        </TouchableOpacity>
                    </View> */}
              </View>
          );
      }
      
   beforeRetirement = () =>{
       return(
        <ScrollView style={{padding:15,paddingTop:0,marginTop:-1}} >
       <BeforeRetirementChart/>
        {/* <View style={styles.row}>
            <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                <Text style={{color:'#416ce1',fontSize:60,marginTop:-35,marginRight:5}}>.</Text>
                <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}>Retirement Assets</Text>
            </View>
            <TouchableOpacity style={styles.editButtonStyle} onPress = {()=>this.modalAction(true)} >
                <Text style={{fontSize:18,fontWeight:'600',color:'white',marginRight:10}}>Edit</Text>
                <MaterialIcons 
                    name={this.state.edit ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                    size={25} 
                    style={{color:'white',marginRight:-8}}
                />
            </TouchableOpacity>                
        </View> */}
        
        
        {this.modalView()}              
    </ScrollView>           
       );
   }
   afterRetirement = () =>{
        return(
           <ScrollView style={{padding:15,paddingTop:0,marginTop:-1}}>

                <AfterRetirementChart/>

                <FutureExpenseChart/>

                {/* <View style={[styles.row,{marginBottom:5}]}>
                    <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#416ce1',fontSize:60,marginTop:-35,marginRight:5}}>.</Text>
                        <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}>Future Expenses</Text>
                    </View>

                    <TouchableOpacity style={styles.editButtonStyle} onPress = {()=>this.modalAction(true)} >
                        <Text style={{fontSize:18,fontWeight:'600',color:'white',marginRight:10}}>Edit</Text>
                        <MaterialIcons 
                            name={this.state.edit ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                            size={25} 
                            style={{color:'white',marginRight:-8}}
                        />
                    </TouchableOpacity>
                                   
                </View> */}
                {/* <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center',marginLeft:20}}>
                        <Text style={{color:'green',fontSize:60,marginTop:-35,marginRight:5}}>.</Text>
                        <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}>Retirement Assets</Text>
                </View> */}
                {this.modalView()}
            </ScrollView>
        );
    }
    futureExpenses = () =>{
        return(
        <ScrollView style={{padding:10,paddingTop:0}}>
           <FutureExpenseChart/>
            {/* <View style={[styles.row,{marginBottom:5}]}>
                <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'#416ce1',fontSize:60,marginTop:-35,marginRight:5}}>.</Text>
                    <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}>Future Expenses</Text>
                </View>

                <TouchableOpacity style={styles.editButtonStyle} onPress = {()=>this.modalAction2(true)} >
                    <Text style={{fontSize:18,fontWeight:'600',color:'white',marginRight:10}}>Edit</Text>
                    <MaterialIcons 
                        name={this.state.edit ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                        size={25} 
                        style={{color:'white',marginRight:-8}}
                    />
                </TouchableOpacity>    
            </View> */}

           

            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin:20}}>
                <Text style={{fontSize:16,fontWeight:'400',color:'#404a57',marginLeft:-12}}>Total Expenses</Text>
                <View style={styles.pickerWrapper}>
                <MaterialIcons name='keyboard-arrow-down'size={30} style={styles.pickerIcon}/>
                <Picker
                    selectedValue={this.state.fromYear}
                    style={styles.pickerContent}
                    // style={{height: 50, width:130,background Color:'#416ce1',color:'white'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="2019" value="this_month" />
                    <Picker.Item label="2020" value="last_month" />
                    <Picker.Item label="2021" value="this_year" />
                    <Picker.Item label="2022" value="last_year" />
                    <Picker.Item label="2023" value="custom" />
                </Picker>
                </View>
                <Text style={{fontSize:16,fontWeight:'400',color:'#404a57'}}> to</Text>
                <View style={styles.pickerWrapper}>
                <MaterialIcons name='keyboard-arrow-down'size={30} style={styles.pickerIcon}/>
                <Picker
                    selectedValue={this.state.toYear}
                    style={styles.pickerContent}
                    // style={{height: 50, width:130,background Color:'#416ce1',color:'white'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="2070" value="this_month" />
                    <Picker.Item label="2071" value="last_month" />
                    <Picker.Item label="2072" value="this_year" />
                    <Picker.Item label="2073" value="last_year" />
                    <Picker.Item label="2074" value="custom" />
                </Picker>
                </View>
            </View> 
            {this.modalView2()}    
        </ScrollView>
        );
    }
    render() {
        return (
            <View style = {styles.mainContainer}>
                <View style={styles.tabNavigation}>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorBR,
                            borderBottomWidth:this.state.bwidthBR,width:110,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressBR()}
                    >
                    <Text style={[styles.tabElementText,{color:this.state.colorBR}]}>Before Retirement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorAR,
                            borderBottomWidth:this.state.bwidthAR,width:100,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressAR()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorAR}]}>After Retirement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ borderBottomColor: this.state.colorFE,
                            borderBottomWidth:this.state.bwidthFE,width:100,
                            alignItems:'center'
                            }} 
                    onPress={()=>this.onPressFE()}
                    >
                        <Text style={[styles.tabElementText,{color:this.state.colorFE}]}>Future Expenses</Text>
                    </TouchableOpacity>
                    
                </View>
               
                {this.state.type =='br'?this.beforeRetirement(): this.state.type == 'ar'?this.afterRetirement():this.futureExpenses()}
   
                {/* <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    width='100%'
                    height={430}
                    onBackdropPress={() => this.modalAction(false)}
                    onDismiss={()=>this.modalAction(false)}
                    overlayStyle={{bottom:0,position: 'absolute'}}
                    animationType='fade'
                  >

                    <View style={styles.modalContainer}>
                    { this.state.isVisible?this.modalView():null } 
                    </View>
                        
                  </Overlay>
                  <Overlay
                    isVisible={this.state.isVisible2}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    width='100%'
                    height={450}
                    onBackdropPress={() => this.modalAction2(false)}
                    onDismiss={()=>this.modalAction2(false)}
                    overlayStyle={{bottom:0,position: 'absolute'}}
                    animationType='fade'
                  >
                   
                    <View style={styles.modalContainer}>
                    { this.state.isVisible2?this.modalView2():null } 
                    </View>
                   
                     
                  </Overlay> */}
                 
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
        // marginLeft:30,marginRight:30,
        padding:15,
        paddingBottom:-3
    },
    
    tabElementText:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:15,
        color:'#b3b3b3',
        textAlign:'center'
    },
    row:{
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'space-between',
        alignItems:'center',
      
    },
    editButtonStyle:{
        borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center',
        backgroundColor:'#416ce1',width:80,height:30,padding:20
    },
    currentPlanHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#b3b3b3',
        borderBottomWidth:1,
        padding:3
    },
    currentPlanText:{
        fontWeight:'400',
        fontSize:16
    },
    pickerWrapper: {
        backgroundColor: "#416ce1",
        borderRadius: 10,
        alignItems:'center',
        padding:2
     },
     pickerIcon: {
        color: '#ffffff',
        position: "absolute",
        bottom: 8,
        right: 10,
        fontSize: 20
     },
    
     pickerContent: {
        color:'white',
        backgroundColor: "transparent",
        height: 35, width:70,
     },
     modalActionButton:{
        width:sWidth/2,justifyContent:'center',alignItems:'center',height:40,
     },
     modalActionButtonText:{
        color:'#ffffff',fontSize:18,fontWeight:'600'
     },
     modalContainer:{
         flex:1,
        marginBottom:10,
        marginTop:15
     }
})
mydata2=[
    {
        key:'1',
        title:'Bank of America',
        value:'$1,000',
        color:'#416ce1',
        accno:'8345376454894',
        type:'REGULAR CHECKING'
    },
    {
        key:'2',
        title:'Bank of America',
        value:'$1,000',
        color:'green',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    {
        key:'3',
        title:'Bank of America',
        value:'$1,000',
        color:'#416ce1',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    {
        key:'4',
        title:'Bank of America',
        value:'$1,000',
        color:'green',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
    {
        key:'5',
        title:'Bank of America',
        value:'$1,000',
        color:'#416ce1',
        accno:'8945648757495',
        type:'9 MO RISK FREE CD'
    },
]

dataSource= [
            {
                key:'0',
                category:"Credit Card Expenses",
                current:0,
                futureWI:-140,
                futureI:-300
            },
           {
               key:'1',
               category:'Account fees',
               current:0,
               futureWI:-140,
               futureI:-300
           },
           {
            key:'2',
            category:'Account fees',
            current:0,
            futureWI:-140,
            futureI:-300
            },
            {
                key:'3',
                category:'Account fees',
                current:0,
                futureWI:-140,
                futureI:-300
            },
            {
                key:'4',
             category:'Account fees',
             current:0,
             futureWI:-140,
             futureI:-300
             },
             {
                key:'5',
                category:'Account fees',
                current:0,
                futureWI:-140,
                futureI:-300
            },
            {
                key:'6',
             category:'Account fees',
             current:0,
             futureWI:-140,
             futureI:-300
             },
             {
                key:'7',
                category:'Account fees',
                current:0,
                futureWI:-140,
                futureI:-300
            },
            {
                key:'8',
             category:'Account fees',
             current:0,
             futureWI:-140,
             futureI:-300
             },
             {
                key:'9',
                category:'Account fees',
                current:0,
                futureWI:-140,
                futureI:-300
            },
            {
                key:'10',
             category:'Account fees',
             current:0,
             futureWI:-140,
             futureI:-300
             },
             {
                key:'11',
                category:'Account fees',
                current:0,
                futureWI:-140,
                futureI:-300
            },
            {
                key:'12',
             category:'Account fees',
             current:0,
             futureWI:-140,
             futureI:-300
             },
           
         ]