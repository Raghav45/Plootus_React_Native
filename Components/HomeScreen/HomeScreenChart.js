import {VictoryArea,VictoryChart,createContainer,VictoryTheme, VictoryTooltip,VictoryBar,VictoryLine} from 'victory-native';
import {Defs,LinearGradient,Stop} from 'react-native-svg';
import {View,Text,StyleSheet} from 'react-native';
import React from 'react'
import {Card} from 'react-native-elements';
const VictoryZoomVoronoiContainer = createContainer( "cursor","voronoi");

sampleData=[
    { key:'1',x: 'Jan', y: 7, c0: 2,date:'18 Jan 2019',bank:'Bank Of India',txid:'76jhdg74rh4h848r58'},
    { key:'2',x: 'Feb', y: 6, c0: 1.5, date:'08 Feb 2019',bank:'Bank Of Baroda',txid:'76jhdg74rh4h848r58'},
    { key:'3',x: 'March', y: 5, c0: 2 ,date:'19 March 2019',bank:'State Bank of India',txid:'76jhdg74rh4h848r58'},
    { key:'4',x: 'Apr', y: 4, c0: 1 ,date:'18 Apr 2019',bank:'Bank Of India',txid:'76jhdg74rh4h848r58'},
    { key:'5',x: 'May', y: 3, c0: 2 ,date:'15 May 2019',bank:'Bank Of India',txid:'76jhdg74rh4h848r58'},
    { key:'6',x: 'June', y: 2, c0: 4 ,date:'11 June 2019',bank:'Canara Bank',txid:'76jhdg74rh4h848r58'},
    // { key:'7',x: 'July', y: 1, c0: 1 ,date:'28 July 2019',bank:'Punjab National Bank',txid:'76jhdg74rh4h848r58'},
  ]
data = [
    {key:'1',x:25,y:100,},
    {key:'2',x:30,y:210,},
    {key:'3',x:35,y:290,},
    {key:'4',x:40,y:420,},
    {key:'5',x:45,y:500,},
    {key:'6',x:50,y:580,},

]
export const RetirementAssets = ()=>(
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
            <Text style ={customStyles.textStyle2}>=</Text>
            <Text style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>[</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$1.8K</Text>
            </View>
            <Text style ={customStyles.textStyle2}>+</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$5.0K</Text>
            </View>
            <Text  style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>]</Text>
            <Text style ={customStyles.textStyle2}>*</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>5.2%</Text>
            </View>
        </View>
        <View style={customStyles.circleType}>
            <Text  style={[customStyles.textType,{marginLeft:-5}]}> Retirement Assets </Text>
            <Text  style={[customStyles.textType,{marginLeft:8}]}>Opening Balance</Text>
            <Text  style={[customStyles.textType,{marginLeft:5}]}> Contribution </Text>
            <Text  style={[customStyles.textType,{marginLeft:5}]}> Conservative Stragey </Text>
        </View>
    </View>

        <VictoryChart
        // domain={{ x: [25,55] }}
        theme={VictoryTheme.material}
        height={250}
        width={300}
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
            <Text style ={customStyles.textStyle2}>=</Text>
            <Text style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>[</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$674.8K</Text>
            </View>
            <Text style ={customStyles.textStyle2}>+</Text>
            <View style ={customStyles.circle}>
            <Text style ={customStyles.textStyle}>$323.0K</Text>
            </View>
            <Text  style ={[customStyles.textStyle2,{fontSize:70,fontWeight:'200'}]}>]</Text>
            <Text style ={customStyles.textStyle2}>-</Text>
            <View style ={[customStyles.circle,{borderColor:'#e4747a'}]}>
            <Text style ={customStyles.textStyle}>$1.3M</Text>
            </View>
        </View>
        <View style={customStyles.circleType}>
            <Text  style={[customStyles.textType,{marginLeft:-5}]}> Retirement Gap </Text>
            <Text  style={[customStyles.textType,{marginLeft:8}]}> Retirement Assets </Text>
            <Text  style={[customStyles.textType,{marginLeft:5}]}>After Retirement Retuens</Text>
            <Text  style={[customStyles.textType,{marginLeft:5}]}>  Projected Future Expenses </Text>
        </View>
    </View>
    <View pointerEvents="none">
        <VictoryChart  theme={VictoryTheme.material} domainPadding={10}
         height={250}
         width={300}
        >
            <VictoryBar
                standalone={false}
                style={{ data: { fill: "#c43a31" } }}
                data={sampleData}
            />
        </VictoryChart>
    </View>
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
       height:60,
       width:60,
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
        fontWeight: 'bold',
        fontSize: 15,
        color:'#5c5eb9'
    },
    textStyle2 :{
        fontWeight: 'bold',
        fontSize: 40,
        color:'#5c5eb9'
    },
    textHeader:{
        fontWeight:'300',
        fontSize:23,
        
    },
    circleType:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    textType:{
        width:80,
        textAlign: 'center',
        color:'#5c5eb9',
        fontSize:13
    }
  });