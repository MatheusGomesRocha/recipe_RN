import styled from 'styled-components/native';
import { white } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
    padding: 0 0 0 62px;
`;

/** ----------------------------------------------------- **/

export const Title = styled.Text`
    font-size: 18px;
    margin-left: 39px;
`;

/** ----------------------------------------------------- **/

export const CategoryButton = styled.View`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 82px;
    border-radius: 10px;
    margin: 0 9px;
`;
export const CategoryIcon = styled.Image``;
export const CategoryName = styled.Text`
    color: ${props=>props.color};
    margin-top: 10px;
`;