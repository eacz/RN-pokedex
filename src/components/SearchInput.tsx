import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/Ionicons'

interface Props {
  style?: StyleProp<ViewStyle>
}

const SearchInput = ({style}: Props) => {
  return (
    <View style={{...styles.container, ...style as any}} >
      <View style={styles.textBackground}>
        <TextInput 
          placeholder="Search a pokemon" style={styles.textInput} 
          autoCapitalize={'none'} autoCorrect={false} 
        />
        <Icon name="search-outline" size={20} color="grey" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: 'red'
    },
    textBackground: {
      backgroundColor:'#e6e6e6',
      borderRadius: 50,
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    },
    textInput : {
      flex: 1, 
      fontSize: 16
    }
});

export default SearchInput
