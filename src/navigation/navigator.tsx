import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

import HomeScreen from '../screens/HomeScreen'
import PokemonScreen from '../screens/PokemonScreen';

export type RouteStackParams = {
  HomeScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RouteStackParams>()

const StackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }} 
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator
