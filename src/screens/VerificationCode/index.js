import React, { useState, createRef } from 'react';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import { api } from '../../services/api';

import { 
    CodeContainer,
    CodeText,
    CodeInputArea,
    CodeInput,
    CodeSubmitButton,
    CodeSubmitButtonText,
} from './styles';

export default function VerificationCode () {
    const [verificationValue1, setVerificationValue1] = useState('');
    const [verificationValue2, setVerificationValue2] = useState('');
    const [verificationValue3, setVerificationValue3] = useState('');
    const [verificationValue4, setVerificationValue4] = useState('');

    const inputRef1 = createRef();
    const inputRef2 = createRef();
    const inputRef3 = createRef();
    const inputRef4 = createRef();

    const route = useRoute();

    const nameValue = route.params.name;
    const emailValue = route.params.email;
    const passwordValue = route.params.password;
    const verificationCode = route.params.code;

    function submitForm () {
        let verificationCodeJoin = parseInt(verificationValue1+verificationValue2+verificationValue3+verificationValue4);

        // if(verificationCodeJoin !== verificationCode) {
        //     console.log(verificationCode);
        //     console.log(verificationCodeJoin);
        // } else {
            api.post('/create-user', {
                name: nameValue,
                email: emailValue,
                password: passwordValue,
            })
            .then((response) => console.log(response.data))
            .catch((err) => console.error(err));
        // }
    }

    return(
        <CodeContainer>
            <Header title="Verification Code" />

            <CodeText>Please enter the verification code we send to your email</CodeText>

            <CodeInputArea>
                <CodeInput selectionColor="#000" ref={inputRef1} returnKeyType="next" onSubmitEditing={() => inputRef2.current.focus()} autoFocus keyboardType="numeric" maxLength={1} value={verificationValue1} onChangeText={v => setVerificationValue1(v)}  />
                <CodeInput selectionColor="#000" ref={inputRef2} returnKeyType="next" onSubmitEditing={() => inputRef3.current.focus()} keyboardType="numeric" maxLength={1} value={verificationValue2} onChangeText={v => setVerificationValue2(v)} />
                <CodeInput selectionColor="#000" ref={inputRef3} returnKeyType="next" onSubmitEditing={() => inputRef4.current.focus()} keyboardType="numeric" maxLength={1} value={verificationValue3} onChangeText={v => setVerificationValue3(v)} />
                <CodeInput selectionColor="#000" ref={inputRef4} keyboardType="numeric" maxLength={1} value={verificationValue4} onChangeText={v => setVerificationValue4(v)} />
            </CodeInputArea>

            <CodeSubmitButton onPress={submitForm}>
                <CodeSubmitButtonText>Verify</CodeSubmitButtonText>
            </CodeSubmitButton>

        </CodeContainer>
    )
}