import React from 'react'
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { View, Text, Button} from 'react-native'
import RetirementChart from "./RetirementChart"
import {Icon} from "react-native-elements";
class RetirementAssets extends React.Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#ffffff", flexDirection: 'row', height: 30}}>
        <View style={{flex: 0.2, backgroundColor: "white", margin: 0, height: 30, borderRadius: 20}}>
          <Icon
          name='checkcircle'
          type='antdesign'
          color='#52da9c'
          />
        </View>

        <View style={{flex: 0.5, backgroundColor: "white", margin: 0, height: 30, borderRadius: 20}}>
          <Text style={{fontSize: 20}}>
            Retirement Assets
          </Text>
        </View>

        <View style={{flex: 0.2, backgroundColor: "#416ce1", margin: 0, height: 37, borderRadius: 0}}>
          <Button
          style={{width: 100, margin: 0, justifyContent: 'center'}}
          color="#ffffff"
          title="EDIT"
          onPress={() => {

          }}/>

        </View>

      </View>
    )
  }
}
export default class BeforeRetirement extends React.PureComponent {

    render() {

        const data = [ 1, 2, 4, 7, 10, 15, 25, 35, 45, 60, 80]

        const contentInset = { top: 20, bottom: 20 }
        return (
          <View style={{flex: 1, flexDirection: 'column'}}>
            <RetirementChart />
            <RetirementAssets/>
          </View>
        )
    }

}
