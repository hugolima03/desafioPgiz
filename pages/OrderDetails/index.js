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

export default function OrderDetails() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.header}>
        <Image source={require('../../assets/img/Menu/menu.png')} />
        <Image source={require('../../assets/img/Logo/PigzHeader.png')} />
        <Text style={styles.title}> </Text>
      </View>
      <TextInput type="Flat" style={styles.input} value="Buscar pedido..." />
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>Gestão de Pedidos</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Pedidos')}
        >
          <Image source={require('../../assets/img/Icons/filter.png')} />
          <Text style={styles.headerButtonText}>Filtro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
      </View>
    </ScrollView>
  );
}
