import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import OtherAssetsAccordion from './OtherAssetsAccordion';
import PieChart from '../../common/PieChart'
import DialogInput from 'react-native-dialog-input';
import { TextField } from 'react-native-material-textfield';
import Modal from "react-native-modal";
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import Dialog, {DialogButton, DialogContent,DialogTitle,DialogFooter} from 'react-native-popup-dialog';


var otherassets_data = [
    { x: "Gold", y: 75 ,r:120,ir:90},
    { x: "Silver", y: 140 ,r:120,ir:90},
    { x: "Jewelry", y: 65 ,r:120,ir:90},
    { x: "Cars", y: 25 ,r:120,ir:90}
    ]







var otherassets_data = [		
    { x: "Gold", y: 75 ,r:120,ir:90},		
    { x: "Silver", y: 140 ,r:120,ir:90},		
    { x: "Jewelry", y: 65 ,r:120,ir:90},		
    { x: "Cars", y: 25 ,r:120,ir:90}		
    ]

mydata=[
    {
        key:'1',
        title:'Gold',
        value:'$1,000',
        color:'#416ce1',
        items:[
            {key:'024DDMB754',name:'International Equity Index',value:'$1,000'}
        ]
    },
    {
        key:'2',
        title:'Silver',
        value:'$1,000',
        color:'green',
        items:[
            {key:'024DDMB754',name:'International Equity Index',value:'$1,000'}
        ]
    },
    
]

export default class OtherAssets extends Component{
    constructor(props){

        super(props);
        this.state = {
            addVisible:false,
            delVisible:false,
            delItemIndex:-1,
            name:"",
            value:""
        };

        this.updateSelection = this.updateSelection.bind(this);
   }
   
    
    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets.bind(this),delotherassets:this.delOtherAssets.bind(this)});
    }
    addOtherAssets(){
       
       this.setState({addVisible:true});
       
    }

    updateSelection(delItemIndex){
        
        this.setState({delItemIndex:delItemIndex});
       
    }

    delOtherAssets(){
        if(this.state.delItemIndex===-1){
        this.setState({delVisible:true});
        }
        else{
            console.log(this.state.delItemIndex);
            mydata.splice(this.state.delItemIndex,1);
            this.setState({delItemIndex:-1})
        }
    }
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return{
        headerTitle:'Other Assets',
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
            <View style={{flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>params.addotherassets()}>
                <AntDesign   
                name='pluscircle'
                size={30}
                style={{color:'green',marginRight:10}}
                />
                 
           </TouchableOpacity>
            <TouchableOpacity onPress={()=>params.delotherassets()}>
            <AntDesign   
            name='minuscircle'
            size={30}
            style={{color:'green',marginRight:10}}
            />
            </TouchableOpacity>
            </View>
           )
           };};
      
  
    renderAccordians=()=> {
        const items = [];
        
        for (i=0;i<mydata.length;i++) {
            
            items.push(
                <OtherAssetsAccordion
                    color={mydata[i].color}
                    key={mydata[i].key}
                    title = {mydata[i].title}
                    value = {mydata[i].value}
                    data = {mydata[i].items}
                    index={i}
                    updateSelection = {this.updateSelection}
                    delItemIndex = {this.state.delItemIndex}        
                />
            );
        }
        return items;
    }

   
    render(){
        return(
            <View style = {styles.container}>

               <Modal isVisible={this.state.delVisible}>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                     <View style={{
                       backgroundColor:'white',
                       width:250,
                       height:192,
                       alignItems:'center',
                       borderRadius:10,
                       padding:20
                       }}>

                    

                       <Text style ={{fontSize:20}}>Select an asset from the list to delete, and then press the delete icon to delete it.</Text>
                       <Button style={{width:65,marginTop:12,backgroundColor:'#348ceb'}} 
                            onPress = {()=>this.setState({delVisible:false})}><Text style={{color:'white',fontSize:20}}>Ok</Text>
                        </Button>
                    </View>
                   </View>
               </Modal>


                <Modal
                 isVisible={this.state.addVisible}
               >

                   <View alignItems='center' style={{flex:1}}>
                   <View style={{
                       backgroundColor:'white',
                       width:250,
                       height:280,
                       marginTop:70,
                       borderRadius:10
                       }}>

                    <View alignItems='center'>
                    <Text style={{fontSize:25,marginTop:10,color:'#615f5b'}}>Add Asset</Text>
                    </View>

                    <TextField
                        
                        label='Name'
                        animationDuration={200}
                        inputContainerStyle={styles.inputStyle}
                        onChangeText={(name) => this.setState({name})}
                    />

                    <TextField
                        

                        label='Value'
                        animationDuration={200}
                        inputContainerStyle={styles.inputStyle}
                        onChangeText={(value) => this.setState({value})}
                    />   
      
                
                     <View alignItems='center' flexDirection='row' style={{marginTop:15}}>
                        
                            <Button style={{width:90,marginLeft:20,marginRight:30,backgroundColor:'#348ceb'}} 
                            onPress = {()=>this.setState({addVisible:false})}><Text style={{color:'white'}}>Cancel</Text></Button>
                            
                        

                        
                            <Button style={{width:90,marginRight:20,backgroundColor:'#348ceb'}} 
                            onPress = {()=>{
                                
                                mydata.push({
                                    key:'9sadf',
                                    title:this.state.name,
                                    value:'$'+this.state.value,
                                    color:'green',
                                    items:[
                                        {key:'024DDMB7548974567',name:'International Equity Index',value:'$1,000'}
                                    ]
                                });
                                this.setState({addVisible:false});
                            
                            }}><Text style={{color:'white'}}>Add</Text></Button>
                            
                        
                    </View>

                </View>
                </View>
                
                </Modal>
                 <View>
                    <PieChart data = {otherassets_data}/>	
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
    inputStyle:{
        
        marginLeft:20,
        marginRight:20
        
    }
  });