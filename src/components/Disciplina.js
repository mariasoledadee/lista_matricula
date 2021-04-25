import React from 'react';
import{
 View, Text, StyleSheet
} from 'react-native';

export function Disciplina(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        width: 200,
        backgroundColor: 'cadetblue',
        padding: 5,
        borderRadius: 5,
        
    },
    title:{
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    }
})