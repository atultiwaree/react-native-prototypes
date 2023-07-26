import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import App from './App';
import PathReader from './src/Screens/PathReader';
import ReadDir from './src/Screens/ReadDir';
import MakeDir from './MakeDir';
import WriteFile from './src/Screens/WriteFile';
import ImageReducer from './src/Screens/ImageReducer';
import Parivartan from './src/Screens/Parivartan';
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="PathReader" component={PathReader} />
        <Stack.Screen name="ReadDir" component={ReadDir} />
        <Stack.Screen name="mkdir" component={MakeDir} />
        <Stack.Screen name="writefile" component={WriteFile} />
        <Stack.Screen name="imageReducer" component={ImageReducer} />
        <Stack.Screen name="parivartan" component={Parivartan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
