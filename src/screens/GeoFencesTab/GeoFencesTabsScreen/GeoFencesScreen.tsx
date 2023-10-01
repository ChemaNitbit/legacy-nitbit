import React from 'react';
import {PaperProvider} from 'react-native-paper';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

export const GeoFencesScreen = (): JSX.Element => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 18.859091,
            longitude: -97.0967663,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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
