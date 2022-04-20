import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native'
import { Router, Scene, Stack, } from 'react-native-router-flux';

import BottomTabs from './components/BottomTabs'
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import Geolocation from './screens/Geolocation';
import MapMarker from './screens/MapMarker';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key='root' hideNavBar={true}>
                    <Scene
                        key='startScreen'
                        component={StartScreen}
                        initial
                    />
                    <Scene
                        key='loginScreen'
                        component={LoginScreen}
                    />
                    <Scene
                        key='registerScreen'
                        component={RegisterScreen}
                    />
                    <Scene
                        key='resetPasswordScreen'
                        component={ResetPasswordScreen}
                    />
                    <Scene
                        key='geoLocation'
                        component={Geolocation}

                    />
                    <Scene
                        key='mapMarker'
                        component={MapMarker}
                    />
                    <Scene
                        key='bottomTabs'
                        component={BottomTabs}
                        
                    />
                </Stack>
            </Router>
        )
    }
}
const styles = StyleSheet.create({

})