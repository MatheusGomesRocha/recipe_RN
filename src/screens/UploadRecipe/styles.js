import styled from 'styled-components/native';
import { black, grayFont, grayish, white } from '../../globals';

export const UploadRecipeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
    padding: 20px;
`;

/** -------------------------------------------------- **/

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const GoBackButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`;
export const Title = styled.Text`
    font-size: 19px;
    margin-left: 10px;
`;

/** -------------------------------------------------- **/

export const UploadImageArea = styled.View`
    align-items: center;
    justify-content: center;
    height: 250px;
    background-color: ${grayish};
    border: 1px dashed ${black};
    border-radius: 20px;
    margin-top: 30px;
`;
export const UploadImageTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
`;
export const UploadImageText = styled.Text`
    color: ${grayFont};
    font-size: 15px;
    margin-top: 5px;
`;