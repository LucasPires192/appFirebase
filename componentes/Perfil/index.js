import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TextInput, Button, Alert, Image } from 'react-native';
import { auth } from './Firebase';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import style from './style.js';


export default function Perfil(){
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const db = getFirestore();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;

            if(user){
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()){
                    const data = docSnap.data();

                    setUserData(data);
                    setName(data.name || '');
                    setBio(data.bio || '');
                }
            }

            setLoading(false);
        };

        fetchUserData();
    }, []);

    const handleSave = async () => {
        try {
            const user = auth.currentUser;

            if(user){
                const docRef = doc(db, 'users, user.uid');
                await updateDoc(docRef, { name, bio });
                setUserData({ ...userData, name, bio });
                setIsEnding(false);
                Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
            }
        }catch (error){
            Alert.alert('Erro', 'Não foi possível atualizar os dados.');
        }
    };

    return(
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size='large'
                    color='#0000ff'
                />
                ) : userData ? (
                    <>
                        <Text style={styles.title}>Perfil do Usuário</Text>
                        {isEditing ? (
                            <>
                                <TextInput
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                    placeholder='Nome'
                                />
                                <TextInput
                                    style={styles.input}
                                    value={bio}
                                    onChangeText={setBio}
                                    placeholder='Bio'
                                />
                                <Button 
                                    title='Salvar'
                                    onPress={handleSave}
                                />
                                <Button 
                                    title='Cancelar'
                                    onPress={() => setIsEditing(false)}
                                    color='#888'
                                />
                            </>
                        ) : (
                            <>
                                <Text style={styles.info}>Nome: {userData.name}</Text>
                                <Text style={styles.info}>Bio: {userData.bio}</Text>
                                <Button 
                                    title='Editar'
                                    onPress={() => setIsEditing(true)}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <Text>Usuário não encontrado.</Text>
            )}
        </View>
    );
};