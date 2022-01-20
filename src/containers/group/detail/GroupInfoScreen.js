import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, ImageBackground, Image, View } from 'react-native';
import colors from '../../../theme/Colors';
import { type } from '../../../theme/Fonts';
import { useNavigation } from '@react-navigation/native';
import SubButton from '../../common/SubButton';

const GroupInfoScreen = () => {
    const navigateTo = useNavigation();
    const [isMaster, setIsMaster] = useState(true);
    const [isMember, setIsMember] = useState(false);

    const groupData = {
        name: "KU 총학생회",
        introduction: "2022 건국대학교 총학생회입니다.",
        numOfMember: 2752,
        authentication: true,
    }

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
                                <Text style={styles.font1}>그룹 정보</Text>
                            </View>
                            {isMaster ? <Image onTouchEnd={() => { navigateTo.navigate("GroupInfoUpdateScreen"); }} style={styles.icon} source={require('../../../asset/icon/pencil.png')} /> : null}
                        </View>
                    </ImageBackground>
                </ImageBackground>
                <Image style={styles.logo} source={require('../../../asset/image/konkukLogo.png')} />
            </View>
            <Text style={styles.font2}>{groupData.name}</Text>
            <View style={styles.textContainer}>
                <View style={{ marginRight: 28 }}>
                    <Text style={styles.font3}>소개</Text>
                    <Text style={styles.font3}>그룹원</Text>
                    <Text style={styles.font3}>그룹인증</Text>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.font4}>{groupData.introduction}</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.font4}>{groupData.numOfMember}</Text>
                        {isMaster ? <SubButton text="그룹원 관리" /> : null}
                    </View>
                    <Text style={styles.font4}>{groupData.authentication ? "완료" : "대기중"}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row' }}>
                    {isMember ?
                        <View style={styles.iconContainer}>
                            <Image style={styles.smallIcon} source={require('../../../asset/icon/groupOut.png')} />
                            <Text style={styles.font5}>그룹 탈퇴</Text>
                        </View>
                        : null}
                    {isMaster ?
                        <View style={styles.iconContainer}>
                            <Image style={styles.smallIcon} source={require('../../../asset/icon/trash.png')} />
                            <Text style={styles.font5}>그룹 삭제</Text>
                        </View>
                        : <View style={styles.iconContainer}>
                            <Image style={styles.smallIcon} source={require('../../../asset/icon/bellRing.png')} />
                            <Text style={styles.font5}>그룹 신고</Text>
                        </View>}
                </View>
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
    textContainer: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: colors.gray2,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 12,
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
    smallIcon: {
        resizeMode: 'contain',
        width: 14,
        height: 14,
        marginRight: 4,
        marginLeft: 16,
    },
    font1: {
        fontFamily: type.Roboto_Medium,
        fontSize: 20,
        color: colors.white,
        marginLeft: 14,
    },
    font2: {
        fontFamily: type.Roboto_Bold,
        fontSize: 22,
        color: colors.black,
        paddingHorizontal: 30,
        marginTop: 10,
    },
    font3: {
        fontFamily: type.Roboto_Regular,
        fontSize: 16,
        color: colors.darkGray2,
        marginBottom: 20,
    },
    font4: {
        fontFamily: type.Roboto_Regular,
        fontSize: 16,
        color: colors.black,
        marginBottom: 20,
    },
    font5: {
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
        color: colors.darkGray,
    },
    backBtn:{
        padding: 4,
    }
});

export default GroupInfoScreen;
