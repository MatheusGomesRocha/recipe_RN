import styled from 'styled-components/native';
import { black, grayFont, grayish, white } from '../../globals';

export const UploadRecipeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** -------------------------------------------------- **/

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
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
    height: 220px;
    background-color: ${grayish};
    border: 1px dashed ${black};
    border-radius: 20px;
    margin: 30px 20px 0 20px;
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

/** -------------------------------------------------- **/

export const FormArea = styled.View`
    margin-top: 10px;
`;
export const InputArea = styled.View`
    margin-top: 20px;
`;
export const Label = styled.Text`
    color: ${grayFont};
    font-size: 16px;
    margin-left: 20px;
`;
export const Input = styled.TextInput`
    background-color: ${grayish};
    color: ${black};
    height: 58px;
    border-radius: 10px;
    margin: 7px 20px 0 20px;
    padding-left: 10px;
    font-size: 15px;
`;
export const FilterItem = styled.TouchableOpacity`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
    height: 52px;
    border-radius: 10px;
    padding: 0 20px;
    margin: 0 5px;
`;
export const FilterItemText = styled.Text`
    color: ${props=>props.color};
`;