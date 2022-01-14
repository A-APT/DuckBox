import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import colors from '../../../theme/Colors';
import InputBox from '../../common/InputBox';
import TitleText from '../../common/TitleText';
import Agree from './component/Agree';
import BottomButtonRegex from '../../common/BottomButtonRegex';

const CheckEmailScreen = () => {
    const [email, setEmail] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [isCorrect, setCorrect] = useState(true);

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    return (
        <>
            <ScrollView style={styles.container}>
                <TitleText text1={"학교 확인을 위해"} text2={"이메일 인증이 필요합니다"} />
                <InputBox playsholder={"학교 이메일을 입력해주세요"} text={email} setText={setEmail} isCorrect={isCorrect} setCorrect={setCorrect} warningText={"올바르지 않은 이메일 형식입니다."} />
                <Agree check1={check1} setCheck1={setCheck1} check2={check2} setCheck2={setCheck2} />
            </ScrollView>
            <BottomButtonRegex text="인증하기" moveTo="EmailCodeScreen" available={check1 && check2 && email} checkVariable={email} reg={reg} setCorrect={setCorrect} />
        </>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
});

export default CheckEmailScreen;
