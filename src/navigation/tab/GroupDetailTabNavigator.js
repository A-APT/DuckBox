import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../theme/Colors';
import { type } from '../../theme/Fonts';

import GroupDetailSurveyScreen from '../../containers/group/detail/GroupDetailSurveyScreen';
import GroupDetailVoteScreen from '../../containers/group/detail/GroupDetailVoteScreen';
import GroupDetailResultScreen from '../../containers/group/detail/GroupDetailResultScreen';

const Tab = createMaterialTopTabNavigator();

const GroupDetailTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, fontFamily:type.Roboto_Medium },
                tabBarActiveTintColor: Colors.main,
                tabBarInactiveTintColor: Colors.darkGray,
            }}>
            <Tab.Screen
                name="GroupDetailVoteScreen"
                component={GroupDetailVoteScreen}
                options={{
                    title: '투표',
                }}
            />
            <Tab.Screen
                name="GroupDetailSurveyScreen"
                component={GroupDetailSurveyScreen}
                options={{
                    title: '설문',
                }}
            />
            <Tab.Screen
                name="GroupDetailResultScreen"
                component={GroupDetailResultScreen}
                options={{
                    title: '참여완료',
                }}
            />
        </Tab.Navigator>
    );
}

export default GroupDetailTabNavigator;
