import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {HeadingRowComponent, RowComponent} from "./Row";


export default class FutureExpenses extends Component {
  constructor () {
    super();
    this.state = {
      dataSource: []
    }
  }
  componentDidMount() {
    var that = this;
    let items = [
      "Hello1",
      "Hello2",
      "Hello3",
      "Hello4",
      "Hello5",
      "Hello6",
      "Hello7",
      "Hello8"
    ];

    that.setState({
      //Setting the data source
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <HeadingRowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        <RowComponent />
        {
        /*
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Text>{item}</Text>
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
        */
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 0,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
