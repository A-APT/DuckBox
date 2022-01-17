import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../theme/Colors';
import { StyleSheet } from 'react-native';

import GroupDetailScreen from '../../containers/group/detail/GroupDetailScreen';

const GroupDetailStack = createStackNavigator();

const GroupDetailStackNavigator = () => {
    return (
        <GroupDetailStack.Navigator
            screenOptions={{ headerShown: false }}>
            <GroupDetailStack.Screen
                name="GroupDetailScreen"
                component={GroupDetailScreen}
            />
        </GroupDetailStack.Navigator>
    );
};

export default GroupDetailStackNavigator;
