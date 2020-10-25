/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { View, Image,Text } from 'react-native';
import reducer from './src/reducers';
import images from './src/config/images';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateAccount from './src/screens/vender/CreateAccount';
import Onboarding from './src/screens/vender/Onboard';
import Vendertwosignup from './src/screens/vender/Vendertwosignup'
import Clienttwosignup from './src/screens/client/Clienttwosignup'
import Venderthreesignup from './src/screens/vender/Venderthreesignup'
import Login from './src/screens/vender/Login';
import Dashboard from './src/screens/vender/Dashboard';
import ForgetPassword from './src/screens/vender/ForgetPassword';
import GoLogin from './src/screens/vender/GoLogin';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const middleware = [thunk];
const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(...middleware));
const store = createStore(reducer, {}, enhancer);
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{
        style: {
          backgroundColor: '#f7f7f7',
          //----------add this line------------------------//
          height: 60,
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View>
            <Image source={images.Chat} style={{width: 18, height: 18, tintColor: color, marginTop:20 }}/>
            <Text style={{ fontSize:10}}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View>
            <Image source={images.Profile} style={{width: 16, height: 18, tintColor: color, marginTop:20, marginLeft:10 }}/>
            <Text style={{ fontSize:10}}>My profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View>
            <Image source={images.Setting} style={{width: 22, height: 18, tintColor: color, marginTop:20, marginLeft:3 }}/>
            <Text style={{ fontSize:10}}>Setting</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dolphies"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View>
            <Image source={images.Dolphy} style={{width: 22, height: 18, tintColor: color, marginTop:20, marginLeft:5 }}/>
            <Text style={{ fontSize:10}}>Dolphies</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: '#fff' } }} initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={MyTabs} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Vendertwosignup" component={Vendertwosignup} options={{ headerShown: false }} />
        <Stack.Screen name="Clienttwosignup" component={Clienttwosignup} options={{ headerShown: false }} />
        <Stack.Screen name="Venderthreesignup" component={Venderthreesignup} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="GoLogin" component={GoLogin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App(){
  return(
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}

export default App;
