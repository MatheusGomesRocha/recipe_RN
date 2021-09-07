import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { defaultColor, defaultColorTransparent, grayFont, white } from '../../globals';

import styled from 'styled-components/native';

const Container = styled.View`
    background-color: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 62px;
`;

const Touch = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
    height: 47px;
    padding: 0 20px;
    border-radius: 5px;
    margin-left: 20px;
`;

const Title = styled.Text`
    margin-left: 7px;
    color: ${defaultColor};
`;



export default ({ state, navigation, index }) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Container>
            <Touch 
                borderColor={state.index === 0 ? defaultColor : 'transparent'} 
                backgroundColor={state.index === 0 ? defaultColorTransparent : 'transparent'} 
                key={index} 
                onPress={() => goTo('home')}
            >
                <Feather name="grid" color={state.index === 0 ? defaultColor : grayFont} size={25} />

                {state.index === 0 ? 
                    <Title>Home</Title>
                : undefined}
            </Touch>

            <Touch 
                borderColor={state.index === 1 ? defaultColor : 'transparent'} 
                backgroundColor={state.index === 1 ? defaultColorTransparent : 'transparent'} 
                key={index} 
                onPress={() => goTo('saved')}
            >
                <FontAwesome name="bookmark" color={state.index === 1 ? defaultColor : grayFont} size={25} />

                {state.index === 1 ? 
                    <Title>Saved</Title>
                : undefined}
            </Touch>

            <Touch 
                borderColor={state.index === 2 ? defaultColor : 'transparent'} 
                backgroundColor={state.index === 2 ? defaultColorTransparent : 'transparent'} 
                key={index} 
                onPress={() => goTo('profile')}
            >
                <FontAwesome name="user" color={state.index === 2 ? defaultColor : grayFont} size={25} />

                {state.index === 2 ? 
                    <Title>Profile</Title>
                : undefined}
            </Touch>
        </Container>
    );
}