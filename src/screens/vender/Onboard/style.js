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
        height: height * 0.6,
        zIndex: 1,
        resizeMode: 'stretch'
    },
    cut: {
        width: width,
        height: width*0.8,
        marginTop: height * 0.05,
        resizeMode: 'center'
    },
    bottomView: {
        position: 'absolute',
        bottom: 82,
        zIndex: 10,
        alignItems: 'center'
    },

    homepage:{
        width: width* 0.8,
        textAlign: "center",
        lineHeight:40,
        fontSize: 30,
        marginBottom:20,
        fontWeight:"bold"
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: '#B5BAC9',
        marginTop: 10,
        position:'absolute',
        bottom: 20
    },
    button: {
        backgroundColor: '#216EFB',
        height:50
    },
    buttonTitle: {
        color: 'white',
        letterSpacing: 1.3,
      
    },
    borderButton: {
        width: width - 88,
        height: 50
    },
    borderBT: {
        letterSpacing: 1.3
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width - 88,
        marginTop: 14
    }
})