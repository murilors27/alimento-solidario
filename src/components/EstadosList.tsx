import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

interface Estado {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

const EstadosList: React.FC = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => response.json())
      .then((data: Estado[]) => {
        const estadosOrdenados = data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(estadosOrdenados);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar estados:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#2196F3" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estados do Brasil</Text>
      <FlatList
        data={estados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.nome} ({item.sigla}) - Região: {item.regiao.nome}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  item: { fontSize: 16, marginBottom: 8 },
});

export default EstadosList;
