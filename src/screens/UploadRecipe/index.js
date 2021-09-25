import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, TextInput, TouchableOpacity, Modal, Alert, Vibration, StatusBar } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header';
import { api } from '../../services/api';
import CheckImage from '../../assets/images/checked.png';
import ModalLoading from '../../components/ModalLoading';
import ServerMessage from '../../components/ServerMessage';

import { defaultColor, black, red, grayFont } from '../../globals';

import {
    UploadRecipeContainer,

    UploadImageArea,
    UploadImageTitle,
    UploadImageText,
    UploadImage,

    FormArea,
    InputArea,
    Label,
    Input,
    FilterItem,
    FilterItemText,
    SubmitButton,
    SubmitButtonText,

    ViewToSubIngInput,
    SubIngItem,
    SubIngName,

    ModalArea,
    ModalImage
} from './styles';

let array = [
    {id: 2, name: 'Chinese'},
    {id: 3, name: 'Brazilian'},
    {id: 4, name: 'American'},
    {id: 5, name: 'Italian'},
    {id: 6, name: 'Japanese'},
    {id: 7, name: 'Indian'},
    {id: 8, name: 'French'},
    {id: 9, name: 'Portuguese'},
];

let arrayType = [
    {id: 1, title: 'Food'},
    {id: 2, title: 'Drink'},
    {id: 3, title: 'Snack'},
];

