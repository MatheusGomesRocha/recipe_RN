import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import { black, blackish, defaultColor, white } from '../../globals';

import {
    AddFoodContainer,

    ActionButtons,
    ActionButton,
    ActionButtonText,

    InputArea,

    InputView,
    Label,
    InputFather,
    Input,
    QuantityItem,
    QuantityItemText,

    SubmitButton,
    SubmitButtonText
} from './styles';

let array = [
    {id: 1, title: 'KG'},
    {id: 2, title: 'Piece'},
    {id: 3, title: 'Packet'},
    {id: 4, title: 'Others'},
];

export default function AddFood () {
    const [addFood, setAddFood] = useState('manually');
    const [quantityType, setQuantityType] = useState('');

    const RenderItemManually = () => {
        return(
            <InputArea>
                <InputView>
                    <Label>Name</Label>

                    <InputFather>
                        <Input />
                    </InputFather>
                </InputView>

                <InputView>
                    <Label>Quantity</Label>

                    <ScrollView horizontal={true} contentContainerStyle={{paddingHorizontal: 20, marginVertical: 10}}>
                        {array.map((item, k) => (
                            <QuantityItem borderColor={quantityType === item.title ? defaultColor : 'transparent'} onPress={() => setQuantityType(item.title)} key={k}>
                                <QuantityItemText color={quantityType === item.title ? defaultColor : blackish}>{item.title}</QuantityItemText>
                            </QuantityItem>
                        ))}
                    </ScrollView>

                    <InputFather>
                        <Input />
                    </InputFather>
                </InputView>

                <InputView>
                    <Label>Expire date</Label>

                    <InputFather>
                        <Input />
                    </InputFather>
                </InputView>

                <SubmitButton>
                    <SubmitButtonText>Add Food</SubmitButtonText>
                </SubmitButton>
            </InputArea>
        )
    }

    return(
        <AddFoodContainer>
            <Header title="Add New Food" />

            <ActionButtons>
                <ActionButton backgroundColor={addFood === 'manually' ? defaultColor : 'transparent'} onPress={() => setAddFood('manually')}>
                    <ActionButtonText color={addFood === 'manually' ? white : black}>Add Manually</ActionButtonText>
                </ActionButton>

                <ActionButton backgroundColor={addFood === 'code' ? defaultColor : 'transparent'} onPress={() => setAddFood('code')}>
                    <ActionButtonText color={addFood === 'code' ? white : black}>Scan QR Code</ActionButtonText>
                </ActionButton>
            </ActionButtons>

            {addFood === 'manually' ? 
                <RenderItemManually /> 
                : 
                undefined
            }
        </AddFoodContainer>
    )
}