import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import {Actions} from 'react-native-router-flux'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>App để vào cái gì đó</Header>
      <Paragraph>
        Đây là app để truy cập vào một cái 
        gì đó mà mình cũng không biết :)
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => Actions.loginScreen()}
      >
        Đăng nhập
      </Button>
      <Button
        mode="outlined"
        onPress={() => Actions.registerScreen()}
      >
        Đăng ký
      </Button>
      <Button
        mode="contained"
        onPress={() => Actions.geoLocation()}
      >
        Geoloca
      </Button>
      <Button
        mode="outlined"
        onPress={() => Actions.mapMarker()}
      >
        Marker
      </Button>
    </Background>
  )
}