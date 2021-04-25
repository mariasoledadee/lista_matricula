import React from  'react';
import {
 View, Image, StyleSheet
 } from 'react-native';

import Aluno from '../../assets/aluno.jpeg'

export function ImgAluno(){
    return(
        <View style={styles.container}>
            <Image
             source = {Aluno}
             style = {styles.img}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    img:{
        width:80,
        height: 80,
        borderRadius: 40
    }
})

