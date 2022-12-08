import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./screens/home";
import Product from "./screens/productInfo";
import Cart from "./screens/myCart";

export default function App(){

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown : false
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="roduct" component={Product} />

        </Stack.Navigator>
      
    </NavigationContainer>
  )
}