/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,  { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    NavigatorIOS
} from 'react-native';


class HelloWorld extends Component {

  render() {
    return (
        <Text style = {styles.text}>
          {'Hello World (Again)'}
        </Text>

    );

  }

}

import SearchPage from './SearchPage';

class PropertyFinder extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
