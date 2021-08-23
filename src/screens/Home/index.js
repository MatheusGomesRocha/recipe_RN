import React, { useState } from 'react';
import { ScrollView, TouchableNativeFeedback, View } from 'react-native';

import RecipeComponent from '../../components/RecipeComponent';
import VerticalBar from '../../components/VerticalBar';

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
    const [filter, setFilter] = useState('All');

    return(
        <HomeContainer>
            <VerticalBar />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 20}}>
                <Title>Simple recipy with your <Title style={{color: '#0125FC'}}>fridge's ingredients</Title></Title>

                <View style={{marginTop: 30}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 25}}>
                        {categoryArray.map((item, k) => (
                            <TouchableNativeFeedback key={k} onPress={() => setFilter(item.name)} background={TouchableNativeFeedback.Ripple('#ccc', false, 55)}>
                                <CategoryButton backgroundColor={filter === item.name ? '#0125FC' : '#eee'}>
                                    <CategoryIcon source={item.icon} />
                                    <CategoryName color={filter === item.name ? '#fff' : '#000'}>{item.name}</CategoryName>
                                </CategoryButton>
                            </TouchableNativeFeedback>
                        ))}
                    </ScrollView>
                </View>

                <RecipeComponent />
            </ScrollView>
        </HomeContainer>
    )
}