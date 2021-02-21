import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import { firebase } from '../firebase';

const EffectSelector = ({updateSelectedSymptoms}) => {
    const [symptoms, setSymptoms] = useState([]);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    useEffect(() => {
        const symptoms = firebase.database().ref('Symptoms');
        const handleData = (symptomsJSON) => {
            var symptoms = [];
    
            for (var symptomID in symptomsJSON.val()){
                symptoms.push({
                    ...symptomsJSON.val()[symptomID],
                    id: symptomID
                });
            }
    
            setSymptoms(symptoms);
        }
        symptoms.on('value', handleData, error => console.log("Error" + error));
        return () => { symptoms.off('value', handleData) };
    }, []);

    const selectSymptoms = (items) => {
        console.log("Updating");
        setSelectedSymptoms(items);
        updateSelectedSymptoms(items);
    }

    return (
        <View style={styles.container} >
            <MultiSelect
                items={symptoms}
                uniqueKey="id"
                displayKey="name"

                onSelectedItemsChange={items => selectSymptoms(items)}
                selectedItems={selectedSymptoms}
                selectText=" Pick Symptoms"
                searchInputPlaceholderText="Search Symptoms..."
                submitButtonText="Search"
                submitButtonColor="green"
            />
        </View>
    );
    
}

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: 150
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      }
});


export default EffectSelector;