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
  const B = (props) => (
    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{props.children}</Text>
  );

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
        <Text style={styles.headerTitle}>Pedido #00005</Text>
        <TouchableOpacity style={styles.orderCardStatusPendingButton}>
          <Image source={require('../../assets/img/Icons/pendente.png')} />
          <Text style={styles.orderCardStatusPendingButtonText}>Pendente</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            borderBottomWidth: 2,
            borderBottomColor: '#D3D3D3',
            paddingBottom: 20,
          }}
        >
          <View>
            <Text style={styles.normalText}>
              <B>Leonercio Goesfeld</B>
              {'\n'}
              Telefone: (95) 91234-5678{'\n'}
              Rua Exemplo, 92 - Centro
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, textAlign: 'right', lineHeight: 16 }}>
              <B>Valor Total</B>
              {'\n'}
              R$ 55,00{'\n'}
              (Cartão de crédito)
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            borderBottomWidth: 2,
            borderBottomColor: '#D3D3D3',
            paddingBottom: 20,
            paddingTop: 20,
          }}
        >
          <Text style={(styles.normalText, { marginBottom: 15 })}>
            <B>Produto</B>
            {'\n'}
            Almoço Executivo
          </Text>
          <Text style={(styles.normalText, { lineHeight: 20 })}>
            <B>Descrição</B>
            {'\n'}
            <B>Peixe a milanesa</B>
            {'\n'}
            Acompanhamentos:{'\n'}> Arroz Integral (1x){'\n'}> Feijão preto (1x)
            {'\n'}> Banana Frita (1x){'\n'}> Macaxeira cozida (1x){'\n'}>Salada
            Cozida (1x){'\n'}
            <B>Quantidade: 1</B>
            {'\n'}
            <B>Valor: R$ 50,00</B>
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 20,
            paddingTop: 20,
          }}
        >
          <Text style={styles.normalText}>
            <B>Taxa de entrega</B>
            {'\n'}
            R$ 5,00{'\n'}
            {'\n'}
            <B>Previsão para entrega</B>
            {'\n'}
            17/02/2021 - 15:39
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Image style={{marginRight: 20}} source={require('../../assets/img/FictionalItems/cancelButton.png')} />
          <Image style={{width: 153}} source={require('../../assets/img/FictionalItems/confirmButton.png')} />
        </View>
      </View>
    </ScrollView>
  );
}
