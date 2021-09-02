import styled from 'styled-components/native';
import { white, black, grayFont, defaultColor, grayish } from '../../globals';

export const CodeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;
export const CodeText = styled.Text`
    text-align: center;
    color: ${grayFont};
    font-size: 20px;
    line-height: 25px;
    margin: 50px 20px 0 20px;
`;
export const CodeInputArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0 20px;
`;
export const CodeInput = styled.TextInput`
    text-align: center;
    color: ${black};
    background-color: rgba(0, 0, 0, 0.2);
    width: 75px;
    height: 75px;
    border-radius: 35px;
    font-size: 35px;
`;
export const CodeSubmitButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    margin: auto 20px 20px 20px;
    height: 52px;
    border-radius: 10px;
`;
export const CodeSubmitButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;