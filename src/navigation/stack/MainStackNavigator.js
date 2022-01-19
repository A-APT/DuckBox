import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../containers/home/HomeScreen';
import DidStackNavigator from './DidStackNavigator';
import GroupDetailStackNavigator from './GroupDetailStackNavigator';
import VoteStackNavigator from './VoteStackNavigator';
const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}>
                <MainStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <MainStack.Screen
                    name="DidStackNavigator"
                    component={DidStackNavigator}
                />
                <MainStack.Screen
                    name="GroupDetailStackNavigator"
                    component={GroupDetailStackNavigator}
                />
                <MainStack.Screen
                    name="VoteStackNavigator"
                    component={VoteStackNavigator}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;
