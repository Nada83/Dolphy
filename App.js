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
import { View, Image } from 'react-native';
import reducer from './src/reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateAccount from './src/screens/vender/CreateAccount';
import Onboarding from './src/screens/vender/Onboard';
import Login from './src/screens/vender/Login';
import ForgetPassword from './src/screens/vender/ForgetPassword';
import GoLogin from './src/screens/vender/GoLogin';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const middleware = [thunk];
const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(...middleware));
const store = createStore(reducer, {}, enhancer);

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: '#fff' } }} initialRouteName='Onboarding'>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
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
