import styled from 'styled-components/native';
import { blackish, grayFont, grayish, white } from '../../globals';

export const FoodManagerContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** --------------------------------------------------------- **/

export const SubHeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px 0 20px;
`;
export const SubHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const SubHeaderText = styled.Text`
    color: ${props=>props.color};
    font-size: 16px;
`;

/** --------------------------------------------------------- **/

export const FoodItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 20px;
`;
export const FoodImageArea = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 10px;
`;
export const FoodImage = styled.Image`
    width: 50px;
    height: 50px;
`;
export const FoodContent = styled.View`
    margin-left: 20px;
    width: 60%;
`;
export const FoodContentRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;
export const FoodContentName = styled.Text`
    font-weight: bold;
    font-size: 18px;
    width: 60%;
`;
export const FoodContentQuantityType = styled.Text`
    font-weight: bold;
`;
export const FoodContentDate = styled.Text`
    color: ${blackish};
    font-size: 11px;
`;