import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import food1 from '../../assets/images/food1.png';
import { black, defaultColor } from '../../globals';

import { api } from '../../services/api';

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
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const token = useSelector(state => state.user.token);

    useEffect(() => {
        api.get(`/user-recipes/${token}`)
        .then((res) => {
            setData(res.data.result);
        })
        .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, [])

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

            {loading ? 
                <ActivityIndicator size="large" color="#D7263D" style={{marginTop: 40}} />
                :
                <ScrollView contentContainerStyle={{paddingHorizontal: 10}} showsHorizontalScrollIndicator={false} horizontal={true}>
                    {data.map((item, k) => (
                        <RecipeItem key={k}>
                            <RecipeImg source={{uri: `http://192.168.0.110:3000/media/${item.img}`}} />

                            <RecipeCategory>
                                <RecipeCategoryMarkdown />
                                <RecipeCategoryText numberOfLines={2}>{item.category}</RecipeCategoryText>
                            </RecipeCategory>

                            <RecipeName>{item.name}</RecipeName>
                        </RecipeItem>
                    ))}
                </ScrollView>
            }
        </Recipes>
    )
}