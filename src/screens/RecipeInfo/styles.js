import styled from 'styled-components/native';
import { grayFont, grayish, defaultColor, defaultColorTransparent, white } from '../../globals';

export const RecipeInfoContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${defaultColorTransparent};
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
    background-color: ${defaultColor};
    width: 2px;
    height: 20px;
`;
export const CategoryText = styled.Text`
    color: ${defaultColor};
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
    margin: 20px 30px 0 30px;
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

/** ------------------------------------------------------- **/

export const IngArea = styled.View``;
export const IngTitle = styled.Text`
    font-weight: bold;
    margin: 20px 0 0 30px;
    font-size: 16px;
`;
export const IngItemArea = styled.View`
    align-items: center;
    margin: 0 7px;
`;
export const IngItem = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
`;
export const IngImg = styled.Image`
    width: 26px;
    height: 26px;
`;
export const IngName = styled.Text`
    margin-top: 5px;
`;

/** ------------------------------------------------------- **/

export const YoutubeVideoArea = styled.View`
    margin: 30px;
`;
export const YoutubeVideoTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;
export const YoutubeVideo = styled.View`
    flex-direction: row;
    height: 250px;
    margin-top: 15px;
`;