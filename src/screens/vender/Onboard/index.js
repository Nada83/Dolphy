import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Images from '../../../config/images';
import BorderButton from '../../../components/borderButton';
import Button from '../../../components/Button'
import styles from './style';
const { width } = Dimensions.get('window')

function Onboard({ navigation }) {
    const gotoLogin = () => navigation.navigate('Dashboard')
    const register = () => navigation.navigate('CreateAccount')
    return (
        <SafeAreaView style={styles.container}>            
            <Image source={Images.CUT} style={styles.cut}/>
            
            <View style={styles.bottomView}>
                <Text style={styles.homepage}>The easiest way to communicate with your clients.</Text>
                <Button title='SIGN IN' style={styles.button} titleStyle={styles.buttonTitle} onPress={gotoLogin}/>
                <BorderButton title='Create an account' style={styles.borderButton} titleStyle={styles.borderBT} onPress={register}/>
            </View>
            <Text style={styles.title}>@Dolphy 2020.All rights reserved</Text>
        </SafeAreaView>
    )
}

export default Onboard