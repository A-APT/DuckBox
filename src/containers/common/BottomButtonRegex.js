import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function BottomButtonRegex({ text, moveTo, available, checkVariable, reg, setCorrect }) {
    const navigateTo = useNavigation();
    const onCheckAvailablity = (e) => {
        if(reg.test(checkVariable))
            navigateTo.navigate(moveTo);
        else
            setCorrect(false);
    };

    return (
        <View style={available? styles.container: styles.container2}
            onTouchEnd={() => { onCheckAvailablity() }}>
            <Text style={ styles.font1}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main,
    },
    container2: {
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGray,
    },
    font1: {
        fontSize: 18,
        color: colors.white,
        fontFamily: type.Roboto_Bold,
    },
});

export default BottomButtonRegex;
