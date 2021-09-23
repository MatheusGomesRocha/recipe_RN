import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableNativeFeedback, View, TouchableWithoutFeedback} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import VerticalBar from '../../components/VerticalBar';
import RecipeComponent from '../../components/RecipeComponent';

import { black, defaultColor } from '../../globals';

import {
    HomeContainer,

    Header,
    Avatar,
    HeaderContent,
    Title,
    MenuButton,

    CategoryButton,
    CategoryName
} from './styles';

let categoryArray = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Chinese'},
    {id: 3, name: 'Brazilian'},
    {id: 4, name: 'Italian'},
    {id: 5, name: 'Japanese'},
    {id: 6, name: 'Indian'},
    {id: 7, name: 'French'},
    {id: 8, name: 'Portuguese'},
];

export default function Home () {
    const [filter, setFilter] = useState('All');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [openMenu, setOpenMenu] = useState(false);

    const token = useSelector(state=>state.user.token);
    const avatar = useSelector(state=>state.user.avatar);
    const name = useSelector(state=>state.user.name);

    const navigation = useNavigation();

    const offset = useSharedValue(-62);

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: withSpring(offset.value) }],
        };
    });

    useEffect(() => {
        let date = new Date();
        let hour = date.getHours();

        if(hour >= 6 && hour < 12) {
            setWelcomeMessage('Good Morning');
        } else if (hour >= 12 && hour < 18) {
            setWelcomeMessage('Good Afternoon');
        } else {
            setWelcomeMessage('Good Evening');
        } 
    }, []);

    useEffect(() => {
        if(openMenu) {
            offset.value = 1;
        } else {
            offset.value = -62;
        }
    }, [openMenu])

    return(
        <HomeContainer>

            <Animated.View style={[{position: 'absolute', zIndex: 999, alignItems: 'center', width: 60, height: '100%'}, animatedStyles]}>
                <VerticalBar />
            </Animated.View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 20}}>
                <Header>
                    {avatar ?
                        <Avatar source={{uri: `http://192.168.0.110:3000/media/${avatar}`}} />
                    :
                        <FontAwesome name="user-circle" color="#999" size={60} />
                    }
                    <HeaderContent>
                        <Title style={{fontSize: 14}}>{welcomeMessage}</Title>
                        <Title style={{color: defaultColor}}>{name}</Title>
                    </HeaderContent>

                    <MenuButton style={{width: 50, height: 50}} onPress={() => setOpenMenu(!openMenu)}>
                        <Feather name="menu" color="#000" size={25} />
                    </MenuButton>
                </Header>

                <View style={{marginTop: 30}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 10}}>
                        {categoryArray.map((item, k) => (
                            <TouchableNativeFeedback key={k} onPress={() => setFilter(item.name)} background={TouchableNativeFeedback.Ripple('#ccc', false, 55)}>
                                <CategoryButton borderColor={filter === item.name ? defaultColor : 'transparent'}>
                                    <CategoryName color={filter === item.name ? defaultColor : black}>{item.name}</CategoryName>
                                </CategoryButton>
                            </TouchableNativeFeedback>
                        ))}
                    </ScrollView>
                </View> 

                <RecipeComponent filter={filter} />
            
            </ScrollView> 
        </HomeContainer> 
    )
}
