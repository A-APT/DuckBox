import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, ImageBackground, Image, View } from 'react-native';
import colors from '../../../theme/Colors';
import { type } from '../../../theme/Fonts';
import { useNavigation } from '@react-navigation/native';
import InputBox from '../../common/InputBox';

const GroupInfoUpdateScreen = () => {
    const groupData = {
        name: "KU 총학생회",
        introduction: "2022 건국대학교 총학생회입니다.",
    }
    const navigateTo = useNavigation();

    const [groupName, setGroupName] = useState(groupData.name);
    const [introduction, setIntroduction] = useState(groupData.introduction);

    const [isCorrect, setIsCorrect] = useState(true);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.absoluteContainer}>
                <ImageBackground
                    style={styles.image}
                    source={require('../../../asset/image/konkuk.jpg')}>
                    <ImageBackground
                        style={styles.image}
                        source={require('../../../asset/image/black50.png')}>
                        <View style={styles.topContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.backBtn} onTouchEnd={() => { navigateTo.goBack() }} source={require('../../../asset/icon/backWhite.png')} />
                                <Text style={styles.font1}>그룹 정보 수정</Text>
                            </View>
                            <Text style={styles.font1}>완료</Text>
                        </View>
                        <Image style={styles.bigIcon} source={require('../../../asset/icon/getPicture.png')} />
                    </ImageBackground>
                </ImageBackground>
                <Image style={styles.logo} source={require('../../../asset/image/konkukLogo.png')} />
                <Image style={styles.smallIcon} source={require('../../../asset/icon/getPicture.png')} />
            </View>
            <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
                <Text style={styles.font2}>그룹명</Text>
                <InputBox playsholder={"내용을 입력하세요"} text={groupName} setText={setGroupName} isCorrect={isCorrect} setCorrect={setIsCorrect} warningText="중복된 그룹명입니다" />
                <Text style={styles.font2}>소개</Text>
                <InputBox playsholder={"내용을 입력하세요"} text={introduction} setText={setIntroduction} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    topContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    absoluteContainer: {
        height: 220,
    },
    image: {
        resizeMode: 'cover',
        height: 200,
    },
    logo: {
        resizeMode: 'cover',
        position: 'absolute',
        width: 80,
        height: 80,
        bottom: 0,
        borderRadius: 50,
        left: 30,
    },
    icon: {
        resizeMode: 'contain',
        width: 22,
        height: 22,
    },
    bigIcon: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 42,
        height: 42,
        bottom: 10,
        right: 10,
    },
    smallIcon: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 30,
        height: 30,
        bottom: 0,
        left: 82,
    },
    font1: {
        fontFamily: type.Roboto_Medium,
        fontSize: 20,
        color: colors.white,
        marginLeft: 14,
    },
    font2: {
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
        color: colors.black,
        marginBottom: 6,
    },
    backBtn:{
        padding: 4,
    }
});

export default GroupInfoUpdateScreen;
