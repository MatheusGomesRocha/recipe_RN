import styled from 'styled-components/native';
import { blackish, orange, orangeTransparent, white } from '../../globals';

export const RecipeArea = styled.View`
    margin: 50px 0;
    width: 100%;
`;

/** -------------------------------------------- **/

export const RecipeItem = styled.View`
    background-color: ${orangeTransparent};
    height: auto;
    border-radius: 20px;
    margin: 0 12px;
`;
export const RecipeImg = styled.Image`
    width: 200px;
    height: 200px;
    right: -100px;
    top: -60px;
    z-index: 999;
`;
export const CategoryArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin: -60px 20px 0 20px;
`;
export const CategoryDivider = styled.View`
    height: 20px;
    width: 2px;
    background-color: ${orange};
`;
export const CategoryText = styled.Text`
    color: ${orange};
    margin-left: 10px;
`;
export const RecipeName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin: 20px 20px 0 20px;
`;
export const RecipeDescription = styled.Text`
    color: ${blackish};
    margin: 20px 20px 0 20px;
    font-size: 16px;
`;
export const RecipeMoreInfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 20px 0;
`;
export const RecipeMoreInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RecipeMoreInfoText = styled.Text`
    margin-left: 7px;
    font-size: 16px;
`;
export const RecipeButtonArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto 20px 20px 20px;
`;
export const RecipeSaveButton = styled.View`
    background-color: ${orange};
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 10px;
`;
export const RecipeViewButton = styled.View`
    flex: 1;
    background-color: ${orange};
    align-items: center;
    justify-content: center;
    height: 52px;
    border-radius: 10px;
    margin-left: 15px;
`;
export const RecipeViewButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;