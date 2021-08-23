import styled from 'styled-components/native';
import { grayish, defaultColor } from '../../globals';

export const VerticalBar = styled.View`
    background-color: ${grayish};
    position: absolute;
    align-items: center;
    z-index: 999;
    padding: 30px 0;
    width: 62px;
    height: 100%;
`;

/** -------------------------------------------- **/

export const VerticalBarContent = styled.View`
    justify-content: center;
    margin-top: 20px;
    width: 62px;
    height: 100%;
`;

/** -------------------------------------------- **/
// VerticalBarItem será o Component que receberá o Rotate, que ficará na vertical 

export const VerticalBarItem = styled.TouchableOpacity`     
    margin-top: 90px;
`;
export const VerticalBarItemText = styled.Text`
    font-weight: ${props=>props.bold};
    font-size: 16px;
`;

/** -------------------------------------------- **/

export const VerticalBarSelectedItem = styled.View`
    background-color: ${grayish};
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 30px;
    right: ${props=>props.right};
    width: 60px;
    height: 25px;
    border-radius: 50px;
`;
export const VerticalBarSelectedItemBall = styled.View`
    background-color: ${defaultColor};
    width: 8px;
    height: 8px;
    border-radius: 4px;
`;