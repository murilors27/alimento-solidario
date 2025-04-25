import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/Header';

const donations = [
  { id: 1, title: 'Cesta Básica', description: 'Alimentos não perecíveis para uma família de 4 pessoas.' },
  { id: 2, title: 'Kit de Higiene', description: 'Sabonete, pasta de dente, papel higiênico e álcool em gel.' },
];

const DonationListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Doações Disponíveis" />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1046/1046741.png' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3063/3063827.png' }}
          style={styles.image}
        />
        {donations.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  content: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});

export default DonationListScreen;
