import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

const ContentListBox = ({ type, data, isOpen }) => {
    return (
        <View style={isOpen? styles.container: styles.closedContainer}>
            <Image style={styles.image} source={require('../../asset/image/konkukVote.jpg')} />
            <View style={styles.textContainer}>
                <Text style={styles.font1}>{data.title}</Text>
                <View style={styles.imageTextContainer}>
                    <Image style={styles.icon} source={require('../../asset/icon/user.png')} />
                    <Text style={styles.font2}>{data.group}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', marginTop: 16, }}>
                    <View style={styles.imageTextContainer}>
                        <Image style={styles.icon} source={require('../../asset/icon/time.png')} />
                        {isOpen? <Text style={styles.font3}>{data.date} 남음</Text> : <Text style={styles.font3}>종료되었습니다</Text>}
                    </View>
                </View>
                <View style={styles.tagTextContainer}>
                    {type ?
                        <Text style={styles.voteBox}>투표</Text>
                        : <Text style={styles.surveyBox}>설문</Text>
                    }
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.font2}>참여율 </Text>
                        <Text style={styles.font4}>{data.ratio}%</Text>
                        <Text style={styles.font2}> ({data.numOfPeople}명)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 22,
        borderColor: Colors.gray2,
        borderBottomWidth: 1,
    },
    closedContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 22,
        borderColor: Colors.gray2,
        borderBottomWidth: 1,
        backgroundColor: Colors.gray,
    },
    textContainer: {
        paddingLeft: 10,
        flex: 1
    },
    imageTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    image: {
        resizeMode: 'cover',
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    font1: {
        color: Colors.black,
        fontFamily: type.Roboto_Regular,
        fontSize: 16,
    },
    font2: {
        color: Colors.black,
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
    },
    font3: {
        color: Colors.darkGray,
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
    },
    font4: {
        color: Colors.main,
        fontFamily: type.Roboto_Regular,
        fontSize: 14,
    },
    icon: {
        resizeMode: 'contain',
        width: 14,
        height: 14,
        marginRight: 4,
    },
    voteBox: {
        backgroundColor: Colors.sub4,
        paddingHorizontal: 6,
        paddingVertical: 4,
        fontFamily: type.Roboto_Bold,
        borderRadius: 4,
        fontSize: 12,
    },
    surveyBox: {
        backgroundColor: Colors.sub2,
        paddingHorizontal: 6,
        paddingVertical: 4,
        fontFamily: type.Roboto_Bold,
        borderRadius: 4,
        fontSize: 12,
    },
});

export default ContentListBox;
