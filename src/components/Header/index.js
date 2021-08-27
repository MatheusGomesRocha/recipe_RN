import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import {
    HeaderContainer,
    GoBackButton,
    Title
} from './styles';

export default function Header({title}) {
    const navigation = useNavigation();

    return(
        <HeaderContainer>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bbb', true)} onPress={() => navigation.goBack()}>
                <GoBackButton>
                    <Feather name="arrow-left" color="#000" size={25}/>
                </GoBackButton>
            </TouchableNativeFeedback>

            <Title>{title}</Title>
        </HeaderContainer>
    )
}