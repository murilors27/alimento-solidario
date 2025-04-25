import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const DonationFormScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [stateUf, setStateUf] = useState('');
  const [details, setDetails] = useState('');

  const fetchAddressFromCep = async () => {
    if (cep.length !== 8) {
      Alert.alert('CEP inválido', 'Digite um CEP com 8 dígitos numéricos.');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        return;
      }

      setStreet(data.logradouro || '');
      setNeighborhood(data.bairro || '');
      setCity(data.localidade || '');
      setStateUf(data.uf || '');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o endereço.');
    }
  };

  const handleSubmit = () => {
    if (
      name &&
      cep &&
      street &&
      neighborhood &&
      city &&
      stateUf &&
      details
    ) {
      Alert.alert('Sucesso', 'Sua solicitação foi enviada!');
      setName('');
      setCep('');
      setStreet('');
      setNeighborhood('');
      setCity('');
      setStateUf('');
      setDetails('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Solicitar Ajuda" />
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
          maxLength={8}
          onBlur={fetchAddressFromCep}
        />

        <Text style={styles.label}>Rua</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua"
          value={street}
          onChangeText={setStreet}
        />

        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={neighborhood}
          onChangeText={setNeighborhood}
        />

        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          placeholder="Estado (UF)"
          value={stateUf}
          onChangeText={setStateUf}
          maxLength={2}
        />

        <Text style={styles.label}>Detalhes da Necessidade</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descreva o que precisa"
          value={details}
          onChangeText={setDetails}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar Solicitação</Text>
        </TouchableOpacity>

        {}
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="hand-holding-heart" size={40} color="#2a9d8f" />
          <MaterialIcons name="support-agent" size={40} color="#2a9d8f" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 14,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#2a9d8f',
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 12,
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
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});

export default DonationFormScreen;
