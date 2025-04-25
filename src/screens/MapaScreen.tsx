import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import Header from '../components/Header';

const MapScreen: React.FC = () => {
  const [estados, setEstados] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => {
        const nomes = data.map((estado: any) => estado.nome);
        setEstados(nomes);
      })
      .catch(error => console.error('Erro ao buscar estados:', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Pontos de Doação" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.iconRow}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' }}
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2357/2357095.png' }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>
          Confira abaixo os estados brasileiros onde pretendemos futuramente expandir os pontos de coleta:
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#2a9d8f" style={{ marginTop: 20 }} />
        ) : (
          estados.map((estado, index) => (
            <Text key={index} style={styles.estadoItem}>• {estado}</Text>
          ))
        )}
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
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: '48%',
    height: 120,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 14,
    lineHeight: 22,
  },
  estadoItem: {
    fontSize: 14,
    color: '#2a9d8f',
    marginBottom: 4,
  },
});

export default MapScreen;
