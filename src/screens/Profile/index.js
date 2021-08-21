import React, { useRef, useState } from 'react';
import { ScrollView, TouchableNativeFeedback, Animated } from 'react-native';

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

    FilterArea,
    FilterButton,
    FilterButtonText,

    ReviewArea,
} from './styles';


export default function Profile() {
    const borderBottomAnimated = useRef(new Animated.Value(0)).current;
    const [borderBottomValue, setBorderBottomValue] = useState(0);

    const borderToLeft = () => {
        setBorderBottomValue(0);

        Animated.spring(borderBottomAnimated, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      };

    const borderToRight = () => {
        setBorderBottomValue(1);

        Animated.spring(borderBottomAnimated, {
            toValue: 1,
            useNativeDriver: false,
        }).start();
    }

    const borderInterpolated = borderBottomAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '50%'],
    })

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

                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#ccc', false, 35)}>
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

                <FilterArea>
                    <Animated.View 
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 2,
                            width: '50%',
                            backgroundColor: '#fc6011',
                            left: borderInterpolated
                        }}
                    />
                    <TouchableNativeFeedback onPress={borderToLeft} background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <FilterButton>
                            <FilterButtonText color={borderBottomValue === 0 ? '#fc6011' : '#ccc'}>Recipes (503)</FilterButtonText>
                        </FilterButton>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={borderToRight} background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <FilterButton>
                            <FilterButtonText color={borderBottomValue === 1 ? '#fc6011' : '#ccc'}>Reviews</FilterButtonText>
                        </FilterButton>
                    </TouchableNativeFeedback>
                </FilterArea>

                <ReviewArea>
                    <ReviewItem />
                </ReviewArea>
            </ScrollView>
        </ProfileContainer>
    )
}