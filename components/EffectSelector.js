import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default function EffectSelector() {
    const [effect, setEffect] = useState("Pain Relief");
    
    return (
        <View style={styles.container} >
            <Text>This is the picker</Text>
            <Picker
                selectedValue={effect}
                style={styles.picker}
                onValueChange={(effect, effectIndex) => setEffect(effect)}
            >
                <Picker.Item label="Pain Relief" value="Pain Relief" />
                <Picker.Item label="Relaxation" value="Relaxation" />
                <Picker.Item label="Energy" value="Energy" />
            </Picker>
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