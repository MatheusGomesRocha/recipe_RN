import React from 'react';

import Header from '../../components/Header';

import {
    AddFoodContainer,
} from './styles';

export default function AddFood () {
    return(
        <AddFoodContainer>
            <Header title="Add New Food" />
        </AddFoodContainer>
    )
}