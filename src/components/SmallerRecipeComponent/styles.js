import styled from 'styled-components/native';
import { defaultColor, grayFont } from '../../globals';

export const SmallerRecipeArea = styled.View``;

/** --------------------------------------------- **/

export const SmallerRecipeItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    border: 1px solid ${grayFont};
    margin-top: 50px;
    padding: 20px;
    border-radius: 15px;
`;

/** --------------------------------------------- **/

export const ItemImg = styled.Image`
    width: 130px;
    height: 130px;
    left: -20px;
`;

/** --------------------------------------------- **/

export const ItemRightContent = styled.View`
    width: 60%;
`;

/** --------------------------------------------- **/

export const ItemHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ItemCategory = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ItemCategoryMarkdown = styled.View`
    background-color: ${defaultColor};
    width: 2px;
    height: 20px;
`;
export const ItemCategoryText = styled.Text`
    margin-left: 7px;
    font-size: 15px;
    color: ${defaultColor};
`;
export const ItemActionButtons = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ItemActionButton = styled.Text`
    margin-left: 10px;
`;

/** --------------------------------------------- **/

export const ItemName = styled.Text`
    font-weight: bold;
    margin-top: 10px;
    font-size: 18px;
`;

/** --------------------------------------------- **/

export const ItemFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
export const ItemFooterDefault = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ItemFooterDefaultText = styled.Text`
    margin-left: 7px;
`;