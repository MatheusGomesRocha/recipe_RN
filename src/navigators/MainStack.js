import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppTab from './AppTab';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import RecipeInfoScreen from '../screens/RecipeInfo';
import UploadRecipeScreen from '../screens/UploadRecipe';
import FoodManagerScreen from '../screens/FoodManager';
import AddFoodScreen from '../screens/AddFood';
import UpdateProfileScreen from '../screens/UpdateProfile';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="app__tab">
            <MainStack.Screen name="app__tab" component={AppTab} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="login" component={LoginScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="sign__up" component={SignUpScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="recipe__info" component={RecipeInfoScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="upload__recipe" component={UploadRecipeScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="food__manager" component={FoodManagerScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="add__food" component={AddFoodScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="update__profile" component={UpdateProfileScreen} options={{title: null, headerTransparent: true, headerLeft: null}} />
        </MainStack.Navigator>
    )
}