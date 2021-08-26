import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

import { defaultColor } from '../../globals';

import {
    UploadRecipeContainer,

    Header,
    GoBackButton,
    Title,

    UploadImageArea,
    UploadImageTitle,
    UploadImageText,
} from './styles';

export default function UploadRecipe () {
    const navigation = useNavigation();
    return(
        <UploadRecipeContainer>
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
        </UploadRecipeContainer>
    )
}