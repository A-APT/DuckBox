import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckEmailScreen from '../../containers/user/did/CheckEmailScreen';
import EmailCodeScreen from '../../containers/user/did/EmailCodeScreen';
import TermsOfUseScreen from '../../containers/user/did/TermsOfUseScreen';
import PolicyScreen from '../../containers/user/did/PolicyScreen';
import CheckStudentCardScreen from '../../containers/user/did/CheckStudentCardScreen';
import StudentCardResultScreen from '../../containers/user/did/StudenctCardResultScreen';
import MoreInfoScreen from '../../containers/user/did/MoreInfoScreen';
import FinishCreateDidScreen from '../../containers/user/did/FinishCreateDidScreen';

import CreateVoteTitleScreen from '../../containers/vote/create/CreateVoteTitleScreen';
import CreateVoteContentScreen from '../../containers/vote/create/CreateVoteContentScreen'

import Colors from '../../theme/Colors';
import { StyleSheet } from 'react-native';

const VoteStack = createStackNavigator();

const VoteStackNavigator = () => {
    return (
        <VoteStack.Navigator>
            <VoteStack.Screen
                name="CreateVoteTitleScreen"
                component={CreateVoteTitleScreen}
                options={({ navigation }) => ({
                    headerStyle: styles.headerStyle,
                    title: '투표 생성',
                    headerTintColor: Colors.black,
                    headerTitleAlign: 'left',
                    headerTitleStyle: {
                        fontSize: 20,
                    },
                    headerLeft:null,
                })}
            />
            <VoteStack.Screen
                name="CreateVoteContentScreen"
                component={CreateVoteContentScreen}
                options={({ navigation }) => ({
                    headerStyle: styles.headerStyle,
                    title: '투표 생성',
                    headerTintColor: Colors.black,
                    headerTitleAlign: 'left',
                    headerTitleStyle: {
                        fontSize: 18,
                    },
                })}
            />
            <VoteStack.Screen
                name="MakeVoteOption"
                component={TermsOfUseScreen}
                options={({ navigation }) => ({
                    headerStyle: styles.headerStyle,
                    title: '투표 생성',
                    headerTintColor: Colors.black,
                    headerTitleAlign: 'left',
                    headerTitleStyle: {
                        fontSize: 18,
                    },
                })}
            />
            <VoteStack.Screen
                name="FinishMakeVote"
                component={PolicyScreen}
                options={({ navigation }) => ({
                    headerStyle: styles.headerStyle,
                    title: '투표 생성 완료',
                    headerTintColor: Colors.black,
                    headerTitleAlign: 'left',
                    headerTitleStyle: {
                        fontSize: 18,
                    },
                })}
            />
        </VoteStack.Navigator>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.white,
        height: 64,
    },
});

export default VoteStackNavigator;
