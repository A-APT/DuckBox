import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import colors from '../../theme/Colors';

function InputBox({ playsholder, text, setText }) {
    return (
        <TextInput
            style={styles.container}
            placeholder= {playsholder}
            placeholderTextColor={colors.darkGray}
            onChangeText={setText}
            value={text}
        />
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
    }
});

export default InputBox;
