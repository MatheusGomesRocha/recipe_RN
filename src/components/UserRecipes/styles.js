import styled from 'styled-components/native';
import { defaultColor, defaultColorTransparent, grayish } from '../../globals';

export const Recipes = styled.View`
    margin-top: 20px;
`;

/** ------------------------------------------------- **/

export const FilterRecipeArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const FilterRecipeItem = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    height: 52px;
    padding: 0 20px;
    border-radius: 10px;
    margin-right: 10px;
`;
export const FilterRecipeText = styled.Text`
    color: ${props=>props.color};
`;

/** ------------------------------------------------- **/

export const RecipeItem = styled.View`
    background-color: ${defaultColorTransparent};
    border-radius: 20px;
    width: 250px;
    height: 250px;
    margin: 30px 10px;
    padding: 0 20px;
`;
export const RecipeHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RecipeImg = styled.Image`
    width: 120px;
    height: 120px;
    top: -5px;
    right: -100px;
`;
export const RecipeCategory = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RecipeCategoryMarkdown = styled.View`
    background-color: ${defaultColor};
    width: 2px;
    height: 20px;
`;
export const RecipeCategoryText = styled.Text`
    margin-left: 6px;
    color: ${defaultColor};
`;
export const RecipeName = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
`;

