import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import PokemonScreen from '../screens/PokemonScreen';
import SearchScreen from '../screens/SearchScreen';

export type RouteStackParams = {
  SearchScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RouteStackParams>()

const SearchStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }} 
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack
