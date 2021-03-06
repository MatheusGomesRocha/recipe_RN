import styled from 'styled-components/native';
import { black, blackish, defaultColor, grayFont, grayish, white } from '../../globals';

export const AddFoodContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ------------------------------------------------- */

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`;
export const ModalArea = styled.View`
    background-color: ${white};
    width: 90%;
    height: 160px;
    border-radius: 5px;
    padding: 20px;
`;
export const ModalTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const ModalText = styled.Text`
    font-size: 18px;
    margin-top: 5px;
`;
export const ModalButton = styled.View`
    align-self: flex-end;
    margin-top: auto;
`;
export const ModalButtonText = styled.Text`
    font-size: 18px;
    color: ${blackish};
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
    height: 52px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
export const ImageButton = styled.TouchableOpacity`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 20px 0;
`;
export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;
export const ImageText = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 16px;
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

export const QrCodeArea = styled.View`
    align-items: center;
    justify-content: center;
    height: 300px;
    border: 1px dashed ${blackish};
    border-radius: 20px;
    margin: 40px 20px;
`;
export const QrCodeTitle = styled.Text`
    color: ${blackish};
    text-align: center;
    font-size: 16px;
    width: 70%;
`;
export const QrCodeItem = styled.View`
`;
export const QrCodeMarkdown = styled.View`
    background-color: ${defaultColor};
    height: 2px;
    width: 50%;
    top: -60px;
`;

/** ------------------------------------------------- */

export const SubmitButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    margin: 20px;
    height: 52px;
    border-radius: 10px;
`;
export const SubmitButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;


