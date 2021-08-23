import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps, } from '@react-navigation/stack'
import Icon  from 'react-native-vector-icons/Ionicons';
import { RouteStackParams } from '../navigation/navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FadeInImage from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';


interface Props extends StackScreenProps<RouteStackParams, 'PokemonScreen'> {};

const PokemonScreen = ({navigation, route}:Props) => {
  const  { params: { simplePokemon, color } } = route;
  const { name, picture, id } = simplePokemon
  const { top } = useSafeAreaInsets()

  const {isLoading, pokemon: pokemonFull} = usePokemon(id);
  
  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        {/* TODO: separate this the backButton in another component */}
        <TouchableOpacity 
          activeOpacity={0.8} 
          style={{...styles.backButton, top: top+10,}} 
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        <Text style={{...styles.pokemonName, top: top+40}}> {name + '\n'} #{id}</Text>

        <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokeball} />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>

      {/* Details */}

      <View style={styles.activityIndicator}>
        <ActivityIndicator color={color} size={50} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
      height: 370,
      zIndex: 999,
      alignItems: 'center',
      borderBottomLeftRadius: 1000,
      borderBottomRightRadius: 1000
    },
    backButton: {
      position: 'absolute',
      left: 20,
    },
    pokemonName: {
      color: '#ffffff',
      fontSize: 40,
      alignSelf: 'flex-start',
      left: 20
    },
    pokeball: {
      width: 250,
      height: 250,
      bottom: -20,
      opacity: 0.7
    },
    pokemonImage: {
      width: 250,
      height: 250,
      position: 'absolute',
      bottom: -20
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default PokemonScreen
