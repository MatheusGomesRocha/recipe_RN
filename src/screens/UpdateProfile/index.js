import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';

import Header from '../../components/Header';
import { defaultColor, grayFont } from '../../globals';
import { api } from '../../services/api';
import ModalLoading from '../../components/ModalLoading';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    UpdateProfileContainer,

    UpdateProfileArea,
    
    UpdateImageArea,
    ErrorMessage,
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
    const [modalVisible, setModalVisible] = useState(false);

    const token = useSelector(state => state.user.token);
    const avatarLoggedIn = useSelector(state => state.user.avatar);
    const nameLoggedIn = useSelector(state => state.user.name);
    const emailLoggedIn = useSelector(state => state.user.email);
    const userLoggedIn = useSelector(state => state.user.user);

    useEffect(() => {
        setTimeout(() => {
            setModalVisible(false);
            submitData();
        }, 2500)
    }, [modalVisible]);

    useEffect(() => {
        setName(nameLoggedIn);
        setEmail(emailLoggedIn);
        setUser(userLoggedIn);
    }, []);

    useEffect(() => {
        if(name === '' || email === '') {
            setHasChanges(false);
        } else {
            setHasChanges(true);
        }
    }, [name, email, user, dataImg]);

    function submitData () {
        let formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('user', user);
        formData.append('token', token);

        let fileExtension = dataImg.slice(-3);

        formData.append('img', {
            uri: dataImg,
            type: `image/${fileExtension}`,
            name: 'image'
        })
        
        api.post(`/edit-profile/auth?token=${token}`, formData)
        .then((res) => {
            if(res.data.error) {
                console.log(res.data.error);
            } else {
                console.log(res.data);
            }
        }).catch((err) => console.log(err));
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <ModalLoading />
            </Modal>

            <UpdateProfileArea>
                <UpdateImageArea>
                    {dataImg ? 
                        <UpdateImage source={{uri: dataImg}}/>
                    :
                        <FontAwesome name="user" color="#aaa" size={80} />
                    }

                    <UpdateImageButton onPress={chooseImageGallery}>
                        <AntDesign name="camerao" color="#aaa" size={30} />
                    </UpdateImageButton>
                </UpdateImageArea>

                {!hasChanges ?
                    <ErrorMessage>If you let an empty field, he will not be updated</ErrorMessage>
                : 
                    undefined
                }
                <FormArea>
                    <InputArea>
                        <Label>Name</Label>
                        <Input onChange={() => setHasChanges(true)} onChangeText={v => setName(v)} defaultValue={name} />
                    </InputArea>

                    <InputArea>
                        <Label>Email</Label>
                        <Input onChange={() => setHasChanges(true)} onChangeText={v => setEmail(v)} defaultValue={email} />
                    </InputArea>

                    <InputArea>
                        <Label>User</Label>
                        <Input onChange={() => setHasChanges(true)} onChangeText={v => setUser(v)} defaultValue={user} />
                    </InputArea>

                    <SubmitButton onPress={() => setModalVisible(true)} disabled={hasChanges ? false : true} backgroundColor={hasChanges ? defaultColor : grayFont}>
                        <SubmitButtonText>Edit Changes</SubmitButtonText>
                    </SubmitButton>
                </FormArea>
            </UpdateProfileArea>
        </UpdateProfileContainer>
    )
}