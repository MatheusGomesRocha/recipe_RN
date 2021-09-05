import styled from 'styled-components/native';
import { grayish, white } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ----------------------------------------------------- **/

export const Title = styled.Text`
    font-size: 18px;
    margin-left: 39px;
`;

/** ----------------------------------------------------- **/

export const CategoryButton = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
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