import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function RadiusButton({ text, moveTo }) {
    const navigateTo = useNavigation();

    return (
        <View style={styles.container}
            onTouchEnd={() => { navigateTo.navigate(moveTo); }}>
            <Text style={ styles.font1}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main,
        borderRadius: 30,
        marginTop: 72,
    },
    font1: {
        fontSize: 18,
        color: colors.white,
        fontFamily: type.Roboto_Bold,
    },
});

export default RadiusButton;
