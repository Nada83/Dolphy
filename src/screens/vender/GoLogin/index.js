import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, ScrollView, TouchableOpacity,Alert } from 'react-native';
import Images from '../../../config/images';
import BorderButton from '../../../components/borderButton';
import Button from '../../../components/Button';
import styles from './style';


function GoLogin({ navigation }) {
    const [type, setType] = React.useState('customer')
    const next = () => {
    }
    const register = () => navigation.navigate('CreateAccount');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.maincontainer}>
                    <Text style={styles.title}>Check Your Email</Text>
                    <Text style={styles.smallTitle}>You will shortly receive an email with a password recovery link</Text>
                    <Button title='Back to Login' onPress={next} style={styles.loginButton} />
                </View>
                <View
                    style={{
                        height: 200,
                        alignItems: "center",
                        marginTop: 23
                    }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        opacity: 1,
                        position: 'absolute',
                        alignItems: "center"
                    }}
                        source={Images.bottom_image1} />
                    <View style={styles.loginButtonView}>
                        <Text style={styles.loginTitle}>Don't have an account?</Text>
                        <BorderButton title='REGISTER' onPress={register} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default GoLogin