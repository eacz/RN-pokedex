import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import FadeInImage from './FadeInImage'

const { width } = Dimensions.get('window')

interface Props {
  pokemon: SimplePokemon
}

const PokemonCard = ({pokemon} : Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.cardContainer} >
        
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            { '\n#'+ pokemon.id}
          </Text>
        </View>
        
        <View style={styles.pokeballContainer}>
          <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokeball} />
        </View>
        
        <FadeInImage uri= {pokemon.picture} style={styles.pokemonImage} />
      
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      marginHorizontal: 10,
      backgroundColor: 'grey',
      height: 120,
      width: width * 0.4,
      marginBottom:25,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    name: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      top:20,
      left: 10
    },
    pokeballContainer: {
      width: 100,
      height: 100,
      position: 'absolute',
      opacity: 0.5,
      bottom: 0,
      right: 0,
      overflow: 'hidden'
    },
    pokeball: {
      width: 100,
      height: 100,
      position: 'absolute',
      right: -25,
      bottom: -25

    },
    pokemonImage: {
      width: 100,
      height: 100,
      position: 'absolute',
      right: -5,
      bottom: -5
    }
});

export default PokemonCard