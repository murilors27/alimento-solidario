import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import Header from '../components/Header';

const AboutScreen: React.FC = () => {
  const handleLinkPress = () => {
    Linking.openURL('https://g1.globo.com/fantastico/noticia/2021/04/04/ajude-a-combater-a-fome-no-brasil-veja-lista-de-instituicoes.ghtml');
  };

  return (
    <View style={styles.container}>
      <Header title="Sobre o Projeto" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/murilo.jpg')} style={styles.image} />
          <Image source={require('../../assets/diogo.jpg')} style={styles.image} />
        </View>
        <Text style={styles.text}>
          O aplicativo Alimento Solidário foi desenvolvido com empatia, propósito e dedicação pelos estudantes Murilo Ribeiro Santos e Diogo Weyne como parte do projeto de extensão do curso de Análise e Desenvolvimento de Sistemas.
        </Text>
        <Text style={styles.text}>
          O objetivo é conectar quem deseja ajudar com quem precisa, promovendo a solidariedade por meio da tecnologia. Acreditamos que pequenas ações podem gerar grandes mudanças!
        </Text>
        <Text style={styles.text}>
          Este app foi construído utilizando React Native, com navegação entre telas, formulários funcionais, estilização moderna e estrutura organizada — tudo pensado para ser leve, acessível e fácil de usar.
        </Text>
        
        {/* Link para as instituições de apoio */}
        <Text style={styles.link} onPress={handleLinkPress}>
          Confira mais Instituições de apoio em: 
          <Text style={styles.linkText}> https://g1.globo.com/fantastico/noticia/2021/04/04/ajude-a-combater-a-fome-no-brasil-veja-lista-de-instituicoes.ghtml</Text>
        </Text>
        
        <Text style={styles.signature}>Desenvolvido por Murilo & Diogo 💚</Text>
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
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  image: {
    width: '48%',
    height: 130,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 14,
    lineHeight: 22,
  },
  signature: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  link: {
    fontSize: 16,
    color: '#0066cc',
    marginBottom: 14,
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default AboutScreen;
