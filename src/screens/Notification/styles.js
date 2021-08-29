import styled from 'styled-components/native';
import { grayFont } from '../../globals';

export const NotificationContainer = styled.SafeAreaView``;

/** ----------------------------------------------------- **/

export const NotificationItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-color: ${grayFont};
`;
export const NotificationImg = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;
export const NotificationContentText = styled.Text`
    width: 70%;
    margin-left: 15px;
`;