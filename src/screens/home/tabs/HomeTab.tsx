/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

// Navigation
import { useIsFocused } from '@react-navigation/native';

// Custom Components
import NbHeader from '../../../components/nb-header/NbHeader';
import NbList from '../../../components/nb-list/NbList';

// Material Components
import { PaperProvider, Text } from 'react-native-paper';
import { NbUserBadge, NbUsersResent } from '../../../components';
import NBButton from '../../../components/nb-button/NBButton';
import { IMAGE_DEFAULT } from '../../../contants';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import { MOCK_LIST_USERS_RESENT } from '../../../mocks/list-user-resent.mock';

const HomeTab = ({navigation}: any): JSX.Element => {
  const {currentUser} = useCurrentUser();

  const isScreenFocused = useIsFocused();

  const [fabIsOpen, setFabIsOpen] = React.useState(false);

  return (
    <PaperProvider>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          borderWidth: 1,
          borderColor: 'red',
          height: '100%',
        }}>
        <SafeAreaView style={styles.screenContainer}>
          <View style={styles.headerContainer}>
            <NbHeader />
          </View>

          <View style={{flex: 2}}>
            <NbList />
            <Text>aaaaaaaaaaa</Text>
            <NbUserBadge
              imgUser={IMAGE_DEFAULT}
              name="Marjory"
              lastName="Lopez"
            />
            <NbUsersResent listUser={MOCK_LIST_USERS_RESENT} size={32} />
          </View>

          {/* <Portal>
                        <FAB.Group
                        color='#fff'
                            fabStyle={{ backgroundColor: '#5AB0D6' }}
                            visible={isScreenFocused}
                            open={fabIsOpen}
                            onStateChange={({ open }) => setFabIsOpen(open)}
                            icon={fabIsOpen ? 'close' : 'plus'}
                            actions={[
                                {
                                    icon: 'format-letter-case',
                                    style: {
                                        backgroundColor: '#fff',
                                    },
                                    labelTextColor: '#000',
                                    color: '#000',
                                    label: 'Publicación',
                                    onPress: () => {
                                        navigation.navigate('NewPostModal', { photoURL: 'https://i.pinimg.com/736x/9d/47/f1/9d47f1b987fa26a6fc6e843032662b4b.jpg', userId: currentUser?.uid });
                                    }
                                  },
                                {
                                    icon: 'file-image-outline',
                                    style: {
                                        backgroundColor: '#fff',
                                    },
                                    labelTextColor: '#000',
                                    color: '#000',
                                    label: 'Fotos',
                                    onPress: () => { console.log("Nueva foto") }
                                }
                            ]}
                        />
                    </Portal> */}
        </SafeAreaView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <NBButton
            size={50}
            onPress={() => {
              navigation.navigate('NewPostModal');
            }}
            title={'Shout'}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

export const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    display: 'flex',
    backgroundColor: 'white',
    flex: 9,
  },
  scrollContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerContainer: {
    width: '100%',
    height: 180,
    flex: 1,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '87%',
    height: 'auto',
    backgroundColor: '#ffffff',
    gap: 25,
  },
});

export default HomeTab;
