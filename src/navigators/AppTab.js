import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import HomeScreen from '../screens/Home';
import SavedScreen from '../screens/Saved';
import ProfileScreen from '../screens/Profile';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            tabBarOption={{
                keyboardHidesTabBar: true
            }}
        >
            <AppTab.Screen name="home" component={HomeScreen} options={{title: null, headerTransparent: true}}/>
            <AppTab.Screen name="saved" component={SavedScreen} options={{title: null, headerTransparent: true}}/>
            <AppTab.Screen name="profile" component={ProfileScreen} options={{title: null, headerTransparent: true}}/>
        </AppTab.Navigator>
    )
}