import styled from 'styled-components/native';
import { blackish, defaultColor, defaultColorTransparent, white } from '../../globals';

export const RecipeArea = styled.View`
`;

/** -------------------------------------------- **/

export const RecipeItem = styled.View`
    flex: 1;
    padding: 0 20px;
`;

/** ------------------------------------------------------- */

export const ItemCategoryArea = styled.View`
    align-items: flex-end;
`;
export const ItemCategoryText = styled.Text`
    color: ${defaultColor};
    font-weight: bold;
    font-size: 30px;
    
`;
export const ItemName = styled.Text`
    font-size: 18px;
`;

/** ------------------------------------------------------- */

export const ItemImg = styled.Image`
    width: 370px;
    height: 370px;
    right: -110px;
    top: 10px;
`;


/** ------------------------------------------------------- */

export const ItemDescriptionArea = styled.View`
    margin: 20px 0 0 60px;
`;
export const ItemDescriptionTitle = styled.Text`
    color: ${defaultColor};
    font-weight: bold;
    font-size: 18px;
`;
export const ItemDescription = styled.Text`
    color: ${blackish};
    font-size: 16px;
    margin-top: 10px;
`;

/** ------------------------------------------------------- */

export const ItemMoreInfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 20px 60px;
`;
export const ItemMoreInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ItemMoreInfoText = styled.Text`
    margin-left: 7px;
    font-size: 16px;
`;

/** ------------------------------------------------------- */

export const ItemViewButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    height: 62px;
    border-radius: 10px;
    margin: 20px 0 20px 60px;
`;
export const ItemViewButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;