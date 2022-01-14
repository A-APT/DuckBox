import React  from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import colors from '../../../theme/Colors';

const TermsOfUseScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>이용약관</Text>
            </ScrollView>
        </>
        
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
});

export default TermsOfUseScreen;
