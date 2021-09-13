import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableNativeFeedback, View } from 'react-native';
import { useSelector, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
    Avatar,
    HeaderContent,
    Title,
    LogoutButton,
    LogoutText,

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

function Home (props) {
    const [filter, setFilter] = useState('All');
    const [welcomeMessage, setWelcomeMessage] = useState('');

    const navigation = useNavigation();

    const avatar = useSelector(state=>state.user.avatar);
    const name = useSelector(state=>state.user.name);

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
        
    }, [])

    function logout() {
        props.setName('');
        props.setEmail('');
        props.setUser('');
        props.setAvatar('');
        props.setToken('');

        navigation.reset({
            routes: [
                { name: 'preload' },
            ]
        });
    }

    return(
        <HomeContainer>

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

                    <LogoutButton onPress={logout}>
                        <MaterialIcons name="logout" color="#000" size={25} />
                        <LogoutText>Sair</LogoutText>
                    </LogoutButton>
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

                <RecipeComponent filter={filter} />
            
            </ScrollView> 
        </HomeContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME', payload: {name}}),    // Seta o nome do usuário com redux
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}}),    // Seta o email do usuário com redux
        setToken:(token)=>dispatch({type:'SET_TOKEN', payload: {token}}),    // Seta o token do usuário com redux
        setAvatar:(avatar)=>dispatch({type:'SET_AVATAR', payload: {avatar}}),    // Seta o avatar do usuário com redux
        setUser:(user)=>dispatch({type:'SET_USER', payload: {user}})    // Seta o user do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (Home);