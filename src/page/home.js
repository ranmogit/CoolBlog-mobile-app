import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Homepage extends Component  {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              hello 丁建文
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  