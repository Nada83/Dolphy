import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import Images from '../../../config/images';
import Input from '../../../components/input';
import moment from 'moment';
import BorderButton from '../../../components/borderButton';
import Button from '../../../components/Button';
import DismissKeyboard from '../../../components/dismissKeyboard';
import DatePicker from 'react-native-date-picker'
import ToggleButton from '../../../components/toggleButton'
import styles from './style';
const { height } = Dimensions.get('window')
function CreateAccount({ navigation }) {
    let allow = false;
    const [error, setError] = React.useState(false)
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setCpassword] = React.useState('');
    const [type, setType] = React.useState('customer');
    const [birthday, setBirthday] = React.useState('1989-01-01');
    const [showPicker, setShowPicker] = React.useState(false);
    const selectedCustomer = () => setType('customer');
    const selectedVendor = () => setType('vendor');
    const _handleName = name => setName(name);
    const _handleEmail = email => setEmail(email);
    const _handlePhoneNumber = number => setPhoneNumber(number);
    const _handlePassword = number => setPassword(number);
    const _handleCpassword = number => setCpassword(number);
    const next = () => {
        if(name===''||email===''||phoneNumber===''||password===''||cpassword===''){
            setError(true);
            return;
        }
        let info = {
            username: name, email, password, confirmPassword: cpassword, contact_number: phoneNumber, date_of_birth: birthday
        }
        if (type === 'vendor') {
            navigation.navigate('BusinessAddress');
        } else {
            navigation.navigate('AboutBusiness', { type: 'customer', info })
        }
    }
    const login = () => navigation.navigate('Login');
    const changeDate = date => setBirthday(moment(date).format('YYYY-MM-DD'));
    if (name !== '' && email !== '' && password !== '' && cpassword !=='' && phoneNumber !==''&& cpassword === password) {
        allow = true;
    }
    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>Create an account</Text>
                <ToggleButton style={{ marginTop: height > 700 ? 50 : 20, marginBottom: 10 }} leftPress={selectedCustomer} rightPress={selectedVendor} />
                <KeyboardAvoidingView behavior='padding' style={{ zIndex: 10 }}>
                    <ScrollView bounces={false}>
                        <Input
                            placeholder={type === 'vendor' ? 'Enter business name' : 'Enter first name'}
                            onChangeText={_handleName}
                            value={name}
                            textContentType='name'
                            autoCapitalize='words'
                            error={error&&name===''}
                        />
                        <Input
                            placeholder='Enter email address'
                            onChangeText={_handleEmail}
                            value={email}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoCapitalize='none'
                            error={error&&email===''}
                        />
                        <Input
                            placeholder='Enter phone number'
                            onChangeText={_handlePhoneNumber}
                            value={phoneNumber}
                            keyboardType='phone-pad'
                            error={error&&phoneNumber===''}
                        />
                        {type === 'customer' &&
                            <View style={{ zIndex: 11 }}>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => setShowPicker(!showPicker)} style={styles.birthday} >
                                    <Text>{moment(birthday).format('MM/DD/YY')}</Text>
                                </TouchableOpacity>
                                {showPicker &&
                                    <View style={styles.datePicker}>
                                        <DatePicker
                                            maximumDate={new Date('2002-12-31')}
                                            onDateChange={changeDate}
                                            mode={'date'}
                                            date={new Date(birthday)}
                                        />
                                    </View>}
                            </View>}
                        <Input
                            placeholder='Type password'
                            onChangeText={_handlePassword}
                            value={password}
                            secureTextEntry
                            textContentType='password'
                            blurOnSubmit={false}
                            onSubmitEditing={() => Keyboard.dismiss()}
                            error={error&&password===''&&password!==cpassword}
                        />
                        <Input
                            placeholder='Confirm password'
                            onChangeText={_handleCpassword}
                            value={cpassword}
                            secureTextEntry
                            textContentType='password'
                            bluÎrOnSubmit={false}
                            onSubmitEditing={() => Keyboard.dismiss()}
                            error={error&&cpassword===''}
                        />
                        <Button title='NEXT' onPress={next} style={{backgroundColor: allow?'#e80606':'#dfdfdf'}} />
                    </ScrollView>
                </KeyboardAvoidingView>

                <View style={styles.loginButtonView}>
                    <Text style={styles.loginTitle}>Already got an account?</Text>
                    <BorderButton title='LOGIN' onPress={login} />
                </View>
                <Image source={type === 'vendor' ? Images.bottom_image1 : Images.bottom_image4} style={styles.BottomImage} />
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default CreateAccount