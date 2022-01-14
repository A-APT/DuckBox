import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../../../theme/Colors';
import {type} from '../../../../theme/Fonts';
import { useNavigation } from '@react-navigation/native';

const Agree = ({ check1, setCheck1, check2, setCheck2 }) => {
    const navigateTo = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    onTouchEnd={() => {setCheck1(!check1);}}
                    source={check1 ? require('../../../../asset/icon/pressCheck.png') : require('../../../../asset/icon/check.png')} />
                <Text style={styles.font1} onTouchEnd={() => { navigateTo.navigate('TermsOfUseScreen'); }} >이용약관</Text>
                <Text style={styles.font2}>에 동의합니다.</Text>
            </View>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    onTouchEnd={() => {setCheck2(!check2);}}
                    source={check2 ? require('../../../../asset/icon/pressCheck.png') : require('../../../../asset/icon/check.png')} />
                <Text style={styles.font1} onTouchEnd={() => { navigateTo.navigate('PolicyScreen'); }} >개인정보처리방침</Text>
                <Text style={styles.font2}>에 동의합니다.</Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:16,
    },
    font1: {
        fontSize:14,
        color: colors.main,
        marginLeft: 8,
        fontFamily: type.Roboto_Regular,
    },
    font2:{
        fontSize:14,
        color: colors.black,
        fontFamily: type.Roboto_Regular,
    }
});

export default Agree;
