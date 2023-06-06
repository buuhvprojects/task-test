import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen';



const Stack = createNativeStackNavigator<ParamListBase>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={({route}) => ({title: (route.params as {
            name: string;
          }).name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
