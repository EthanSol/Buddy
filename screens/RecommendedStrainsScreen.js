import React, { useState, useEffect, Component } from 'react';
import { View, Text, ScrollableView } from 'react-native';

import { firebase } from "../firebase";

import EffectSelector from '../components/EffectSelector';

var availableStrains = [];
    
const JSONToArray = (data) => {
    for (var strainID in data.val()){
        availableStrains.push({
            ...data.val()[strainID],
            id: strainID
        });
    }
    console.log("Getting all strains");
}

firebase.database().ref("Strains").once("value", JSONToArray);

const RecommendedStrainsScreen = () => {
    // Set state
    const [recommendedStrains, setRecommendedStrains] = useState([]);
    
    const getFilteredStrains = (selectedSymptoms) => {
        console.log("Filtering Strains");
        console.log(selectedSymptoms);
        console.log(availableStrains);
        var strains = availableStrains;

        strains = strains.filter(strain => 
            selectedSymptoms.every(symptom =>
                strain.symptomIDs.some(symptomID => symptom == symptomID)));
        console.log(strains);
        setRecommendedStrains(strains);
    }

    return (
        <View>
            <EffectSelector updateSelectedSymptoms={getFilteredStrains} />
        </View>
    );
}

export default RecommendedStrainsScreen;