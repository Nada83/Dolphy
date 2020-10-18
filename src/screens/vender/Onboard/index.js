import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Images from '../../../config/images';
import BorderButton from '../../../components/borderButton';
import Button from '../../../components/Button'
import styles from './style';
const { width } = Dimensions.get('window')

function Onboard({ navigation }) {
    const gotoLogin = () => navigation.navigate('Login')
    const register = () => navigation.navigate('CreateAccount')
    return (
        <SafeAreaView style={styles.container}>            
            <Image source={Images.CUT} style={styles.cut}/>
            <View style={styles.bottomView}>
                <Button title='SIGN IN' style={styles.button} titleStyle={styles.buttonTitle} onPress={gotoLogin}/>
                <BorderButton title='REGISTER' style={styles.borderButton} titleStyle={styles.borderBT} onPress={register}/>
                <Text style={styles.title}>Alternatively sign in with</Text>
            </View>
            <Image source={Images.bottom_image} style={styles.BottomImage} />
        </SafeAreaView>
    )
}

export default Onboard