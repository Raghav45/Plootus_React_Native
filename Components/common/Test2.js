import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Test2 extends Component {
      state={
        data:this.props.data
    }
    // componentWillReceiveProps(nextProps){
    //     this.setState({data:nextProps.data})
    // }
    render() {
        return (
            <View>
                <Text syle = {{fontSize:20,}}> {this.state.data} </Text>
            </View>
        )
    }
}


