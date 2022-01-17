import React from 'react';
import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native';
import colors from '../../../theme/Colors';
import {type} from '../../../theme/Fonts';
import Radius10Button from '../../common/Radius10Button';

const GroupDetailScreen = () => {
    return (
        <>
            <ImageBackground
                style={styles.image}
                source={require('../../../asset/image/konkuk.jpg')}>
                <ImageBackground 
                    style={styles.image}
                    source={require('../../../asset/image/black50.png')}>
                    <View style={styles.topContainer}>
                        <Image source={require('../../../asset/icon/backWhite.png')}/>
                        <Image style={styles.icon} source={require('../../../asset/icon/setting.png')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.font1}>KU 총학생회</Text>
                        <Text style={styles.font2}>2022 건국대학교 총학생회입니다.</Text>
                        <Text style={styles.font3}>그룹원 2,752</Text>
                        <View style={styles.buttonContainer}>
                            <Radius10Button text={"그룹 가입하기"} moveTo={'HomeScreen'}/>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 30,
    },
    topContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    textContainer:{
        padding: 25,
    },
    buttonContainer:{
        alignItems: 'flex-end',
    },
    image:{
        resizeMode: 'cover',
    },
    icon:{
        resizeMode: 'contain',
        width: 28,
        height: 28,
    },
    font1:{
        fontFamily: type.Roboto_Bold,
        fontSize: 26,
        color: colors.white,
    },
    font2:{
        fontFamily: type.Roboto_Medium,
        fontSize: 18,
        color: colors.white,
    },
    font3:{
        fontFamily: type.Roboto_Medium,
        fontSize: 16,
        color: colors.white,
        marginTop: 24,
    }
});

export default GroupDetailScreen;
