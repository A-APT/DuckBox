import React  from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import colors from '../../../theme/Colors';

const StudentCardResultScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>학생증 인증결과</Text>
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

export default StudentCardResultScreen;
