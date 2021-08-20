import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { grayFont, orange, orangeTransparent } from '../../globals';

import styled from 'styled-components/native';


const Container = styled.View`
    background-color: #fff;
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
    color: ${orange};
`;



export default ({ state, navigation, index }) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Container>
            <Touch 
                borderColor={state.index === 0 ? orange : 'transparent'} 
                backgroundColor={state.index === 0 ? orangeTransparent : 'transparent'} 
                key={index} 
                onPress={() => goTo('home')}
            >
                <Feather name="grid" color={state.index === 0 ? orange : grayFont} size={25} />

                {state.index === 0 ? 
                    <Title>Home</Title>
                : undefined}
            </Touch>

            <Touch 
                borderColor={state.index === 1 ? orange : 'transparent'} 
                backgroundColor={state.index === 1 ? orangeTransparent : 'transparent'} 
                key={index} 
                onPress={() => goTo('placeholder2')}
            >
                <FontAwesome name="bookmark" color={state.index === 1 ? orange : grayFont} size={25} />

                {state.index === 1 ? 
                    <Title>Saved</Title>
                : undefined}
            </Touch>

            <Touch 
                borderColor={state.index === 2 ? orange : 'transparent'} 
                backgroundColor={state.index === 2 ? orangeTransparent : 'transparent'} 
                key={index} 
                onPress={() => goTo('profile')}
            >
                <FontAwesome name="user" color={state.index === 2 ? orange : grayFont} size={25} />

                {state.index === 2 ? 
                    <Title>Profile</Title>
                : undefined}
            </Touch>
        </Container>
    );
}