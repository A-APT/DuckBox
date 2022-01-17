import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import colors from '../../../theme/Colors';

const GroupDetailSurveyScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>설문 탭</Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default GroupDetailSurveyScreen;
