import React from 'react';;
import { View, Text, StyleSheet } from 'react-native';

import EffectSelector from '../components/EffectSelector';

const SymptomSelectorScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <EffectSelector />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default SymptomSelectorScreen;