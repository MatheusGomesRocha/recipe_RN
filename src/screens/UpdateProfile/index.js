import React from 'react';

import Header from '../../components/Header';
import Profile from '../../assets/images/profile.jpg';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    UpdateProfileContainer,
    
    UpdateProfileArea,
    
    UpdateImageArea,
    UpdateImage,
    UpdateImageButton,

    FormArea,
    InputArea,
    Label,
    Input,
    SubmitButton,
    SubmitButtonText,
} from './styles';

export default function UpdateProfile () {
    return(
        <UpdateProfileContainer>
            <Header title="Update Profile" />

            <UpdateProfileArea>
                <UpdateImageArea>
                    {/* <UpdateImage source={Profile}/> */}

                    <FontAwesome name="user" color="#aaa" size={80} />

                    <UpdateImageButton>
                        <AntDesign name="camerao" color="#aaa" size={30} />
                    </UpdateImageButton>
                </UpdateImageArea>

                <FormArea>
                    <InputArea>
                        <Label>Name</Label>
                        <Input value="Matheus" />
                    </InputArea>

                    <InputArea>
                        <Label>Email</Label>
                        <Input value="matheusgomes192@hotmail.com" />
                    </InputArea>

                    <InputArea>
                        <Label>User</Label>
                        <Input value="@matheus1254" />
                    </InputArea>

                    <SubmitButton>
                        <SubmitButtonText>Edit Changes</SubmitButtonText>
                    </SubmitButton>
                </FormArea>
            </UpdateProfileArea>
        </UpdateProfileContainer>
    )
}