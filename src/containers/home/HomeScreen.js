import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigateTo = useNavigation();

    return (
        <>
            <ScrollView style={styles.container}>
                <Text onTouchEnd={() => { navigateTo.navigate("DidStackNavigator"); }}>회원가입</Text>
                <Text onTouchEnd={() => { navigateTo.navigate("GroupDetailStackNavigator"); }}>그룹 상세화면</Text>
                <Text onTouchEnd={()=> {navigateTo.navigate("VoteStackNavigator");}}>투표 생성화면</Text>
            </ScrollView>
        </>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingHorizontal: 30,
    },
});

export default HomeScreen;
