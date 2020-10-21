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
        height: width - 110,
        zIndex: 1,
        resizeMode: 'cover'
    },
    headersection:{
        flexDirection: 'row',
        width:width *0.8,
        alignItems:'flex-end',
        marginTop: 50
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: width*0.14,
        lineHeight: 24,
        letterSpacing: 0.24
    },

    continue:{
        width:width*0.85,
        position:'absolute',
        bottom:10
    },
    smallTitle: {
        fontSize: 16,
        color: '#bfbfbf',
        lineHeight: 24
    },
    loginTitle: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#fff'
    },
    loginButtonView: {
        position: 'absolute',
        bottom: 25,
        zIndex: 10,
        alignItems: 'center'
    },
    datePicker: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 59,
        width: width - 88,
        borderRadius: 17

    },
    birthday: {
        width: width - 88,
        height: 45,
        borderRadius: 24,
        borderColor: '#dfdfdf',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
})