import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import food1 from '../../assets/images/food1.png';

import { api } from '../../services/api';
import NotFound from '../404';

import {
    RecipeArea, 
    
    RecipeItem,

    ItemImg,

    ItemCategoryArea,
    ItemCategoryText,
    ItemName,

    ItemDescriptionArea,
    ItemDescriptionTitle,
    ItemDescription,

    ItemMoreInfoArea,
    ItemMoreInfo,
    ItemMoreInfoText,

    ItemViewButton,
    ItemViewButtonText,
} from './styles';

// Fake DATA to use when the Database is off
let array = [
    {id: 1, name: 'Hot Sausage W/ Cheese And Milk', category: 'Chinese', description: 'Lorem ispum aksmd owodoia samda qqsdak mapodkqoa s aa mmammsa', cookTime: 50, ingQuantity: 12},
    {id: 2, name: 'Hot Sausage W/ Cheese And Milk', category: 'Brazillian', description: 'Lorem ispum aksmd owodoia samda qqsdak mapodkqoa s aa mmammsa', cookTime: 50, ingQuantity: 12},
    {id: 3, name: 'Hot Sausage W/ Cheese And Milk', category: 'Italian', description: 'Lorem ispum aksmd owodoia samda qqsdak mapodkqoa s aa mmammsa', cookTime: 50, ingQuantity: 12},
    {id: 4, name: 'Hot Sausage W/ Cheese And Milk', category: 'Japanese', description: 'Lorem ispum aksmd owodoia samda qqsdak mapodkqoa s aa mmammsa', cookTime: 50, ingQuantity: 12},
];

export default function RecipeComponent ({ filter }) {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const verticalBarFilter = useSelector(state=>state.user.filter);

    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        api.get(`/recipes/${filter}/${verticalBarFilter}`)
        .then(res => {
            const data = res.data.recipes;
            setRecipes(data);

            setIsLoading(true);
        })
        .catch((err) => console.log(err))
    }, [filter, verticalBarFilter]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [isLoading])

    const renderItem = ({item}) => {
        return(
            <RecipeItem style={{width: windowWidth}}>
                <ItemCategoryArea>
                    <ItemCategoryText>{item.category} {item.type}</ItemCategoryText>
                    <ItemName numberOfLines={1}>{item.name}</ItemName>
                </ItemCategoryArea>

                <ItemImg resizeMode='contain' source={{uri: `http://192.168.0.110:3000/media/${item.img}`}} />

                <ItemDescriptionArea>
                    <ItemDescriptionTitle>Details</ItemDescriptionTitle>
                    <ItemDescription numberOfLines={2}>{item.description}askdm askdm adm askmd ak akmsd ka akmdc aksmd aksmdkam am sakdmk</ItemDescription>
                </ItemDescriptionArea>

                <ItemMoreInfoArea>
                    <ItemMoreInfo>
                        <Ionicons name="bonfire-outline" color="#000" size={25} />
                        <ItemMoreInfoText>{item.cookTime.toString()} min</ItemMoreInfoText>
                    </ItemMoreInfo>

                    <ItemMoreInfo>
                        <MaterialIcons name="kitchen" color="#000" size={25} />
                        <ItemMoreInfoText>{item.ingQuantity.toString()} ing</ItemMoreInfoText>
                    </ItemMoreInfo>
                </ItemMoreInfoArea>

                <ItemViewButton onPress={() => navigation.navigate('recipe__info', {recipeId: item.id})}>
                    <ItemViewButtonText>View Recipe</ItemViewButtonText>
                </ItemViewButton>
            </RecipeItem>
        )
    }

    return(
        <RecipeArea style={{marginTop: isLoading ? 200 : 0}}>
            {isLoading ? 
                <ActivityIndicator size="large" color="#D7263D" />
            :
                recipes.length > 0 ? 
                    <FlatList
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingTop: 20}}
                        data={recipes}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                :
                    <NotFound />
            }
        </RecipeArea>
    )
}