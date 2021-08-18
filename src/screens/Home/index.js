import React from 'react';
import { ScrollView } from 'react-native';

import food1 from '../../assets/images/food1.png';
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
            <Title>Simple recipy with your <Title style={{color: '#0125FC'}}>fridge's ingredients</Title></Title>

            <ScrollView contentContainerStyle={{marginTop: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoryArray.map((item, k) => (
                    <CategoryButton key={k}>
                        <CategoryIcon source={item.icon} />
                        <CategoryName>{item.name}</CategoryName>
                    </CategoryButton>
                ))}
            </ScrollView>
        </HomeContainer>
    )
}