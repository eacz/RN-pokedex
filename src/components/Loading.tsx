import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface Props {
  text?: string,
  loadingSize?: number,
  loadingColor?: string
}
const Loading = ({text, loadingSize = 50, loadingColor = 'grey'} : Props) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={loadingSize} color={loadingColor} />
     { text && <Text>{text}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading
