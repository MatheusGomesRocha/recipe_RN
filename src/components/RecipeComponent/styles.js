import styled from 'styled-components/native';
import { blueTransparent } from '../../globals';

export const RecipeArea = styled.View`
    margin: 100px 0;
    width: 100%;
`;

/** -------------------------------------------- **/

export const RecipeItem = styled.View`
    background-color: ${blueTransparent};
    height: 500px;
    border-radius: 20px;
    margin: 0 20px;
`;
export const RecipeImg = styled.Image`
    width: 200px;
    height: 200px;
    right: -100px;
    top: -60px;
    z-index: 999;
`;