export default function UploadRecipe () {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [cookTime, setCookTime] = useState(0);
    const [calories, setCalories] = useState(0);
    const [cuisine, setCuisine] = useState('');
    const [dataImg, setDataImg] = useState('');
    const [subIng, setSubIng] = useState([]);
    const [subIngValue, setSubIngValue] = useState('');

    const [forgotName, setForgotName] = useState(false);
    const [forgotDescription, setForgotDescription] = useState(false);
    const [forgotType, setForgotType] = useState(false);
    const [forgotCookTime, setForgotCookTime] = useState(false);
    const [forgotCalories, setForgotCalories] = useState(false);
    const [forgotCuisine, setForgotCuisine] = useState(false);
    const [forgotSubIng, setForgotSubIng] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');

    const [modalLoadingVisible, setModalLoadingVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const token = useSelector(state => state.user.token);

    const navigation = useNavigation();

    const scrollRef = useRef(); 

    useEffect(() => {
        setTimeout(() => {
            setForgotName(false);
            setForgotDescription(false);
            setForgotType(false);
            setForgotCookTime(false);
            setForgotCalories(false);
            setForgotCuisine(false);
            setForgotSubIng(false);
            setErrorMsg('');
        }, 8000);
    }, [submitData])

    useEffect(() => {
        scrollRef.current?.scrollTo({    
            y: 0,
            animated: true,
        });
    }, [errorMsg])

    const deleteSubIngAlert = (ingId, ingName) => {
        Alert.alert(
            `Delete item ${ingName}`,
            "You want to delete this item ?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                { text: "OK", onPress: () => removeFromIngArray(ingId) }
            ],
            {cancelable: true},
        )
    }

    const ModalComponent = () => {
        return(
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <ModalArea>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                    <ModalImage source={CheckImage} />
                </ModalArea>
            </Modal>
        )
    }

    function newIngToArray () {
        if(subIngValue.trim() !== '') {
            let arrayIng = [...subIng];

            arrayIng.push({
                id: Math.floor(Math.random() * 99999),
                name: subIngValue.trim()
            })

            setSubIng(arrayIng);
        }

        setSubIngValue('');
    }

    function removeFromIngArray (ingId) {
        let newArray = subIng.filter(item => item.id !== ingId);

        setSubIng(newArray);
    }

    function chooseImageGallery () {
        launchImageLibrary(null, (res) => {
            let data = res.assets;
            setDataImg(data[0].uri);
        });
    }

    function submitData () {
        if(name === '') {
            setForgotName(true);
        } if (description === '') {
            setForgotDescription(true);
        } if (cookTime === 0) {
            setForgotCookTime(true);
        } if (!calories) {
            setForgotCalories(true);
        } if (subIng.length < 1) {
            setForgotSubIng(true);
        } if (cuisine === '') {
            setForgotCuisine(true);
        } if (type === '') {
            setForgotType(true);
        }

        if(!name || !type || !description || !cookTime || !calories || subIng.length < 1 || !cuisine) {
            setErrorMsg('* All fields are required');
        } else {
            setModalLoadingVisible(true);

            let formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('type', type);
            formData.append('category', cuisine);
            formData.append('cookTime', cookTime);
            formData.append('ingQuantity', 5);
            formData.append('madeById', token);

            let fileExtension = dataImg.slice(-3);

            formData.append('img', {
                uri: dataImg,
                type: `image/${fileExtension}`,
                name: 'image'
            })
    
            api.post(`/upload-recipe/auth?token=${token}`, formData)
            .then((res) => {
                if(res.data.error) {
                    setErrorMsg(res.data.error);
                    console.log(res.data.error);
                } else {
                    setModalVisible(true);
                    Vibration.vibrate(1000);
                    
                    setTimeout(() => {
                        navigation.reset({
                            routes: [
                                { name: 'profile' },
                            ]
                        });
                    }, 3000)
                }
            }).catch((err) => console.log(err));
            
            setTimeout(() => {
                setModalLoadingVisible(false);
            }, 2500);
        }
    }

    return(
        <UploadRecipeContainer>

            <ModalComponent />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalLoadingVisible}
                onRequestClose={() => setModalLoadingVisible(!modalLoadingVisible)}
            >
                <ModalLoading />
            </Modal>

            <ScrollView ref={scrollRef} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
                <Header title='Upload new recipe' />

                {errorMsg ? 
                    <ServerMessage text={errorMsg} />
                : undefined
                }
                <UploadImageArea onPress={chooseImageGallery}>
                    {dataImg ? <UploadImage source={{uri: dataImg}} /> : 
                        <>
                            <Feather name="upload-cloud" size={65} color={defaultColor} />
                            <UploadImageTitle>Upload Cover</UploadImageTitle>
                            <UploadImageText>Click here to upload cover photo</UploadImageText>
                        </>
                    }
                </UploadImageArea>

                <FormArea>
                    <InputArea>
                        <Label color={forgotName ? red : grayFont}>Name</Label>
                        <Input borderColor={forgotName ? red : 'transparent'} value={name} onChangeText={v => setName(v)} />
                    </InputArea>

                    <InputArea>
                        <Label color={forgotDescription ? red : grayFont}>Description</Label>
                        <Input borderColor={forgotDescription ? red : 'transparent'} value={description} onChangeText={v => setDescription(v)} />
                    </InputArea>

                    <InputArea style={{height: 90}}>
                        <Label color={forgotType ? red : grayFont}>Type</Label>
                        <ScrollView contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {arrayType.map((item, k) => (
                                <FilterItem onPress={() => setType(item.title)} borderColor={type === item.title ? defaultColor : 'transparent'} key={k}>
                                    <FilterItemText color={type === item.title ? defaultColor : black}>{item.title}</FilterItemText>
                                </FilterItem>
                            ))}
                        </ScrollView>
                    </InputArea>

                    <InputArea>
                        <Label color={forgotCookTime ? red : grayFont}>Time to cook (min)</Label>
                        <Input borderColor={forgotCookTime ? red : 'transparent'} onChangeText={v => setCookTime(v)} keyboardType="numeric" />
                    </InputArea>

                    <InputArea>
                        <Label color={forgotCalories ? red : grayFont}>Calories</Label>
                        <Input borderColor={forgotCalories ? red : 'transparent'} onChangeText={v => setCalories(v)} keyboardType="numeric" />
                    </InputArea>

                    <InputArea style={{height: 90}}>
                        <Label color={forgotCuisine ? red : grayFont}>Select cuisine</Label>
                        <ScrollView contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {array.map((item, k) => (
                                <FilterItem onPress={() => setCuisine(item.name)} borderColor={cuisine === item.name ? defaultColor : 'transparent'} key={k}>
                                    <FilterItemText color={cuisine === item.name ? defaultColor : black}>{item.name}</FilterItemText>
                                </FilterItem>
                            ))}
                        </ScrollView>
                    </InputArea>

                    <InputArea>
                        <Label color={forgotSubIng ? red : grayFont}>Sub Ingredients</Label>
                        
                        <ViewToSubIngInput borderColor={forgotSubIng ? red : 'transparent'} >
                            <TextInput style={{paddingLeft: 10, color: '#000', flex: 1, fontSize: 15}} onSubmitEditing={newIngToArray} returnKeyType="send" value={subIngValue} onChangeText={v => setSubIngValue(v)} />

                            <TouchableOpacity onPress={newIngToArray} style={{marginRight: 20}}>
                                <Ionicons name="send" color="#000" size={30} />
                            </TouchableOpacity>
                        </ViewToSubIngInput>

                            {subIng ? 
                                <ScrollView contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {subIng.map((item, k) => (
                                        <SubIngItem key={k}>
                                            <SubIngName>{item.name}</SubIngName>
                                            <TouchableOpacity onPress={() => deleteSubIngAlert(item.id, item.name)}>
                                                <Feather style={{marginLeft: 20}} name="x-circle" color="red" size={20} />
                                            </TouchableOpacity>
                                        </SubIngItem>
                                    ))}
                                </ScrollView>
                            : undefined}
                    </InputArea>

                    <SubmitButton onPress={submitData}>
                        <SubmitButtonText>Upload recipe</SubmitButtonText>
                    </SubmitButton>
                </FormArea>
            </ScrollView>
        </UploadRecipeContainer>
    )
}