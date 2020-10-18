import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    BottomImage: {
        width: width,
        height: width - 110,
        zIndex: 1,
        resizeMode: 'cover'
    },
    scrollcontainer: {
        height: height,
        flex: 1,
    },
    loginTitle: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#fff'
    },
    loginButtonView: {
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        bottom: 30

    },
    loginButton: {
        backgroundColor: '#e80606'
    },
    forgotPassword: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 24,
        color: '#e80606',
        marginTop: 18,
        marginBottom: 4
    },
    maincontainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 100
    },
    title: {
        color: '#e80606',
        fontSize: 23,
        fontWeight: 'bold'
    },
    smallTitle: {
        color: '#2d2d2d',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.24,
        marginBottom: 4,
        width: '80%',
        textAlign:'center'
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width - 88,
        marginTop: 14
    },
    googleButton: {
        borderColor: '#dfdfdf',
        borderWidth: 1
    }
})