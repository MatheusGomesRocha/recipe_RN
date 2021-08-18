import React from 'react';
import { ScrollView, View } from 'react-native';

import RecipeComponent from '../../components/RecipeComponent';

import type1 from '../../assets/images/type1.png';
import type2 from '../../assets/images/type2.png';
import type3 from '../../assets/images/type3.png';
import type4 from '../../assets/images/type4.png';

import {
    HomeContainer,

    Title,

    CategoryButton,
    CategoryIcon,
    CategoryName
} from './styles';

let categoryArray = [
    {id: 1, name: 'All', icon: type1},
    {id: 2, name: 'Chinese', icon: type2},
    {id: 3, name: 'Brazillian', icon: type3},
    {id: 4, name: 'Italian', icon: type4},
];

export default function Home () {
    return(
        <HomeContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Simple recipy with your <Title style={{color: '#fc6011'}}>fridge's ingredients</Title></Title>

                <View style={{marginTop: 30}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {categoryArray.map((item, k) => (
                            <CategoryButton key={k}>
                                <CategoryIcon source={item.icon} />
                                <CategoryName>{item.name}</CategoryName>
                            </CategoryButton>
                        ))}
                    </ScrollView>
                </View>

                <RecipeComponent />
            </ScrollView>
        </HomeContainer>
    )
}