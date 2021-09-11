import React, { useState } from 'react';

import Header from '../../components/Header';
import Profile from '../../assets/images/profile.jpg';
import { defaultColor, grayFont } from '../../globals';

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
    const [dataImg, setDataImg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [hasChanges, setHasChanges] = useState(false);

    function submitData () {
        let formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('user', user);

        let fileExtension = dataImg.slice(-3);

        formData.append('img', {
            uri: dataImg,
            type: `image/${fileExtension}`,
            name: 'image'
        })
    }

    function chooseImageGallery () {
        launchImageLibrary(null, (res) => {
            let data = res.assets;
            setDataImg(data[0].uri);
        });
    }

    return(
        <UpdateProfileContainer>
            <Header title="Update Profile" />

            <UpdateProfileArea>
                <UpdateImageArea>
                    <UpdateImage source={{uri: dataImg}}/>

                    {/* <FontAwesome name="user" color="#aaa" size={80} /> */}

                    <UpdateImageButton onPress={chooseImageGallery}>
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

                    <SubmitButton disabled={hasChanges ? false : true} backgroundColor={hasChanges ? defaultColor : grayFont}>
                        <SubmitButtonText>Edit Changes</SubmitButtonText>
                    </SubmitButton>
                </FormArea>
            </UpdateProfileArea>
        </UpdateProfileContainer>
    )
}