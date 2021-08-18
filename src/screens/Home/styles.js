import styled from 'styled-components/native';
import { grayish, white } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ----------------------------------------------------- **/

export const Title = styled.Text`
    font-size: 18px;
`;

/** ----------------------------------------------------- **/

export const CategoryButton = styled.TouchableOpacity`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 82px;
    border-radius: 10px;
    margin: 0 9px;
`;
export const CategoryIcon = styled.Image``;
export const CategoryName = styled.Text`
    margin-top: 10px;
`;