import styled from 'styled-components/native';
import { black, defaultColor, grayFont, white } from '../../globals';

export const SearchContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** ----------------------------------------------------------- **/

export const SearchArea = styled.View`
    flex-direction: row;
    align-items: center;
    border: 1px solid ${grayFont};
    border-radius: 10px;
    height: 52px;
    margin: 20px;
    padding: 0 10px;
`;
export const SearchInput = styled.TextInput`
    flex: 1;
    color: ${black};
    font-size: 16px;
    padding-left: 10px;
`;

/** ----------------------------------------------------------- **/

export const SearchWithoutValueImage = styled.Image`
    align-self: center;
    margin-top: 150px;
`;

/** ----------------------------------------------------------- **/

export const ItemArea = styled.View`
    padding: 20px;
`;
export const ItemHeader = styled.View`
    align-items: center;
`;
export const ItemCategory = styled.Text`
    color: ${defaultColor};
    font-weight: bold;
    font-size: 25px;
`;
export const ItemName = styled.Text`
    font-size: 20px;
`;
export const ItemImage = styled.Image`
    align-self: center;
    width: 350px;
    height: 350px;
`;
export const ItemFooter = styled.View`
`;
export const ItemDescription = styled.Text`
    color: ${grayFont};
    text-align: center;
    font-size: 16px;
`;
export const ItemButton = styled.TouchableOpacity`
    background-color: ${defaultColor};
    align-items: center;
    justify-content: center;
    height: 58px;
    margin-top: 40px;
    border-radius: 10px;
`;
export const ItemButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;

