import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name="home" component={HomeScreen} />
        </AppTab.Navigator>
    )
}