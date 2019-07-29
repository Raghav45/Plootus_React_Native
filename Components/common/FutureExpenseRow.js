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
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => (
            <View style={[{  flexDirection: 'column', margin: 0, padding: 0}, styles.cell]}>
              <Text style={styles.headingStyle}>{item.title}</Text>
              <Text style={styles.subtitleStyle}>{item.subtitle}</Text>
              <Text style={styles.amountText}>{item.amount}</Text>
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
            props.data.key,
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
        value = this.state.dataSource[2]
      return (
        <View >
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item, index }) => (
              <View style={[{ flexDirection: 'column', margin: 0, padding: 0}, styles.cell]}>
                {
                  index != 2 ?
                  <Text style={styles.headingStyle}>{item}</Text> :
                  <TextInput
                    style={{height: 30, borderColor: 'gray', borderWidth: 1, borderRadius: 7}}
                    onChangeText={(text) => this.changeFuture(text)}
                    value={value}
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
      margin: 0,
      padding: 2,
      minHeight: 50,
      backgroundColor: '#f8f8f8',
      borderRadius: 0,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
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
  
































// class RowComponent extends Component {
//   constructor() {
//     super()
//     this.state = {
//       dataSource: [
//         {
//             key:'0',
//             category:'Account fees',
//             current:0,
//             futureWI:-140,
//             futureI:-300
//         },
//        {
//            key:'1',
//            category:'Account fees',
//            current:0,
//            futureWI:-140,
//            futureI:-300
//        },
//     //    {
//     //     key:'2',
//     //     category:'Account fees',
//     //     current:0,
//     //     futureWI:-140,
//     //     futureI:-300
//     //     },
//     //     {
//     //         key:'3',
//     //         category:'Account fees',
//     //         current:0,
//     //         futureWI:-140,
//     //         futureI:-300
//     //     },
//     //     {
//     //         key:'4',
//     //      category:'Account fees',
//     //      current:0,
//     //      futureWI:-140,
//     //      futureI:-300
//     //      },
//     //      {
//     //         key:'5',
//     //         category:'Account fees',
//     //         current:0,
//     //         futureWI:-140,
//     //         futureI:-300
//     //     },
//     //     {
//     //         key:'6',
//     //      category:'Account fees',
//     //      current:0,
//     //      futureWI:-140,
//     //      futureI:-300
//     //      },
//     //      {
//     //         key:'7',
//     //         category:'Account fees',
//     //         current:0,
//     //         futureWI:-140,
//     //         futureI:-300
//     //     },
//     //     {
//     //         key:'8',
//     //      category:'Account fees',
//     //      current:0,
//     //      futureWI:-140,
//     //      futureI:-300
//     //      },
//     //      {
//     //         key:'9',
//     //         category:'Account fees',
//     //         current:0,
//     //         futureWI:-140,
//     //         futureI:-300
//     //     },
//     //     {
//     //         key:'10',
//     //      category:'Account fees',
//     //      current:0,
//     //      futureWI:-140,
//     //      futureI:-300
//     //      },
//     //      {
//     //         key:'11',
//     //         category:'Account fees',
//     //         current:0,
//     //         futureWI:-140,
//     //         futureI:-300
//     //     },
//     //     {
//     //         key:'12',
//     //      category:'Account fees',
//     //      current:0,
//     //      futureWI:-140,
//     //      futureI:-300
//     //      },
       
//       ]
//     }
//   }

//   changeFuture = (value,key) => {
//     let newData = [...this.state.dataSource]
//     newData[key] = {...newData[key],futureWI:value}
//     this.setState({dataSource:newData})
//   }
//   render() {
//     return (
//       <View>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({ item, index }) => (
//             <View style={[{ flex: 1, flexDirection: 'row', margin: 0, padding: 0}, styles.cell]}>
//                 <Text style={styles.headingStyle}>{item.category}</Text>
//                 <Text style={styles.headingStyle}>{item.current}</Text>
//                 <TextInput
//                   style={{height: 30, borderColor: 'gray', borderWidth: 1, borderRadius: 7}}
//                   onChangeText={(text) => this.changeFuture(text)}
//                   value={item.futureWI}
//                 />
//                 <Text style={styles.headingStyle}>{item.futureI}</Text>
//             </View>
//           )}
//           //Setting the number of column
//           numColumns={1}
//           scrollEnabled={false}

//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   imageThumbnail: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//   },
//   headingStyle: {
//     fontWeight: "600",
//     fontSize: 12,
//     textAlign: 'center'
//   },
//   subtitleStyle: {
//     fontWeight: "200",
//     fontSize: 10,
//     textAlign: 'center'
//   },
//   cell: {
//     flex: 1,
//     flexDirection: 'column',
//     margin: 0,
//     padding: 2,
//     minHeight: 50,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 0,
//     borderWidth: 0.5,
//     borderColor: '#d6d7da',
//   },
//   amountText: {
//     fontWeight: "400",
//     fontSize: 11,
//     textAlign: 'center',
//     color: 'red'
//   },
//   MainContainer:{
//       flexDirection:'column',
//       flex:1
//   }
// });

// module.exports =  {
//   HeadingRowComponent,
//   RowComponent
// }


