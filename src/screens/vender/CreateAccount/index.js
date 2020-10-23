import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import Images from '../../../config/images';
import Input from '../../../components/input';
import moment from 'moment';
import Back from '../../../components/backButton';
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
    const [type, setType] = React.useState('client');
    const selectedclient = () => setType('client');
    const selectedVendor = () => setType('vendor');
    const _handleName = name => setName(name);
    const _handleEmail = email => setEmail(email);
    const _handlePhoneNumber = number => setPhoneNumber(number);
    const goBack= ()=>navigation.goBack();
    const next = () => {
        if(name===''||email===''||phoneNumber===''){
            setError(true);
            return;
        }
        let info = {
            username: name, email,contact_number: phoneNumber
        }
        if (type === 'client') {
            navigation.navigate('Vendertwosignup', { info });
        } else {
            navigation.navigate('Clienttwosignup', { info })
        }
    }
    if (name !== '' && email !== ''&& phoneNumber !=='') {
        allow = true;
    }
    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                 <View style={styles.headersection}>
                    <Back onPress={goBack}/>
                    <Text style={styles.title}>Create an account</Text>
                </View>
               
                <ToggleButton style={{ marginTop: height > 700 ? 50 : 20, marginBottom: 10 }} leftPress={selectedclient} rightPress={selectedVendor} />
                <KeyboardAvoidingView behavior='padding' style={{ zIndex: 10 }}>
                  
                        <Input
                            placeholder={type === 'client' ? 'Company name...' : 'Your name...'}
                            onChangeText={_handleName}
                            value={name}
                            autoCapitalize='none'
                            error={error&&name===''}
                        />  
                        <Input
                            placeholder={'E-mail...'}
                            onChangeText={_handleEmail}
                            value={email}
                            autoCapitalize='none'
                            error={error&&email===''}
                        />
                        <Input
                            placeholder={type === 'client' ? 'Website address...' : 'Phone number...'}
                            onChangeText={_handlePhoneNumber}
                            value={phoneNumber}
                            secureTextEntry
                            blurOnSubmit={false}
                            onSubmitEditing={() => Keyboard.dismiss()}
                            error={error&&phoneNumber===''}
                        />
                        
                </KeyboardAvoidingView>
                <Button title='Continue' onPress={next} style={[{backgroundColor: allow?'#216EFB':'#D3E2FE'}, styles.continue]} />
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default CreateAccount