import React from 'react';
import { FlatList } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';

import shrimp from '../../assets/images/shrimp.png';

import { blackish, defaultColor } from '../../globals';

import {
    FoodManagerContainer,

    SubHeaderArea,
    SubHeader,
    SubHeaderText,

    FoodItem,
    FoodImageArea,
    FoodImage,
    FoodContent,
    FoodContentRow,
    FoodContentName,
    FoodContentQuantityType,
    FoodContentDate
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
    const renderItem = ({item}) => {
        return(
            <FoodItem>
                <FoodImageArea>
                    <FoodImage source={item.img} />
                </FoodImageArea>

                <FoodContent>
                    <FoodContentRow>
                        <FoodContentName numberOfLines={1}>{item.name}</FoodContentName>
                        <FoodContentQuantityType>{item.quantity} {item.quantityType}</FoodContentQuantityType>
                    </FoodContentRow>

                    <FoodContentRow>
                        <FoodContentDate>Added: {item.addedAt}</FoodContentDate>
                        <FoodContentDate>Expire: {item.expireAt}</FoodContentDate>
                    </FoodContentRow>
                </FoodContent>
            </FoodItem>
        )
    }

    return(
        <FoodManagerContainer>
            <FlatList 
                ListHeaderComponent={
                    <>
                        <Header title='Food Manager' />

                        <SubHeaderArea>
                            <SubHeader>
                                <SubHeaderText color={blackish}>Ingredients (21)</SubHeaderText>
                            </SubHeader>

                            <SubHeader>
                                <AntDesign style={{marginRight: 7}} name="pluscircleo" color={defaultColor} size={20} />
                                <SubHeaderText color={defaultColor}>Add New</SubHeaderText>
                            </SubHeader>
                        </SubHeaderArea>
                    </>
                }
                ListHeaderComponentStyle={{marginBottom: 25}}
                data={array}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </FoodManagerContainer>
    )
}