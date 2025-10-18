import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from './Firebase';
import styles from './style.js';

export default function Registro(navigation){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleRegister = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                name,
                bio
            });

            Alert.alert('Sucesso!', 'Usuário cadastrado com sucesso!', [
                { text: 'OK', onPress: () => navigation.replace('Home')}
            ]);
        }catch (err){
            Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
        }
    }

    return(
        <View style={styles.container}>
            <Text>Cadastro</Text>
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
        </View>
    )
}