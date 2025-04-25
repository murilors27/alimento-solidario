import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  titulo: string;
  descricao: string;
  imagem: any;
}

const CardDoacao: React.FC<CardProps> = ({ titulo, descricao, imagem }) => (
  <View style={styles.card}>
    <Image source={imagem} style={styles.image} />
    <Text style={styles.title}>{titulo}</Text>
    <Text>{descricao}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 12, backgroundColor: '#f9f9f9', marginBottom: 10, borderRadius: 8 },
  image: { width: '100%', height: 120, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
});

export default CardDoacao;