import React, { useState, useEffect, Component } from 'react';
import { View, Text, ScrollableView } from 'react-native';

import { firebase } from "../firebase";

import EffectSelector from '../components/EffectSelector';
import Strain from '../components/Strain';
import { StyleSheet, } from 'react-native';

const RecommendedStrainsScreen = () => {
    // Set state
    const [recommendedStrains, setRecommendedStrains] = useState([]);
    const [availableStrains, setAvailableStrains] = useState([]);
    
    useEffect(() => {
        //Get the available strains
        const strains = firebase.database().ref("Strains");

        const JSONToArray = (data) => {
            var allStrains = [];

            for (var strainID in data.val()){
                allStrains.push({
                    ...data.val()[strainID],
                    id: strainID
                });
            }
            console.log("Getting all strains");
            setAvailableStrains(allStrains);
            setRecommendedStrains(allStrains);
        }
    
        strains.on("value", JSONToArray, error => console.log("Error" + error));
        return () => { strains.off("value", JSONToArray) }
    }, []);

    const getFilteredStrains = (selectedSymptoms) => {
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