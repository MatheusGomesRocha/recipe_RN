import styled from 'styled-components/native';
import { black, defaultColor, grayFont, grayish, white } from '../../globals';

export const AddFoodContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ------------------------------------------------- */

export const ActionButtons = styled.View`
    flex-direction: row;
    margin: 20px 20px 0 20px;
    border: 1px solid ${defaultColor};
    height: 52px;
    border-radius: 10px;
`;
export const ActionButton = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    width: 50%;
`;
export const ActionButtonText = styled.Text`
    color: ${props=>props.color};
`;

/** ------------------------------------------------- */

export const InputArea = styled.View`
    flex: 1;
    margin-top: 20px;
`;

/** ------------------------------------------------- */

export const InputView = styled.View`
    margin: 10px 0;
`;
export const Label = styled.Text`
    color: ${grayFont};
    font-size: 16px;
    margin-left: 20px;
`;
export const InputFather = styled.View`
    background-color: ${grayish};
    margin: 5px 20px 0 20px;
    height: 52px;
    border-radius: 10px;
`;
export const Input = styled.TextInput`
    flex: 1;
    color: ${black};
    padding-left: 10px;
`;
export const QuantityItem = styled.TouchableOpacity`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
    height: 52px;
    padding: 0 20px;
    border-radius: 10px;
    margin-right: 10px;
`;
export const QuantityItemText = styled.Text`
    color: ${props=>props.color};
`;

/** ------------------------------------------------- */

export const SubmitButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
    height: 52px;
    border-radius: 10px;
`;
export const SubmitButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;
