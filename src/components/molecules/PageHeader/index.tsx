import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButton } from '../../../assets/Images'
const PageHeader = ({label, backButton, navigation, nav}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backButton && navigation.navigate(nav)}>
        {backButton && <BackButton style={styles.backButton} />}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}
export default PageHeader

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label:{
    fontFamily: 'Poppins-Regular',
    fontSize:22,
    color: '#020202',
    fontWeight: '500',
  },
  backButton: {
    marginRight: 26,
  },
})