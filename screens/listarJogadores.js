import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const windowWidth = Dimensions.get('window').width;

const JogadoresListar = () => {
  const [players, setPlayers] = useState([]);

  // Obtendo referência à coleção "real-madrid"
  const db = getFirestore(app);
  const teamCollectionRef = collection(db, 'real-madrid');

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await getDocs(teamCollectionRef);
        setPlayers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    getPlayers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>Nome: {item.nome}</Text>
            <Text style={styles.details}>Camisa: {item.camisa}</Text>
            <Text style={styles.details}>Altura: {item.altura}m</Text>
            <Text style={styles.details}>Nascimento: {item.nascimento?.toDate().toLocaleDateString()}</Text>
          </View>
        )}
        refreshing={false}
        initialNumToRender={3}
        onEndReached={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1', // Verde bem clarinho
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    width: windowWidth * 0.9,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#b2dfdb', // Cor do brilho
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10, // Para Android
    borderColor: '#b2dfdb', // Cor da borda
    borderWidth: 1, // Largura da borda
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
  },
});

export default JogadoresListar;