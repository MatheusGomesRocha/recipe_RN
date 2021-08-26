import React, { useState } from 'react';
import { TouchableNativeFeedback, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import { defaultColor, black } from '../../globals';

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
    const navigation = useNavigation();

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
                        <Label>Name</Label>
                        <Input />
                    </InputArea>

                    <InputArea>
                        <Label>Description</Label>
                        <Input />
                    </InputArea>

                    <InputArea>
                        <Label>Time to cook (min)</Label>
                        <Input keyboardType="numeric" />
                    </InputArea>

                    <InputArea>
                        <Label>Calories</Label>
                        <Input keyboardType="numeric" />
                    </InputArea>

                    <InputArea>
                        <Label>Select cuisine</Label>
                        <ScrollView contentContainerStyle={{paddingHorizontal: 15, marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            {array.map((item, k) => (
                                <FilterItem onPress={() => setFilter(item.title)} borderColor={filter === item.title ? defaultColor : 'transparent'} key={k}>
                                    <FilterItemText color={filter === item.title ? defaultColor : black}>{item.title}</FilterItemText>
                                </FilterItem>
                            ))}
                        </ScrollView>
                    </InputArea>
                </FormArea>
            </ScrollView>
        </UploadRecipeContainer>
    )
}