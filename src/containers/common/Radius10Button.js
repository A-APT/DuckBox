import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function Radius10Button({ text, moveTo }) {
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    font1: {
        fontSize: 16,
        color: colors.white,
        fontFamily: type.Roboto_Medium,
    },
});

export default Radius10Button;
