import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    BottomImage: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: height / 3,
        zIndex: 1,
        resizeMode: 'stretch'
    },    
    scrollcontainer:{
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

    activelogin:{
        backgroundColor: '#216EFB',
        height: 50,
        width: width-50
    },
    loginButton: {
        backgroundColor: '#D3E2FE',
        height: 50,
        width: width-50
    },

    headersection:{
        flexDirection: 'row',
        width:width *0.8,
        alignItems:'flex-end',
        marginTop: 50
    },

    forgotPassword: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 24,
        color: '#B5BAC9',
        marginTop: 18,
        marginBottom: 4
    },
    title: {
        color: 'black',
        fontSize: 16,
        marginLeft: width*0.24,
        fontWeight: 'bold',
        fontFamily:"Product Sans"
    },
    smallTitle: {
        color: '#2d2d2d',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.24,
        marginBottom: 4,
        zIndex: 10
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width - 88,
        marginTop: 14,
        zIndex: 10
    },
    googleButton: {
        borderColor: '#dfdfdf',
        borderWidth: 1
    }
})