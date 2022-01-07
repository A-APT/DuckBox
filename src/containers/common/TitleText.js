import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../theme/Colors';

function TitleText({ text1, text2}) {
    return (
        <View style={styles.container}>
            <Text style={styles.font1}>{text1}</Text>
            <Text style={styles.font1}>{text2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:46,
        marginBottom: 42,
    },
    font1: {
        fontSize: 30,
        fontWeight: '900',
        color: colors.black,
    },
});

export default TitleText;
