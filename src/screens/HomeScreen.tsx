import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Alimento Solidário" />
      <Image source={require('../../assets/alimentos.jpg')} style={styles.image} />

      <View style={styles.buttonGroup}>
        <CustomButton label="Doações" onPress={() => navigation.navigate('Doações')} />
        <CustomButton label="Mapa de Doações" onPress={() => navigation.navigate('Mapa')} />
        <CustomButton label="Solicitar Ajuda" onPress={() => navigation.navigate('Formulário de Ajuda')} />
        <CustomButton label="Sobre o Projeto" onPress={() => navigation.navigate('Sobre')} />
      </View>
    </View>
  );
};

const CustomButton = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonGroup: {
    width: '100%',
  },
  button: {
    backgroundColor: '#2a9d8f',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;
