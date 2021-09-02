import React, { useState } from 'react';

import { api } from '../../services/api';

import { 
    ModalContainer,
    ModalText,
    ModalInputArea,
    ModalInput,
    ModalSubmitButton,
    ModalSubmitButtonText,
} from './styles';

export default function VerificationCode () {
    const [verificationValue1, setVerificationValue1] = useState('');
    const [verificationValue2, setVerificationValue2] = useState('');
    const [verificationValue3, setVerificationValue3] = useState('');
    const [verificationValue4, setVerificationValue4] = useState('');

    function submitForm () {
        let verificationCodeJoin = parseInt(verificationValue1+verificationValue2+verificationValue3+verificationValue4);

        if(verificationCodeJoin !== verificationCode) {
            console.log('Incorrect code');
        } else {
            api.post('/create-user', {
                name: nameValue,
                email: emailValue,
                password: passwordValue,
            })
            .then((response) => console.log(response.data))
            .catch((err) => console.error(err));
        }
    }

    return(
        <ModalContainer>
            <ModalText>Please enter the verification code we send to your email (may be in the spam fold)</ModalText>

            <ModalInputArea>
                <ModalInput keyboardType="numeric" maxLength={1} value={verificationValue1} onChangeText={v => setVerificationValue1(v)}  />
                <ModalInput keyboardType="numeric" maxLength={1} value={verificationValue2} onChangeText={v => setVerificationValue2(v)} />
                <ModalInput keyboardType="numeric" maxLength={1} value={verificationValue3} onChangeText={v => setVerificationValue3(v)} />
                <ModalInput keyboardType="numeric" maxLength={1} value={verificationValue4} onChangeText={v => setVerificationValue4(v)} />
            </ModalInputArea>

            <ModalSubmitButton onPress={submitForm}>
                <ModalSubmitButtonText>Submit</ModalSubmitButtonText>
            </ModalSubmitButton>

        </ModalContainer>
    )
}