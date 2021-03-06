import React from 'react';
import { ScrollView } from 'react-native';

import DefaultForm from '../../components/DefaultForm';

import {
    SignUpContainer
} from './styles';

export default function SignUp () {
    return(
        <SignUpContainer>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 20, paddingHorizontal: 30}}>
                <DefaultForm screen={'signUp'} />
            </ScrollView>
        </SignUpContainer>
    )
}