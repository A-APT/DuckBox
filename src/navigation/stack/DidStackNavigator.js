import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CheckEmailScreen from '../../containers/user/did/CheckEmailScreen';
import EmailCodeScreen from '../../containers/user/did/EmailCodeScreen';
import TermsOfUseScreen from '../../containers/user/did/TermsOfUseScreen';
import PolicyScreen from '../../containers/user/did/PolicyScreen';
import CheckStudentCardScreen from '../../containers/user/did/CheckStudentCardScreen';
import StudentCardResultScreen from '../../containers/user/did/StudenctCardResultScreen';
import MoreInfoScreen from '../../containers/user/did/MoreInfoScreen';
import FinishCreateDidScreen from '../../containers/user/did/FinishCreateDidScreen';

import Colors from '../../theme/Colors';
import { StyleSheet } from 'react-native';

const DidStack = createStackNavigator();

const DidStackNavigator = () => {
    return (
        <NavigationContainer>
            <DidStack.Navigator>
                <DidStack.Screen
                    name="CheckEmailScreen"
                    component={CheckEmailScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '이메일 인증하기',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="EmailCodeScreen"
                    component={EmailCodeScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '이메일 인증하기',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="TermsOfUseScreen"
                    component={TermsOfUseScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '이용약관',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="PolicyScreen"
                    component={PolicyScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '개인정보처리방침',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="CheckStudentCardScreen"
                    component={CheckStudentCardScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '학생증 인증하기',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="StudentCardResultScreen"
                    component={StudentCardResultScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '학생증 인증하기',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="MoreInfoScreen"
                    component={MoreInfoScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '추가정보 입력하기',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen
                    name="FinishCreateDidScreen"
                    component={FinishCreateDidScreen}
                    options={({ navigation }) => ({
                        headerStyle: styles.headerStyle,
                        title: '회원가입 완료',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                        headerLeft: null,
                    })}
                />
            </DidStack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderColor: Colors.gray2,
        height: 64,
    },
});

export default DidStackNavigator;
