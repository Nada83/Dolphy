//Client Chatting room

import React, { useState, useRef, useEffect, Fragment } from 'react';
import { View, Text, SafeAreaView, Image, Segment, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import DismissKeyboard from '../../../components/dismissKeyboard';
import {
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
   
    Button,
    Spinner,
    Content,
  } from 'native-base';
import styles from './style';
const { height } = Dimensions.get('window')
function Dashboard({ navigation }) {
    const [segment, setSegment] = useState(0);

    // Chatting room Data.
    const users = [
        {
            id: 1,
            avatar: require('../../../assets/images/CUT.png'),
            Chatroom: "MM Construction",
            description : "Job:Bathroom renovation",
            details:"Speaking of which, Peter really wants to finish..."
        },
        {
          id: 2,
          avatar: require('../../../assets/images/Ellipse.png'),
          Chatroom: "Jang",
          description : "job1:Bathroom renovation",
          details:"Speaking of which, Jang really wants to finish..."
      }
    ]

    //render chatting room.
    function getContentComponent() {
        return (
        <List>
            {users.map((user, index) => {
              return (
                <ListItem
                  style={styles.listItem}
                  key={index}
                  thumbnail
                  button
                  onPress={() =>
                    navigation.navigate('ClientChatting', {
                      userId: user.Chatroom,
                    })
                  }>
                  <Left style={styles.left}>
                    <Thumbnail style={styles.thumbnail} source={user.avatar} />
                  </Left>
                  <View style={styles.bodycontent}>
                    <Text style={styles.username}>{user.Chatroom}</Text>
                    <Text note numberOfLines={2}>
                      {user.description}
                    </Text>
                    <Text style={styles.details}>
                      {user.details}
                    </Text>
                  </View>
                </ListItem>
              );
            })}
          </List>
        )
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