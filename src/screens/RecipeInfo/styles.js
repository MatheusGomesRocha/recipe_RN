import styled from 'styled-components/native';
import { grayFont, orange, orangeTransparent, white } from '../../globals';

export const RecipeInfoContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${orangeTransparent};
`;

/** ------------------------------------------------------- **/

export const RecipeInfoArea = styled.View`
    flex: 1;
    background-color: ${white};
    margin-top: 100px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`;

/** ------------------------------------------------------- **/

export const RecipeImg = styled.Image`
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
`;

/** ------------------------------------------------------- **/

export const RecipeHeaderButtons = styled.View`
    flex-direction: row;
    align-items: center;
    margin: -260px 0 0 5px;
`;
export const RecipeHeaderButton = styled.View`
    margin-left: 25px;
`;

/** ------------------------------------------------------- **/

export const CategoryArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 80px 0 0 30px;
`;
export const CategoryDivider = styled.View`
    background-color: ${orange};
    width: 2px;
    height: 20px;
`;
export const CategoryText = styled.Text`
    color: ${orange};
    margin-left: 10px;
    font-size: 16px;
`;

/** ------------------------------------------------------- **/

export const RecipeName = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin: 20px 30px 0 30px;
`;

/** ------------------------------------------------------- **/

export const RecipeMoreInfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 30px 30px 0 30px;
`;
export const RecipeMoreInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const RecipeMoreInfoText = styled.Text`
    margin-left: 6px;
    font-size: 16px;
`;

/** ------------------------------------------------------- **/

export const DescriptionArea = styled.View`
    margin: 20px 30px 0 30px;
`;
export const DescriptionText = styled.Text`
    color: ${grayFont};
    line-height: 19px;
`;