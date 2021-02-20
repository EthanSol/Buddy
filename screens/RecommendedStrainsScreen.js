import React from 'react';
import { View, SafeAreaView, Text, ScrollableView } from 'react-native';

import BuddyBanner from '../components/BuddyBanner';

const RecommendedStrainsScreen = ({navigation}) => {
    return (
        <View>
            <BuddyBanner />
            <Text>Hello world</Text>
        </View>
    );
}

export default RecommendedStrainsScreen;