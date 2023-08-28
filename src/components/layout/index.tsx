import React from 'react';
import {View, SafeAreaView, ScrollView, Image, Text} from 'react-native';
import {styles} from './layout.styles';
import {PaperProvider} from 'react-native-paper';

export function Layout() {
  console.log('Foo');
  console.log('other console');
  console.log('foo')
  return (
    <PaperProvider>
      <View style={{width: '100%'}}>
        <SafeAreaView style={styles.screenContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContainerContent}
            style={styles.scrollContainer}>
            <View style={styles.headerContainer}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: 'https://picsum.photos/200/300',
                }}
              />
            </View>
            <View style={styles.card}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet, tortor sed accumsan bibendum, erat ligula aliquet
                tortor, non blandit nibh massa eget nunc. Nulla facilisi. Donec
                nec diam vel augue tincidunt semper. Sed vitae eros euismod,
                aliquam eros quis, aliquam nisl. Donec euismod, nisl eget
                ultricies ultrices, nunc nisl aliquet nunc, vitae aliquam nisl
                nisl nec nunc. Donec euismod, nisl eget ultricies ultrices, nunc
                nisl aliquet nunc, vitae aliquam nisl nisl nec nunc.
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet, tortor sed accumsan bibendum, erat ligula aliquet
                tortor, non blandit nibh massa eget nunc. Nulla facilisi. Donec
                nec diam vel augue tincidunt semper. Sed vitae eros euismod,
                aliquam eros quis, aliquam nisl. Donec euismod, nisl eget
                ultricies ultrices, nunc nisl aliquet nunc, vitae aliquam nisl
                nisl nec nunc. Donec euismod, nisl eget ultricies ultrices, nunc
                nisl aliquet nunc, vitae aliquam nisl nisl nec nunc.
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet, tortor sed accumsan bibendum, erat ligula aliquet
                tortor, non blandit nibh massa eget nunc. Nulla facilisi. Donec
                nec diam vel augue tincidunt semper. Sed vitae eros euismod,
                aliquam eros quis, aliquam nisl. Donec euismod, nisl eget
                ultricies ultrices, nunc nisl aliquet nunc, vitae aliquam nisl
                nisl nec nunc. Donec euismod, nisl eget ultricies ultrices, nunc
                nisl aliquet nunc, vitae aliquam nisl nisl nec nunc.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
}
