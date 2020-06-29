import React, { Component, useState } from 'react';
import {  View, Text, FlatList,TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';



export default class DetailsScreen extends Component {
    state = {
        data: [
            {
                "name": "name",
                "image": "https://reactnative.dev/img/tiny_logo.png"
            },
            {
                "name": "name1",
                "image": "https://reactnative.dev/img/tiny_logo.png"
            },
            {
                "name": "name2",
                "image": "https://reactnative.dev/img/tiny_logo.png"
            }
        ]
    }

 
  render(){
      return (
          <View style = {styles.container}>
              <FlatList
                data = {this.state.data}
                renderItem = {({ item }) => (
                    <TouchableOpacity  
                        style={styles.stretch}>
                        <Image style={{flex: 1}} source={{ uri:  item.image}}></Image>
                        <Text >{item.name}</Text>
                    </TouchableOpacity>
                )}
              />
          </View>
      );

  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
        padding: 10,
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        flexDirection: 'row',
    },
    textStyle: {
        padding: 40,
        alignContent: 'center',
    }
  });

