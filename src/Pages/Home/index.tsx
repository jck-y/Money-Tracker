import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {PageHeader, Gap, Button} from '../../components';
const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withPhoto" label="Money Tracker" sublabel="Track your money" backButton={false} />
      <Gap height={20} />
      <View style={styles.contentWrapper}>
        <Text>Your Balance</Text>
        <Text>Rp.10.0000</Text>
        <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />

        <View style={styles.cashOn}>
          <Text>Cash On Hand</Text>
          <Text>Rp. 4.000.000</Text>
        </View>

        <View style={styles.cashOn}>
          <Text>Cash On Bank</Text>
          <Text> Rp. 6.000.000</Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.contentWrapper2}>
        <Text> Add Transaction</Text>
        <Button
          label="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Button
          label="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cashOn: {
    flexDirection: 'row',
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  contentWrapper2: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
