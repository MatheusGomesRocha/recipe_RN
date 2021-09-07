import styled from 'styled-components';
import { defaultColor, white } from '../../globals';

export const NotFoundArea = styled.View`
    flex: 1;
    background-color: ${white};
    align-items: center;
    margin-top: 100px;
`;
export const NotFoundImage = styled.Image`
    width: 220px;
    height: 220px;
`;
export const NotFoundText = styled.Text`
    text-align: center;
    color: ${defaultColor};
    margin: 20px;
    font-size: 20px;
`;