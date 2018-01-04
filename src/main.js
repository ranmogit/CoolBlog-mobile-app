/**
 * 首页
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'


export default class coolApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: "default",
        };
    }
    render() {
        return (
            <TabNavigator>
                 <TabNavigator.Item
                 title = 'Home'
                 iconName = "home"
                 selectedIconName ="home"
                 selected = {this.state.selectedTab === "default"}
                 >

                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}