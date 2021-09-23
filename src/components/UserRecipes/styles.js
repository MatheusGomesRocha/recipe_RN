import styled from 'styled-components/native';
import { defaultColor, defaultColorTransparent, grayish, white, blackish } from '../../globals';

export const Recipes = styled.View`
    margin-top: 20px;
`;

/** ------------------------------------------------- **/

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`;
export const ModalArea = styled.View`
    background-color: ${white};
    width: 90%;
    height: 160px;
    border-radius: 5px;
    padding: 20px;
`;
export const ModalTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const ModalText = styled.Text`
    font-size: 18px;
    margin-top: 5px;
`;
export const ModalButton = styled.TouchableOpacity`
    margin-left: 30px;
`;
export const ModalButtonText = styled.Text`
    font-size: 18px;
    color: ${blackish};
`;

/** ------------------------------------------------- **/

export const FilterRecipeArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const FilterRecipeItem = styled.TouchableOpacity`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
    height: 52px;
    padding: 0 20px;
    border-radius: 10px;
    margin-right: 10px;
`;
export const FilterRecipeText = styled.Text`
    color: ${props=>props.color};
`;

/** ------------------------------------------------- **/

export const RecipeItem = styled.TouchableOpacity`
    background-color: ${defaultColorTransparent};
    border-radius: 20px;
    width: 250px;
    height: 200px;
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
    margin-top: -30px;
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

