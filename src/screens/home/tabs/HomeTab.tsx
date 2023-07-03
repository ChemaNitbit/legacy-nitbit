import * as React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

// Navigation
import { useIsFocused } from '@react-navigation/native';

// Custom Components
import NbList from '../../../components/nb-list/NbList';
import NbHeader from '../../../components/nb-header/NbHeader';

// Material Components
import { FAB, PaperProvider, Portal } from 'react-native-paper';
import { User, getAuth } from 'firebase/auth';

const HomeTab = ({ navigation }: any): JSX.Element => {
    const isScreenFocused = useIsFocused();
    const [fabIsOpen, setFabIsOpen] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        const user = getAuth().currentUser as User;

        setCurrentUser(user);
    }, []);

    return (
        <PaperProvider>

            <View>
                <SafeAreaView style={styles.screenContainer}>
                    <View style={styles.headerContainer}>
                        <NbHeader></NbHeader>
                    </View>

                    <View style={{ flex: 3 }}>
                        <NbList></NbList>
                    </View>

                    <Portal>
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
                                        console.log('Nueva publicación');
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
                    </Portal>
                </SafeAreaView>
            </View>
        </PaperProvider>

    )
}

export const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',
    },
    scrollContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    headerContainer: {
        width: '100%',
        height: 180,
        flex: 1
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '87%',
        height: 'auto',
        backgroundColor: '#ffffff',
        gap: 25
    }
});

export default HomeTab;