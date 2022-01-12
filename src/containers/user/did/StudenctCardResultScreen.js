import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import colors from '../../../theme/Colors';
import { type } from '../../../theme/Fonts';
import BottomButton from '../../common/BottomButton';
import InputBox from '../../common/InputBox';
import TextButton from '../../common/TextButton';

const StudentCardResultScreen = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [isCorrect, setCorrect] = useState(true);

    useEffect(() => {
        setName('홍길동');
        setStudentId('201900000');
    }, []);

    const doFunction = (e) =>{
        console.log("재촬영하기");
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={require('../../../asset/image/studentCard.png')} />
                <Text style={styles.font1}>인식된 학생증 정보를 확인해주세요.</Text>
                <Text style={styles.font2}>실제정보와 다른 경우 이용이 제한될 수 있습니다.</Text>
                <Text style={styles.font4}>이름</Text>
                <InputBox text={name} setText={setName} isCorrect={isCorrect} setCorrect={setCorrect} />
                <Text style={styles.font4}>학번</Text>
                <InputBox text={studentId} setText={setStudentId} isCorrect={isCorrect} setCorrect={setCorrect} />
                <View style={styles.container3}>
                    <Text style={styles.font3}>인식이 제대로 되지 않았나요?</Text>
                    <TextButton text="재촬영하기" doFunction={ doFunction }/>
                </View>
            </ScrollView>
            <BottomButton text="인증하기" moveTo="MoreInfoScreen" available={true} />
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
        alignItems: 'center',
        marginTop: 18,
        width: '100%',
    },
    container3: {
        flexDirection: 'row',
        marginTop: 38,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'stretch',
        width: '100%',
        marginTop:18,
    },
    number: {
        backgroundColor: colors.sub1,
        color: colors.main,
        borderRadius: 10,
        paddingHorizontal: 6,
        fontSize: 16,
        fontFamily: type.Roboto_Regular,
    },
    font1: {
        fontFamily: type.Roboto_Bold,
        fontSize: 18,
        color: colors.black,
        marginTop: 30,
    },
    font2: {
        fontFamily: type.Roboto_Regular,
        fontSize: 16,
        color: colors.main,
    },
    font3:{
        fontSize: 14,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginRight: 20,
    },
    font4:{
        fontSize: 14,
        fontFamily: type.Roboto_Regular,
        color: colors.black,
        marginTop: 18,
        marginBottom: 8,
    },
});

export default StudentCardResultScreen;
