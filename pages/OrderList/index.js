import React from 'react';
import styles from './style';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function OrderList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 812,
      }}
    >
      <Text style={styles.title}>Teste</Text>
    </ScrollView>
  );
}
