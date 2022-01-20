import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import colors from '../../../theme/Colors';
import ContentListBox from '../../common/ContentListBox';

const GroupDetailVoteScreen = () => {
    const voteList = [
        {
            type: true, // true:vote, false:servey
            data: {
                title: "건국대학교 제47회 공과대학 학생회 투표",
                group: "KU 총학생회",
                date: "3일 06:11:23",
                ratio: 20.36,
                numOfPeople: 851
            },
            isOpen: true
        },
        {
            type: true, // true:vote, false:servey
            data: {
                title: "건국대학교 제47회 인문대학 학생회 투표",
                group: "KU 총학생회",
                date: "3일 06:11:23",
                ratio: 20.36,
                numOfPeople: 851
            },
            isOpen: true
        },
    ];
    return (
        <ScrollView style={styles.container}>
            {voteList.map((item, index) => (<ContentListBox key={index} type={item.type} data={item.data} isOpen={item.isOpen} />))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default GroupDetailVoteScreen;
