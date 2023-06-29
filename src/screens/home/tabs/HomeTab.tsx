import * as React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';

// Navigation
import { useIsFocused } from '@react-navigation/native';

// Custom Components
import NbList from '../../../components/nb-list/NbList';
import NbHeader from '../../../components/nb-header/NbHeader';

// Material Components
import { FAB, PaperProvider, Portal, Title } from 'react-native-paper';

const HomeTab = ({ navigation }: any): JSX.Element => {


    const isScreenFocused = useIsFocused();

    const [fabIsOpen, setFabIsOpen] = React.useState(false);

    return (
        <PaperProvider>

            <View>
                <SafeAreaView style={styles.screenContainer}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} style={styles.scrollContainer}>

                        <View style={styles.headerContainer}>
                            <NbHeader></NbHeader>
                        </View>

                        <NbList></NbList>

                        <Portal>
                            <FAB.Group

                                visible={isScreenFocused}
                                open={fabIsOpen}
                                onStateChange={({ open }) => setFabIsOpen(open)}
                                icon={fabIsOpen ? 'close' : 'plus'}
                                actions={[
                                    {
                                        icon: 'format-letter-case',
                                        label: 'Publicación',
                                        onPress: () => { console.log('Nueva publicación') }
                                    },
                                    {
                                        icon: 'file-image-outline',
                                        label: 'Fotos',
                                        onPress: () => { console.log("Nueva foto") }
                                    }
                                ]}
                            />
                        </Portal>

                    </ScrollView>
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