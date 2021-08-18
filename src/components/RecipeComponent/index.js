import React from 'react';
import { FlatList, Dimensions} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import food1 from '../../assets/images/food1.png';
import food2 from '../../assets/images/food2.png';
import food3 from '../../assets/images/food3.png';
import food4 from '../../assets/images/food4.png';

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

let recipeArray = [
    {id: 1, img: food1, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum do Lorem Ipsum do Lorem Ipsum do Lorem Ipsum dolor sit amet, Lor sit amet dolor lorem em Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
    {id: 2, img: food2, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor amet, sit Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
    {id: 3, img: food3, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor sit amet, amet sit lorem dolor Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
    {id: 4, img: food4, category: 'Chinese', name: 'Hot Chilli w/ Milk', description: 'Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet', cookTime: 25, ingQuantity: 7},
];


export default function RecipeComponent () {
    const windowWidth = Dimensions.get('window').width;

    const renderItem = ({item}) => {
        return(
            <RecipeItem style={{width: windowWidth - 120}}>
                <RecipeImg resizeMode='center' source={item.img} />

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

                    <RecipeViewButton>
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
                data={recipeArray}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </RecipeArea>
    )
}