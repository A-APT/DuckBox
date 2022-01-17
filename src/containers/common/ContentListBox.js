import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

const ContentListBox = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../asset/image/konkukVote.jpg')}/>
            <View style={styles.textContainer}>
                <Text style={styles.font1}>건국대학교 제47회 공과대학 학생회 투표</Text>
                <View style={styles.imageTextContainer}>
                    <Image style={styles.icon} source={require('../../asset/icon/user.png')}/>
                    <Text style={styles.font2}>KU 총학생회</Text>
                </View>
                <View style={{alignItems: 'flex-end', marginTop: 16,}}>
                    <View style={styles.imageTextContainer}>
                        <Image style={styles.icon} source={require('../../asset/icon/time.png')}/>
                        <Text style={styles.font3}>3일 06:13:05 남음</Text>
                    </View>
                </View>
                <View style={styles.tagTextContainer}>
                    <Text style={styles.voteBox}>투표</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.font2}>참여율 </Text>
                        <Text style={styles.font4}>20.36%</Text>
                        <Text style={styles.font2}> (851명)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 22,

        borderColor: Colors.gray2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    textContainer:{
        paddingLeft: 10,
    },
    imageTextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagTextContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    image:{
        resizeMode: 'cover',
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    font1:{
        color: Colors.black,
        fontFamily: type.Roboto_Regular,
        fontSize: 16,
    },
    font2:{
        color: Colors.black,
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
    },
    font3:{
        color: Colors.darkGray,
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
    },
    font4:{
        color: Colors.main,
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
    },
    icon:{
        resizeMode: 'contain',
        width: 14,
        height: 14,
        marginRight: 4,
    },
    voteBox:{
        backgroundColor: Colors.sub4,
        paddingHorizontal:6,
        paddingVertical: 4,
        fontFamily: type.Roboto_Bold,
        borderRadius: 4,
        fontSize: 12,
    },
});

export default ContentListBox;
