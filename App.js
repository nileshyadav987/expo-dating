import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from "react-redux";
import { createStore } from "redux";

import IndexScreen from './src/screens/Index'
import SignupForm from './src/screens/SignupForm'

import reduxReducer from "./reduxReducer";



const Stack = createStackNavigator();
const store = createStore(reduxReducer);

export default function App() {

  return (
    <Provider store={store}>
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="IndexScreen"
              component={IndexScreen}
              options={{ headerBackTitleVisible: false, headerShown: false }}
            />
            <Stack.Screen
              name="Sign up"
              component={SignupForm}
              options={{ headerBackTitleVisible: false, headerShown: true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      
    </Provider>
  );
}