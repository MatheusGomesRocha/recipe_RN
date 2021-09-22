import React, { useRef, useState } from 'react';
import { ScrollView, TouchableNativeFeedback, Animated, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, useSelector } from 'react-redux'; 

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import UserImgPlaceholder from '../../assets/images/user.png';

import Review from '../../components/Review';
import UserRecipes from '../../components/UserRecipes';

import { defaultColor } from '../../globals';

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
    ProfileFollowButtonText,

    FilterArea,
    FilterButton,
    FilterButtonText,
} from './styles';

function Profile(props) {
    const [filterValue, setFilterValue] = useState('recipes');

    const borderBottomAnimated = useRef(new Animated.Value(0)).current;

    const avatar = useSelector(state => state.user.avatar);
    const name = useSelector(state => state.user.name);
    const user = useSelector(state => state.user.user);

    const navigation = useNavigation();

    const borderToLeft = () => {
        setFilterValue('recipes');

        Animated.spring(borderBottomAnimated, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      };

    const borderToRight = () => {
        setFilterValue('reviews');

        Animated.spring(borderBottomAnimated, {
            toValue: 1,
            useNativeDriver: false,
        }).start();
    };

    const borderInterpolated = borderBottomAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '50%'],
    });

    function logout() {
        props.setName('');
        props.setEmail('');
        props.setUser('');
        props.setAvatar('');
        props.setToken('');

        navigation.reset({
            routes: [
                { name: 'preload' },
            ]
        });
    };

    return(
        <ProfileContainer>
            <ScrollView>
                <Header>
                    <HeaderButton onPress={() => navigation.navigate('food__manager')} >
                        <Feather name="clipboard" color="#000" size={25} />
                    </HeaderButton>
                
                    <HeaderButton onPress={logout}>
                        <MaterialIcons name="logout" color="#000" size={25} />
                    </HeaderButton>
                </Header>

                <UserInfoArea>
                    { avatar ? 
                        <UserImg source={{uri: `http://192.168.0.110:3000/media/${avatar}`}} />
                    : 
                        <UserImg resizeMode="contain" source={UserImgPlaceholder} />    
                    }
                    <UserName>{name}</UserName>
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
                    <TouchableNativeFeedback onPress={() => navigation.navigate('update__profile')} background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <ProfileEditButton>
                            <ProfileEditButtonText>Edit Profile</ProfileEditButtonText>
                        </ProfileEditButton>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => navigation.navigate('upload__recipe')} background={TouchableNativeFeedback.Ripple('#ccc', false, 35)}>
                        <ProfileUploadButton>
                            <Feather name="upload-cloud" size={25} color={defaultColor} />
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
                            backgroundColor: defaultColor,
                            left: borderInterpolated
                        }}
                    />
                    <TouchableNativeFeedback onPress={borderToLeft} background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <FilterButton>
                            <FilterButtonText color={filterValue === 'recipes' ? defaultColor : '#666'}>Recipes (503)</FilterButtonText>
                        </FilterButton>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={borderToRight} background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                        <FilterButton>
                            <FilterButtonText color={filterValue === 'reviews' ? defaultColor : '#666'}>Reviews</FilterButtonText>
                        </FilterButton>
                    </TouchableNativeFeedback>
                </FilterArea>

                {filterValue === 'recipes' ? <UserRecipes /> : <Review />}
            </ScrollView>
        </ProfileContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME', payload: {name}}),    // Seta o nome do usuário com redux
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}}),    // Seta o email do usuário com redux
        setToken:(token)=>dispatch({type:'SET_TOKEN', payload: {token}}),    // Seta o token do usuário com redux
        setAvatar:(avatar)=>dispatch({type:'SET_AVATAR', payload: {avatar}}),    // Seta o avatar do usuário com redux
        setUser:(user)=>dispatch({type:'SET_USER', payload: {user}})    // Seta o user do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (Profile);