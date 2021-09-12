import React, { useState } from 'react';
import { ScrollView, TouchableNativeFeedback, View } from 'react-native';
import { useSelector } from 'react-redux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import RecipeComponent from '../../components/RecipeComponent';

import type1 from '../../assets/images/type1.png';
import type2 from '../../assets/images/type2.png';
import type3 from '../../assets/images/type3.png';
import type4 from '../../assets/images/type4.png';

import { black, defaultColor } from '../../globals';

import {
    HomeContainer,

    Header,
    HeaderContent,
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

    const avatar = useSelector(state=>state.user.avatar);

    return(
        <HomeContainer>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 20}}>
                <Header>
                    {avatar ?
                        undefined
                    :
                        <FontAwesome name="user-circle" color="#999" size={60} />
                    }
                    <HeaderContent>
                        <Title style={{fontSize: 14}}>Good Morning</Title>
                        <Title style={{color: defaultColor}}>Matheus</Title>
                    </HeaderContent>
                </Header>

                <View style={{marginTop: 30}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 10}}>
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

                {/* <RecipeComponent filter={filter} /> */}
            
            </ScrollView> 
        </HomeContainer>
    )
}