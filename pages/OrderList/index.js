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

import OrderCardStatusPending from '../../components/orderCardStatusPending/';
import OrderCardStatusConfirmed from '../../components/orderCardStatusConfirmed';
import OrderCardStatusPreparing from '../../components/orderCardStatusPreparing';
import OrderCardStatusDelivering from '../../components/orderCardStatusDelivering/';
import OrderCardStatusDelivered from '../../components/orderCardStatusDelivered/';

export default function OrderList({ navigation }) {
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
        >
          <Image source={require('../../assets/img/Icons/filter.png')} />
          <Text style={styles.headerButtonText}>Filtro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
        <OrderCardStatusPending name="Leonercio" code="#00005" navigation={navigation}/>
        <OrderCardStatusConfirmed name="Rodrigues" code="#00004" navigation={navigation}/>
        <OrderCardStatusPreparing name="Dlanor" code="#00003" navigation={navigation}/>
        <OrderCardStatusDelivering name="Lukas" code="#00002" navigation={navigation}/>
        <OrderCardStatusDelivered name="Mitchel" code="#00002" navigation={navigation}/>
      </View>
    </ScrollView>
  );
}
