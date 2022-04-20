import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class TabBar extends Component {

  constructor(props) {
    super(props)
    this.setAnimationValue = this.setAnimationValue.bind(this)
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue)
  }

  setAnimationValue({ value }) {
    // this.tabIcons.forEach((icon, i) => {
    //   const progress = Math.min(1, Math.abs(value - i))
    //   icon.setNativeProps({
    //     style: {
    //       color: this.iconColor(progress)
    //     }
    //   })
    // })
  }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress
    const green = 89 + (204 - 89) * progress
    const blue = 152 + (204 - 152) * progress
    return `rgb(${red}, ${green}, ${blue})`
  }
  
  render() {
    
    return <View style={[styles.tabs, this.props.style]}>
      {this.props.tabs.map((tab, i) => {
      
        return (
          <TouchableOpacity key={tab}
            onPress={() => {
              this.props.goToPage(i)
            }}
            style={styles.tab}>

            <Icon
              name={tab}
              size={30}
              color={this.props.activeTab === i ? 'rgb(255, 93, 170)' : 'rgb(204,204,204)'}
            // ref={(icon) => this.tabIcons[i] = icon}
            />
            {tab === 'bell-o' ?
              <View style={styles.textContainer}>
                <Text style={styles.text}> 2 </Text>
              </View>
              : null
            }
          </TouchableOpacity>
          )
      })}
    </View>
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)'
  },
  textContainer: {
    flex: 1,
    position: 'absolute',
    top: -2,
    right: 15,
    width: 20,
    height: 15,
    backgroundColor: 'rgb(255, 93, 170)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 12,
    color: 'white',
  }
})