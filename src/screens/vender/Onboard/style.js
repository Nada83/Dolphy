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
        height: width*0.4,
        marginTop: height * 0.1,
        resizeMode: 'center'
    },
    bottomView: {
        position: 'absolute',
        bottom: 42,
        zIndex: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
        marginTop: 15
    },
    button: {
        backgroundColor: 'white'
    },
    buttonTitle: {
        color: '#e80606',
        letterSpacing: 1.3
    },
    borderButton: {
        width: width - 88
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