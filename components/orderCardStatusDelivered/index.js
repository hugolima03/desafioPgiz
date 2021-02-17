import React from 'react';
import styles from './style';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function OrderCardStatusDelivered(props, { navigation }) {
  return (
    <View style={styles.orderCardStatusDelivered}>
      <View style={styles.orderCardStatusIcons}>
        <Image 
          source={require('../../assets/img/Icons/003-motorcycle.png')}
        />
        <Image source={require('../../assets/img/Icons/stopwatch.png')} />
      </View>
      <View style={styles.DeliveredOrderContent}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#4B4B4B', marginBottom: 4}}>
          {props.code} {props.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#4B4B4B' }}>
          Entregar até 15:39
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.orderCardStatusDeliveredButton}
        onPress={() => props.navigation.navigate('Detalhes')} 
      >
        <Image source={require('../../assets/img/Icons/entregue.png')} />
        <Text style={styles.orderCardStatusDeliveredButtonText}>Entregue</Text>
      </TouchableOpacity>
    </View>
  );
}
