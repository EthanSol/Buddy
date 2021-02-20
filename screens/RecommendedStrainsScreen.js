import React from 'react';
import { SafeAreaView, Text, ScrollableView } from 'react-native';

import EffectSelector from '../components/EffectSelector';

const symptoms = ["Pain", "Soreness", "Anxiety", "Dementia", "Insomnia", "ADHD"];

const RecommendedStrainsScreen = ({navigation}) => {
    return (
        <ScrollableView>
            <EffectSelector />
        </ScrollableView>
    );
}

export default RecommendedStrainsScreen;