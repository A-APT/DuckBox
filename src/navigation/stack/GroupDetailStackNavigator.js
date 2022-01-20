import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GroupDetailScreen from '../../containers/group/detail/GroupDetailScreen';
import GroupInfoScreen from '../../containers/group/detail/GroupInfoScreen';
import GroupInfoUpdateScreen from '../../containers/group/detail/GroupInfoUpdateScreen';

const GroupDetailStack = createStackNavigator();

const GroupDetailStackNavigator = () => {
    return (
        <GroupDetailStack.Navigator
            screenOptions={{ headerShown: false }}>
            <GroupDetailStack.Screen
                name="GroupDetailScreen"
                component={GroupDetailScreen}
            />
            <GroupDetailStack.Screen
                name="GroupInfoScreen"
                component={GroupInfoScreen}
            />
            <GroupDetailStack.Screen
                name="GroupInfoUpdateScreen"
                component={GroupInfoUpdateScreen}
            />
        </GroupDetailStack.Navigator>
    );
};

export default GroupDetailStackNavigator;
