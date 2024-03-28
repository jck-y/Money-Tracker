import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react';
import { Logo } from '../../assets/icon'


const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignIn'), 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.title}>Money Tracker</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#02CF8E',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title:{
    fontWeight:'bold',
    color:'black',
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  }
})