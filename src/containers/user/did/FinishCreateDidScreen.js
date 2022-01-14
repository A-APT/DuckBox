import React  from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../../../theme/Colors';
import {type} from '../../../theme/Fonts';
import RadiusButton from '../../common/RadiusButton';

const FinishCreateDidScreen = () => {
    const nickname = "피자조아";

    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.image}>일러스트 넣을 곳</Text>
                <Text style={styles.font1}>환영합니다.</Text>
                <Text style={styles.font2}>{nickname} 님의 회원가입을 축하합니다.</Text>
                <Text style={styles.font2}>아이디는 등록하신 학교 이메일입니다.</Text>
                <RadiusButton text={'시작하기'} moveTo={'CheckEmailScreen'}/>
                {/* moveTo를 Login 또는 HomeScreen 으로 변경할 예정 */}
            </ScrollView>
        </>
        
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
    image:{
        width: 100,
        height: 100,
        backgroundColor: colors.darkGray,
        marginTop: 50,
    },
    font1: {
        fontSize: 30,
        color: colors.black,
        fontFamily: type.Roboto_Bold,
        marginTop:18,
        marginBottom: 10,
    },
    font2: {
        fontSize: 16,
        color: colors.black,
        fontFamily: type.Roboto_Regular,
    },
});

export default FinishCreateDidScreen;
