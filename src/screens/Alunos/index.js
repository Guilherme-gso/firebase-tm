import React, { useState, useEffect } from 'react';
import * as RN from 'react-native';
import { firestore } from '../../config/firebase';
import { themes } from '../../themes';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import king from '../../../assets/king.png';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  
  useEffect(() => {
    firestore.collection('alunos').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      setAlunos(data);
    });
  }, []);

  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.View style={styles.header}>
        <RN.Text style={styles.headerText}>Todos os alunos</RN.Text>
      </RN.View>
      <RN.FlatList
        style={styles.list}
        data={alunos}
        keyExtractor={aluno => aluno.id}
        renderItem={({ item }) => (
          <RN.View style={styles.cardContainer}>
            <RN.Image style={styles.image} source={item.photo ? { uri: item.photo } : king} />
            <RN.View style={styles.cardContent}>
              <RN.Text style={styles.name}>{item.nome}</RN.Text>
              <RN.Text style={styles.info}>{item.sala} - {item.turma}</RN.Text>

              <RN.View style={styles.iconContainer}>
                <RN.TouchableOpacity style={{ marginRight: 8, }}>
                  <Feather name="trash-2" size={18} color={themes.colors.primary} />
                </RN.TouchableOpacity>
                <RN.TouchableOpacity>
                  <Feather name="edit" size={18} color={themes.colors.secondary} />
                </RN.TouchableOpacity>
              </RN.View>
            </RN.View>
          </RN.View>
        )}
      />
    </RN.SafeAreaView>
  );
}

