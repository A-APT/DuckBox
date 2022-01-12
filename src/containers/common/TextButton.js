import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function TextButton({ text, doFunction }) {

    return (
        <View style={styles.container}
            onTouchEnd={() => { doFunction() }}>
            <Text style={ styles.font1}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.sub1,
        borderRadius: 10,
        paddingHorizontal: 18,
    },
    font1: {
        fontSize: 12,
        color: colors.main,
        fontFamily: type.Roboto_Bold,
    },
});

export default TextButton;
