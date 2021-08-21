import React from 'react'
import { Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import usePokemonPaginated from '../hooks/usePokemonPaginated'
import globalStyles from '../theme/appTheme'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const {simplePokemonList, isLoading, loadPokemons} = usePokemonPaginated()
  
  return (
    <>
      <Image style={globalStyles.pokeballBG} source={require('../assets/pokebola.png')} />
      {/*<Text style={{...globalStyles.title, ...globalStyles.globalMargin, marginTop: top+20}} >Pokedex</Text>*/}
      <FlatList 
        data={simplePokemonList}
        keyExtractor={(poke) => poke.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Image source={{uri: item.picture}} style={{width: 100, height: 100}} />
        )}
        ////infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<ActivityIndicator style={{height: 100, }} size={20} color="grey"/>}
      />
    </>
  )
}

export default HomeScreen
