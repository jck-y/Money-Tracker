import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Gap, PageHeader, TextInput, TransactionCard} from '../../components';
const CashOnHand = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="CashOnBank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={44} />
      <View style={styles.contentWrapper}>
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit/Credit" />
        <Gap height={22} />
        <Button
          label="Save"
        />
      </View>

      <View style={styles.contentWrapper}>
      <Gap height={24} />
      <Text>Last 3 Transactions</Text>
      <TransactionCard date="17 April 2020" text="Water, Food" price="-Rp.300.000"/>
      <TransactionCard date="18 April 2020" text="Office supplies" price="-Rp.300.000"/>
      <TransactionCard date="19 April 2020" text="Top Up" price="+Rp.300.000"/>
      </View>
    </ScrollView>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
