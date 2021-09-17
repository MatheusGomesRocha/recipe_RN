import styled from 'styled-components/native';

export const ServerArea = styled.View`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 52px;
`;
export const ServerText = styled.Text`
    color: #fff;
    font-size: 16px;
`;
