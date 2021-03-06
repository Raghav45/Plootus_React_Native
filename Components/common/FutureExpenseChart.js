import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {VictoryArea,VictoryChart,createContainer,VictoryTooltip,VictoryScatter,VictoryTheme,VictoryBar,VictoryAxis } from 'victory-native';
import {range, first, last,maxBy,rangeRight } from 'lodash';
import Svg,{Line} from 'react-native-svg';

const VictoryZoomVoronoiContainer = createContainer( "cursor","voronoi");

const ar_data = range(20,81,10).map((x) => ({x, y:6400-x*x,size:5}));

const findClosestPointSorted = (data, value) => {  
  if (value === null) return null;
	const start = first(data).x;
    const range = (last(data).x - start);
  const index = Math.round((value - start)/range * (data.length - 1));
  return data[index];
};

export default class FutureExpenseChart extends Component {
    componentWillMount()
    {
        this.setState({ymax:maxBy(ar_data,function(o) { return o.y; }).y})
    }
    
    state = {
        activePoint:null,
        data:data,
        ymax :0
    }
    handleCursorChange(value) {           
                // console.log(this.state.activePoint)                                                                                                                                                                                                                                                                                                                                                                                                                                  
  	this.setState({
    	activePoint: findClosestPointSorted(ar_data, value)
    });
  }
  
    render() {
        const { activePoint } = this.state;
        const point = activePoint ?
            <VictoryScatter name = "scatter" data={[activePoint]} style={{data: {height:200,fill:'#ffffff',stroke:'#dc0615',strokeWidth:2} }}/>
          : null;
          
        return (
            <View style={{alignItems:'center'}}>
                <VictoryChart
                       theme={VictoryTheme.material}
                    height={300}
                    width={335}
                    containerComponent={
                        <VictoryZoomVoronoiContainer
                        width={300}
                        voronoiDimension="x"
                        cursorDimension="x"
                        voronoiBlacklist={["scatter"]}
                        labelComponent={<VictoryTooltip style={{fill:'#ffffff'}}  flyoutStyle={{
                        fill:  'rgba(52, 52, 52, 1)',}}/>}
                        onCursorChange={(value)=>{this.handleCursorChange(value)}}
                        labels={cursor => {
                            
                            try {
                                
                                return(`At Age:${activePoint.x}\nAssets:$${Math.round(activePoint.y)}`)
                            } catch (error) {
                                console.log(error)
                            }
                        }}
                        />
                    }
                 >
             <VictoryAxis  
                    label="Age"
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
                    label='Annual Expenses'
                    dependentAxis 
                    style={{
                    axisLabel:{
                        padding:40,
                        
                        },
                    }}
                    tickFormat={(t) => `${t/1000}k`}
                />
            <VictoryBar
                 cornerRadius={{top:8,bottom:8}}
                 standalone={false}
                     style={{ data: { fill: "#416ce1" } }}
                     data={fe_data}
                     domainPadding={{ x: 10 }}
                 />
             
          {activePoint?<Line  x1= {50} x2="300" y1={250-(200/this.state.ymax)*activePoint.y} y2={250-(200/this.state.ymax)*activePoint.y} stroke="black" strokeWidth="1"/>:null}
         
        </VictoryChart>
            </View>
        )
    }
}

const styles = StyleSheet.create({})




















// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'
// import {VictoryChart,VictoryBar,VictoryTheme} from 'victory-native'
// import {range} from 'lodash';


const fe_data = range(20,81,10).map((x) => ({x, y:6400-x*x,size:5}));
// export default class FutureExpenseChart extends Component {
//     render() {
//         return (
//             <View pointerEvents="none">
//             <VictoryChart  theme={VictoryTheme.material} domainPadding={10}
//             height={300}
//             width={350}
//             >
//                 <VictoryBar
//                     standalone={false}
//                     style={{ data: { fill: "#416ce1" } }}
//                     data={fe_data}
//                 />
//             </VictoryChart>
//         </View>
//         )
//     }
// }

// const styles = StyleSheet.create({})
