import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/Store';
import ListScreen from './screens/ListScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator<ParamListBase>();

export default function RoutesNavigation() {
    const username = useSelector((state: RootState) => state.todo.username)
    
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
          options={() => ({title: username})}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}