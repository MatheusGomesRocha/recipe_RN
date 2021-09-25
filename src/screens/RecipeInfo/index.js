import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import { api } from '../../services/api';
import HeartIcon from '../../assets/images/heart.png';
import HeartEmptyIcon from '../../assets/images/heart-empty.png';

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
    IngName,
    
    YoutubeVideoArea,
    YoutubeVideoTitle,
    YoutubeVideo,
} from './styles';

let array = [
    {id: 1, name: 'Shrimp'},
    {id: 2, name: 'Sugar'},
    {id: 3, name: 'Salt'},
    {id: 4, name: 'oil'},
    {id: 5, name: 'cake'},
    {id: 6, name: 'apple'},
];

// Fake DATA to use when the Database is off
// {id: 1, name: 'Hot Sausage W/ Cheese And Milk', category: 'Chinese', description: 'Lorem ispum aksmd owodoia samda qqsdak mapodkqoa s aa mmammsa', cookTime: 50, ingQuantity: 12},

export default function RecipeInfo () {
    const [recipe, setRecipe] = useState([]);
    const [isFavorited, setIsFavorited] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();

    const recipeId = route.params.recipeId;
    const token = useSelector(state => state.user.token);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const widthHeart = useSharedValue(30);
    const heightHeart = useSharedValue(30);

    useEffect(() => {
        api.get(`/recipe/${recipeId}`)
        .then((res) => {
            const data = res.data;
            setRecipe({
                id: data.recipe.id,
                img: data.recipe.img,
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
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, []);

    useEffect(() => {
        api.get(`/recipe-favorite/${token}/${recipeId}`)
        .then(res => setIsFavorited(res.data.result))
        .catch((err) => console.log(err))
    }, []);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: widthHeart.value,
            height: heightHeart.value,
        };
    });

    function handleFavorite () {
        if(!isFavorited) {
            widthHeart.value = withSequence(withTiming(40), withTiming(30));
            heightHeart.value = withSequence(withTiming(40), withTiming(30));

            api.post(`/add-favorites/${token}`, {
                token: token,
                recipeId: recipeId
            }).then((res) => {
                setIsFavorited(true);
            })
            .catch((err) => console.log(err));
        } else {
            widthHeart.value = withSequence(withTiming(40), withTiming(30));
            heightHeart.value = withSequence(withTiming(40), withTiming(30));
            
            api.post(`/delete-favorite/${token}`, {
                token: token,
                recipeId: recipeId
            }).then((res) => {
                setIsFavorited(false);
            })
            .catch((err) => console.log(err));
        }
    }

    return(
        <RecipeInfoContainer>
            <ScrollView>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bbb', true)} onPress={() => navigation.goBack()}>
                    <View style={{position: 'absolute', top: 25, left: 20, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
                        <Feather name="arrow-left" color="#000" size={25}/>
                    </View>
                </TouchableNativeFeedback>

                <RecipeInfoArea style={{minHeight: windowHeight - 100}}>
                    {loading ?
                        <ActivityIndicator style={{marginTop: 300}} size="large" color="#D7263D" />
                    :
                        <>
                            <RecipeImg style={{left: windowWidth - 210}} source={{uri: `http://192.168.0.110:3000/media/${recipe.img}`}} />

                            <RecipeHeaderButtons>
                                <TouchableWithoutFeedback>
                                    <RecipeHeaderButton>
                                        <Entypo name="share" color="#000" size={25} />
                                    </RecipeHeaderButton>
                                </TouchableWithoutFeedback>

                                <RecipeHeaderButton>
                                    <TouchableWithoutFeedback onPress={handleFavorite}>
                                        <Animated.Image source={isFavorited ? HeartIcon : HeartEmptyIcon} style={[animatedStyles], { position: 'absolute', bottom: -16}} />
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
                                    <RecipeMoreInfoText>{recipe.cookTime} min</RecipeMoreInfoText>
                                </RecipeMoreInfo>

                                <RecipeMoreInfo>
                                    <MaterialIcons name="kitchen" color="#000" size={25} />
                                    <RecipeMoreInfoText>{recipe.ingQuantity} ing</RecipeMoreInfoText>
                                </RecipeMoreInfo>

                                <RecipeMoreInfo>
                                    <Ionicons name="fitness-outline" color="#000" size={25} />
                                    <RecipeMoreInfoText>400 cal</RecipeMoreInfoText>
                                </RecipeMoreInfo>
                            </RecipeMoreInfoArea>

                            <TouchableWithoutFeedback onPress={() => setShowDescription(!showDescription)}>
                                <DescriptionArea>
                                    <DescriptionText numberOfLines={showDescription ? undefined : 3}>{recipe.description}</DescriptionText>
                                </DescriptionArea>
                            </TouchableWithoutFeedback>

                            <IngArea>
                                <IngTitle>Ingredients ({array.length})</IngTitle>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 23, marginTop: 20}}>    
                                    {array.map((item, k) => (
                                        <IngItemArea key={k}>
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
                        </>
                    }
                </RecipeInfoArea>
            </ScrollView>
        </RecipeInfoContainer>
    )
}