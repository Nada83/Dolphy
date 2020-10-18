import React from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Easing } from 'react-native';
const { width } = Dimensions.get('window')

export default function ToggleButton(props) {
    const [left, setLeft] = React.useState(new Animated.Value(0));
    const [customerColor, setCustomerColor] = React.useState('white');
    const [vendorColor, setVendorColor] = React.useState('#dfdfdf');
    const pressLeft = () => {
        setCustomerColor('white');
        setVendorColor('#dfdfdf');
        Animated.timing(left, {
            toValue: 0,
            duration: 400,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: false
        }).start(() => { });
        props.leftPress()
    }
    const pressRight = () => {
        setCustomerColor('#dfdfdf');
        setVendorColor('#fff');
        Animated.timing(left, {
            toValue: (width - 114) / 2,
            duration: 400,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: false
        }).start(() => { });
        props.rightPress()
    }
    return (
        <View
            style={[styles.container, props.style]}
        >
            <TouchableOpacity
                underlayColor="transparent"
                onPress={pressLeft}
                style={{ zIndex: 100 }}
            >
                <View
                    style={styles.customer}
                >
                    <Text
                        style={[styles.title, { color: customerColor }]}
                    >
                        CUSTOMER
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                underlayColor="transparent"
                onPress={pressRight}
                style={{ zIndex: 100 }}
            >
                <View
                    style={styles.customer}
                >
                    <Text
                        style={[styles.title, { color: vendorColor }]}
                    >
                        COMPANY
                </Text>
                </View>
            </TouchableOpacity>
            <Animated.View
                style={[styles.animateView, { left: left }]}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "transparent",
                        marginBottom: -2
                    }}
                />

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: "transparent",
        borderRadius: 24,
        marginVertical: 24.5,
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#dfdfdf',
        borderWidth: 2
    },
    customer: {
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        width: (width - 114) / 2
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "transparent",
        letterSpacing: 1.92

    },
    animateView: {
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        width: (width - 114) / 2,
        backgroundColor: "#e80606",
        position: "absolute"
    }
})