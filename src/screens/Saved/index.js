import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SmallerRecipe from '../../components/SmallerRecipeComponent';
import { black, defaultColor, grayish, white } from '../../globals';

import {
    SavedContainer,

    RecipeQuantityText,

    FilterArea,
    FilterItem,
    FilterItemText,
} from './styles';

let array = [
    {id: 1, title: 'All'},
    {id: 2, title: 'Chinese'},
    {id: 3, title: 'Brazilian'},
    {id: 4, title: 'Italian'},
    {id: 5, title: 'Japanese'},
];

export default function Saved() {
    const [filter, setFilter] = useState('All');

    const navigation = useNavigation();

    return(
        <SavedContainer>
            <SmallerRecipe 
                children={
                    <>
                        <RecipeQuantityText>22 recipes</RecipeQuantityText>

                        <FilterArea>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {array.map((item, k) => (
                                    <FilterItem onPress={() => setFilter(item.title)} backgroundColor={filter === item.title ? defaultColor : grayish} key={k}>
                                        <FilterItemText color={filter === item.title ? white : black}>{item.title}</FilterItemText>
                                    </FilterItem>
                                ))}
                            </ScrollView>
                        </FilterArea>
                    </>
                } 
            />
        </SavedContainer>
    )
}