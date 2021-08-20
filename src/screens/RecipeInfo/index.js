import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Dimensions, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

import food1 from '../../assets/images/food1.png';
import imgPlaceholder from '../../assets/images/type1.png';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

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

    IngArea,
    IngTitle,
    IngItemArea,
    IngItem,
    IngImg,
    IngName,
    
    YoutubeVideoArea,
    YoutubeVideoTitle,
    YoutubeVideo,
} from './styles';

let array = [
    {id: 1, img: imgPlaceholder, name: 'Shrimp'},
    {id: 2, img: imgPlaceholder, name: 'Sugar'},
    {id: 3, img: imgPlaceholder, name: 'Salt'},
    {id: 4, img: imgPlaceholder, name: 'oil'},
    {id: 5, img: imgPlaceholder, name: 'cake'},
    {id: 6, img: imgPlaceholder, name: 'apple'},
];

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

    const navigation = useNavigation();
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
            <ScrollView>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bbb', true)} onPress={() => navigation.goBack()}>
                    <View style={{position: 'absolute', top: 25, left: 2-00, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
                        <Feather name="arrow-left" color="#000" size={25}/>
                    </View>
                </TouchableNativeFeedback>

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

                        <IngArea>
                            <IngTitle>Ingredients ({array.length})</IngTitle>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 17, marginTop: 20}}>    
                                {array.map((item, k) => (
                                    <IngItemArea key={k}>
                                        <IngItem>
                                            <IngImg source={item.img} />
                                        </IngItem>

                                        <IngName>{item.name}</IngName>
                                    </IngItemArea>
                                ))}
                            </ScrollView>
                        </IngArea>

                        <YoutubeVideoArea>
                            <YoutubeVideoTitle>See this video to help you</YoutubeVideoTitle>
                            <YoutubeVideo>
                                <WebView allowFullScreen={true} source={{ uri: 'https://www.youtube.com/embed/i6Oi-YtXnAU' }} />
                            </YoutubeVideo>
                        </YoutubeVideoArea>
                </RecipeInfoArea>
            </ScrollView>
        </RecipeInfoContainer>
    )
}