import styled from 'styled-components/native';
import { black, grayFont, marginTopAreas, defaultColor, white } from '../../globals';

export const FormArea = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

/** ----------------------------------------------------- **/

export const LogoArea = styled.View`
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 60px;
`;
export const LogoImg = styled.Image`
    width: 70px;
    height: 70px;
`;

/** ----------------------------------------------------- **/

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-top: ${marginTopAreas};
`;

/** ----------------------------------------------------- **/

export const OtherSignUpOptions = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
`;
export const OtherSignUpButton = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 52px;
    border-radius: 10px;
    margin: 0 10px;
`;

/** ----------------------------------------------------- **/

export const Divider = styled.View`
    margin-top: ${marginTopAreas};
`;
export const DividerText = styled.Text`
    color: ${grayFont};
`;

/** ----------------------------------------------------- **/

export const InputArea = styled.View`
    width: 100%;
    margin-top: ${marginTopAreas};
`;
export const InputDiv = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-color: ${props=>props.borderColor};
    border-bottom-width: 1px;
    height: 58px;
    margin-top: 5px;
`;
export const Input = styled.TextInput`
    flex: 1;
    color: ${black};
    margin-right: auto;
    margin-left: 5px;
    padding-left: 5px;
`;

/** ----------------------------------------------------- **/

export const ForgotPasswordButton = styled.TouchableOpacity`
    align-self: flex-start;
    margin-top: ${marginTopAreas};
`;
export const ForgotPasswordText = styled.Text`
    color: ${defaultColor};
    font-size: 16px;
`;

/** ----------------------------------------------------- **/

export const SubmitButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    border-radius: 10px;
    margin-top: ${marginTopAreas};
`;
export const SubmitButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;

/** ----------------------------------------------------- **/

export const AlreadyHaveAnAccount = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const AlreadyHaveAnAccountText = styled.Text`
    font-size: 16px;
`;
export const AlreadyHaveAnAccountButton = styled.TouchableOpacity`
    margin-left: 3px;
`;
export const AlreadyHaveAnAccountButtonText = styled.Text`
    color: ${defaultColor};
    font-size: 16px;
`;


