import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../../theme/Colors';
import ContentListBox from '../../common/ContentListBox';

const GroupDetailResultScreen = () => {
    const resultList = [
        {
            type: false, // true:vote, false:servey
            data: {
                title: "2022 중간고사 간식어택",
                group: "KU 총학생회",
                date: "3일 06:11:23",
                ratio: 20.36,
                numOfPeople: 851
            },
            isOpen: true
        },
        {
            type: false, // true:vote, false:servey
            data: {
                title: "2022 기말고사 간식어택 사전조사",
                group: "KU 총학생회",
                date: "3일 06:11:23",
                ratio: 20.36,
                numOfPeople: 851
            },
            isOpen: false
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {resultList.map((item, index) => (<ContentListBox key={index} type={item.type} data={item.data} isOpen={item.isOpen} />))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
});

export default GroupDetailResultScreen;
