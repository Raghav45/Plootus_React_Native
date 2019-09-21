import React, { Component } from 'react'
import {ActivityIndicator} from 'react-native'
import { Text, StyleSheet, View, TouchableOpacity,Dimensions,ScrollView,FlatList} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { Icon , Overlay,Button} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';




const screen_width = Dimensions.get('window').width
rsp_data = [
    {
        key:'1',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'2',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'3',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'4',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'5',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'6',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'7',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'8',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
    {
        key:'9',
        fi:'TP8B/17',
        title:'Target Ret Income',
        propose:0,
        current:0
    },
]
export default class PlanScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            search:'',
            b1C:'#416ce1',
            b2C:'white',
            b3C:'white',
            b4C:'white'
        };
    }
    componentDidMount(){
        this.props.navigation.setParams({ refreshScreen: this.refreshScreen });
    }
    refreshScreen = ()=>{
        alert("Refresh successfully")
        
    }

    updateSearch = search => {
        this.setState({ search });
      };
    
    
    static navigationOptions = ({navigation,state }) => {
        return{
        headerTitle:'Plan',
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
            <TouchableOpacity onPress={()=>{const iconPress = navigation.getParam('refreshScreen');iconPress()}}>
                 <MaterialIcons   
                 name='refresh'
                 size={30}
                 style={{marginRight:10}}
                 />
            </TouchableOpacity>
            )
        };
      }
      state = {
          isVisible:false,
          timePassed:false
      }
      switchRP = () =>{
        //   this.setState({isVisible:true})
          this.props.navigation.navigate('RetirementPlannerScreen')

      }
   
      
      renderTable = ({item,key}) =>{
          bcolor = item.key%2==0?'#f8f8f8':'#ffffff'
         
          return(
            <View  style = {[styles.subContainer,{backgroundColor:bcolor}]}>
                <View>
                    <Text style = {[styles.textTableContent2]}>{item.title}</Text>
                    <Text style = {styles.textTableContent2}>FI:{item.fi}</Text>
                </View>
                <View>
                <Text style = {[styles.textTableContent,{paddingRight:'14%',marginRight:'9%'}]}>{item.current}%</Text>
                </View>
                <View>
                <Text style = {[styles.textTableContent,{paddingRight:'10%'}]}>{item.propose}%</Text>
                </View>
            </View>
          );
      }
    render() {
        return (
            <View style = {styles.container}>
               <View style = {[styles.subContainer,{backgroundColor:'#416ce1',borderColor:'#416ce1'}]}>
                    <MaterialIcons   
                    name='monetization-on'
                    size={30}
                    style={{marginRight:10,color:'white'}}
                    />
                    <TouchableOpacity  onPress={()=>{this.switchRP()}}>
                        <Text style ={{color:'white',fontSize:12,textDecorationLine: 'underline'}}>Access retirement account to change investment option</Text>
                    </TouchableOpacity>
               </View>
               
               <View style = {[styles.subContainer,{justifyContent:'center',backgroundColor:'#ffffff',paddingTop:'4%'}]}>
                    <Text style = {{color:'#416ce1',fontSize:18}}>ING Financial</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('EmployerSearchScreen')}}style={{justifyContent:'center',marginLeft:'3%',width:35,height:35,borderRadius:35/2,backgroundColor:'#52da9c'}}>


                    <Icon
                        name='search'
                        color='white' />
                        
                    

                    </TouchableOpacity>
               </View>
               <View style={{marginBottom:'2%',flexDirection:'row',justifyContent:'space-evenly',paddingBottom:10}}>
        <Button
          title="Conservative"
          type="outline"
          buttonStyle={{backgroundColor:this.state.b1C,height:30,borderColor:'#777676'}}
          titleStyle={{fontSize:13,fontWeight:'100',color:this.state.b1C==='#416ce1'?'white':'black'}}
          containerStyle={{width:100,}}
          onPress={()=>{console.log(this.state.b1C),this.setState({ b1C:'#416ce1',b2C:'white',b3C:'white',b4C:'white'})}}
        />
        <Button
          title="Moderate"
          type="outline"
          buttonStyle={{backgroundColor:this.state.b2C,height:30,borderColor:'#777676'}}
          containerStyle={{width:80}}
          titleStyle={{fontSize:13,color:this.state.b2C==='#416ce1'?'white':'black'}}
          onPress={()=>{this.setState({ b2C:'#416ce1',b1C:'white',b3C:'white',b4C:'white'})}}
        />
        <Button
          title="Growth"
          type="outline"
          buttonStyle={{height:30,backgroundColor:this.state.b3C,borderColor:'#777676'}}
          containerStyle={{width:70}}
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
               <View style = {[styles.subContainer,{backgroundColor:'#f8f8f8',height:'7%'}]}>
                   <Text style = {styles.textTableHeader2}>Investment</Text>
                   <Text style = {styles.textTableHeader}>Current</Text>
                   <Text style = {[styles.textTableHeader]}>Proposed</Text>
               </View>
               <ScrollView>
                <FlatList
                    data={rsp_data}
                    renderItem={this.renderTable}
                />
               </ScrollView>
               <View style = {[styles.subContainer,{height:'7%'}]}>
                   <View>
                    <Text style = {[styles.textTableContent2,{fontWeight:'500'}]}>Total</Text>
                    </View>
                    <View>
                    <Text style = {[styles.textTableContent,{fontWeight:'500',paddingRight:'10%',marginRight:'9%'}]}>100%</Text>
                    </View>
                    <View>
                    <Text style = {[styles.textTableContent,{fontWeight:'500',paddingRight:'12%'}]}>__</Text>
                    </View>
               </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    subContainer:{
        flexDirection:'row',justifyContent:'space-around',
        alignItems:'center',backgroundColor:'#ffffff',
        borderTopColor:'#c6cbde',borderTopWidth:1,padding:5
    },
    textTableHeader:{
        fontSize:15,fontWeight:'400',width:screen_width/4-10,textAlign:'center'
    },
    textTableContent:{
        fontSize:14,fontWeight:'400',width:screen_width/4-20,textAlign:'center'
    },
    textTableHeader2:{
        fontSize:15,fontWeight:'400',width:screen_width/2-10,textAlign:'center'
    },
    textTableContent2:{
        fontSize:14,fontWeight:'400',width:screen_width/2-20,marginLeft:'16%'
    }
})