/**
 * 首页
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native'
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Homepage  from './page/home'; 

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screend</Text>
  </View>
);
const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const HomeS = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
});
const DetailsS = StackNavigator({
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});
const Main = TabNavigator({
  Home: {
    screen: HomeS,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon 
          name= 'qq'
          size={26}
          color="#900"
        />
      ),
    },
  },
  Details: {
    screen: DetailsS,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ( {tintColor}) => (
        <Icon 
          name={'rocket'}
          size={26}
          color="#900"
        />
      ),
    },
  },
},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#0F9C00', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
      style: {
        backgroundColor: '#fff', // TabBar 背景色
      },
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    }
  });

export default Main;
// export default RootDrawer;




