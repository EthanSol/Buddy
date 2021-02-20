import React, { useState, useEffect } from 'react';
import { View, Text, ScrollableView } from 'react-native';

import EffectSelector from '../components/EffectSelector';

const testSymptoms = [
    { id: "1", name: "Pain" },
    { id: "2", name: "Insomnia" },
    { id: "3", name: "Anxiety" },
    { id: "4", name: "Soreness" },
    { id: "5", name: "ADHD" },
    { id: "6", name: "Dementia" }];

const RecommendedStrainsScreen = ({navigation}) => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    // Fetch request to DB


    return (
        <View>
            <EffectSelector symptoms={testSymptoms} setSymptoms={setSelectedSymptoms} />
        </View>
    );
}

export default RecommendedStrainsScreen;