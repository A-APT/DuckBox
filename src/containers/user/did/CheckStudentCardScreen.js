import React from 'react';
import {ScrollView, StyleSheet, Image, View, Text} from 'react-native';
import colors from '../../../theme/Colors';
import {type} from '../../../theme/Fonts';
import TitleText from '../../common/TitleText';
import BottomButton from '../../common/BottomButton';

const CheckStudentCardScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <TitleText text1={"본인 확인을 위해"} text2={"학생증 인증이 필요합니다."} />
                <Image style={styles.image} source={require('../../../asset/image/studentCard.png')}/>
                <Text style={styles.font1}>다음 화면에서 촬영을 진행합니다.</Text>
                <View style={styles.container2}>
                    <Text style={styles.number}>1</Text>
                    <Text style={styles.font2}>학생증의 앞면이 보이도록 놓아주세요. 어두운 바닥에 놓으면 더 잘 인식됩니다.</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.number}>2</Text>
                    <Text style={styles.font2}>가이드 영역에 맞추어 반드시 학생증 원본으로 촬영하세요.</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.number}>3</Text>
                    <Text style={styles.font2}>빛 반사에 주의하세요. 정보 확인이 어렵거나, 훼손/유효하지 않은 신분증은 거절됩니다.</Text>
                </View>
            </ScrollView>
            <BottomButton text="인증하기" moveTo="StudentCardResultScreen" available={true}/>
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
        alignItems: 'center',
        marginTop:18,
    },
    image:{
        resizeMode: 'stretch',
        width: '100%',
    },
    number:{
        backgroundColor: colors.sub1,
        color: colors.main,
        borderRadius: 10,
        paddingHorizontal:6,
        fontSize: 16,
        fontFamily: type.Roboto_Regular,
    },
    font1:{
        fontFamily: type.Roboto_Bold,
        fontSize: 18,
        color: colors.black,
        marginTop: 30,
    },
    font2:{
        fontFamily: type.Roboto_Regular,
        fontSize: 16,
        color: colors.black,
        paddingLeft: 12,
        paddingRight: 18,
    },
});

export default CheckStudentCardScreen;
