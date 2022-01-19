import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import colors from '../../../theme/Colors';
import { type } from '../../../theme/Fonts';
import VoteInputBox from '../../common/VoteInputBox';
import TitleText from '../../common/TitleText';
import PasswordBox from '../../common/PasswordBox';
import BottomButtonRegex from '../../common/BottomButtonRegex';
import { useNavigation } from '@react-navigation/native';
import Radius10Button from '../../common/Radius10Button';
import StartDateTimePicker from './StartDateTimePicker';
import RadiusButton from '../../common/RadiusButton';
import Sub2Button from '../../common/Sub2Button';


const CreateVoteTitleScreen = () => {
    const navigateTo = useNavigation();

    const [voteTitle, setVoteTitle] = useState('');
    const [voteInfo, setVoteInfo] = useState('');
    const [voteStartDate, setVoteStartDate] = useState('');
    const [voteEndDate, setVoteEndDate] = useState('');

    const [isCorrectVoteTitle, setCorrectVoteTitle] = useState(true);
    const [isCorrectVoteInfo, setCorrectVoteInfo] = useState(true);    

    const onCheckAvailablity = (e) => {
        if (voteTitle.length>0) {
            if (voteInfo.length>0) {
                setCorrectVoteTitle(true);
                setCorrectVoteInfo(true);
                navigateTo.navigate("CreateVoteContentScreen");
            } else {
                setCorrectVoteInfo(false);
            }
        } else {
            setCorrectVoteTitle(false);
        }
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.font1}>투표 제목</Text>
                <VoteInputBox playsholder={"질문을 입력해주세요. (30자 내외)"} text={voteTitle} setText={setVoteTitle} isCorrect={isCorrectVoteTitle} setCorrect={setCorrectVoteTitle} height={52} maxLength={30} warningText={"필수 입력란입니다."}/>
                <Text style={styles.font2}>상세 설명</Text>
                <VoteInputBox playsholder={"상세 설명을 입력해주세요. (100자 내외)."} text={voteInfo} setText={setVoteInfo} isCorrect={isCorrectVoteInfo} setCorrect={setCorrectVoteInfo} height={141} maxLength={100} warningText={"필수 입력란입니다."}/>
                <Text style={styles.font2}>시작 시간</Text>
                <Sub2Button text={"선택"} moveTo={'StartDateTimePicker'}/>
                <Text style={styles.font2}>마감 시간</Text>
                <Sub2Button text={"선택"} moveTo={'StartDateTimePicker'}/>
                <Text style={styles.font2}>대표 이미지</Text>
                <Sub2Button text={"선택"} moveTo={'StartDateTimePicker'}/>
            </ScrollView>
            <View style={ voteTitle && voteInfo ? styles.buttonContainer : styles.pressButtonContainer}
                onTouchEnd={() => { onCheckAvailablity() }}>
                <Text style={styles.buttonFont}>완료</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
    contianer2:{
        backgroundColor: colors.sub1,
        borderRadius: 5,
    },
    clickcontainer: {
        backgroundColor: colors.sub1,
        paddingHorizontal: 30,
    },
    font1: {
        fontSize: 16,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginTop: 18,
        marginBottom: 8,
    },
    font2: {
        fontSize: 16,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginBottom: 8,
    },
    buttonContainer: {
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.main,
    },
    pressButtonContainer: {
        height: 66,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGray,
    },
    buttonFont: {
        fontSize: 18,
        color: colors.white,
        fontFamily: type.Roboto_Bold,
    },
});

export default CreateVoteTitleScreen;
