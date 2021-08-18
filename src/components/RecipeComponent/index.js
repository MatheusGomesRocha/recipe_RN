import React from 'react';
import { FlatList, Dimensions, View } from 'react-native';

import food1 from '../../assets/images/food1.png';
import food2 from '../../assets/images/food2.png';
import food3 from '../../assets/images/food3.png';
import food4 from '../../assets/images/food4.png';

import {
    RecipeArea, 
    
    RecipeItem,
    RecipeImg
} from './styles';

let recipeArray = [
    {id: 1, img: food1, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
    {id: 2, img: food2, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
    {id: 3, img: food3, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
    {id: 4, img: food4, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
];


export default function RecipeComponent () {
    const windowWidth = Dimensions.get('window').width;

    const renderItem = ({item}) => {
        return(
            <RecipeItem style={{width: windowWidth - 120}}>
                <RecipeImg resizeMode='center' source={item.img} />
            </RecipeItem>
        )
    }

    return(
        <RecipeArea>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={recipeArray}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </RecipeArea>
    )
}