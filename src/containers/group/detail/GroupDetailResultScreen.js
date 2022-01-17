import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../../theme/Colors';

const GroupDetailResultScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>참여완료</Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default GroupDetailResultScreen;
