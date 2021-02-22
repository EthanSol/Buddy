import React, { useState, useEffect, Component } from 'react';
import { View, Text, ScrollableView } from 'react-native';

import { firebase } from "../firebase";

import EffectSelector from '../components/EffectSelector';
import Strain from '../components/Strain';
import styles from 'react-native-multiple-select/lib/styles';
import { StyleSheet, } from 'react-native';

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
    const [recommendedStrains, setRecommendedStrains] = useState(availableStrains);
    
    const getFilteredStrains = (selectedSymptoms) => {
        console.log("Filtering Strains");
        console.log(selectedSymptoms);
        console.log(availableStrains);
        var strains = availableStrains;

        if(selectedSymptoms.length == 0){ 
            setRecommendedStrains(availableStrains); 
            return;
        }

        strains = strains.filter(strain => 
            selectedSymptoms.every(symptom =>
                strain.symptomIDs.some(symptomID => symptom == symptomID)));
        console.log(strains);
        setRecommendedStrains(strains);
    }

    return (
        <View >
            <EffectSelector updateSelectedSymptoms={getFilteredStrains} />
            
            <View style={style.strainList}>
                {recommendedStrains.map(strain => 
                    <Strain strain={strain} key={strain.id} />)}
            </View>
            
        </View>
    );
}

const style = StyleSheet.create({
    strainList:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default RecommendedStrainsScreen;