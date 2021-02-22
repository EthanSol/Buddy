import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Strain = ({strain}) => {
    console.log(strain);
    return(
        <TouchableOpacity style={styles.strainView}>
            <Text style={styles.strainTextName}>
                {strain.name} 
            </Text>
            <Text style={styles.strainTextType}>
                {strain.type} 
            </Text>
        </TouchableOpacity>
    );}

const styles = StyleSheet.create({
    strainView:{
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        padding: 10,
        minWidth: 90,
        maxWidth: 90,

        backgroundColor: '#66b0ff',
    },
    strainText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    strainTextName: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: "500",

    },
    strainTextType: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        
    }
});

export default Strain;