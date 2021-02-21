import React, { useState, useEffect, Component } from 'react';
import { View, Text, ScrollableView } from 'react-native';

import { firebase } from "../firebase";

import EffectSelector from '../components/EffectSelector';

const RecommendedStrainsScreen = () => {
    // Set state
    const [availableSymptoms, setAvailableSymptoms] = useState([]);

    useEffect(() => {
        const symptoms = firebase.database().ref('Symptoms');
        const setSymptoms = (symptomsJSON) => {
            var symptoms = [];
    
            for (var symptom in symptomsJSON.val()){
                symptoms.push(symptomsJSON.val()[symptom]);
            }
    
            setAvailableSymptoms(symptoms);
        }
        symptoms.on('value', setSymptoms, error => console.log("Error" + error));
        return () => { symptoms.off('value', setSymptoms) };
    }, []);

    const getFilteredStrains = (selectedStrains) => {
        console.log(selectedStrains);
    }

    return (
        <View>
            <EffectSelector symptoms={availableSymptoms} updateSelectedSymptoms={getFilteredStrains} />
        </View>
    );
}

export default RecommendedStrainsScreen;