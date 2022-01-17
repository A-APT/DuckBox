import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import colors from '../../../theme/Colors';
import ContentListBox from '../../common/ContentListBox';

const GroupDetailVoteScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <ContentListBox/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default GroupDetailVoteScreen;