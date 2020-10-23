import React, { useState, useRef, useEffect, Fragment } from 'react';
import { View, Text, SafeAreaView, Image, Segment, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import DismissKeyboard from '../../../components/dismissKeyboard';
import Chatroom from '../../../components/Chatroom';
import {
    Container,
    Drawer,
    Header,
    Title,
    Content,
    Button,
    Footer,
    FooterTab,
    Body,
    Left,
    Right,
    Icon,
  } from 'native-base';
import styles from './style';
const { height } = Dimensions.get('window')
function Dashboard({ navigation }) {
    const [segment, setSegment] = useState(0);
    function getContentComponent() {
        return <Chatroom />;
    }

    function onScrollHandler(event) {
        const itemHeight = 100;
        const itemNo = 5;
        const startOffset = -50;
        const currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
        const _page =
          Math.ceil(
            (startOffset + currentOffset + itemHeight * itemNo) /
              (itemHeight * itemNo),
          ) - 1;
        if (_page > page) {
          setPage(_page);
        }
      }

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                 <View style={styles.headersection}>
                    <Text style={styles.title}>Chat</Text>
                </View>
                <View style={styles.segment}>
                    <View
                        first
                        active={segment === 0 ? true : false}
                        onPress={() => setSegment(0)}>
                        <Text>ALL CHATS</Text>
                    </View>
                    <View
                        second
                        active={segment === 1 ? true : false}
                        onPress={() => setSegment(1)}>
                        <Text>BY NAME</Text>
                    </View>
                    <View
                        second
                        active={segment === 1 ? true : false}
                        onPress={() => setSegment(2)}>
                        <Text>BY DATE</Text>
                    </View>
                 </View>
                 <Content
                    scrollEventThrottle={300}
                    onScroll={onScrollHandler}
                    removeClippedSubviews={true}
                    padder
                    contentContainerStyle={styles.content}>
                    {getContentComponent()}
                </Content>
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default Dashboard