import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

export default function EffectSelector() {
    const [effect, setEffect] = useState("Pain Relief");
    
    return (
        <View style={styles.container} >
            <Text>This is the picker</Text>
        </View>
    )
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


//export default EffectSelector;