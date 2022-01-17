import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GroupDetailScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Text>그룹 상세</Text>
            </ScrollView>
        </>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: 30,
    },
});

export default GroupDetailScreen;
