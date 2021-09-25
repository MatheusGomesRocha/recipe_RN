import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import food2 from '../../assets/images/food2.png';

import { api } from '../../services/api';

import {
    SmallerRecipeArea,

    SmallerRecipeItem,

    ItemImg,
    
    ItemRightContent,

    ItemHeader,
    ItemCategory,
    ItemCategoryMarkdown,
    ItemCategoryText,
    ItemActionButtons,
    ItemActionButton,

    ItemName,

    ItemFooter,
    ItemFooterDefault,
    ItemFooterDefaultText
} from './styles';

export default function SmallerRecipe() {
    const [recipes, setRecipes] = useState({
        id: 0,
        category: '',
        cookTime: 0,
        ingQuantity: 0,
        description: '',
        img: '',
        name: '',
    });
    const [loading, setLoading] = useState(true);

    const token = useSelector(state => state.user.token);

    useEffect(() => {
        api.get(`/favorites/${token}`)
        .then(res => {
            setRecipes({
                id: res.data[0].Recipe.id,
                category: res.data[0].Recipe.category,
                cookTime: res.data[0].Recipe.cookTime,
                description: res.data[0].Recipe.description,
                img: res.data[0].Recipe.img,
                name: res.data[0].Recipe.name,
                ingQuantity: res.data[0].Recipe.ingQuantity,
            })
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, []);

    const RenderItem = () => {
        return(
            <SmallerRecipeItem>
                <ItemImg source={food2} />

                <ItemRightContent>
                    <ItemHeader>
                        <ItemCategory>
                            <ItemCategoryMarkdown />
                            <ItemCategoryText>{recipes.category}</ItemCategoryText>
                        </ItemCategory>

                        <ItemActionButtons>
                            <ItemActionButton>
                                <Entypo name="share" color="#000" size={20} />
                            </ItemActionButton>
                            
                            <ItemActionButton>
                                <AntDesign name="pluscircleo" color="#000" size={20} />
                            </ItemActionButton>
                        </ItemActionButtons>
                    </ItemHeader>

                    <ItemName>{recipes.name}</ItemName>

                    <ItemFooter>
                        <ItemFooterDefault>
                            <Ionicons name="bonfire-outline" color="#000" size={25} />
                            <ItemFooterDefaultText>{recipes.cookTime} min</ItemFooterDefaultText>
                        </ItemFooterDefault>

                        <ItemFooterDefault>
                            <MaterialIcons name="kitchen" color="#000" size={25} />
                            <ItemFooterDefaultText>{recipes.ingQuantity} ing</ItemFooterDefaultText>
                        </ItemFooterDefault>
                    </ItemFooter>
                </ItemRightContent>
            </SmallerRecipeItem>
        )
    } 

    return(
        <SmallerRecipeArea>
            {loading ?
                <ActivityIndicator size="large" color="#D7263D" />
                :
                <RenderItem />
            }
        </SmallerRecipeArea>
    )
}