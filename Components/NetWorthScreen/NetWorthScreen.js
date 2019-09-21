
import {Image, View,Text,StyleSheet,Picker,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import React ,{Component}from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import NetWorthAccordion from './NetWorthAccordion'
import NetWorthChart from './NetWorthChart';

export default class NetWorthScreen extends Component {
    static navigationOptions = {
       
        headerTitle:'Net Worth',
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
            source={require("../../assets/netWorthIcon.png")}
            style={{ width: 31, height: 31, tintColor:tintColor}}
            />
        ),
        };
      
      state = {
          language:'this_month',
          expanded:true
      }
      renderAccordians=()=> {
        const items = [];
        
        for (item of mydata2) {
            items.push(
                <NetWorthAccordion
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
    toggleExpand=()=>{
        this.setState({expanded : !this.state.expanded})
    }
    render() {
        return (
            <ScrollView style = {styles.container}>
                <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginLeft:10,marginRight:10}}>
                    <View style = {{padding:2}}>
                        <Text style = {{fontSize:15,fontWeight:'bold',color:'#404a57'}}>Net Worth</Text>
                        <Text style ={{color:'#34d86a',fontSize:20,fontWeight:'bold'}}>$ 30,690.0</Text>
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
                <View style={{padding:10,paddingTop:0,marginTop:-20}}>
                   <NetWorthChart/>
                </View>
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <View style={{width:Dimensions.get('window').width-150,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#416ce1',fontSize:60,marginTop:-35,marginRight:5}}>.</Text>
                        <Text style={[styles.title]}>Mortages</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:'red',marginRight:10}}>$10,000</Text>
                        <MaterialIcons name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
                    </View>                
                </TouchableOpacity>
                <ScrollView>
                    {this.state.expanded && this.renderAccordians()}
                </ScrollView>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    pickerWrapper: {
        backgroundColor: "#416ce1",
        borderRadius: 4,
        alignItems:'center',
        height:'70%',
        marginTop:'5%'
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
        height: 40, width:130,
     },
     title:{
        fontSize: 16,
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