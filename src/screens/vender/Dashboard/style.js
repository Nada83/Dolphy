import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    headersection:{
        flexDirection: 'row',
        width:width *0.8,
        alignItems:'flex-end',
        marginTop: 50
    },

    title: {
        fontSize: 34,
        fontWeight: 'bold',
        lineHeight: 42,
        letterSpacing: 0.24
    },
    segment:{
        flexDirection: 'row',
        width:width *0.6,
        justifyContent:"space-between",
        marginRight:50,
        marginTop: 10
    },
    content: { 
        paddingTop: 0,
        width:width,
    }
})