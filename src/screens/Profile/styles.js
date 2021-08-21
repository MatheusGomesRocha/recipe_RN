import styled from 'styled-components/native';
import { grayFont, grayish, orange, white } from '../../globals';

export const ProfileContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${white};
`;

/** -------------------------------------------------------- **/


export const HeaderButton = styled.View`
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;
    border-radius: 26px;
`;

/** -------------------------------------------------------- **/

export const UserInfoArea = styled.View`
    align-items: center;
    margin-top: 20px;
`;
export const UserImg = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 55px;
`;
export const UserName = styled.Text`
    font-weight: bold;
    margin-top: 10px;
    font-size: 16px;
`;
export const UserJob = styled.Text`
    color: ${grayFont};
    font-size: 12px;
`;

/** -------------------------------------------------------- **/

export const ProfileInfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`;
export const ProfileInfoItem = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    height: 110px;
    width: 28%;
    border-radius: 10px;
`;
export const ProfileInfoTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;
export const ProfileInfoText = styled.Text``;

/** -------------------------------------------------------- **/

export const ProfileButtonsArea = styled.View`
    flex-direction: ${props=>props.flexDirection};
    margin-top: 20px;
`;
export const ProfileEditButton = styled.View`
    flex: 1;
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    height: 54px;
    border-radius: 10px;
`;
export const ProfileEditButtonText = styled.Text`
    font-size: 16px;
`;
export const ProfileUploadButton = styled.View`
    background-color: ${grayish};
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    border-radius: 10px;
    margin-left: 20px;
`;
export const ProfileFollowButton = styled.View`
    flex: 1;
    background-color: ${orange};
    align-items: center;
    justify-content: center;
    height: 54px;
    border-radius: 10px;
`;
export const ProfileFollowButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
`;

/** -------------------------------------------------------- **/

export const FilterArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`;
export const FilterButton = styled.View`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 52px;
`;
export const FilterButtonText = styled.Text`
    color: ${props=>props.color};
`;