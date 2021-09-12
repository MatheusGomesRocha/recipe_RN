import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
    ModalContainer,
    ModalArea,
    ModalText
} from './styles';

export default function ModalLoading () {
    return(
        <ModalContainer>
            <ModalArea>
                <ActivityIndicator color="#000" size="large" />
                <ModalText>Waiting...</ModalText>
            </ModalArea>
        </ModalContainer>
    )
}