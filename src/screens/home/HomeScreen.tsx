import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';

// Firebase
import { signOut, getAuth } from 'firebase/auth';

// Custom Components
import NBButton from '../../components/nb-button/NBButton';

const HomeScreen = ({ navigation }: any): JSX.Element => {

    const auth = getAuth();
    const user = auth.currentUser;

    const handleLogout = () => {
        signOut(auth).then((_) => {
            navigation.navigate('Welcome');
        }).catch(error => console.error("SignOut > Error: ", error));
    }


    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} style={styles.scrollContainer}>

                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/logo/neatbeat-logo.png')} />
                </View>

                <Text>Bienvenido, {user?.displayName}!</Text>

                <View style={[styles.card]}>
                    <NBButton title={'Cerrar sesión'} onPress={handleLogout}></NBButton>
                </View>

            </ScrollView>
        </SafeAreaView>
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
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 150,
        paddingHorizontal: 50
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

export default HomeScreen;