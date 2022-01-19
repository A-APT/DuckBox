import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';

import colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

function VoteInputBox({ playsholder, text, setText, isCorrect, setCorrect, height, maxLength, warningText }) {
    const onVoteChange = (e) => {
        setCorrect(true)
        setText(e)
    };

    return (
        <>
            <TextInput
                style={styles.container}
                placeholder={playsholder}
                placeholderTextColor={colors.darkGray}
                onChangeText={onVoteChange}
                value={text}
                maxLength={maxLength}
                height={height}
            />
             {isCorrect ? <Text style={styles.container2}></Text> : <Text style={styles.container2}>{warningText}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        color: colors.black,
        fontSize: 16,
        padding: 16,
        borderColor: colors.sub1,
        borderWidth: 2,
        fontFamily: type.Roboto_Regular,
        textAlignVertical: 'top'
    },
    container2: {
        textAlign: 'right',
        fontSize: 14,
        color: colors.main2,
        fontFamily: type.Roboto_Regular,
        marginTop: 4,
    }
});

export default VoteInputBox;
