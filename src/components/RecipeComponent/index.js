import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import food1 from '../../assets/images/food1.png';

import { api } from '../../services/api';

import {
    RecipeArea, 
    
    RecipeItem,

    RecipeImg,

    CategoryArea,
    CategoryDivider,
    CategoryText,

    RecipeName,

    RecipeDescription,

    RecipeMoreInfoArea,
    RecipeMoreInfo,
    RecipeMoreInfoText,

    RecipeButtonArea,
    RecipeSaveButton,
    RecipeViewButton,
    RecipeViewButtonText,
} from './styles';


export default function RecipeComponent () {
    const [recipes, setRecipes] = useState({});

    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        api.get('/recipes')
        .then(res => {
            const data = res.data.recipes;
            setRecipes({data});
        })
    }, []);

    const renderItem = ({item}) => {
        return(
            <RecipeItem style={{width: windowWidth - 120}}>
                <RecipeImg resizeMode='center' source={food1} />
                <CategoryArea>
                    <CategoryDivider />
                    <CategoryText>{item.category}</CategoryText>
                </CategoryArea>

                <RecipeName>{item.name}</RecipeName>

                <RecipeDescription>{item.description}</RecipeDescription>

                <RecipeMoreInfoArea>
                    <RecipeMoreInfo>
                        <Ionicons name="bonfire-outline" color="#000" size={25} />
                        <RecipeMoreInfoText>{item.cookTime.toString()} min</RecipeMoreInfoText>
                    </RecipeMoreInfo>

                    <RecipeMoreInfo>
                        <MaterialIcons name="kitchen" color="#000" size={25} />
                        <RecipeMoreInfoText>{item.ingQuantity.toString()} ing</RecipeMoreInfoText>
                    </RecipeMoreInfo>
                </RecipeMoreInfoArea>

                <RecipeButtonArea>
                    <RecipeSaveButton>
                        <AntDesign name="pluscircleo" color="#fff" size={25} />
                    </RecipeSaveButton>

                    <RecipeViewButton onPress={() => navigation.navigate('recipe__info', {recipeId: item.id})}>
                        <RecipeViewButtonText>View Recipe</RecipeViewButtonText>
                    </RecipeViewButton>
                </RecipeButtonArea>
            </RecipeItem>
        )
    }

    return(
        <RecipeArea>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}
                data={recipes.data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </RecipeArea>
    )
}