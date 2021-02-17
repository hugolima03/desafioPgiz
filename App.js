import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './pages/Login/';
import OrderList from './pages/OrderList/';
import OrderDetails from './pages/OrderDetails/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Pedidos" 
          component={OrderList}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={OrderDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
