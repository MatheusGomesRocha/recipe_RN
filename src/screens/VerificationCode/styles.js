import styled from 'styled-components/native';
import { white, black, blackish } from '../../globals';

export const CodeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;
export const CodeTitle = styled.Text`
    font-weight: bold;
    margin: 20px 20px 0 20px;
    font-size: 25px;
`;
export const CodeText = styled.Text`
    font-size: 18px;
    line-height: 25px;
    margin: 20px 20px 0 20px;
`;
export const CodeInputArea = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    padding: 0 20px;
`;
export const CodeInput = styled.TextInput`
    text-align: center;
    color: ${black};
    border-color: ${props=>props.borderColor}; 
    border-width: ${props=>props.borderWidth};
    margin: 0 10px;
    width: 50px;
    height: 60px;
    border-radius: 10px;
    font-size: 25px;
`;
export const CodeSubmitButton = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    margin: 50px 20px;
    height: 62px;
    border-radius: 10px;
`;
export const CodeSubmitButtonText = styled.Text`
    color: ${props=>props.color};
    font-size: 18px;
`;