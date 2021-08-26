import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import food1 from '../../assets/images/food1.png';
import { black, defaultColor } from '../../globals';

import {
    Recipes,

    FilterRecipeArea,
    FilterRecipeItem,
    FilterRecipeText,

    RecipeItem,
    RecipeHeader,
    RecipeImg,
    RecipeCategory,
    RecipeCategoryMarkdown,
    RecipeCategoryText,
    RecipeName
} from './styles';

let array = [
    {id: 1, img: food1, category: 'Chinese', name: 'Frie Chicken W/ onions'},
    {id: 2, img: food1, category: 'Chinese', name: 'Frie Chicken W/ onions'},
    {id: 3, img: food1, category: 'Chinese', name: 'Frie Chicken W/ onions'},
    {id: 4, img: food1, category: 'Chinese', name: 'Frie Chicken W/ onions'},
    {id: 5, img: food1, category: 'Chinese', name: 'Frie Chicken W/ onions'},
    {id: 6, img: food1, category: 'Chinese', name: 'Frie Chicken W/ onions'},
];

let arrayFilter = [
    {id: 1, title: 'All'},
    {id: 2, title: 'French'},
    {id: 3, title: 'Brazillian'},
    {id: 4, title: 'American'},
    {id: 5, title: 'Japanese'},
    {id: 6, title: 'Chinese'},
    {id: 7, title: 'Italian'},
];

export default function UserRecipes() {
    const [filterRecipeValue, setFilterRecipeValue] = useState('All');

    return(
        <Recipes>
            <FilterRecipeArea>
                <ScrollView contentContainerStyle={{paddingHorizontal: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {arrayFilter.map((item, k) => (
                            <FilterRecipeItem borderColor={filterRecipeValue === item.title ? defaultColor : 'transparent'} onPress={() => setFilterRecipeValue(item.title)} key={k}>
                                <FilterRecipeText color={filterRecipeValue === item.title ? defaultColor : black}>{item.title}</FilterRecipeText>
                            </FilterRecipeItem>
                        ))}
                </ScrollView>
            </FilterRecipeArea>

            <ScrollView contentContainerStyle={{paddingHorizontal: 10}} showsHorizontalScrollIndicator={false} horizontal={true}>
                {array.map((item, k) => (
                    <RecipeItem key={k}>
                        <RecipeHeader>
                            <AntDesign name="pluscircleo" color="#D7263D" size={20} />
                            <RecipeImg source={item.img} />
                        </RecipeHeader>


                        <RecipeCategory>
                            <RecipeCategoryMarkdown />
                            <RecipeCategoryText>{item.category}</RecipeCategoryText>
                        </RecipeCategory>

                        <RecipeName>{item.name}</RecipeName>
                    </RecipeItem>
                ))}
            </ScrollView>
        </Recipes>
    )
}