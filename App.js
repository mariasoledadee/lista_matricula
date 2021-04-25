import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cabecalho } from './src/components/Cabecalho';
import { Disciplina } from './src/components/Disciplina';
import { ImgAluno } from './src/components/ImgAluno';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho 
       nome='Maria Soledade' 
       curso='Design Digital'
      />
      
      <ImgAluno/>

      <Disciplina title='Análise e Projeto de Sistemas'/>
      <Disciplina title='Design e Inovação'/>
      <Disciplina title='Projeto de Interface para Dispositivos Móveis'/>
      <Disciplina title='Projeto de Interface Web'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
});
