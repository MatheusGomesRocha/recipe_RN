import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import VerticalBar from '../components/VerticalBar';
import HomeScreen from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
      <Drawer.Navigator screenOptions={{
            drawerType: 'slide',
            drawerStyle: { width: 62 },
            headerShown: false,
        }} drawerContent={props => <VerticalBar />}>
          <Drawer.Screen name="home" component={HomeScreen}/>
      </Drawer.Navigator>
  );
}