import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import RNCountry from 'react-native-countries';
import DropDownPicker from 'react-native-dropdown-picker';
const { width } = Dimensions.get('window')



function DropDown(props) {


    const [country, setCountry] = React.useState('United Kingdom')
    let countries = RNCountry.getCountryNamesWithCodes;
    let data = [];
    countries.sort((a, b) => a.name.localeCompare(b.name)).map(c => {
        let obj = {};
        obj.label = c.name;
        obj.value = c.name;
        data.push(obj)
    }
    )
    return (
        <DropDownPicker
            items={data}
            defaultValue={country}
            containerStyle={[styles.container, props.style]}
            style={styles.additionalstyle}
            dropDownStyle={{ backgroundColor: '#fff' }}
            onChangeItem={item => console.log(item)}
            arrowStyle={styles.arrowStyle}
            labelStyle={styles.labelStyle}
            zIndex={100}
            arrowColor='#bfbfbf'
        />
    )
}
const styles = StyleSheet.create({
    container: {
        height: 45,
        width: width - 88,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0
    },
    additionalstyle: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderColor: '#dfdfdf',
        borderWidth: 2,
        // justifyContent: 'center'
    },
    arrowStyle: {
        position: 'relative',
    },
    labelStyle: {
        fontSize: 16,
        lineHeight: 24,
        color: '#2d2d2d',
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: 15
    }
})
export default DropDown