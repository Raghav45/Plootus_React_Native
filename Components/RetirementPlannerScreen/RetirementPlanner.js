import React, { Component } from 'react'
import { Image, Text, StyleSheet,View,TouchableOpacity,Dimensions,ScrollView,Picker} from 'react-native'
import {VictoryArea,VictoryChart,createContainer,VictoryTheme,VictoryBar } from 'victory-native';
import {Defs,LinearGradient,Stop} from 'react-native-svg';
import {MaterialIcons} from '@expo/vector-icons'
import {Icon,Input,Button,Overlay} from 'react-native-elements';
import Slider from '../common/Slider';
import {HeadingRowComponent, RowComponent} from "../common/FutureExpenseRow";
import { FlatList } from 'react-native-gesture-handler';

const VictoryZoomVoronoiContainer = createContainer( "cursor","voronoi");
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
                style={{ width: 26, height: 26, tintColor:tintColor}}
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
        b1C:'#5c5eb9',
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
      modalView = ()=>{
        return(
        <View style={{ flex: 1}}>
          <View style={{flexDirection:'row',justifyContent:'flex-end',marginBottom:5,marginRight:5}}>
            <Text style = {{fontSize:23,color:'#2b2d38',marginTop:5,marginRight:4}}>Starting Balance</Text>
            <View style = {{flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#a7a7ab',height:40,width:180}}>
            <View style = {{backgroundColor:'#5c5eb9',width:40}}>
            <Icon 
             type='font-awesome'
             name='dollar' 
             color='white' 
             size={25} 
             containerStyle={{marginTop:6}}
             />
            </View>
            <Input
              placeholder="Input"
              containerStyle={{width:125,borderLeftWidth:1,borderColor:'#a7a7ab'}}
              inputContainerStyle={{borderBottomWidth: 0}}
              keyboardType='number-pad'
            />
            </View>
          </View>
          <Slider changeState = {this.currentAgeChanger} sliderValue = {this.state.currentAge} type='Current Age(Years)'/>
          <Slider changeState = {this.retirementAgeChanger} sliderValue = {this.state.retirementAge} type='Retirement Age(Years)'/>
          <Slider changeState = {this.lifeExpectancyChanger} sliderValue = {this.state.lifeExpectency} type='Life Expectancy(Years)'/>
          <Slider changeState = {this.annualContributionChanger} sliderValue = {this.state.annualContribution} type='Annual Contribution($)'/>
          <Slider changeState = {this.annualRetirementExpensesChanger} sliderValue = {this.state.annualRetirementExpenses} type='Annual Retirement Expenses($)'/>
          <Text style = {{fontSize:18,fontWeight:'500',color:'#2b2d38'}}>Investment Strategy</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <Button
            title="Conservative"
            type="outline"
            buttonStyle={{backgroundColor:this.state.b1C,height:30,borderColor:'#777676'}}
            titleStyle={{color:this.state.b1C==='#5c5eb9'?'white':'black'}}
            containerStyle={{width:100,}}
            onPress={()=>{this.setState({ b1C:'#5c5eb9',b2C:'white',b3C:'white',b4C:'white'})}}
          />
          <Button
            title="Moderate"
            type="outline"
            buttonStyle={{backgroundColor:this.state.b2C,height:30,borderColor:'#777676'}}
            containerStyle={{width:80}}
            titleStyle={{color:this.state.b2C==='#5c5eb9'?'white':'black'}}
            onPress={()=>{this.setState({ b2C:'#5c5eb9',b1C:'white',b3C:'white',b4C:'white'})}}
          />
          <Button
            title="Growth"
            type="outline"
            buttonStyle={{height:30,backgroundColor:this.state.b3C,borderColor:'#777676'}}
            containerStyle={{width:70}}
            titleStyle={{color:this.state.b3C==='#5c5eb9'?'white':'black'}}
            onPress={()=>{this.setState({ b3C:'#5c5eb9',b2C:'white',b1C:'white',b4C:'white'})}}
          />
          <Button
            title="Super"
            type="outline"
            buttonStyle={{height:30,backgroundColor:this.state.b4C,borderColor:'#777676'}}
            containerStyle={{width:70}}
            titleStyle={{color:this.state.b4C==='#5c5eb9'?'white':'black'}}
            onPress={()=>{this.setState({ b4C:'#5c5eb9',b2C:'white',b3C:'white',b1C:'white'})}}
          />
          </View>
          <View style={{flexDirection:'row',marginTop:5,justifyContent:'center',borderTopColor:'#a7a7ab',borderTopWidth:1}}>
          <Button
            title="Submit"
            type="outline"
            buttonStyle={{height:30}}
            containerStyle={{width:100,marginTop:5}}
            onPress={()=>{this.setState({isVisible:false})}}
          />
           <Button
            title="Close"
            type="outline"
            buttonStyle={{height:30}}
            containerStyle={{width:100,marginTop:5,marginLeft:30}}
            onPress={()=>{this.setState({isVisible:false})}}
          />
          </View>
        </View>
         );
      }

      modalView2 = () =>{
        // const items = [];
        
        // for (item of dataSource) {
        //     items.push(
        //       <RowComponent data = {item}/>
        //     );
        // }
        // return items;
          return(
              <View style = {{flex:1}}>
                    <View >
                    <Slider changeState = {this.inflationChanger} sliderValue = {this.state.inflation} type='Inflation'/>
                     </View>
                    
                     {/* <HeadingRowComponent/>
                   */}
                    
                    <ScrollView contentContainerStyle={{height:300}}>
                       <FlatList
                       data = {dataSource}
                       numColumns={1}
                       renderItem = {({item,key})=>(
                       <View>
                           <RowComponent data = {item}/>
                       </View>
                       )}
                       />
                    </ScrollView>
              </View>
          );
      }
      
   beforeRetirement = () =>{
       return(
        <View style={{padding:10,paddingTop:0,marginTop:-20}}>
        <VictoryChart
            // domain={{ x: [25,55] }}
            theme={VictoryTheme.material}
            height={300}
            width={350}
            containerComponent={
                <VictoryZoomVoronoiContainer
                // cursorDimension="x"
                cursorLabelOffset={{ x: 5, y: -10 }}
                    labels={(d) => `${d.x}, ${d.y}`}
                />
                }
        >
            <Defs>
            <LinearGradient id="gradientStroke"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
            >
            <Stop offset="10%" stopColor="#008aefcb" stopOpacity="1" />
            <Stop offset="100%" stopColor="#52da9c" stopOpacity="0" />
            </LinearGradient>
            </Defs>

            <VictoryArea
            data={data}
            interpolation="natural"
            style={{
            data: {
                fill: 'url(#gradientStroke)',
                stroke: '#1E93FA',
                strokeWidth: 2
            }
            }}
            />
        </VictoryChart>
        <View style={styles.row}>
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
        </View>
        <View>
            <View style = {[styles.currentPlanHeader,{borderTopColor:'#b3b3b3',backgroundColor:'#b8b8b8',borderTopWidth:1,marginTop:3}]}>
                <Text style = {styles.currentPlanText}>Current Plan</Text>
            </View>
           <View style = {styles.currentPlanHeader}>
               <Text style = {styles.currentPlanText}>Current Age</Text>
               <Text style = {styles.currentPlanText}>{this.state.currentAge}</Text>
           </View>
           <View style = {styles.currentPlanHeader}>
               <Text style = {styles.currentPlanText}>Retirement Year</Text>
               <Text style = {styles.currentPlanText}>{this.state.retirementAge}</Text>
           </View>
           <View style = {styles.currentPlanHeader}>
               <Text style = {styles.currentPlanText}>Life Expectency</Text>
               <Text style = {styles.currentPlanText}>{this.state.lifeExpectency}</Text>
           </View>
           <View style = {styles.currentPlanHeader}>
               <Text style = {styles.currentPlanText}>Annual Contribution</Text>
               <Text style = {styles.currentPlanText}>{this.state.annualContribution}</Text>
           </View>
           <View style = {styles.currentPlanHeader}>
               <Text style = {styles.currentPlanText}>Annual Retirement Expenses</Text>
               <Text style = {styles.currentPlanText}>{this.state.annualRetirementExpenses}</Text>
           </View>
           <View style = {styles.currentPlanHeader}>
               <Text style = {styles.currentPlanText}>Investment Strategy</Text>
               <Text style = {styles.currentPlanText}>{this.state.investmentStrategy}</Text>
           </View>
        </View>                
    </View>           
       );
   }
   afterRetirement = () =>{
        return(
           <ScrollView>
               <VictoryChart
                    // domain={{ x: [25,55] }}
                    theme={VictoryTheme.material}
                    height={300}
                    width={350}
                    containerComponent={
                        <VictoryZoomVoronoiContainer
                        // cursorDimension="x"
                        cursorLabelOffset={{ x: 5, y: -10 }}
                            labels={(d) => `${d.x}, ${d.y}`}
                        />
                        }
                >
                    <Defs>
                    <LinearGradient id="gradientStroke"
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                    >
                    <Stop offset="10%" stopColor="#008aefcb" stopOpacity="1" />
                    <Stop offset="100%" stopColor="#52da9c" stopOpacity="0" />
                    </LinearGradient>
                    </Defs>

                    <VictoryArea
                    data={data}
                    interpolation="natural"
                    style={{
                    data: {
                        fill: 'url(#gradientStroke)',
                        stroke: '#1E93FA',
                        strokeWidth: 2
                    }
                    }}
                    />
                </VictoryChart>
               <View pointerEvents="none" style = {{marginTop:-60}}>
                    <VictoryChart  theme={VictoryTheme.material} domainPadding={10}
                    height={300}
                    width={350}
                    >
                        <VictoryBar
                            standalone={false}
                            style={{ data: { fill: "#416ce1" } }}
                            data={sampleData}
                        />
                    </VictoryChart>
                </View>
                <View style={[styles.row,{marginBottom:5}]}>
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
                                   
                </View>
                <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center',marginLeft:20}}>
                        <Text style={{color:'green',fontSize:60,marginTop:-35,marginRight:5}}>.</Text>
                        <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}>Retirement Assets</Text>
                </View>
            </ScrollView>
        );
    }
    futureExpenses = () =>{
        return(
        <View>
           <View pointerEvents="none" style = {{marginTop:-10}}>
                <VictoryChart  theme={VictoryTheme.material} domainPadding={10}
                height={300}
                width={350}
                >
                    <VictoryBar
                        standalone={false}
                        style={{ data: { fill: "#416ce1" } }}
                        data={sampleData}
                    />
                </VictoryChart>
            </View>
            <View style={[styles.row,{marginBottom:5}]}>
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
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin:20}}>
                <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}>Your Total Expenses</Text>
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
                    <Picker.Item label="2023" value="Custom" />
                </Picker>
                </View>
                <Text style={{fontSize:18,fontWeight:'600',color:'#404a57'}}> to</Text>
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
                    <Picker.Item label="2074" value="Custom" />
                </Picker>
                </View>
            </View>     
        </View>
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
                
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    children={ <Text>hello</Text> }
                    width='100%'
                    height={430}
                    onBackdropPress={() => this.modalAction(false)}
                    onDismiss={()=>this.modalAction(false)}
                    overlayStyle={{bottom:0,position: 'absolute'}}
                    animationType='fade'
                  >
                    { this.state.isVisible?this.modalView():null }  
                        
                  </Overlay>
                  <Overlay
                    isVisible={this.state.isVisible2}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    children={ <Text>hello</Text> }
                    width='100%'
                    height={400}
                    onBackdropPress={() => this.modalAction2(false)}
                    onDismiss={()=>this.modalAction2(false)}
                    overlayStyle={{bottom:0,position: 'absolute'}}
                    animationType='fade'
                  >
                   
                    { this.state.isVisible2?this.modalView2():null }  
                   
                     
                  </Overlay>
                 
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
        backgroundColor:'#416ce1',width:80,height:35,padding:20
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
        bottom: 11,
        right: 10,
        fontSize: 20
     },
    
     pickerContent: {
        color:'white',
        backgroundColor: "transparent",
        height: 35, width:70,
     },

})
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

dataSource= [
            {
                key:'0',
                category:'Account fees',
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
