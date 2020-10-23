import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { StyleSheet } from 'react-native';
import { View , Text,Dimensions} from 'react-native';
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
const { width, height } = Dimensions.get("window");

const Chatroom = props => {
  // const { data, loading, error, refetch } = useQuery(USERS_QUERY, {
  //   variables: { id: props.auth.user.id },
  // });
  const users = [
      {
          id: 1,
          avatar: require('../assets/images/CUT.png'),
          Chatroom: "MM Construction",
          description : "Job:Bathroom renovation",
          details:"Speaking of which, Peter really wants to finish..."
      },
      {
        id: 1,
        avatar: require('../assets/images/Ellipse.png'),
        Chatroom: "Jang",
        description : "job1:Bathroom renovation",
        details:"Speaking of which, Jang really wants to finish..."
    }
  ]

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
              props.navigation.navigate('UserProfile', {
                userId: user.id,
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
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 15,
    flexDirection:"row",
    height:80,
    backgroundColor:"#F1FAFE",
    marginTop:20,
    borderRadius:24,
    width:width*0.88
  },
  left:{
      marginLeft: 20
  },
  thumbnail:{
      width: 30,
      height: 30,
      marginBottom:20
  },
  bodycontent:{
    marginLeft: 15,
  },
  username:{
      fontSize: 16,
      fontWeight:"bold",
      fontFamily:"Product Sans",
      textAlign:'left',
      width:width*0.88
  },
  details:{
    width:width*0.65
  }
});

export default Chatroom;
