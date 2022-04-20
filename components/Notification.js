
import React, { Component, } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Avatar,
  Button,
  Divider,
  Icon, Menu, MenuGroup, MenuItem,
  Drawer, DrawerGroup, DrawerItem,
} from '@ui-kitten/components';
posts2 = [
  {
    id: '1',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
    avatar: require('../assets/moe.png'),
    image: require('../assets/moe.png')
  },
  {
    id: '2',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnk',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/moe.png')
  },
  {
    id: '3',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjd',
    avatar: require('../assets/ded.jpg'),
    image: require('../assets/ded.jpg')
  },
  {
    id: '4',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasadsdsandjd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/uwucat.jpg')
  },
  {
    id: '5',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'đây là 1 câu gì đó hiện ở dòng thông báo để test xem nó có hiện đúng hay là không nhưng mà chả biết có được không',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '6',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '7',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '8',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '9',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '10',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '11',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '12',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '13',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
  {
    id: '14',
    name: 'lmao',
    timestamp: '12:34 05/04/2022',
    text: 'sakdasdjasndknasdjjaksdansjdnksndnsdaskdnasndjasasdsadasdsddasdsadsdsadasdasdsadsadsadd',
    avatar: require('../assets/longcat.png'),
    image: require('../assets/smilecat.jpg')
  },
]

export default class Notification extends Component {
  renderPost = post2 => {
    return (
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.feedItem}>

            <Image style={styles.avatar} source={post2.avatar} />

            <View style={{flex: 0.9 }}>
              <Text style={styles.name}>{post2.name}<Text> {post2.text}</Text></Text>
              <Text style={styles.timestamp}>{post2.timestamp}</Text>
            </View>
            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity>
                <Image style={styles.dotmenu} source={require('../assets/dotmenu.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.feed}
          data={posts2}
          renderItem={({ item }) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECF4'
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  feed: {
    marginHorizontal: 10,
  },
  feedItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    marginVertical: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 24,
    margin: 5,
    alignItems: 'center',
  },
  name: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontWeight: '500',
    color: '#454D65',
  },
  timestamp: {
    marginLeft: 5,
    fontSize: 11,
    color: '#515359',
  },
  dotmenu: {
    width: 20,
    height: 20,
    opacity: 0.3,
    marginRight: 5,
  },
})