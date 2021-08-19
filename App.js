import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import Home from './src/screens/Home';
import RecipeInfo from './src/screens/RecipeInfo';

export default () => {
    return(
        <NavigationContainer>
            {/* <MainStack /> */}
            <RecipeInfo />
        </NavigationContainer>
    )
}