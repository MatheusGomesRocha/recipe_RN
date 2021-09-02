import styled from 'styled-components/native';
import { white, black, grayFont, defaultColor } from '../../globals';

export const ModalContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
    padding: 40px 20px;
`;
export const ModalText = styled.Text`
    font-size: 20px;
    line-height: 25px;
`;
export const ModalInputArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
`;
export const ModalInput = styled.TextInput`
    text-align: center;
    color: ${black};
    border: 1px solid ${grayFont};
    width: 75px;
    height: 75px;
    border-radius: 10px;
    font-size: 40px;
`;
export const ModalSubmitButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: 52px;
    border-radius: 10px;
`;
export const ModalSubmitButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;