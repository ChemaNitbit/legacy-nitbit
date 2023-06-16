import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        marginBottom: 45,
        color: '#212121',
        marginVertical: 50
    },
    formField: {
        marginVertical: 15
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
    nbButton: {
        alignSelf: "center",
        marginTop: 40,
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#5AB0D6'
    },
    button: {
        marginTop: 100,
        width: '100%',
        backgroundColor: '#5AB0D6',
        borderRadius: 24,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    forgotPasswordContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginVertical: 10
    },
    forgotPasswordText: {
        fontSize: 14,
        lineHeight: 24,
        color: '#5AB0D6',
    },
    borderBtn: {
        borderRadius: 10,
    }
});