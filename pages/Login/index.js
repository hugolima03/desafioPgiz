import React from 'react';
import styles from './style';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function Login({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 812,
      }}
    >
      <StatusBar hidden></StatusBar>
      <Image source={require('../../assets/img/Logo/Logo.png')} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.label}>Email ou Telefone</Text>
        <TextInput
          type="Flat"
          style={styles.input}
          label="Email"
          value="leonerciogoesfeld@lodpuercos.com"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          type="password"
          style={styles.passwordInput}
          label="Email"
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Pedidos')}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.simpleLink}>Não tem uma conta?</Text>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secundaryButtonText}>Quero vender no Pigz!</Text>
        </TouchableOpacity>
        <Text style={styles.footerLinks}>Termos de Serviço</Text>
        <Text style={styles.footerLinks}>Política de Privacidade</Text>
      </View>
    </ScrollView>
  );
}
