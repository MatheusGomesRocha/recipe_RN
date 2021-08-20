import React from 'react';
import { ScrollView } from 'react-native';

import imgPlaceholder from '../'

import {
    ProfileContainer,

    Header,
    HeaderButton,
    
    UserInfoArea,
    UserImg,
    UserName,
    UserJob,

    ProfileInfoArea,
    ProfileInfoItem,
    ProfileInfoTitle,
    ProfileInfoText,

    ProfileButtonsArea,
    ProfileEditButton,
    ProfileEditButtonText,
    ProfileUploadButton,
    ProfileFollowButton,
} from './styles';

export default function Profile() {
    return(
        <ProfileContainer>
            <ScrollView>
                <Header>
                    <HeaderButton></HeaderButton>
                </Header>

                <UserInfoArea>
                    <UserImg />
                </UserInfoArea>
            </ScrollView>
        </ProfileContainer>
    )
}