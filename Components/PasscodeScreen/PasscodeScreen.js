import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from "react-native-elements";
import PinView from "react-native-pin-view";
import {withNavigation} from 'react-navigation';

class passcode extends Component {

    static navigationOptions = {
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        }
    };




    textStyle = {
        color: "#5f6481",
        fontWeight: 'bold',
        fontSize: 28,
        padding: 40,
        paddingBottom: 20
    };

    state = {
        pin:''
    };

    forgotText = {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '30%',
        color: '#094392',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize:15
    };

    bottomTextStyle={
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginLeft: '10%',
        fontSize: 18,
        fontWeight: '400'
    };

    PinHandler = (pin)=>{
        this.setState({
            pin:pin
        });
    };

    render(){
        return (
            <View style={ {
                flex           : 1,
                backgroundColor: '#fff',
                justifyContent : 'center'
            } }>

               

                <Text
                    style={this.textStyle}
                >
                    Enter your passcode
                </Text>

                <PinView
                    password={ [1, 3, 5, 7] }
                    onSuccess={ ()=>{alert("SUCCESS")} }
                    onFailure={ ()=>{alert("FAILURE")} }
                    buttonTextColor={'#0f4f9a'}
                    inputBgColor={'#D3D3D3'}
                    inputBgOpacity={5}
                    inputActiveBgColor={'#0f4f9a'}
                    pinLength={4}
                    onComplete={ ()=>{
                        
                        this.props.navigation.navigate("Tabs");
                    
                    } }
                    deleteText={'X'}
                    del

                />

                <Text style={this.forgotText}>Forgot passcode ?</Text>

                <Text style={this.bottomTextStyle}>Don't have a passcode ? <Text style={{color: '#34d86a', fontWeight: 'bold'}}>Create one</Text></Text>

            </View>
        );
    }
}

export default passcode;