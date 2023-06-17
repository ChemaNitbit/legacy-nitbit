import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from '@react-native-material/core';

// Custom Components
import NBButton from '../../../components/nb-button/NBButton';

//Firebase
import { firestoreDB } from '../../../../firebase-config';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../../../../firebase-config';
import { createUserWithEmailAndPassword, updateProfile, getAuth, User } from 'firebase/auth';

const SignupScreen = ({ navigation }: any) => {

    const [name, onChangeName] = React.useState('')
    const [lastname, onChangeLastname] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [confirmPassword, onChangeConfirmPassword] = React.useState('')
    const [birthdate, onChangeBirthdate] = React.useState('')
    const [isSelected, setSelection] = useState(false);

    const handleSignUp = () => {

        const userData = {
            name, lastname, email, birthdate
        }

        createUserWithEmailAndPassword(auth, email, password).then((response) => {
            console.log("SignUp > uid:", response.user.uid);
            const docRef = doc(firestoreDB, 'users', response.user.uid);
            return setDoc(docRef, userData);
        }).then(createUserResponse => {
            console.log("AddDoc > user: ", createUserResponse);
            const authUser = getAuth();
            return updateProfile((authUser.currentUser as User), { displayName: name })
        }).then(updateProfileResponse => {
            console.log("updateProfile > updateProfileResponse: ", updateProfileResponse);
            navigation.navigate('Login')
        }).catch(error => console.error("SignUp > Error: ", error));
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} style={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../../assets/logo/neatbeat-logo.png')} />
                </View>
                <View style={[styles.card]}>
                    <Text style={styles.title}>Crear cuenta</Text>
                    <TextInput style={styles.formField} onChangeText={onChangeName} value={name} label="Nombre" />
                    <TextInput style={styles.formField} onChangeText={onChangeLastname} value={lastname} label="Apellido" />
                    <TextInput style={styles.formField} onChangeText={onChangeEmail} value={email} label="Correo" />
                    <TextInput style={styles.formField} onChangeText={onChangePassword} value={password} label="Contraseña" secureTextEntry={true} />
                    <TextInput style={styles.formField} onChangeText={onChangeConfirmPassword} value={confirmPassword} label="Verificar contraseña" secureTextEntry={true} />
                    <TextInput style={styles.formField} onChangeText={onChangeBirthdate} value={birthdate} label="Fecha de nacimiento" />

                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox} />
                        <Text style={styles.checkboxLabel}>{`Leí y acepto los términos y condiciones y politica de privacidad.`}</Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <NBButton onPress={handleSignUp} title={'Crear Cuenta'}></NBButton>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    scrollContainer: {
        width: '100%',
        display: 'flex'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        letterSpacing: -0.5,
        marginBottom: 45
    },
    formField: {
        marginVertical: 10
    },
    imageContainer: {
        width: '100%',
        maxHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: 1
    },
    card: {
        width: '87%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        // borderRadius: 20,
        padding: 10,
        marginVertical: 0,
        backgroundColor: '#ffffff',
        flex: 3
    },
    elevation: {
        elevation: 20,
        shadowColor: '#707070'
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#BDBDBD',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#006FB9',
        borderColor: '#006FB9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    checkboxLabel: {
        marginLeft: 8,
        marginRight: 10,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
    },
    checkbox: {
        alignSelf: 'center',
    },
})

export default SignupScreen;