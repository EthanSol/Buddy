import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';

const BuddyBanner = () => {
    return (
        <View style={styles.bannerContainer} >
            <Image style={styles.tinyLogo} source={require('../img/buddyLogo.png')} />
            <Text style={styles.bannerText} >BUDDY</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    bannerContainer: {
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 40,
        height: 40
    },
    bannerText: {
        fontSize: 20,
        color: 'green'
    }
});

export default BuddyBanner;
