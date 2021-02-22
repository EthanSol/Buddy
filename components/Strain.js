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
        borderRadius: 3,
        borderWidth: 2,
        borderColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 60,
        padding: 5,
        minWidth: 90,
        maxWidth: 90,
    },
    strainText: {
        color: 'green',
        fontSize: 12,
        textAlign: 'center',
    },
    strainTextName: {
        color: 'green',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: "500",

    },
    strainTextType: {
        color: 'green',
        fontSize: 12,
        textAlign: 'center',
        
    }
});

export default Strain;