import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import { useSelector, connect } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

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

function UpdateProfile (props) {
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

    const navigation = useNavigation();

    useEffect(() => {
        setName(nameLoggedIn);
        setEmail(emailLoggedIn);
        setUser(userLoggedIn);
        setDataImg(avatarLoggedIn);
    }, []);

    function submitData () {
        setModalVisible(true);

        let formData = new FormData();

        if(name) {
            formData.append('name', name);
        } if (email) {
            formData.append('email', email);
        } if (user) {
            formData.append('user', user);
        } 

        if(dataImg === avatarLoggedIn) {
            formData.append('img', dataImg);
        }  else {
            let fileExtension = dataImg.slice(-3);

            formData.append('img', {
                uri: dataImg,
                type: `image/${fileExtension}`,
                name: 'image'
            })
        }

        formData.append('token', token);

        api.post(`/edit-profile/auth?token=${token}`, formData)
        .then((res) => {
            if(res.data.error) {
                console.log(res.data.error);
            } else {
                console.log(res.data);
                props.setName(name);
                props.setEmail(email);
                props.setUser(user);
                
                if(res.data.filename) {
                    props.setAvatar(res.data.filename);
                }
            }
        }).catch((err) => console.log(err));

        setTimeout(() => {
            setModalVisible(false);

            navigation.reset({
                routes: [
                    { name: 'update__profile' },
                ]
            });
        }, 2500)
    }

    function chooseImageGallery () {
        launchImageLibrary(null, (res) => {
            let data = res.assets;
            setDataImg(data[0].uri);
        });

        setHasChanges(true);
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
                        // Essa imagem vai verificar qual tipo de arquivo vem, se as 4 primeiras letras forem === file, é pq é um arquivo vindo do celular do usuário
                        <UpdateImage source={{uri: dataImg.substring(4, 0) !== 'file' ? `http://192.168.0.110:3000/media/${dataImg}` : dataImg}} />    
                        :
                        <FontAwesome name="user" color="#aaa" size={80} /> 
                    }


                    <UpdateImageButton onPress={chooseImageGallery}>
                        <AntDesign name="camerao" color="#aaa" size={30} />
                    </UpdateImageButton>
                </UpdateImageArea>

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

                    <SubmitButton onPress={submitData} disabled={hasChanges ? false : true} backgroundColor={hasChanges ? defaultColor : grayFont}>
                        <SubmitButtonText>Edit Changes</SubmitButtonText>
                    </SubmitButton>
                </FormArea>
            </UpdateProfileArea>
        </UpdateProfileContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME', payload: {name}}),    // Seta o nome do usuário com redux
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}}),    // Seta o email do usuário com redux
        setAvatar:(avatar)=>dispatch({type:'SET_AVATAR', payload: {avatar}}),    // Seta o token do usuário com redux
        setUser:(user)=>dispatch({type:'SET_USER', payload: {user}})    // Seta o user do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (UpdateProfile);