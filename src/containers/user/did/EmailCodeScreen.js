import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import colors from '../../../theme/Colors';
import {type} from '../../../theme/Fonts';
import InputBox from '../../common/InputBox';
import TitleText from '../../common/TitleText';
import SubButton from '../../common/SubButton';
import BottomButton from '../../common/BottomButton';

const EmailCodeScreen = () => {
    let email = "abc@konkuk.ac.kr";
    const [code, setCode] = useState('');
    const [isCorrect, setCorrect] = useState(true);
    let reg = '123456';

    const doFunction = (e) => {
        Alert.alert(
            '인증코드 재전송 완료',
            '코드가 재전송되었습니다. 코드는 최대 10분간 유효합니다.',
            [
              {text: '확인', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <TitleText text1={"이메일로 전송된"} text2={"코드를 입력하세요."} />
                <Text style={styles.font1}>{email} 으로 코드를 전송했습니다.</Text>
                <Text style={styles.font2}>인증코드는 최대 10분간 유효합니다.</Text>
                <InputBox playsholder={"인증코드를 입력해주세요"} text={code} setText={setCode} isCorrect={isCorrect} setCorrect={setCorrect} correctText={"올바르지 않은 코드입니다."}/>
                <View style={styles.container2}>
                    <Text style={styles.font3}>인증코드를 받지 못하셨나요?</Text>
                    <SubButton text="인증코드 재전송" doFunction={ doFunction }/>
                </View>
            </ScrollView>
            <BottomButton text="제출" moveTo="CheckStudentCardScreen" available={code} checkVariable={code} reg={reg} setCorrect={setCorrect}/>
        </>
        
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
    container2:{
        flexDirection: 'row',
        marginTop: 38,
        alignItems: 'center',
    },
    font1:{
        fontSize: 16,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
    },
    font2:{
        fontSize: 16,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginBottom:18,
    },
    font3:{
        fontSize: 14,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginRight: 20,
    },
});

export default EmailCodeScreen;
