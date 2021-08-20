import React from 'react';
import { ScrollView, TouchableNativeFeedback } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import imgPlaceholder from '../../assets/images/profile.jpg';

import {
    ProfileContainer,

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
    ProfileFollowButtonText,
} from './styles';

export default function Profile() {
    return(
        <ProfileContainer>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 20}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#ccc', true)}>
                    <HeaderButton onPress={() => console.log('olá mundo')}>
                        <Ionicons name="notifications" color="#000" size={25} />
                    </HeaderButton>
                </TouchableNativeFeedback>

                <UserInfoArea>
                    <UserImg source={imgPlaceholder} />
                    <UserName>Matheus</UserName>
                    <UserJob>Chef @NBK</UserJob>
                </UserInfoArea>

                <ProfileInfoArea>
                    <ProfileInfoItem>
                        <ProfileInfoTitle>4.2k</ProfileInfoTitle>
                        <ProfileInfoText>Followers</ProfileInfoText>
                    </ProfileInfoItem>
                    
                    <ProfileInfoItem>
                        <ProfileInfoTitle>356</ProfileInfoTitle>
                        <ProfileInfoText>Recipes</ProfileInfoText>
                    </ProfileInfoItem>

                    <ProfileInfoItem>
                        <ProfileInfoTitle>8.4k</ProfileInfoTitle>
                        <ProfileInfoText>Views</ProfileInfoText>
                    </ProfileInfoItem>
                </ProfileInfoArea>

                <ProfileButtonsArea flexDirection={'row'}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <ProfileEditButton>
                            <ProfileEditButtonText>Edit Profile</ProfileEditButtonText>
                        </ProfileEditButton>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <ProfileUploadButton>
                            <Feather name="upload-cloud" size={25} color="#fc6011" />
                        </ProfileUploadButton>
                    </TouchableNativeFeedback>

                    {/* <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#eee', false)}>
                        <ProfileFollowButton>
                            <ProfileFollowButtonText>Follow</ProfileFollowButtonText>
                        </ProfileFollowButton>
                    </TouchableNativeFeedback> */}
                </ProfileButtonsArea>

            </ScrollView>
        </ProfileContainer>
    )
}