import React from 'react';
import {PaperProvider, TextInput, useTheme} from 'react-native-paper';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {layoutContainerStyles} from '../../../components/layout/NbContainer';
import {View} from 'react-native';
import {NbIcon} from '../../../components';

export const NewPostScreen = (): JSX.Element => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      ...layoutContainerStyles.container,
      backgroundColor: theme.colors.background,
    },
    input: {
      backgroundColor: 'white',
    },
  });

  return (
    <PaperProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            flex: 1,
          }}>
          <ScrollView style={styles.container}>
            <TextInput
              multiline
              keyboardType="twitter"
              activeUnderlineColor="transparent"
              style={styles.input}
              underlineColor="transparent"
              underlineColorAndroid="transparent"
              placeholder="Comparte lo que quieras..."
            />
          </ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{backgroundColor: '#fff'}}
            contentContainerStyle={{backgroundColor: '#fff'}}
            data={[{}]}
            renderItem={() => (
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: '#fff',
                  margin: 5,
                  borderWidth: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#555',
                  borderStyle: 'dashed',
                }}>
                <NbIcon name="camera-outline" size="md" />
              </View>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
};
