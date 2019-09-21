import React, { Component } from 'react'
import {VictoryPie,VictoryTheme,VictoryLabel} from 'victory-native';
import Svg from 'react-native-svg'
import _ from 'lodash';
import { pie_chart_color } from './PieChartColor';

export default class PieChart extends Component {
   state = {
     activeSliceName:'',
     activeSliceValue:'',
     activeSlicePercent:'',
     data:_.sortBy(this.props.data, [function(x) { return x.y; }]),
     dataSum:_.sumBy(this.props.data, 'y'),
     activeSliceColor:''
   }
   componentWillReceiveProps(nextProps){
    this.changeData2(nextProps.data)
    // console.log(this.state.data,)
   }
   
  componentWillUnmount(){
    var i, n = this.state.data.length;
      var d = [...this.state.data]
      for (i = 0; i < n; ++i) {
       
            d[i].r=120
            d[i].ir=90
        
      }
      this.setState({data:d})
  }
   changeData = (index)=>{
      var i, n = this.state.data.length;
      var d = [...this.state.data]
      for (i = 0; i < n; ++i) {
        if(i==index){
          d[i].r = 125
          d[i].ir = 85
        }
        else{

            d[i].r=120
            d[i].ir=90
        }
      }
      this.setState({data:d})
    
   }
   changeData2 = (value)=>{
    var i, n = this.state.data.length;
    var d = [...this.state.data]
    for (i = 0; i < n; ++i) {
     

          d[i].r=120
          d[i].ir=90
      
    }
    this.setState({data:d})
    d = _.sortBy(value, [function(x) { return x.y; }])
    this.setState({data:d,activeSliceName:'',
    activeSliceValue:'',activeSlicePercent:''})
 }
    render() {
        return (
         <Svg>
           <VictoryPie
              
              height={280}
              colorScale={pie_chart_color}
              data={this.state.data}
              innerRadius={(d)=>d.ir}
              radius={(d)=>d.r}
              theme={VictoryTheme.material}
              labels={(d) => `$${d.y}`}
              labelPosition="centroid"
              labelRadius={95}
              padAngle={1}
              style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}
              events={[{
                target: "data",
                eventHandlers: {
                  onPressOut: () => ({
                    mutation: () => null
                  }),
                  onPressIn: () => {
                    return [
                      {
                        target: "data",
                        mutation: (props) => { <VictoryLabel
                          textAnchor="middle"
                          style={{ fontSize: 20,fill:'red' }}
                          dx={180} dy={150}
                          text={ `${this.state.activeSliceValue}`}
                        />
                         var per = ((props.datum.y/this.state.dataSum)*100).toFixed(2)
                         
                          this.changeData(props.index)
                          this.setState({
                            activeSlicePercent:"Percentage:" +per+"%",
                            activeSliceName:props.datum.x,
                            activeSliceValue:"Value:"+"$" + props.datum.y.toString(),
                            activeSliceColor:props.style.fill.toString()
                          })  
                        }
                      }
                    ];
                  }
                }
              }]}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 23,fill:this.state.activeSliceColor,fontWeight:"bold" }}
            dx={180} dy={115}
            text={this.state.activeSliceName}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 18,fill:this.state.activeSliceColor }}
            dx={180} dy={142}
            text={ `${this.state.activeSliceValue}`}
          />
           <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 18,fill:this.state.activeSliceColor }}
            dx={180} dy={165}
            text={ `${this.state.activeSlicePercent}`}
          />
         </Svg>
        )
    }
}
