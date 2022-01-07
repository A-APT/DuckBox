import React, { useState } from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import colors from '../../../theme/Colors';
import InputBox from '../../common/InputBox';
import TitleText from '../../common/TitleText';
import Agree from './component/Agree';
import BottomButton from '../../common/BottomButton';

const CheckEmailScreen = () => {
    const [email, setEmail] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    return (
        <>
            <ScrollView style={styles.container}>
                <TitleText text1={"학교 확인을 위해"} text2={"이메일 인증이 필요합니다"} />
                <InputBox playsholder={"학교 이메일을 입력해주세요"} text={email} setText={setEmail}/>
                <Agree check1={check1} setCheck1={setCheck1} check2={check2} setCheck2={setCheck2}/>
            </ScrollView>
            <BottomButton text="인증하기" moveTo="EmailCodeScreen"/>
        </>
        
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
    font1: {
        fontSize : 30,
        fontWeight : '900',
        color: colors.black,
    },
});

export default CheckEmailScreen;
