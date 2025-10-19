import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import styles from './style.js';

export default function SplashScreen({ navigation }){
    useEffect(() => {
        // Define a duração do splash (4 segundos)
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Após o tempo, navega para a tela de login
        }, 4000);

        return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image 
                source={ require('../assets/img_eletro.png') } 
                style={styles.splashImage} />
            <ActivityIndicator 
                size="large" 
                color="#0000ff" 
                style={styles.loader} />
        </View>
    );
};