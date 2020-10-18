import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, ScrollView, TouchableOpacity,Alert } from 'react-native';
import Images from '../../../config/images';
import Input from '../../../components/input';
import BorderButton from '../../../components/borderButton';
import Button from '../../../components/Button';
import styles from './style';


function ForgetPassword({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] =
     React.useState('');
    const [type, setType] = React.useState('customer')
    const _handleEmail = email => setEmail(email);
    const next = () => {
        if (email == "") {
            Alert.alert(
                'Information',
                'Insert Verify Email'
            )
        }else{
            navigation.navigate('GoLogin')
        }
    }
    const register = () => navigation.navigate('CreateAccount');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.maincontainer}>
                    <Text style={styles.title}>Don't Worry</Text>
                    <Text style={styles.smallTitle}>we'll send you a password reset link</Text>
                    <Input
                        placeholder='Enter email address*'
                        onChangeText={_handleEmail}
                        value={email}
                        keyboardType='email-address'
                        textContentType='emailAddress'
                    />
                    <Button title='SEND REMINDER' onPress={next} style={styles.loginButton} />
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


export default ForgetPassword