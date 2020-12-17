import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as RN from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { firestore, storage } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { themes } from '../../themes';
import { Feather } from '@expo/vector-icons';
import { uploadImage } from '../../utils/uploadImage';

export default function Aluno() {
  const { navigate } = useNavigation();

  const [preview, setPreview] = useState('');
  const [nome, setNome] = useState('');
  const [sala, setSala] = useState('');
  const [turma, setTurma] = useState('');

  const [uploadLoading, setUploadLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if(!nome || !sala || !turma) return;

    try {
      setLoading(true);
      await firestore.collection('alunos').add({
        nome,
        sala,
        turma,
        photo: preview || null,
      });

      setPreview('');
      navigate('Alunos');
    } catch {
      RN.Alert('Ocorreu um erro, tente novamente');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setUploadLoading(true);
      const { uri } = result;
      const fileName = uri.substring(uri.lastIndexOf('/') + 1);
      const blob = await uploadImage(uri);
      const storageRef = storage.ref().child('uploads').child(fileName);
      const snapshot = await storageRef.put(blob);
      const image = await snapshot.ref.getDownloadURL();

      setUploadLoading(false);
      setPreview(image);
    }
  }

  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.ScrollView>
        <RN.View style={styles.header}>
          <RN.Text style={styles.headerText}>Cadastrar aluno</RN.Text>
        </RN.View>

        <RN.View style={styles.content}>
          <RN.Text style={styles.label}>Foto do aluno</RN.Text>

         {preview ? (
           <RN.Image source={{ uri: preview }} />
         ) : (
            <RN.TouchableOpacity onPress={handleUpload} style={styles.upload}>
            {uploadLoading ? (
              <RN.ActivityIndicator size="large" color={themes.colors.primary} />
            ) : (
              <Feather name="upload" size={20} color={themes.colors.light} />
            )}
          </RN.TouchableOpacity>
         )}
          <RN.Text style={styles.label}>Nome</RN.Text>
          <RN.TextInput
            style={styles.input} 
            onChangeText={text => setNome(text)}
            value={nome}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <RN.Text style={styles.label}>Sala</RN.Text>
          <RN.TextInput 
            style={styles.input} 
            onChangeText={text => setSala(text)}
            value={sala}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <RN.Text style={styles.label}>Turma</RN.Text>
          <RN.TextInput 
            style={styles.input} 
            onChangeText={text => setTurma(text)}
            value={turma}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </RN.View>

        <RN.View style={styles.buttonContainer}>
          <RectButton onPress={handleSubmit} style={styles.button}>
            <RN.Text style={styles.buttonText}>
              {loading ? 'Carregando...' : 'Cadastrar'}
            </RN.Text>
          </RectButton>
        </RN.View>
      </RN.ScrollView>
    </RN.SafeAreaView>
  );
}

