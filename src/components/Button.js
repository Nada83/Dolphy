import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

const Button = ({style, onPress, title, titleStyle, disable}) => (
    <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.container, {backgroundColor: disable?'#dfdfdf':'#e80606'}, style]}
        onPress={disable?void(0):onPress}
    >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: width - 88,
        height: 45,
        borderRadius: 24,
        backgroundColor: '#dfdfdf',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        zIndex: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 1.3
    }
})

export default Button;