import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import Feather from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import { api } from '../../services/api';

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
    SubmitButtonText
} from './styles';

let array = [
    {id: 1, title: 'Bulgarian'},
    {id: 2, title: 'Chinese'},
    {id: 3, title: 'Brazilian'},
    {id: 4, title: 'Italian'},
    {id: 5, title: 'Japanese'},
];

export default function UploadRecipe () {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [cookTime, setCookTime] = useState(0);
    const [calories, setCalories] = useState(0);
    const [cuisine, setCuisine] = useState('');
    const [subIng, setSubIng] = useState('');
    const [dataImg, setDataImg] = useState('');

    const [forgotName, setForgotName] = useState(false);
    const [forgotDescription, setForgotDescription] = useState(false);
    const [forgotType, setForgotType] = useState(false);
    const [forgotCookTime, setForgotCookTime] = useState(false);
    const [forgotCalories, setForgotCalories] = useState(false);
    const [forgotCuisine, setForgotCuisine] = useState(false);
    const [forgotSubIng, setForgotSubIng] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setForgotName(false);
            setForgotDescription(false);
            setForgotCookTime(false);
            setForgotCalories(false);
            setForgotCuisine(false);
            setForgotSubIng(false);
        }, 5000)
    }, [submitData])

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
        } if (calories === 0) {
            setForgotCalories(true);
        } if (subIng === '') {
            setForgotSubIng(true);
        }

        if(name && type && description && cookTime && calories) {
            let formData = new FormData();

            formData.append('name', name);
            formData.append('description', description);
            formData.append('type', type);
            formData.append('category', 'Chinese');
            formData.append('cookTime', cookTime);
            formData.append('ingQuantity', 5);
            formData.append('madeById', 2);

            formData.append('img', {
                uri: dataImg,
                type: 'image/jpg',
                name: 'amdkmakdsmksa'
            })
    
            api.post('/upload-recipe', formData);
        } else {
            console.log('Preencha todos os campos');
        }
    }

    
    return(
        <UploadRecipeContainer>
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
                <Header title='Upload new recipe' />

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

                    <InputArea>
                        <Label color={forgotType ? red : grayFont}>Type</Label>
                        <Input borderColor={forgotType ? red : 'transparent'} value={type} onChangeText={v => setType(v)} />
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
                                <FilterItem onPress={() => setCuisine(item.title)} borderColor={cuisine === item.title ? defaultColor : 'transparent'} key={k}>
                                    <FilterItemText color={cuisine === item.title ? defaultColor : black}>{item.title}</FilterItemText>
                                </FilterItem>
                            ))}
                        </ScrollView>
                    </InputArea>

                    <InputArea>
                        <Label color={forgotSubIng ? red : grayFont}>Sub Ingredients</Label>
                        <Input borderColor={forgotSubIng ? red : 'transparent'} value={subIng} onChangeText={v => setSubIng(v)} />

                        <ScrollView contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        </ScrollView>
                    </InputArea>

                    <SubmitButton onPress={submitData}>
                        <SubmitButtonText>Upload recipe</SubmitButtonText>
                    </SubmitButton>
                </FormArea>
            </ScrollView>
        </UploadRecipeContainer>
    )
}