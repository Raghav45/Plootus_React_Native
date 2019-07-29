import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text,Image} from 'react-native';
import {ProgressCircle} from "react-native-svg-charts";
import { List, Checkbox } from 'react-native-paper';

class networth extends Component {

    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        },
        
    tabBarIcon: ({tintColor}) => (
        <Image
            source={require("../../assets/netWorthIcon.png")}
            style={{ width: 26, height: 26, tintColor:tintColor}}
          />
    ),

     };


    

    state = {
        expanded: true
    };

    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
        });

    render() {

        return (

                <ScrollView>
                   

                    <Text style={this.textStyle}>
                        Net Worth
                    </Text>

                    <Text style={this.amountTextStyle}>
                        $52,690.0
                    </Text>

                    <ProgressCircle
                        style={ { height: 300, marginTop:20 } }
                        progress={ 1.0 }
                        progressColor={'#52da9c'}
                        strokeWidth={25}
                    />

                    <List.Section title=" " style={{fontSize:200}}
                    >
                        <List.Accordion
                            title="Mortgages"
                            left={props => <List.Icon {...props} icon="folder" />}
                        >
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="Uncategorised"
                            left={props => <List.Icon {...props} icon="folder" />}
                        >
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="Account Transfer"
                            left={props => <List.Icon {...props} icon="folder" />}
                        >
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="Bills/Utilities"
                            left={props => <List.Icon {...props} icon="folder" />}
                        >
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="Miscellaneous Services"
                            left={props => <List.Icon {...props} icon="folder" />}
                        >
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>

                        <List.Accordion
                            title="Misc Inflow"
                            left={props => <List.Icon {...props} icon="folder" />}
                        >
                            <List.Item title="First item" />
                            <List.Item title="Second item" />
                        </List.Accordion>


                    </List.Section>
                </ScrollView>

        );
    }

    textStyle = {
        paddingTop:10,
        fontSize:20,
        marginLeft:20,
        marginTop:20,
        fontWeight:"500",
        color:"#404a57"
    };

    amountTextStyle = {
        fontSize:30,
        color:"#34d86a",
        fontWeight:"bold",
        paddingTop:10,
        marginLeft:20
    };
}


export default networth;
