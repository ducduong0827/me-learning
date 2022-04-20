
import React from 'react';
import { StyleSheet, View, Text, Dimensions,TouchableOpacity } from 'react-native';
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

/*
export default function Notification() {
  
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <React.Fragment>
        <Menu>

          <MenuGroup title='Akveo React Native' >
            <MenuItem title='UI Kitten' />
            <MenuItem title='Kitten Tricks' />
          </MenuGroup>
          <MenuGroup title='Akveo Angular' >

            <MenuItem title='Nebular' />
            <MenuItem title='ngx-admin' />
            <MenuItem title='UI Bakery' />

          </MenuGroup>
          <MenuGroup title='Akveo Design' >
            <MenuItem title='Eva Design System' />
            <MenuItem title='Eva Icons' />
          </MenuGroup>
          <MenuGroup title='Akveo Design' >
            <MenuItem title='Eva Design System' />
            <MenuItem title='Eva Icons' />
          </MenuGroup>
          <MenuGroup title='Akveo Design' >
            <MenuItem title='Eva Design System' />
            <MenuItem title='Eva Icons' />
            <MenuItem title='Eva Design System' />
          </MenuGroup>
        </Menu>
      </React.Fragment>

    </ApplicationProvider>
  )
}
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  title: {
    marginHorizontal: 8,
  },
  installButton: {

    marginVertical: 4,
  },
});
*/
import Geolocation from 'react-native-geolocation-service';

import MapView, { Marker, ProviderPropType, MAP_TYPES } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 20.9968;
const LONGITUDE = 105.84078;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }

  jumpRandom() {
    this.setState({ region: this.randomRegion() });
  }

  animateRandom() {
    this.map.animateToRegion(this.randomRegion());
  }

  animateRandomCoordinate() {
    this.map.animateCamera({ center: this.randomCoordinate() });
  }

  animateToRandomBearing() {
    this.map.animateCamera({ heading: this.getRandomFloat(-360, 360) });
  }

  animateToRandomViewingAngle() {
    this.map.animateCamera({ pitch: this.getRandomFloat(0, 90) });
  }

  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomCoordinate() {
    const region = this.state.region;
    return {
      latitude:
        region.latitude + (Math.random() - 0.5) * (region.latitudeDelta / 2),
      longitude:
        region.longitude + (Math.random() - 0.5) * (region.longitudeDelta / 2),
    };
  }

  randomRegion() {
    return {
      ...this.state.region,
      ...this.randomCoordinate(),
    };
  }
  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => {
            this.map = ref;
          }}
          mapType={MAP_TYPES.HYBRID}
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}  
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView>

        <View style={[styles.bubble, styles.latlng]}>
          <Text style={styles.centeredText}>
            {this.state.region.latitude.toPrecision(7)},
            {this.state.region.longitude.toPrecision(7)}
          </Text>
        </View>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.jumpRandom()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>Jump</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.animateRandom()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>Animate (Region)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.animateRandomCoordinate()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>Animate (Coordinate)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.animateToRandomBearing()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>Animate (Bearing)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.animateToRandomViewingAngle()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.buttonText}>Animate (View Angle)</Text>
          </TouchableOpacity>
          </View> */}
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap map to create a marker of random color</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Notification.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
  centeredText: { textAlign: 'center' },
});