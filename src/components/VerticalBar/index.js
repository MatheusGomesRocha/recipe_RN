import React, { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {
    VerticalBar,

    VerticalBarContent,

    VerticalBarItem,
    VerticalBarItemText,

    VerticalBarSelectedItem,
    VerticalBarSelectedItemBall,
} from './styles';

export default function VerticalBarComponent () {
    const [itemSelected, setItemSelected] = useState('refrigerator');

    return(
        <VerticalBar>
            <Feather name="menu" color="#000" size={25} />
            
            <VerticalBarContent>
                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('refrigerator')} >
                    <VerticalBarItemText bold={itemSelected === 'refrigerator' ? 'bold' : 'normal'} style={{width: 220}}>What i have Refrigerator</VerticalBarItemText>
                    
                    {itemSelected === 'refrigerator' ? 
                        <VerticalBarSelectedItem right={'-60px'}>
                            <VerticalBarSelectedItemBall />
                        </VerticalBarSelectedItem>
                    : undefined}
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('snack')}>
                    <VerticalBarItemText bold={itemSelected === 'snack' ? 'bold' : 'normal'}>Snacks</VerticalBarItemText>

                    {itemSelected === 'snack' ? 
                        <VerticalBarSelectedItem right={'7px'}>
                            <VerticalBarSelectedItemBall />
                        </VerticalBarSelectedItem>
                    : undefined}
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('drink')}>
                    <VerticalBarItemText bold={itemSelected === 'drink' ? 'bold' : 'normal'}>Drinks</VerticalBarItemText>

                    {itemSelected === 'drink' ? 
                        <VerticalBarSelectedItem right={'8px'}>
                            <VerticalBarSelectedItemBall />
                        </VerticalBarSelectedItem>
                    : undefined}
                </VerticalBarItem>

                <VerticalBarItem style={{ transform: [{ rotate: '270deg'}] }} onPress={() => setItemSelected('food')}>
                    <VerticalBarItemText bold={itemSelected === 'food' ? 'bold' : 'normal'}>Food</VerticalBarItemText>

                    {itemSelected === 'food' ? 
                        <VerticalBarSelectedItem right={'10px'}>
                            <VerticalBarSelectedItemBall />
                        </VerticalBarSelectedItem>
                    : undefined}
                </VerticalBarItem>
            </VerticalBarContent>
        </VerticalBar>
    )
}