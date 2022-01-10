import React  from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import colors from '../../../theme/Colors';

const PolicyScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>개인정보처리방침</Text>
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

export default PolicyScreen;
