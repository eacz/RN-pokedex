import React from 'react'
import { View, StyleSheet, FlatList, Text, Dimensions, Platform  } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import globalStyles from '../theme/appTheme'

const {width: screenWidth} = Dimensions.get('window')

const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()

  if(isFetching){
    return (
      <Loading text="Loading..." />
    )
  }
  return (
    <View style={styles.container} >
      
      <SearchInput
        style={{
          position: 'absolute',
          width: screenWidth-40,
          top: Platform.OS === 'ios' ? top : top+10

        }}
      />

      <FlatList 
        //data 
        data={simplePokemonList}
        renderItem={({item}) => (<PokemonCard pokemon={item} />)}
        keyExtractor={(poke) => poke.id}
        //UI
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Text style={{...globalStyles.title, ...globalStyles.globalMargin, marginTop: top +50}} >Pokedex</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20
    },
});

export default SearchScreen
