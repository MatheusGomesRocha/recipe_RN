import React, { useState, useEffect } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';

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
    const [recipes, setRecipes] = useState({});

    useEffect(() => {
        api.get('/recipes')
        .then(res => {
            const data = res.data.recipes;
            setRecipes(data);
        })
    }, [])

    const renderItem = ({item}) => {
        return(
            <SmallerRecipeItem>
                <ItemImg source={food2} />

                <ItemRightContent>
                    <ItemHeader>
                        <ItemCategory>
                            <ItemCategoryMarkdown />
                            <ItemCategoryText>{item.category}</ItemCategoryText>
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

                    <TouchableWithoutFeedback>
                        <ItemName numberOfLines={3}>{item.name}</ItemName>
                    </TouchableWithoutFeedback>

                    <ItemFooter>
                        <ItemFooterDefault>
                            <Ionicons name="bonfire-outline" color="#000" size={25} />
                            <ItemFooterDefaultText>{item.cookTime.toString()} min</ItemFooterDefaultText>
                        </ItemFooterDefault>

                        <ItemFooterDefault>
                            <MaterialIcons name="kitchen" color="#000" size={25} />
                            <ItemFooterDefaultText>{item.ingQuantity.toString()} Ing</ItemFooterDefaultText>
                        </ItemFooterDefault>
                    </ItemFooter>
                </ItemRightContent>
            </SmallerRecipeItem>
        )
    } 

    return(
        <SmallerRecipeArea>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={recipes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SmallerRecipeArea>
    )
}