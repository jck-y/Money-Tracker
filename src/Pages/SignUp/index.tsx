import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <PageHeader label="Sign Up" backButton={true}navigation={navigation} nav="SignIn" />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={152} />
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
        />
        <Gap height={16} />
        <Button
          label="Create New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};


export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper:{
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
})