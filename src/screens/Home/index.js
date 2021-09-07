import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, TouchableNativeFeedback, View } from 'react-native';

import RecipeComponent from '../../components/RecipeComponent';
import VerticalBar from '../../components/VerticalBar';

import type1 from '../../assets/images/type1.png';
import type2 from '../../assets/images/type2.png';
import type3 from '../../assets/images/type3.png';
import type4 from '../../assets/images/type4.png';


import { black, defaultColor } from '../../globals';

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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000)
    }, [])

    return(
        <HomeContainer>
            {isLoading ? 
                <ActivityIndicator size="large" color="#D7263D" />
            : 
                // <VerticalBar />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 20}}>
                    <Title>Welcome <Title style={{color: defaultColor}}>Matheus</Title></Title>

                    <View style={{marginTop: 30}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 25}}>
                            {categoryArray.map((item, k) => (
                                <TouchableNativeFeedback key={k} onPress={() => setFilter(item.name)} background={TouchableNativeFeedback.Ripple('#ccc', false, 55)}>
                                    <CategoryButton borderColor={filter === item.name ? defaultColor : 'transparent'}>
                                        <CategoryIcon source={item.icon} />
                                        <CategoryName color={filter === item.name ? defaultColor : black}>{item.name}</CategoryName>
                                    </CategoryButton>
                                </TouchableNativeFeedback>
                            ))}
                        </ScrollView>
                    </View> 

                    <RecipeComponent filter={filter} />
                
                </ScrollView> 
            }
            
        </HomeContainer>
    )
}