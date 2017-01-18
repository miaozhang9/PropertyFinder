/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  NativeModules,
} from 'react-native';
// var ViewPager = require('react-native-viewpager');
import ViewPager from 'react-native-viewpager';
import SearchPage from './SearchPage';
var manager = NativeModules.FinderManager;
var vc = NativeModules.FirstViewController;

//var PageNavigator = require('PageNavigator');

class PropertyFinder extends Component {

  onLeftPressed() {

    manager.getDataDic({
      location: '江苏 南通市 中天路',
      time: 1463987752,
      description: '请一定准时来哦~'
    })
  }

  render() {
    return (<NavigatorIOS style = {
        styles.container
      }
      onLeftButtonPress = {
        this.onLeftPressed.bind(this)
      }
      initialRoute = {
        {
          title: 'Property Finder',
          leftButtonTitle: "返回",
          rightButtonTitle: "目录",
          barTintColor: '#000',
          titleTextColor: '#fff',
          tintColor: '#fff',
          component: SearchPage,
        }
      }
      />
    );
  }
}




class HelloWorld extends Component {

  render() {
    return (
      <Text style = {styles.text}>
          {'Hello World (Again)'}
        </Text>
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