import styled from 'styled-components/native';
import { white } from '../../globals';

export const SavedContainer = styled.View`
    flex: 1;
    background-color: ${white};
`;

/** ----------------------------------------------- **/

export const RecipeQuantityText = styled.Text`
    text-align: right;
    font-size: 16px;
`;

/** ----------------------------------------------- **/

export const FilterArea = styled.View`
    margin-top: 30px;
`;
export const FilterItem = styled.TouchableOpacity`
    background-color: ${props=>props.backgroundColor};
    align-items: center;
    justify-content: center;
    height: 52px;
    border-radius: 10px;
    padding: 0 20px;
    margin: 0 5px;
`;
export const FilterItemText = styled.Text`
    color: ${props=>props.color};
`;