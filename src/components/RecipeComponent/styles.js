import styled from 'styled-components/native';
import { blackish, defaultColor, grayFont, white, grayish } from '../../globals';

export const RecipeArea = styled.View`
    flex: 1;
    flex-direction: column;
`;

/** -------------------------------------------- **/

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
`;
export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`;
export const HeaderContent = styled.View`
    margin-left: 20px;
`;
export const Title = styled.Text`
    color: ${grayFont};
    font-size: 17px;
`;
export const MenuButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-left: auto;
`;

/** ----------------------------------------------------- **/

export const CategoryButton = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
    border-radius: 10px;
    padding: 15px;
    margin: 0 9px;
`;
export const CategoryName = styled.Text`
    color: ${props=>props.color};
`;

/** ----------------------------------------------------- **/

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
    margin-top: 20px;
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
    margin: 20px 0;
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

export const ItemFooterButtons = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ItemFooterLeftButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 62px;
    border-radius: 10px;
`;
export const ItemViewButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 62px;
    border-radius: 10px;
    margin: 20px 0 20px 20px;
`;
export const ItemViewButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;