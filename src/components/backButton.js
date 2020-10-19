import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../config/images';

const Back = (props) => (
    <TouchableOpacity  onPress={props.onPress}>
        <Text style={{color:"blue"}}>Back</Text>
    </TouchableOpacity>
);

const innerStyle = StyleSheet.create({
    backButton: {
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 24,
        borderColor: '#e80606',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14
    },
    backIcon: {
        height: 17,
        width: 527 / 55
    }
});

export default Back