import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import colors from '../../../theme/Colors';
import { type } from '../../../theme/Fonts';
import InputBox from '../../common/InputBox';
import TitleText from '../../common/TitleText';
import PasswordBox from '../../common/PasswordBox';
import { useNavigation } from '@react-navigation/native';

const MoreInfoScreen = () => {
    const navigateTo = useNavigation();

    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [department, setDepartment] = useState('');

    const [isCorrectPassword, setCorrectPassword] = useState(true);
    const [isCorrectRePassword, setCorrectRePassword] = useState(true);
    const [isCorrectNickname, setCorrectNickname] = useState(true);
    const [isCorrectDepartment, setCorrectDepartment] = useState(true);

    let pwdReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let duplication = ["사과", "편의점", "apple"];
    let departmentList = ["컴퓨터공학부", "소프트웨어학과"];

    const checkDuplication = () => {
        duplication.map((item) =>{
            if(item === nickname){
                setCorrectNickname(false);
                return;
            }
            setCorrectNickname(true);
        });
    };

    const checkDepartMentList = () => {
        departmentList.map((item) =>{
            if(item === department){
                setCorrectDepartment(true);
                return;
            }
            setCorrectDepartment(false);
        });
    };

    const onCheckAvailablity = (e) =>{
        if(pwdReg.test(password)){
            if(password === rePassword){
                checkDuplication();
                checkDepartMentList();
                if(isCorrectNickname&&isCorrectDepartment){
                    navigateTo.navigate("FinishCreateDidScreen");
                }
            }else{
                setCorrectRePassword(false);
            }
        }else{
            setCorrectPassword(false);
        }
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <TitleText text1={"마지막 단계입니다"} text2={"추가 정보를 입력해주세요"} />
                <Text style={styles.font2}>비밀번호</Text>
                <PasswordBox playsholder={"입력해주세요."} text={password} setText={setPassword} isCorrect={isCorrectPassword} setCorrect={setCorrectPassword} correctText={"8자 이상/ 하나 이상의 문자,숫자, 특수문자를 포함 필요"} />
                <Text style={styles.font1}>비밀번호 확인</Text>
                <PasswordBox playsholder={"입력해주세요."} text={rePassword} setText={setRePassword} isCorrect={isCorrectRePassword} setCorrect={setCorrectRePassword} correctText={"비밀번호가 일치하지 않습니다."} />
                <Text style={styles.font1}>닉네임</Text>
                <InputBox playsholder={"입력해주세요."} text={nickname} setText={setNickname} isCorrect={isCorrectNickname} setCorrect={setCorrectNickname} correctText={"중복된 닉네임입니다."} />
                <Text style={styles.font1}>학과</Text>
                <InputBox playsholder={"입력해주세요."} text={department} setText={setDepartment} isCorrect={isCorrectDepartment} setCorrect={setCorrectDepartment} correctText={"정확한 학과명을 입력해야합니다."} />
            </ScrollView>
            <View style={password&&rePassword&&nickname&&department ? styles.buttonContainer : styles.pressButtonContainer}
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
    container2: {
        flexDirection: 'row',
        marginTop: 38,
        alignItems: 'center',
    },
    font1: {
        fontSize: 14,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginTop: 18,
        marginBottom: 8,
    },
    font2: {
        fontSize: 14,
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

export default MoreInfoScreen;
