import React from 'react'
import { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, Platform  } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import globalStyles from '../theme/appTheme'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';

const {width: screenWidth} = Dimensions.get('window')

const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()
  const [term, setTerm] = useState('')
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])


  useEffect(() => {
    if(term.length === 0) return setPokemonFiltered([]);

    if(isNaN(Number(term))){
      setPokemonFiltered(
        simplePokemonList.filter(poke => poke.name.includes(term.toLowerCase()))
      )
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term) 
      setPokemonFiltered(
        pokemonById ? [pokemonById] : []
      )
    }
  }, [term])
  
  if(isFetching){
    return (
      <Loading text="Loading..." />
    )
  }
  
  return (
    <View style={styles.container} >
  
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{...styles.searchInput, top: Platform.OS === 'ios' ? top : top+10 }}
      />

      <FlatList 
        //data 
        data={pokemonFiltered}
        renderItem={({item}) => (<PokemonCard pokemon={item} />)}
        keyExtractor={(poke) => poke.id}
        //UI
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Text style={{...globalStyles.title, ...globalStyles.globalMargin, marginTop: top +50}} >{term}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20
    },
    searchInput: {
      position: 'absolute',
      width: screenWidth-40,
    }
});

export default SearchScreen
