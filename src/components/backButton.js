import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../config/images';

const Back = (props) => (
    <TouchableOpacity  onPress={props.onPress}>
        <Text style={innerStyle.backButton}>Back</Text>
    </TouchableOpacity>
);

const innerStyle = StyleSheet.create({
    backButton: {
      color: '#216eFB',
      fontSize: 16,
    }
});

export default Back