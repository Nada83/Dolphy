import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = (props) => (
    <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.container, props.style]}
        onPress={props.onPress}
    >
        <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: 134,
        height: 45,
        borderRadius: 24,
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 1.3
    }
})

export default Button;