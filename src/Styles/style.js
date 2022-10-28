import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    font16: {
        fontSize: 16
    },
    fontGreen16: {
        fontSize: 16,
        color: '#057E7E',
        fontWeight: '700'
    },
    commonInput: {
        borderRadius: 25,
        backgroundColor: '#eee',
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    buttonText: {
        color: '#fff'
    },
    fbBtn: {
        backgroundColor: '#2D509B',
        borderRadius: 50,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginBottom: 15,
    },
    googleBtn: {
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        marginBottom: 15
    },
});