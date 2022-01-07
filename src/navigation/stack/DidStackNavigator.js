import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CheckEmailScreen from '../../containers/user/did/CheckEmailScreen';
import EmailCodeScreen from '../../containers/user/did/EmailCodeScreen';
import Colors from '../../theme/Colors';

const DidStack = createStackNavigator();

const DidStackNavigator = () => {
    return (
        <NavigationContainer>
            <DidStack.Navigator>
                <DidStack.Screen
                    name="CheckEmailScreen"
                    component={CheckEmailScreen}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: Colors.white,
                            borderBottomWidth: 1,
                            borderColor: Colors.gray2,
                            height: 64,
                        },
                        title: '이메일 인증하기',
                        headerTintColor: Colors.black,
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 18,
                        },
                    })}
                />
                <DidStack.Screen name="EmailCodeScreen" component={EmailCodeScreen} />
            </DidStack.Navigator>
        </NavigationContainer>
    );
};

export default DidStackNavigator;
