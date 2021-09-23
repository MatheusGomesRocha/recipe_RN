import styled from 'styled-components/native';
import { grayFont, grayish, white } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ----------------------------------------------------- **/

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
`;
export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`;
export const HeaderContent = styled.View`
    margin-left: 20px;
`;
export const Title = styled.Text`
    color: ${grayFont};
    font-size: 17px;
`;
export const MenuButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin-left: auto;
`;
/** ----------------------------------------------------- **/

export const CategoryButton = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.borderColor};
    border-width: 1px;
    border-radius: 10px;
    padding: 15px;
    margin: 0 9px;
`;
export const CategoryName = styled.Text`
    color: ${props=>props.color};
`;