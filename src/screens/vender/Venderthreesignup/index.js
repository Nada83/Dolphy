import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import Input from '../../../components/input';
import Back from '../../../components/backButton';
import Button from '../../../components/Button';
import DismissKeyboard from '../../../components/dismissKeyboard';
import ToggleButton from '../../../components/toggleButton'
import styles from './style';
const { height } = Dimensions.get('window')
function Clienttwosignup({ navigation }) {
    let allow = false;
    const [error, setError] = React.useState(false)
    const [password, setpassword] = React.useState('');
    const [comfirmpass, confrimpass] = React.useState('');
    const _handlePassword = password => setpassword(password);
    const _handleConfrimpass = comfirmpass => confrimpass(comfirmpass);
    const goBack= ()=>navigation.goBack();
    const next = () => {
        if(password===''||comfirmpass==='' && password=== comfirmpass){
            setError(true);
            return;
        }
        let info = {
            password: password
        }
            navigation.navigate('Dashboard', { info });
    }
    if (password !== '' && comfirmpass !== '') {
        allow = true;
    }
    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                 <View style={styles.headersection}>
                    <Back onPress={goBack}/>
                    <Text style={styles.title}>Create an account</Text>
                </View>
        
                <KeyboardAvoidingView behavior='padding' style={{ zIndex: 10, marginTop:50 }}>
                  
                        <Input
                            placeholder={'Password...'}
                            onChangeText={_handlePassword}
                            value={password}
                            autoCapitalize='none'
                            error={error&&password===''}
                        />  
                        <Input
                            placeholder={'Confirm password...'}
                            onChangeText={_handleConfrimpass}
                            value={comfirmpass}
                            autoCapitalize='none'
                            error={error&&comfirmpass===''}
                        />
                </KeyboardAvoidingView>
                <Button title='Continue' onPress={next} style={[{backgroundColor: allow?'#216EFB':'#D3E2FE'}, styles.continue]} />
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default Clienttwosignup