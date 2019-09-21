import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {VictoryArea,VictoryChart,createContainer,VictoryLabel,Flyout,VictoryTooltip,VictoryScatter,VictoryTheme,VictoryAxis } from 'victory-native';
import {range, first, last,maxBy } from 'lodash';
import Svg,{Line} from 'react-native-svg';

const VictoryZoomVoronoiContainer = createContainer( "cursor","voronoi");

// const br_data = 

const findClosestPointSorted = (data, value) => {  
  if (value === null) return null;
	const start = first(data).x;
    const range = (last(data).x - start);
  const index = Math.round((value - start)/range * (data.length - 1));
  return data[index];
};

export default class BeforeRetirementChart extends Component {
    componentWillMount()
    {
        this.setState({ymax:maxBy(this.state.br_data,function(o) { return o.y; }).y})
    }
    
    state = {
        activePoint:null,
        br_data:range(20,this.props.retirementAge+1).map((x) => ({x, y: x*x,size:5})),
        ymax :0,
        retirementAge:this.props.retirementAge
    }
    handleCursorChange(value) {           
                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  	this.setState({
    	activePoint: findClosestPointSorted(this.state.br_data, value)
    });
  }
  componentWillReceiveProps(nextProps){
      this.setState({retirementAge:nextProps.retirementAge,
        br_data:range(20,nextProps.retirementAge+1).map((x) => ({x, y: x*x,size:5}))})
  }
    render() {
        const { activePoint ,br_data} = this.state;
        const point = activePoint ?
            <VictoryScatter name = "scatter" data={[activePoint]} style={{data: {height:200,fill:'#ffffff',stroke:'#1bad53',strokeWidth:2} }}/>
          : null;
          
        return (
            <View style={{alignItems:'center'}}>
                <VictoryChart
                   
                    theme={VictoryTheme.material}
                    height={300}
                    width={335}
                    maxDomain={{ x:this.state.retirementAge }}
                    containerComponent={
                        <VictoryZoomVoronoiContainer
                        width={310}
                        mouseFollowTooltips={true}
                        style={{alignItems:'center',paddingLeft:20}}
                        voronoiDimension="x"
                        cursorDimension="x"
                        voronoiBlacklist={["scatter"]}
                        cursorlabelComponent={<VictoryTooltip textAnchor='start' style={{fill:'#ffffff'}}  flyoutStyle={{
                        fill:  'rgba(52, 52, 52, 1)',}}/>}
                        onCursorChange={(value)=>{this.handleCursorChange(value)}}
                        labels={cursor => {
                            
                            try {
                                
                                return(activePoint.x?`At Age:${activePoint.x}\nAssets:$${Math.round(activePoint.y)}`:null)
                            } catch (error) {
                                console.log(error)
                            }
                        }}
                        />
                    }
                 >
                <VictoryAxis  
                    label='Age'
                    style={{
                    axisLabel:{
                        padding:35,
                        
                        },
                    
                    grid: {
                        stroke: "#ffff"
                    }
                    }}
                />
                <VictoryAxis 
                    
                    dependentAxis 
                    
                    style={{
                        axisLabel:{
                           padding:40,
                           
                        },
                        
                    }}
                    label='Retirement Assets'
                    tickFormat={(t) => (t>=1000 ? `${t/1000}m`  :`${t}k`)}
                />
            {/* <Defs>
            <LinearGradient id="gradientStroke"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
            >
            <Stop offset="10%" stopColor="#008aefcb" stopOpacity="1" />
            <Stop offset="100%" stopColor="#52da9c" stopOpacity="0" />
            </LinearGradient>
            </Defs> */}

            <VictoryArea
            name = "area"
           
            data={br_data}
            interpolation="cardinal"
            style={{
            data: { 
                fill: '#1bad53',
                stroke: '#05a543',
                strokeWidth: 2
            }
            }}
            />
             {point}
             
          {activePoint?<Line  x1= {50} x2="300" y1={250-(200/this.state.ymax)*activePoint.y} y2={250-(200/this.state.ymax)*activePoint.y} stroke="black" strokeWidth="1"/>:null}
         
        </VictoryChart>
            </View>
        )
    }
}

const styles = StyleSheet.create({})