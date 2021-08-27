import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';

import shrimp from '../../assets/images/shrimp.png';

import { defaultColor, grayFont } from '../../globals';

import {
    FoodManagerContainer,

    FoodManagerArea,

    SubHeaderArea,
    SubHeader,
    SubHeaderText
} from './styles';

let array = [
    {id: 1, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 2, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 3, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 4, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 5, img: shrimp, name: 'Shrimadasdadasasaaaaaasp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 6, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 7, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 8, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 9, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
];

export default function FoodManager() {
    return(
        <FoodManagerContainer>
            <Header title='Food Manager' />

            <FoodManagerArea>
                <SubHeaderArea>
                    <SubHeader>
                        <SubHeaderText color={grayFont}>Ingredients (21)</SubHeaderText>
                    </SubHeader>

                    <SubHeader>
                        <AntDesign name="pluscircleo" color={defaultColor} size={20} />
                        <SubHeaderText color={defaultColor}>Add New</SubHeaderText>
                    </SubHeader>
                </SubHeaderArea>
            </FoodManagerArea>
        </FoodManagerContainer>
    )
}