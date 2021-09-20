import styled from 'styled-components/native';
import { blackish, grayFont, grayish, white } from '../../globals';

export const FoodManagerContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** --------------------------------------------------------- **/

export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
`;
export const ModalArea = styled.View`
    background-color: ${white};
    width: 90%;
    height: 160px;
    border-radius: 5px;
    padding: 20px;
`;
export const ModalTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
export const ModalText = styled.Text`
    font-size: 18px;
    margin-top: 5px;
`;
export const ModalButton = styled.TouchableOpacity`
    margin-left: 30px;
`;
export const ModalButtonText = styled.Text`
    font-size: 18px;
    color: ${blackish};
`;

/** --------------------------------------------------------- **/

export const SubHeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px 0 20px;
    padding-bottom: 20px;
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
    width: 70px;
    height: 70px;
`;
export const FoodContent = styled.View`
    margin-left: 20px;
    width: 68%;
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