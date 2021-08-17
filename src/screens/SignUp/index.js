import React from 'react';
import { ScrollView } from 'react-native';

import DefaultForm from '../../components/DefaultForm';

import {
    SignUpContainer
} from './styles';

export default function SignUp () {
    return(
        <SignUpContainer>
            <DefaultForm register={true} />
        </SignUpContainer>
    )
}