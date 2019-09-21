
import {View,Text,StyleSheet} from 'react-native';
import React from 'react'
import {Card,Icon} from 'react-native-elements';
import BeforeRetirementChart from '../common/BeforeRetirementChart';
import AfterRetirementChart from '../common/AfterRetirementChart';
import FutureExpenseChart from '../common/FutureExpenseChart';


export const RetirementAssets = ({retirementAge})=>(
<Card containerStyle = {{borderRadius:5}}>
    <View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={customStyles.textHeader}>Retirement Assets </Text>
            <Text style={[customStyles.textHeader,{color:'#4ebb78'}]}>$674.8K</Text>
        </View>
        <View style={customStyles.formulaCard}>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$60.8K</Text>
            </View>
            <Text style ={[customStyles.textStyle2,{marginRight:1,marginLeft:2,fontWeight:'bold',fontSize:30}]}>=</Text>
            <Text style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'100'}]}>[</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$1.8K</Text>
            </View>
            <Icon 
             type='entypo'
             name='plus' 
             color='#5c5eb9' 
             size={21} 
             containerStyle={{marginTop:6,}}
             />
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$5.0K</Text>
            </View>
            <Text  style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>]</Text>
            <Icon 
             type='foundation'
             name='asterisk' 
             color='#5c5eb9' 
             size={19} 
             containerStyle={{marginTop:6,marginLeft:1,marginRight:5}}
             />
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>5.2%</Text>
            </View>
        </View>
        <View style={customStyles.circleType}>
            <Text  style={[customStyles.textType,{}]}> Retirement Assets </Text>
            <Text  style={[customStyles.textType,{marginLeft:2}]}>Opening Balance</Text>
            <Text  style={[customStyles.textType,{}]}> Contribution </Text>
            <Text  style={[customStyles.textType,{marginRight:4}]}> Conservative Strategy </Text>
        </View>
    </View>

    <BeforeRetirementChart retirementAge = {retirementAge}/>

</Card>    
);


export const RetirementGap = () => (      
<Card containerStyle = {{borderRadius:5}}>
<View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={customStyles.textHeader}>Retirement Gap</Text>
            <Text style={[customStyles.textHeader,{color:'#e4747a'}]}>$-371.1K</Text>
        </View>
        <View style={customStyles.formulaCard}>
            <View style ={[customStyles.circle,{borderColor:'#e4747a'}]}>
            <Text style ={customStyles.textStyle}>$-371.1K</Text>
            </View>
            <Text style ={[customStyles.textStyle2,{marginRight:1,marginLeft:2,fontWeight:'bold',fontSize:30}]}>=</Text>           
             <Text style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>[</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$674.8K</Text>
            </View>
            <Icon 
             type='entypo'
             name='plus' 
             color='#5c5eb9' 
             size={21} 
             containerStyle={{marginTop:6,}}
             />
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$323.0K</Text>
            </View>
            <Text  style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>]</Text>
            <Text style ={[customStyles.textStyle2,{marginRight:4,marginLeft:2,fontWeight:'bold',fontSize:30}]}>-</Text>           
            <View style ={[customStyles.circle,{borderColor:'#e4747a'}]}>
            <Text style ={customStyles.textStyle}>$1.3M</Text>
            </View>
        </View>
        <View style={customStyles.circleType}>
            <Text  style={[customStyles.textType,{marginLeft:5}]}>Retirement Gap</Text>
            <Text  style={[customStyles.textType,{marginLeft:8}]}>Retirement Assets</Text>
            <Text  style={[customStyles.textType,{marginLeft:5}]}>After Retirement Returns</Text>
            <Text  style={[customStyles.textType,{marginLeft:5}]}>Projected Future Expenses</Text>
        </View>
    </View>

    <AfterRetirementChart/>
    <FutureExpenseChart/>
</Card>    
);

var customStyles = StyleSheet.create({
    formulaCard:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:5,
        alignItems:'center',
        justifyContent:'center'
    },
   circle:{
       height:57,
       width:57,
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
       borderBottomLeftRadius: 30,
       borderBottomRightRadius:30,
       borderWidth:2,
       borderColor:'#57ea97',
       alignItems:'center',
       justifyContent:'center'
    },
    textStyle :{
        
        fontSize: 12,
        color:'#404a57'


    },
    textStyle2 :{
        fontFamily:'sans-serif-thin',
        fontSize: 40,
        color:'#5c5eb9'
    },
    textHeader:{
        fontWeight:'300',
        fontSize:23,
        
    },
    circleType:{
        marginTop:-3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        

    },
    textType:{
        width:81,
        textAlign: 'center',
        color:'#5c5eb9',
        fontSize:13
    }
  });