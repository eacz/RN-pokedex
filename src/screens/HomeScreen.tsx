import React from 'react'
import { Text, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import globalStyles from '../theme/appTheme'

const HomeScreen = () => {
  const { top } = useSafeAreaInsets()
  return (
    <>
      <Image style={globalStyles.pokeballBG} source={require('../assets/pokebola.png')} />
      <Text style={{...globalStyles.title, ...globalStyles.globalMargin, marginTop: top+20}} >Pokedex</Text>
    </>
  )
}

export default HomeScreen
