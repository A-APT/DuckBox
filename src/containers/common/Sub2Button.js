import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function SubButton({ text, doFunction }) {

    return (
        <View style={styles.container}
            onTouchEnd={() => { doFunction() }}>
            <Text style={ styles.font1}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: colors.sub1,
        borderRadius: 5,
        paddingHorizontal: 16,
        marginBottom: 20
    },
    font1: {
        fontSize: 14,
        color: colors.black,
    },
});

export default SubButton;
