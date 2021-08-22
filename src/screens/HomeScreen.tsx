import React from 'react'
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PokemonCard from '../components/PokemonCard'
import usePokemonPaginated from '../hooks/usePokemonPaginated'
import globalStyles from '../theme/appTheme'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  const {simplePokemonList, isLoading, loadPokemons} = usePokemonPaginated()
  
  return (
    <>
      <Image style={globalStyles.pokeballBG} source={require('../assets/pokebola.png')} />
      <View style={{alignItems: 'center'}} >
          <FlatList 
            //data 
            data={simplePokemonList}
            renderItem={({item}) => (<PokemonCard pokemon={item} />)}
            keyExtractor={(poke) => poke.id}
            //UI
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <Text style={{...globalStyles.title, ...globalStyles.globalMargin, marginTop: top+20}} >Pokedex</Text>}
            ListFooterComponent={<ActivityIndicator style={{height: 100, }} size={20} color="grey"/>}
            ////infinite scroll
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
          />
        </View>
    </>
  )
}

export default HomeScreen
