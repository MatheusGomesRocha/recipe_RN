import React from 'react';

import {
    VerticalBar,

    VerticalBarContent,

    VerticalBarItem,
    VerticalBarItemText,

    VerticalBarSelectedItem,
    VerticalBarSelectedItemBall,
} from './styles';

export default function VerticalBar () {
    return(
        <VerticalBar>
            <VerticalBarContent style={{ transform: [{ rotate: '90deg'}] }}>
                <VerticalBarItem>
                    <VerticalBarItemText>What I Have Refrigerator</VerticalBarItemText>
                    <VerticalBarSelectedItem>
                        <VerticalBarSelectedItemBall />
                    </VerticalBarSelectedItem>
                </VerticalBarItem>

                <VerticalBarItem>
                    <VerticalBarItemText>Snacks</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem>
                    <VerticalBarItemText>Drinks</VerticalBarItemText>
                </VerticalBarItem>

                <VerticalBarItem>
                    <VerticalBarItemText>Food</VerticalBarItemText>
                </VerticalBarItem>
            </VerticalBarContent>
        </VerticalBar>
    )
}