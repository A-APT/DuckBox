import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../theme/Colors';

function BottomButton({ text, moveTo }) {
    const navigateTo = useNavigation();
    return (
        <View style={styles.container}
            onTouchEnd={() => { navigateTo.navigate(moveTo) }}>
            <Text style={styles.font1}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main
    },
    font1: {
        fontSize: 18,
        fontWeight: '900',
        color: colors.white,
    },
});

export default BottomButton;
