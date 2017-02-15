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
    NativeModules,
} from 'react-native';
// var ViewPager = require('react-native-viewpager');
import ViewPager from 'react-native-viewpager';
import SearchPage from './SearchPage';
var manager = NativeModules.FinderManager;


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
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{component: SearchPage}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navContainer}
                        routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }

    /**
     * 配置场景动画
     * @param route 路由
     * @param routeStack 路由栈
     * @returns {*} 动画
     */
    configureScene(route, routeStack) {

        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {

        return <route.component navigator={navigator}  {...route.passProps} />;
    }


}

// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        // ...
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        // ...
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    应用标题
                </Text>
            </View>
        );
    }
};




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
    navContainer: {
        backgroundColor: 'red',
    }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);