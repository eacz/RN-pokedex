import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import FadeInImage from './FadeInImage';

interface Props {
  pokemon: PokemonFull
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{...StyleSheet.absoluteFillObject}} >
      {/* Types and weight */}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title} >Types: </Text>
        <View style={styles.rowContainer} >
            {pokemon.types.map(({type}) => (
              <Text style={styles.regularText} key={type.name} >{type.name}  </Text>
              ))}
        </View>
        <Text style={styles.title} >Weight:</Text>
        <Text style={styles.regularText} >{(pokemon.weight*0.1).toFixed(2)} Kg</Text>
      </View>
            
      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title} >Sprites: </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  > 
          <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.front_default} />
          <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.back_default} />
          <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.front_shiny} />
          <FadeInImage style={styles.basicSprite} uri={pokemon.sprites.back_shiny} />
        </ScrollView>
      </View>

      {/* Abilities */}
      <View style={styles.container} >
        <Text style={styles.title} >Abilities: </Text>
        <View style={styles.rowContainer}>
        {pokemon.abilities.map(({ability}) => (
          <Text style={styles.regularText} key={ability.name} >{ability.name}  </Text>
          ))}
        </View>

      </View>

      {/* Stats*/}
      <View style={styles.container} >
        <Text style={styles.title} >Stats: </Text>
        <View>
        {pokemon.stats.map((stat) => (
          <View key={stat.stat.name + stat.base_stat} style={styles.rowContainer} >
            <Text style={{...styles.regularText, ...styles.boldText}}  >{stat.stat.name}: </Text>
            <Text style={styles.regularText} >{stat.base_stat}</Text>
          </View>
          ))}
        </View>
      </View>

      {/* Movements */}
      <View style={styles.container} >
        <Text style={styles.title} >Movements: </Text>
        <View style={styles.rowContainer}>
        {pokemon.moves.map(({move}) => (
          <Text style={styles.regularText} key={move.name} >{move.name}  </Text>
          ))}
        </View>

      </View>

      <View style={styles.centerContainer}>
        <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
      </View>
     


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
    },
    regularText: {
      fontSize: 19,
      textTransform: 'capitalize'
    },
    boldText: {
      fontWeight: 'bold'
    },
    rowContainer: {
      flexDirection: 'row',
       flexWrap: 'wrap'
    },
    basicSprite: {
      width: 100,
      height: 100
    },
    centerContainer: {
      alignItems: 'center'
    }
});

export default PokemonDetails
