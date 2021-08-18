import React from 'react';

import DefaultForm from '../../components/DefaultForm';

import {
    LoginContainer
} from './styles';

export default function Login () {
    return(
        <LoginContainer>
            <DefaultForm screen={'login'} />
        </LoginContainer>
    )
}