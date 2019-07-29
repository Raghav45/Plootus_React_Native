import React, { Component } from 'react'
import {View,StyleSheet,Text,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import {SearchBar ,Avatar,Icon,Overlay,Input,Button,Image} from 'react-native-elements';
import Slider from '../common/Slider';
import {RetirementAssets,RetirementGap} from './HomeScreenChart'
sampleData=[
  { key:'1',x: 'Jan', y: 5.5, c0: 2,date:'18 Jan 2019',bank:'Bank Of India',txid:'76jhdg74rh4h848r58'},
  { key:'2',x: 'Feb', y: 3, c0: 1.5, date:'08 Feb 2019',bank:'Bank Of Baroda',txid:'76jhdg74rh4h848r58'},
  { key:'3',x: 'March', y: 5, c0: 2 ,date:'19 March 2019',bank:'State Bank of India',txid:'76jhdg74rh4h848r58'},
  { key:'4',x: 'Apr', y: 4, c0: 1 ,date:'18 Apr 2019',bank:'Bank Of India',txid:'76jhdg74rh4h848r58'},
  { key:'5',x: 'May', y: 6, c0: 2 ,date:'15 May 2019',bank:'Bank Of India',txid:'76jhdg74rh4h848r58'},
  { key:'6',x: 'June', y: 2, c0: 4 ,date:'11 June 2019',bank:'Canara Bank',txid:'76jhdg74rh4h848r58'},
  { key:'7',x: 'July', y: 3, c0: 1 ,date:'28 July 2019',bank:'Punjab National Bank',txid:'76jhdg74rh4h848r58'},
]
export default class HomeScreen extends Component{
  
    static navigationOptions = {
        title:'Home',
        headerStyle: {
            backgroundColor: '#f8f8f8',
            height: 40,
            elevation: 0,
            shadowOpacity: 0
          },
         
          headerTitleStyle: { 
            textAlign:"right", 
            flex:1,fontSize: 18,
            color: '#404a57'
           },
           tabBarIcon: ({tintColor}) => (
            <Image
                source={require("../../assets/homeIcon.png")}
                style={{ width: 26, height: 26, tintColor:tintColor}}
              />
        ),
    }
  
   
    state = {
        search: '',
        images: [
            'file://../../assets/assets/formula.png',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree'
          ],
          isVisible:false,
          startingBalance:1000,
          currentAge:10,
          retirementAge:50,
          lifeExpectency:80,
          annualContribution:5,
          annualRetirementExpenses:50,
          investmentStrategy:'conservative',
          ra:true,
          rg:false,
          raC:'#5c5eb9',
          rgC:'white',
          b1C:'#5c5eb9',
          b2C:'white',
          b3C:'white',
          b4C:'white'
      };
    
    updateSearch = search => {
      this.setState({ search });
    };

    modalAction = (value)=>{
      this.setState({isVisible:value})
    }
 
    currentAgeChanger =(currentAge) =>{
      this.setState({currentAge})
    }
    retirementAgeChanger = (retirementAge)=>{
      this.setState({retirementAge})
    }
    lifeExpectancyChanger = (lifeExpectency)=>{
      this.setState({lifeExpectency})
    }
    annualContributionChanger = (annualContribution)=>{
      this.setState({annualContribution})
    }
    annualRetirementExpensesChanger = (annualRetirementExpenses)=>{
      this.setState({annualRetirementExpenses})
    }
    modalView = ()=>{
      return(
      <View style={{ flex: 1}}>
        {/* <View style={{backgroundColor:'rgba(255,255,255,.5)',alignItems:'flex-end',marginTop:-4,marginBottom:2}}>
        <Icon
        type='material'
        name='close'
        size={30}
        onPress={()=>{this.setState({isVisible:false})}}
        />
          </View>
        */}
        <View style={{flexDirection:'row',justifyContent:'flex-end',marginBottom:5,marginRight:5}}>
          <Text style = {{fontSize:23,color:'#2b2d38',marginTop:5,marginRight:4}}>Starting Balance</Text>
          <View style = {{flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#a7a7ab',height:40,width:180}}>
          <View style = {{backgroundColor:'#5c5eb9',width:40}}>
          <Icon 
           type='font-awesome'
           name='dollar' 
           color='white' 
           size={25} 
           containerStyle={{marginTop:6}}
           />
          </View>
          <Input
            placeholder="Input"
            containerStyle={{width:125,borderLeftWidth:1,borderColor:'#a7a7ab'}}
            inputContainerStyle={{borderBottomWidth: 0}}
            keyboardType='number-pad'
          />
          </View>
        </View>
        <Slider changeState = {this.currentAgeChanger} sliderValue = {this.state.currentAge} type='Current Age(Years)'/>
        <Slider changeState = {this.retirementAgeChanger} sliderValue = {this.state.retirementAge} type='Retirement Age(Years)'/>
        <Slider changeState = {this.lifeExpectancyChanger} sliderValue = {this.state.lifeExpectency} type='Life Expectancy(Years)'/>
        <Slider changeState = {this.annualContributionChanger} sliderValue = {this.state.annualContribution} type='Annual Contribution($)'/>
        <Slider changeState = {this.annualRetirementExpensesChanger} sliderValue = {this.state.annualRetirementExpenses} type='Annual Retirement Expenses($)'/>
        <Text style = {{fontSize:18,fontWeight:'500',color:'#2b2d38'}}>Investment Strategy</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <Button
          title="Conservative"
          type="outline"
          buttonStyle={{backgroundColor:this.state.b1C,height:30,borderColor:'#777676'}}
          titleStyle={{color:this.state.b1C==='#5c5eb9'?'white':'black'}}
          containerStyle={{width:100,}}
          onPress={()=>{this.setState({ b1C:'#5c5eb9',b2C:'white',b3C:'white',b4C:'white'})}}
        />
        <Button
          title="Moderate"
          type="outline"
          buttonStyle={{backgroundColor:this.state.b2C,height:30,borderColor:'#777676'}}
          containerStyle={{width:80}}
          titleStyle={{color:this.state.b2C==='#5c5eb9'?'white':'black'}}
          onPress={()=>{this.setState({ b2C:'#5c5eb9',b1C:'white',b3C:'white',b4C:'white'})}}
        />
        <Button
          title="Growth"
          type="outline"
          buttonStyle={{height:30,backgroundColor:this.state.b3C,borderColor:'#777676'}}
          containerStyle={{width:70}}
          titleStyle={{color:this.state.b3C==='#5c5eb9'?'white':'black'}}
          onPress={()=>{this.setState({ b3C:'#5c5eb9',b2C:'white',b1C:'white',b4C:'white'})}}
        />
        <Button
          title="Super"
          type="outline"
          buttonStyle={{height:30,backgroundColor:this.state.b4C,borderColor:'#777676'}}
          containerStyle={{width:70}}
          titleStyle={{color:this.state.b4C==='#5c5eb9'?'white':'black'}}
          onPress={()=>{this.setState({ b4C:'#5c5eb9',b2C:'white',b3C:'white',b1C:'white'})}}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:5,justifyContent:'center',borderTopColor:'#a7a7ab',borderTopWidth:1}}>
        <Button
          title="Submit"
          type="outline"
          buttonStyle={{height:30}}
          containerStyle={{width:100,marginTop:5}}
          onPress={()=>{this.setState({isVisible:false})}}
        />
         <Button
          title="Close"
          type="outline"
          buttonStyle={{height:30}}
          containerStyle={{width:100,marginTop:5,marginLeft:30}}
          onPress={()=>{this.setState({isVisible:false})}}
        />
        </View>
      </View>
       );
    }
    
    render(){
        const {search} = this.state;
        return(
            <View style = {styles.container} >
                <View style = {styles.searchBarConatiner}>
                    <View  style = {[{flex:5,marginRight:5}]}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                       lightTheme={true}
                       inputContainerStyle={{backgroundColor:'#ffffff'}}
                       containerStyle={{backgroundColor: '#f8f8f8',height:60,borderTopWidth:0,borderBottomWidth:0}}
                    />
                    </View>
                    <View style = {[{flex:1,alignItems:'center'}]}>
                        <Avatar
                        rounded
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        containerStyle={{height:40,width:40,marginTop:7,}}
                        />
                    </View>
                </View>
                <View style = {{flexDirection:'row',alignContent:'flex-start', justifyContent:'flex-end',marginLeft:30,}}>
                    <Text  style = {{fontSize:27,color:'#404a57',fontWeight:'500',marginRight:30}}  >Summary</Text>
                    <View style = {{flexDirection:'row',marginLeft:50,marginRight:20,marginTop:5}}>
                        <Text style = {{fontSize:18,fontWeight:'500',color:'#2b2d38',marginRight:15,marginTop:5}}>Link Account</Text>
                        <Icon 
                        type='font-awesome'
                        name='plus' 
                        color='#416ce1' 
                        size={30} 
                        iconStyle = {{fontWeight:'bold'}}
                        onPress={()=>this.props.navigation.navigate('LinkAccount')}
                        />
                    </View>
                </View>
              
                <ScrollView >
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    children={ <Text>hello</Text> }
                    width='100%'
                    height={430}
                    onBackdropPress={() => this.modalAction(false)}
                    onDismiss={()=>this.modalAction(false)}
                    overlayStyle={{bottom:0,position: 'absolute'}}
                    animationType='fade'
                  >
                    { this.state.isVisible?this.modalView():null }  
                        
                  </Overlay>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:5}}>
                  <Button
                    title="Retirement Assests"
                    type="outline"
                    containerStyle={{width:150,}}
                    buttonStyle={{backgroundColor:this.state.raC,borderColor:'#777676'}}
                    titleStyle={{color:this.state.raC==='#5c5eb9'?'white':'black'}}
                    onPress={()=>{this.setState({ra:true,rg:false,raC:'#5c5eb9',rgC:'white'})}}
                  />
                  <Button
                    title="Retirement Gap"
                    type="outline"
                    containerStyle={{width:150}}
                    buttonStyle={{backgroundColor:this.state.rgC,borderColor:'#777676'}}
                    titleStyle={{color:this.state.rgC==='#5c5eb9'?'white':'black'}}
                    onPress={()=>{this.setState({rg:true,ra:false,rgC:'#5c5eb9',raC:'white'})}}
                  />
                  </View>
                  {this.state.ra?<RetirementAssets/>: <RetirementGap/>}
                  <View style = {{marginTop:20,alignItems:'center',marginBottom:10}}>
                    <Button
                      title="Edit Assumptions"
                      type="outline"
                      containerStyle={{width:150}}
                      buttonStyle={{backgroundColor:'#5c5eb9',borderColor:'#777676'}}
                      titleStyle={{color:'white'}}
                      onPress={()=>{this.modalAction(true)}}
                    />
                  </View>
                  <View>
                    <Image
                     source={require('../../assets/FirstImage2.png')}
                     containerStyle={styles.imageConatinerStyle}
                     style={styles.imageStyle}
                    />
                    <Image
                     source={require('../../assets/SecondImage2.png')}
                     containerStyle={styles.imageConatinerStyle}
                     style={styles.imageStyle}
                    />
                    <Image
                     source={require('../../assets/ThirdImage2.png')}
                     containerStyle={styles.imageConatinerStyle}
                     style={styles.imageStyle}
                    />
                  </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
 container:{
     backgroundColor:'#f8f8f8',
     flex:1
 },
 searchBarConatiner:{
    flexDirection:'row',
    marginLeft: 15,
    marginRight: 5,
 },

imageConatinerStyle:{
  margin:10,
},
imageStyle:{
  width:Dimensions.get('window').width - 20,
  borderRadius:10
}
})
