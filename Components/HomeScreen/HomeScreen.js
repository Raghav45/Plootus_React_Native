import React, { Component } from 'react'
import {Image,TouchableOpacity,View,StyleSheet,Text,Dimensions,ScrollView} from 'react-native';
import { SearchBar ,Card,Avatar,Icon,Overlay,Input,Button} from 'react-native-elements';
import {RegularSlider,CashSlider,PercentSlider} from '../common/Slider';
import {RetirementAssets,RetirementGap} from './HomeScreenChart'
import {MaterialIcons} from '@expo/vector-icons'

export default class HomeScreen extends Component{
  
    static navigationOptions = {
        headerTitle:'Welcome back, Raghav!',
        headerStyle: {
            backgroundColor: '#416ce1',
            
            elevation: 0,
            shadowOpacity: 0
          },
         
          headerTitleStyle: { 
            textAlign:"center", 
            flex:1,fontSize: 18,
            color: 'white'
           },
           tabBarIcon: ({tintColor}) => (
            <Image
                source={require("../../assets/homeIcon.png")}
                style={{ width: 37, height: 37, tintColor:tintColor}}
              />
           ),
          
           

    }
  
   
    state = {
        search: '',
        images: [
            'file://../../assets/assets/img/formula.png',
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
          raC:'green',
          rgC:'white',
          b1C:'#416ce1',
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
    // componentDidMount(){
    //   console.log(this.modalView());
    // }
    sliderView=()=>{
      return(
      <Card containerStyle = {{borderRadius:5,padding:0}}>
      <View style={{ flex: 1,marginBottom:10,marginTop:15,marginLeft:5,marginRight:5}}>
        {/* <View style={{backgroundColor:'rgba(255,255,255,.5)',alignItems:'flex-end',marginTop:-4,marginBottom:2}}>
        <Icon
        type='material'
        name='close'
        size={30}
        onPress={()=>{this.setState({isVisible:false})}}
        />
          </View>
        */}
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:5,marginRight:5,marginTop:10}}>
          <Text style = {{fontSize:18,paddingLeft:6,color:'#2b2d38',marginTop:5,marginRight:4}}>Starting Balance:</Text>
          <View style = {{flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#a7a7ab',height:40,width:155}}>
          <View style = {{backgroundColor:'#416ce1',width:40,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:18,color:'white'}}>$</Text>
          </View>
          <Input
            inputStyle={{fontSize:18}}
            placeholder="Enter"
            containerStyle={{width:115,borderLeftWidth:1,borderColor:'#a7a7ab'}}
            inputContainerStyle={{borderBottomWidth: 0}}
            keyboardType='number-pad'
          />
          </View>
        </View>
        
        <RegularSlider changeState = {this.currentAgeChanger} sliderValue = {this.state.currentAge} type='Current Age'/>
        <RegularSlider changeState = {this.retirementAgeChanger} sliderValue = {this.state.retirementAge} type='Retirement Age'/>
        <RegularSlider changeState = {this.lifeExpectancyChanger} sliderValue = {this.state.lifeExpectency} type='Life Expectancy'/>
        <CashSlider changeState = {this.annualContributionChanger} sliderValue = {this.state.annualContribution} type='Annual Employee Contribution'/>
        <CashSlider changeState = {this.annualContributionChanger} sliderValue = {this.state.annualContribution} type='Annual Employer Contribution'/>

        <CashSlider changeState = {this.annualRetirementExpensesChanger} sliderValue = {this.state.annualRetirementExpenses} type='Annual Retirement Expenses'/>
        <Text style = {{fontSize:18,color:'#2b2d38',marginLeft:12,marginBottom:10}}>Investment Strategy:</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:10}}>
        <Button
          title="Conservative"
          type="outline"
          buttonStyle={{backgroundColor:this.state.b1C,height:30,borderColor:'#777676'}}
          titleStyle={{fontSize:12,fontWeight:'100',color:this.state.b1C==='#416ce1'?'white':'black'}}
          containerStyle={{width:87,}}
          onPress={()=>{this.setState({ b1C:'#416ce1',b2C:'white',b3C:'white',b4C:'white'})}}
        />
        <Button
          title="Moderate"
          type="outline"
          buttonStyle={{backgroundColor:this.state.b2C,height:30,borderColor:'#777676'}}
          containerStyle={{width:70}}
          titleStyle={{fontSize:12,color:this.state.b2C==='#416ce1'?'white':'black'}}
          onPress={()=>{this.setState({ b2C:'#416ce1',b1C:'white',b3C:'white',b4C:'white'})}}
        />
        <Button
          title="Growth"
          type="outline"
          buttonStyle={{height:30,backgroundColor:this.state.b3C,borderColor:'#777676'}}
          containerStyle={{width:60}}
          titleStyle={{fontSize:12,color:this.state.b3C==='#416ce1'?'white':'black'}}
          onPress={()=>{this.setState({ b3C:'#416ce1',b2C:'white',b1C:'white',b4C:'white'})}}
        />
        <Button
          title="S. Growth"
          type="outline"
          buttonStyle={{height:30,backgroundColor:this.state.b4C,borderColor:'#777676'}}
          containerStyle={{width:70}}
          titleStyle={{fontSize:12,color:this.state.b4C==='#416ce1'?'white':'black'}}
          onPress={()=>{this.setState({ b4C:'#416ce1',b2C:'white',b3C:'white',b1C:'white'})}}
        />
        </View>
        {/* <View style={{flexDirection:'row',marginTop:5,justifyContent:'center',borderTopColor:'#a7a7ab',borderTopWidth:1}}>
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
        </View> */}
      </View>
      </Card>
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
                    
                </View>
                <View style = {{flexDirection:'row', marginLeft:20,marginBottom:10}}>
                    <Text  style = {{fontSize:27,color:'#404a57',marginRight:55}}  >Summary</Text>
                    <View style = {{flexDirection:'row',marginRight:20,marginTop:5}}>
                        <Text style = {{fontSize:18,fontWeight:'500',color:'#2b2d38',marginRight:15,marginTop:5}}>Link Account</Text>
                        <Icon 
                        type='font-awesome'
                        name='plus' 
                        color='#416ce1' 
                        size={20} 
                        iconStyle = {{fontWeight:'bold'}}
                        containerStyle={{marginTop:10}}
                        onPress={()=>this.props.navigation.navigate('LinkAccount')}
                        />
                    </View>
                </View>
              
                <ScrollView>
                {/* <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    width='100%'
                    height={430}
                    onBackdropPress={() => this.modalAction(false)}
                    onDismiss={()=>this.modalAction(false)}
                    overlayStyle={{bottom:0,position: 'absolute'}}
                    animationType='fade'
                  >
                    <View style={{flex:1}}>
                    { this.state.isVisible?this.modalView():null } 
                    </View>
                  </Overlay> */}
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:5}}>
                  <Button
                    title="Retirement Assets"
                    type="outline"
                    containerStyle={{width:150,}}
                    buttonStyle={{backgroundColor:this.state.raC,borderColor:'green'}}
                    titleStyle={{color:this.state.raC==='white'?'green':'white'}}
                    onPress={()=>{this.setState({ra:true,rg:false,raC:'green',rgC:'white'})}}
                  />
                  <Button
                    title="Retirement Gap"
                    type="outline"
                    containerStyle={{width:150}}
                    buttonStyle={{backgroundColor:this.state.rgC,borderColor:'#be262b'}}
                    titleStyle={{color:this.state.rgC==='white'?'#be262b':'white'}}
                    onPress={()=>{this.setState({rg:true,ra:false,rgC:'#be262b',raC:'white'})}}
                  />
                  </View>
                  {this.state.ra?<RetirementAssets retirementAge = {this.state.retirementAge}/>: <RetirementGap/>}
                  {/* <View style = {{marginTop:20,alignItems:'center',marginBottom:10}}>
                    <Button
                      title="Edit Assumptions"
                      type="outline"
                      containerStyle={{width:150}}
                      buttonStyle={{backgroundColor:'#416ce1',borderColor:'#777676'}}
                      titleStyle={{color:'white'}}
                      onPress={()=>{this.modalAction(true)}}
                    />
                  </View> */}
                  {/* <View>
                    <Image
                     source={require('../../assets/First_image2.png')}
                     containerStyle={styles.imageConatinerStyle}
                     style={styles.imageStyle}
                    />
                    <Image
                     source={require('../../assets/Second_image2.png')}
                     containerStyle={styles.imageConatinerStyle}
                     style={styles.imageStyle}
                    />
                    <Image
                     source={require('../../assets/Third_image2.png')}
                     containerStyle={styles.imageConatinerStyle}
                     style={styles.imageStyle}
                    />
                  </View> */}
                  {this.sliderView()}
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

