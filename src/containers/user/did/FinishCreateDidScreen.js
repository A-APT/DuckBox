import React  from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import colors from '../../../theme/Colors';

const FinishCreateDidScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>축하합니다.</Text>
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

export default FinishCreateDidScreen;
