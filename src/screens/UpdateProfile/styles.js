import styled from 'styled-components/native';
import { black, blackish, defaultColor, grayish, white } from '../../globals';

export const UpdateProfileContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ---------------------------------------------------- **/

export const UpdateProfileArea = styled.View`
    align-items: center;
    margin-top: 50px;
`;

/** ---------------------------------------------------- **/

export const UpdateImageArea = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    border-radius: 65px;
`;
export const ErrorMessage = styled.Text`
    color: red;
    margin-top: 20px;
    font-size: 16px;
`;
export const UpdateImage = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 65px;
`; 
export const UpdateImageButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

/** ---------------------------------------------------- **/

export const FormArea = styled.View`
    margin-top: 30px;
    width: 100%;
`;
export const InputArea = styled.View`
    margin-top: 20px;
    padding: 0 20px;
`;
export const Label = styled.Text`
    color: ${blackish};
    font-size: 16px;
`;
export const Input = styled.TextInput`
    background-color: ${grayish};
    color: ${black};
    height: 52px;
    padding-left: 10px;
    margin-top: 10px;
    border-radius: 10px;
`;
export const SubmitButton = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    height: 52px;
    border-radius: 10px;
    margin: 30px 20px;
`;
export const SubmitButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;
