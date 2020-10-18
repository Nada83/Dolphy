import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import Images from '../../../config/images';
import Input from '../../../components/input';
import BorderButton from '../../../components/borderButton';
import Button from '../../../components/Button';
import ToggleButton from '../../../components/toggleButton';
import DismissKeyboard from '../../../components/dismissKeyboard';
import {Login} from '../../../reducers/session/action';
import Loader from '../../../components/load'
import styles from './style';

function LoginPage(props) {
    const { navigation } = props;
    const login = Login()
    const [error, setError] = React.useState(false);
    const [load, setLoad] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [type, setType] = React.useState('customer')
    const _handleEmail = email => setEmail(email);
    const _handlePassword = number => setPassword(number);
    const next = async () => {
        // if (email === '' || password === '') {
        //     setError(true);
        //     return;
        // }
        // setLoad(true);
        // await login({ email, password }, type); 
        // setLoad(false);
        // return
        if (type === 'customer') {
          
        } else {
            
        }
    }
    const register = () => navigation.navigate('CreateAccount');
    const selectedCustomer = () => setType('customer');
    const selectedVendor = () => setType('Company');
    return (

        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <ToggleButton style={{ marginTop: 50, marginBottom: 40 }} leftPress={selectedCustomer} rightPress={selectedVendor} />
                <Text style={styles.title}>Sign In</Text>
                <Input
                    placeholder='Enter email address'
                    onChangeText={_handleEmail}
                    value={email}
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    error={error && email === ''}
                    autoCapitalize='none'
                />

                <Input
                    placeholder='Type password'
                    onChangeText={_handlePassword}
                    value={password}
                    secureTextEntry
                    textContentType='password'
                    blurOnSubmit={false}
                    onSubmitEditing={() => Keyboard.dismiss()}
                    error={error && password === ''}
                />
                <Text style={styles.forgotPassword}>Forgot password?</Text>
                <Button title='LOGIN' onPress={next} style={styles.loginButton} />
                <Text style={[styles.smallTitle, { color: '#bfbfbf', marginTop: 14 }]}>Alternatively sign in with</Text>
                <View style={styles.loginButtonView}>
                    <Text style={styles.loginTitle}>Don't have an account?</Text>
                    <BorderButton title='REGISTER' onPress={register} />
                </View>
                <Image source={Images.bottom_image1} style={styles.BottomImage} />
                <Loader visible={load}/>
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default LoginPage