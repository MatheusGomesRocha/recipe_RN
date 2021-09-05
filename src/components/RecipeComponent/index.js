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

export default function RecipeComponent () {
    const [recipes, setRecipes] = useState([]);

    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        api.get('/recipes')
        .then(res => {
            const data = res.data.recipes;
            setRecipes(data);
        })
    }, []);

    const renderItem = ({item}) => {
        return(
            <RecipeItem style={{width: windowWidth}}>
                <ItemCategoryArea>
                    <ItemCategoryText>{item.category} Food</ItemCategoryText>
                    <ItemName numberOfLines={1}>{item.name}</ItemName>
                </ItemCategoryArea>

                {/* <ItemImg resizeMode='contain' source={{uri: `http://192.168.0.110:3000/media/${item.img}`}} /> */}
                <ItemImg resizeMode='contain' source={food1} />

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
        <RecipeArea>
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: 20}}
                data={array}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </RecipeArea>
    )
}