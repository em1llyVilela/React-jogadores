import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

export default function App({navigation}) {
    return (
        <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/564x/08/c6/3f/08c63faac47c5c3d21aa702040216eda.jpg' }} 
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Olá, Emilly!</Text>
                <Pressable style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.navigate('ListarJogadores')}>
                    <Text style={styles.buttonText}>Listar Jogadores</Text>
                </Pressable>
            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#FF69B4',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FF1493',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
      },
      buttonSecondary: {
        backgroundColor: '#FF69B4',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
});
