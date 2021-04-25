import React from 'react';
import{
 Text, View, StyleSheet,
} from 'react-native';

export function Cabecalho(props){
    return( 
        <View style={styles.container}>
            <Text style={styles.nome}>
                {props.nome}
            </Text>
            <Text style={styles.curso}>
             {props.curso}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
     
    },
    nome:{
        color: '#2f4f4f',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 25,
    },
    curso:{
        color: '#fff',
        fontStyle: 'normal',
        fontSize: 15,
        textAlign: 'right'
    }
})