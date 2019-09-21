import SearchableDropdown from 'react-native-searchable-dropdown';
import React, { Component } from 'react'
import {ActivityIndicator} from 'react-native'
import { Text, StyleSheet, View, TouchableOpacity,Dimensions,ScrollView,FlatList} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { Icon , Overlay,Button} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import ModalFilterPicker from 'react-native-modal-filter-picker'


items = [
  {
    key: 1,
    label: 'General Electric',
  },
  {
    key: 2,
    label: 'Moody\'s',
  },
  {
    key: 3,
    label: 'JPMorgan',
  },
  {
    key: 4,
    label: 'Bank of America',
  },
  {
    key: 5,
    label: 'Wells Fargo',
  },
  {
    key: 6,
    label: 'ExxonMobil',
  },
  {
    key: 7,
    label: 'Barclay\'s',
  },
  {
    key: 8,
    label: 'Credit Suisse',
  },
];




export default class EmployerSearchScreen extends Component{
   
state={

  search:'General Electric'
}



  
render(){
return(
  <View>
    <SearchBar
      inputStyle = {{color:'white'}}
      searchIcon={
      <Icon
      name='search'
      color='white' />}
      containerStyle={{width:'100%',paddingBottom:'3%',alignItems:'center',backgroundColor:'#416ce1',borderBottomColor:'transparent',borderTopColor:'transparent'}}
      lightTheme={true}
      inputContainerStyle={{marginLeft:'2%',marginRight:'2%',backgroundColor:'#8ba4e8'}}
      placeholder="Select Company"
      placeholderTextColor={'white'}
      onChangeText={this.updateSearch}
      value={this.state.search}
  />
  </View>
);
}
onSelect = (picked) => {
  this.setState({
    picked: picked,
    visible: false
  })
}

onCancel = () => {
  this.setState({
    visible: false
  });
}












}