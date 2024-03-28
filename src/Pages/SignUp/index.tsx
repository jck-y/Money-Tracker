import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Gap, PageHeader, TextInput } from '../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const SignUp = () => {
  const navigation = useNavigation();
  const [selectImage, setselectImage]=useState('')
  const ImagePicker = () => {
   let options = {
    storageOptions:{
      path: 'image',
    },
   };

   launchImageLibrary(options, response =>{
    setselectImage(response.assets[0].uri)
    console.log(response.assets[0].uri)
   })
  };

  return (
    <View style={styles.container}>
      <PageHeader label="Sign Up" backButton={true} onPress={() => navigation.goBack()} />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <TouchableOpacity onPress={ImagePicker} style={styles.outerCircle}>
          <Text style={styles.textphoto}>Add Photo </Text>
        </TouchableOpacity>
        <Gap height={16} />
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
          label="Continue"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerCircle: {
    width: 110,
    height: 110,
    borderRadius: 100, 
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed', 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },
  textphoto:{
    display:'flex',
    width:90,
    height:90,
    borderRadius:100,
    backgroundColor:'#F0F0F0',
    fontSize:21,
    textAlign:'center',
    textAlignVertical: 'center',
    color: '#8D92A3',
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default SignUp;
