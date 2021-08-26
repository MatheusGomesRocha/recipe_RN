import React from 'react';

import Header from '../../components/Header';

import {
    FoodManagerContainer,
} from './styles';

export default function FoodManager() {
    return(
        <FoodManagerContainer>
            <Header title='Food Manager' />
        </FoodManagerContainer>
    )
}