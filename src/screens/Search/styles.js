import styled from 'styled-components/native';
import { black, grayFont, white } from '../../globals';

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