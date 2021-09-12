import styled from 'styled-components/native';
import { white } from '../../globals';

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`;
export const ModalArea = styled.View`
    background-color: ${white};
    flex-direction: row;
    align-items: center;
    width: 70%;
    height: 80px;
    border-radius: 10px;
    padding: 0 20px;
`;
export const ModalText = styled.Text`
    font-size: 20px;
    margin-left: 20px;
`;
