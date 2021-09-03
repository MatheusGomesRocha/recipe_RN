import styled from 'styled-components/native';
import { defaultColor, white } from '../../globals';

export const PreloadContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${defaultColor};
`;
export const CenterArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;
export const WelcomeText = styled.Text`
    color: ${white};
    font-size: 24px;
    margin-top: 20px;
`;