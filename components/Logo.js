import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default class Logo extends React.Component {
    render() {
        return <Image source={require('../assets/logo.png')} style={styles.image} />
    }
}
const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        marginBottom: 8,
    },
})