import React from 'react'
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'

export default class RetirementChart extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        data: [ 1, 2, 4, 7, 10, 15, 25, 35, 45, 60, 80]
      }
    }
    render() {



        const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={{ height: 400, flexDirection: 'row', backgroundColor: "#ffffff", paddingLeft: 10, paddingRight: 10}}>
                <YAxis
                    data={ this.state.data }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={value => `$${value}M`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={ this.state.data }
                    svg={{ stroke: 'rgb(82,218,156)', strokeWidth: 4 }}
                    contentInset={ contentInset }
                >
                    <Grid/>
                </LineChart>

            </View>
        )
    }

}
