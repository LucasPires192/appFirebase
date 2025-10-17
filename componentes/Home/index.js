import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './style.js';

export default function Home({ navigation }){
    <View style={ styles.container }>
        <Text>Bem-Vindo!</Text>
        <Image 
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={ styles.image }
        />
        <Button
            title="Perfil"
            onPress={ () => navigation.navigate('Perfil') }
        />
    </View>
}