import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, BackHandler } from 'react-native'
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import Newsfeed from './Newsfeed'
import History from './History'
import Notification from './Notification'
import Settings from './Settings'
import Account from './Account'
import Search from './Search'
import TabBar from './CustomTabBar'


export default class BottomTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cash: 25,
        }
    }
    exitApplication = () => {
        BackHandler.exitApp()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    tabBarPosition='bottom'
                    renderTabBar={() => <TabBar />}
                    initialPage={0}
                >
                    <Newsfeed tabLabel='home' />
                    <History tabLabel='history' />
                    <Notification tabLabel='bell-o' />
                    <Account tabLabel='user' tien={this.state.cash} exitApp={this.exitApplication} />

                    <Settings tabLabel='cog' />
                    <Search tabLabel='search' />

                </ScrollableTabView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 14,
        right: 18,
    },
    container: {
        flex: 1,
    }
})