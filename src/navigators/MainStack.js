import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import RecipeInfoScreen from '../screens/RecipeInfo';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="sign__up">
            <MainStack.Screen name="login" component={LoginScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="sign__up" component={SignUpScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="recipe__info" component={RecipeInfoScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
        </MainStack.Navigator>
    )
}