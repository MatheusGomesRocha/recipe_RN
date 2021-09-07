import React from 'react';

import ChefImage from '../../assets/images/chef.png';

import {
    NotFoundArea,
    NotFoundImage,
    NotFoundText
} from './styles'

export default function NotFound() {
    return(
        <NotFoundArea>
            <NotFoundImage resizeMode="contain" source={ChefImage} />
            <NotFoundText>Sorry... no recipes were found that fit this category</NotFoundText>
        </NotFoundArea>
    )
}