import React from 'react';
import {PaperProvider} from 'react-native-paper';
import MapView, {PROVIDER_GOOGLE, Polygon} from 'react-native-maps';
import {Alert, StyleSheet, View} from 'react-native';

export const GeoFencesScreen = (): JSX.Element => {
  const [state] = React.useState({
    coordinates: [
      {latitude: 18.849195, longitude: -97.104676},
      {latitude: 18.848809, longitude: -97.104461},
      {latitude: 18.848444, longitude: -97.105405},
      {latitude: 18.849061, longitude: -97.105514},
    ],
  });

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 18.849521,
            longitude: -97.105003,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
          }}>
          <Polygon
            tappable
            onPress={() => Alert.alert('Polygon pressed')}
            key={'asd'}
            coordinates={state.coordinates}
            strokeColor="#F00"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          />
        </MapView>
      </View>
    </PaperProvider>
  );
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
});
