import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image, TextInput} from 'react-native';

class HeadingRowComponent extends Component {
  constructor () {
    super();
    this.state = {
      dataSource: []
    }
  }
  componentDidMount() {
    var that = this;
    let items = [
      {
        title: "Category",
        subtitle: "",
        amount: ""
      },
      {
        title: "Current",
        subtitle: "",
        amount: ""
      },
      {
        title: "Future",
        subtitle: "without inflation",
        amount: "-$42,000"
      },
      {
        title: "Future(2054)",
        subtitle: "with inflation",
        amount: "-$42,000"
      }
    ];

    that.setState({
      //Setting the data source
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={{flex:1,marginTop:10}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => (
            
            <View style={[{  flexDirection: 'column', margin: 0, padding: 0}, styles.cell]}>
              {
                index<2 ? 
              
              <Text style={[styles.headingStyle,{justifyContent:'center'}]}>{item.title}</Text>:
              <View style={{flex:1}}>
              <Text style={styles.headingStyle}>{item.title}</Text>
              <Text style={styles.subtitleStyle}>{item.subtitle}</Text>
              <Text style={styles.amountText}>{item.amount}</Text>
              </View>
              }
            </View>
            
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


class RowComponent extends Component {

    constructor(props) {
      super()
     
      this.state = {
        dataSource: [
            props.data.category,
            props.data.current,
            props.data.futureWI,
            props.data.futureI
        ]
      }
    
    }
   
    changeFuture = (value) => {
        let newData = [...this.state.dataSource]
        newData[2] = value
        this.setState({dataSource:newData})
          }
    render() {
      
       
        return (
        <View style ={{flex:1}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item, index }) => (
              <View style={[{ flexDirection: 'column', margin: 0, padding: 0},styles.cell,{backgroundColor:this.props.data.key%2==0?'#ffffff':'#f8f8f8'}]}>
                {
                index==0 ?
                <Text style={[styles.headingStyle,{textAlign:'left',marginLeft:'6%'}]}>{item}</Text>:
                  
                  index != 2 ?
                  <Text style={styles.headingStyle}>{item}</Text> :
                  <TextInput
                    style={{height: 30, borderColor: '#c6cbde', borderWidth: 1, borderRadius: 7,textAlign:'center',marginLeft:5,marginRight:5}}
                    onChangeText={(text) => this.changeFuture(text)}
                    value={item.toString()}
                    keyboardType='numeric'
                  />
                }
              
              </View>
            )}
            //Setting the number of column
            numColumns={4}
            keyExtractor={(item, index) => index}
          />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    headingStyle: {
      fontWeight: "600",
      fontSize: 12,
      textAlign: 'center'
    },
    subtitleStyle: {
      fontWeight: "200",
      fontSize: 10,
      textAlign: 'center'
    },
    cell: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      margin: 0,
      padding: 2,
      minHeight: 50,
      backgroundColor:'#f8f8f8',
      borderRadius: 0,
      borderWidth: 0.5,
      borderColor: '#c6cbde',
    },
    amountText: {
      fontWeight: "400",
      fontSize: 11,
      textAlign: 'center',
      color: 'red'
    }
  });
  
  module.exports =  {
    HeadingRowComponent,
    RowComponent
  }
  


