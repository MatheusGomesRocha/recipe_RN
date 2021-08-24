import React from 'react';

import SmallerRecipe from '../../components/SmallerRecipeComponent';

import {
    SavedContainer
} from './styles';

export default function Saved() {
    return(
        <SavedContainer>

            <SmallerRecipe />
        </SavedContainer>
    )
}