import React, { useState, useEffect } from 'react';
import { TouchableNativeFeedback, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import { defaultColor, black, grayish, red, grayFont } from '../../globals';

import {
    UploadRecipeContainer,

    Header,
    GoBackButton,
    Title,

    UploadImageArea,
    UploadImageTitle,
    UploadImageText,

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
    {id: 1, title: 'All'},
    {id: 2, title: 'Chinese'},
    {id: 3, title: 'Brazilian'},
    {id: 4, title: 'Italian'},
    {id: 5, title: 'Japanese'},
];

export default function UploadRecipe () {
    const [filter, setFilter] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cookTime, setCookTime] = useState(0);
    const [calories, setCalories] = useState(0);
    const [cuisine, setCuisine] = useState('');
    const [subIng, setSubIng] = useState('');

    const [forgotName, setForgotName] = useState(false);
    const [forgotDescription, setForgotDescription] = useState(false);
    const [forgotCookTime, setForgotCookTime] = useState(false);
    const [forgotCalories, setForgotCalories] = useState(false);
    const [forgotCuisine, setForgotCuisine] = useState(false);
    const [forgotSubIng, setForgotSubIng] = useState(false);

    const navigation = useNavigation();

    function submitData () {
        if(name === '') {
            setForgotName(true);
        } if (description === '') {
            setForgotDescription(true);
        } if (cookTime === 0) {
            setForgotCookTime(true);
        } if (calories === 0) {
            setForgotCalories(true);
        } if (cuisine === '') {
            setForgotCuisine(true);
        } if (subIng === '') {
            setForgotSubIng(true);
        }
    }

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

    return(
        <UploadRecipeContainer>
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingVertical: 20}}>
                <Header>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#bbb', true)} onPress={() => navigation.goBack()}>
                        <GoBackButton>
                            <Feather name="arrow-left" color="#000" size={25}/>
                        </GoBackButton>
                    </TouchableNativeFeedback>

                    <Title>Upload new recipe</Title>
                </Header>

                <UploadImageArea>
                    <Feather name="upload-cloud" size={65} color={defaultColor} />
                    <UploadImageTitle>Upload Cover</UploadImageTitle>
                    <UploadImageText>Click here to upload cover photo</UploadImageText>
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
                        <Label color={forgotCookTime ? red : grayFont}>Time to cook (min)</Label>
                        <Input borderColor={forgotCookTime ? red : 'transparent'} onChangeText={v => setCookTime(v)} keyboardType="numeric" />
                    </InputArea>

                    <InputArea>
                        <Label color={forgotCalories ? red : grayFont}>Calories</Label>
                        <Input borderColor={forgotCalories ? red : 'transparent'} onChangeText={v => setCalories(v)} keyboardType="numeric" />
                    </InputArea>

                    <InputArea>
                        <Label color={forgotCuisine ? red : grayFont}>Select cuisine</Label>
                        <ScrollView contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {array.map((item, k) => (
                                <FilterItem onPress={() => setFilter(item.title)} borderColor={filter === item.title ? defaultColor : 'transparent'} key={k}>
                                    <FilterItemText color={filter === item.title ? defaultColor : black}>{item.title}</FilterItemText>
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