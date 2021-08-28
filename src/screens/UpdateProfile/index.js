import React from 'react';

import Header from '../../components/Header';
import Profile from '../../assets/images/profile.jpg';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    UpdateProfileContainer,
    
    UpdateProfileArea,
    
    UpdateImageArea,
    UpdateImage,
} from './styles';

export default function UpdateProfile () {
    return(
        <UpdateProfileContainer>
            <Header title="Update Profile" />

            <UpdateProfileArea>
                <UpdateImageArea>
                    <UpdateImage source={Profile}/>

                    <FontAwesome name="user" color="#aaa" size={35} />
                </UpdateImageArea>
            </UpdateProfileArea>
        </UpdateProfileContainer>
    )
}