import React from 'react';
import { View, Text, SafeAreaView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import Input from '../../../components/input';
import Back from '../../../components/backButton';
import Button from '../../../components/Button';
import DismissKeyboard from '../../../components/dismissKeyboard';
import styles from './style';
const { height } = Dimensions.get('window')
function Vendertwosignup({ navigation }) {
    let allow = false;
    const [error, setError] = React.useState(false)
    const [number, setNumber] = React.useState('');
    const [back_id, setBackId] = React.useState('');
    const _handleNumber = name => setNumber(name);
    const _handleBackId = email => setBackId(email);
    const _handlePhoneNumber = number => setPhoneNumber(number);
    const goBack= ()=>navigation.goBack();
    const next = () => {
        if(number===''||back_id===''){
            setError(true);
            return;
        }
        let info = {
            number: number, back_id : back_id
        }
            navigation.navigate('Venderthreesignup', { info });
    }
    if (number !== '' && back_id !== '') {
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
                            placeholder={'Registration number'}
                            onChangeText={_handleNumber}
                            value={number}
                            keyboardType='number'
                            textContentType='number'
                            autoCapitalize='none'
                            error={error&&number===''}
                        />  
                        <Input
                            placeholder={'Bank_ID...'}
                            onChangeText={_handleBackId}
                            value={back_id}
                            keyboardType='Bank_ID'
                            textContentType='Bank_ID'
                            autoCapitalize='none'
                            error={error&&back_id===''}
                        />
                </KeyboardAvoidingView>
                <Button title='Continue' onPress={next} style={[{backgroundColor: allow?'#216EFB':'#D3E2FE'}, styles.continue]} />
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default Vendertwosignup