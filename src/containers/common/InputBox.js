import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function InputBox({ playsholder, text, setText, isCorrect, setCorrect, warningText }) {
    const onEmailChange = (e) => {
        setCorrect(true);
        setText(e)
    };

    return (
        <>
            <TextInput
                style={styles.container}
                placeholder={playsholder}
                placeholderTextColor={colors.darkGray}
                onChangeText={onEmailChange}
                value={text}
            />
            {isCorrect ? <Text style={styles.container2}></Text> : <Text style={styles.container2}>{warningText}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        color: colors.black,
        fontSize: 16,
        height: 52,
        padding: 16,
        borderColor: colors.sub1,
        borderWidth: 2,
        fontFamily: type.Roboto_Regular,
    },
    container2: {
        textAlign: 'right',
        fontSize: 14,
        color: colors.main2,
        fontFamily: type.Roboto_Regular,
        marginTop: 4,
    }
});

export default InputBox;
