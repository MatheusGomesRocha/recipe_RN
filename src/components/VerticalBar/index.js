import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { connect } from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';

import {
    VerticalBar,

    VerticalBarContent,

    VerticalBarItem,
    VerticalBarItemText,

} from './styles';

export default function VerticalBarComponent () {
    const [itemSelected, setItemSelected] = useState('refrigerator');
    const navigation = useNavigation();

    return(
        <VerticalBar>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
                <Feather name="menu" color="#000" size={25} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('search')} style={{marginTop: 30}}>
                <Feather name="search" color="#000" size={25} />
            </TouchableOpacity>
            
            <VerticalBarContent>
                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('refrigerator')} >
                    <VerticalBarItemText bold={itemSelected === 'refrigerator' ? 'bold' : 'normal'} style={{width: 220}}>What i have Refrigerator</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('snack')}>
                    <VerticalBarItemText bold={itemSelected === 'snack' ? 'bold' : 'normal'}>Snacks</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('drink')}>
                    <VerticalBarItemText bold={itemSelected === 'drink' ? 'bold' : 'normal'}>Drinks</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('food')}>
                    <VerticalBarItemText bold={itemSelected === 'food' ? 'bold' : 'normal'}>Food</VerticalBarItemText>
                </VerticalBarItem>
            </VerticalBarContent>
        </VerticalBar>
    )
}
