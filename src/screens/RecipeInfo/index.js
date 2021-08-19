import React, { useState, useEffect } from 'react';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';

import food1 from '../../assets/images/food1.png';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { api } from '../../services/api';

import {
    RecipeInfoContainer,

    RecipeInfoArea,

    RecipeImg,

    RecipeHeaderButtons,
    RecipeHeaderButton,

    CategoryArea,
    CategoryDivider,
    CategoryText,

    RecipeName,

    RecipeMoreInfoArea,
    RecipeMoreInfo,
    RecipeMoreInfoText,

    DescriptionArea,
    DescriptionText,
} from './styles';


export default function RecipeInfo () {
    const [recipe, setRecipe] = useState({
        id: 0,
        category: '',
        name: '',
        description: '',
        cookTime: 0,
        ingQuantity: 0,
    });
    const [isFavorited, setIsFavorited] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        api.get(`/recipe/1`)
        .then((res) => {
            const data = res.data;
            setRecipe({
                id: data.recipe.id,
                category: data.recipe.category,
                name: data.recipe.name,
                description: data.recipe.description,
                cookTime: data.recipe.cookTime,
                ingQuantity: data.recipe.ingQuantity,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    return(
        <RecipeInfoContainer>
            <RecipeInfoArea>
                <RecipeImg style={{left: windowWidth - 210}} source={food1} />

                <RecipeHeaderButtons>
                    <TouchableWithoutFeedback>
                        <RecipeHeaderButton>
                            <Entypo name="share" color="#000" size={25} />
                        </RecipeHeaderButton>
                    </TouchableWithoutFeedback>

                    <RecipeHeaderButton>
                        <TouchableWithoutFeedback onPress={() => setIsFavorited(!isFavorited)}>
                            <AntDesign name={isFavorited ? 'heart' : 'hearto'} color="#000" size={25} />
                        </TouchableWithoutFeedback>
                    </RecipeHeaderButton>
                </RecipeHeaderButtons>

                <CategoryArea>
                    <CategoryDivider />
                    <CategoryText>{recipe.category}</CategoryText>
                </CategoryArea>

                <RecipeName>{recipe.name}</RecipeName>

                <RecipeMoreInfoArea>
                    <RecipeMoreInfo>
                        <Ionicons name="bonfire-outline" color="#000" size={25} />
                        <RecipeMoreInfoText>{recipe.cookTime.toString()} min</RecipeMoreInfoText>
                    </RecipeMoreInfo>

                    <RecipeMoreInfo>
                        <MaterialIcons name="kitchen" color="#000" size={25} />
                        <RecipeMoreInfoText>{recipe.ingQuantity.toString()} ing</RecipeMoreInfoText>
                    </RecipeMoreInfo>

                    <RecipeMoreInfo>
                        <Ionicons name="fitness-outline" color="#000" size={25} />
                        <RecipeMoreInfoText>400 cal</RecipeMoreInfoText>
                    </RecipeMoreInfo>
                </RecipeMoreInfoArea>

                <TouchableWithoutFeedback onPress={() => setShowDescription(!showDescription)}>
                    <DescriptionArea>
                        <DescriptionText numberOfLines={showDescription ? undefined : 3}>{recipe.description}askm kadsk mdakm akmd akd kamkamdsk amskmdakm amd kakdamsdkamsdk akdma ksmd kamdm</DescriptionText>
                    </DescriptionArea>
                </TouchableWithoutFeedback>
            </RecipeInfoArea>
        </RecipeInfoContainer>
    )
}