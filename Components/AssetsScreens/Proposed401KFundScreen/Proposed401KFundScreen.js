import React, { Component } from 'react'
import {View,StyleSheet,ScrollView,TouchableOpacity,Text,Dimensions} from 'react-native'
import {VictoryPie ,VictoryTheme} from 'victory-native'
import Accordion401k from './Accordion401k';
import {MaterialIcons} from '@expo/vector-icons'
import { withNavigation } from 'react-navigation';


class Proposed401KFundScreen extends Component {

    constructor(props){super(props);}
    componentDidMount(){
        this.props.navigation.setParams({ addotherassets: this.addOtherAssets });
    }
    addOtherAssets = ()=>{
        alert("Refresh successfully")
        
    }
    static navigationOptions = ({navigation,state }) => {
        return{
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
            )
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

  mydata4=[
    {
        key:'1234',
        title:'***RSP',
        value:'$1000',
        color:'#416ce1',
        employer:'General Electric Company',
        dest:'RspScreen'
    },
    {
        key:'23456',

        title:'***PLAN',
        value:'$1000',
        color:'green',
        employer:'ING Financial Service LLC',
        dest:'Planscreen'
    },
    

]

export default withNavigation(Proposed401KFundScreen);