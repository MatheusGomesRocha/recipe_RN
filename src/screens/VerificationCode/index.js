import React, { useState, createRef, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import { api } from '../../services/api';
import { black, blackish, defaultColor, white, grayish } from '../../globals';

import { 
    CodeContainer,
    CodeTitle,
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

    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [isFocused4, setIsFocused4] = useState(false);

    const [disableInput, setDisableInput] = useState(true);

    const inputRef1 = createRef();
    const inputRef2 = createRef();
    const inputRef3 = createRef();
    const inputRef4 = createRef();

    const route = useRoute();

    const nameValue = route.params.name;
    const emailValue = route.params.email;
    const passwordValue = route.params.password;
    const verificationCode = route.params.code;

    useEffect(() => {
        if(!verificationValue1 || !verificationValue2 || !verificationValue3 || !verificationValue4) {
            setDisableInput(true);
        } else {
            if(verificationCode === parseInt(verificationValue1+verificationValue2+verificationValue3+verificationValue4)) {
                setDisableInput(false);
            }
        }
    }, [verificationValue1, verificationValue2, verificationValue3, verificationValue4]);

    function handleChangeText (v) {
        inputRef2.current.focus();
        setVerificationValue1(v);
    }

    function handleChangeText2 (v) {
        inputRef3.current.focus();
        setVerificationValue2(v);
    }

    function handleChangeText3 (v) {
        inputRef4.current.focus();
        setVerificationValue3(v);
    }

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
            <Header />

            <CodeTitle>Enter the code we send to your e-mail</CodeTitle>
            <CodeText>We send it to <CodeText style={{fontWeight: 'bold'}}>{emailValue}.</CodeText> If you don't find, look at the spam fold </CodeText>

            <CodeInputArea>
                <CodeInput borderWidth={isFocused1 ? '2px' : '1px'} borderColor={isFocused1 ? defaultColor : black} onBlur={() => setIsFocused1(false)} onFocus={() => setIsFocused1(true)} selectionColor="#000" ref={inputRef1} autoFocus keyboardType="numeric" maxLength={1} value={verificationValue1} onChangeText={v => handleChangeText(v)}  />
                <CodeInput borderWidth={isFocused2 ? '2px' : '1px'} borderColor={isFocused2 ? defaultColor : black} onBlur={() => setIsFocused2(false)} onFocus={() => setIsFocused2(true)} selectionColor="#000" ref={inputRef2} keyboardType="numeric" maxLength={1} value={verificationValue2} onChangeText={v => handleChangeText2(v)} />
                <CodeInput borderWidth={isFocused3 ? '2px' : '1px'} borderColor={isFocused3 ? defaultColor : black} onBlur={() => setIsFocused3(false)} onFocus={() => setIsFocused3(true)} selectionColor="#000" ref={inputRef3} keyboardType="numeric" maxLength={1} value={verificationValue3} onChangeText={v => handleChangeText3(v)} />
                <CodeInput borderWidth={isFocused4 ? '2px' : '1px'} borderColor={isFocused4 ? defaultColor : black} onBlur={() => setIsFocused4(false)} onFocus={() => setIsFocused4(true)} selectionColor="#000" ref={inputRef4} keyboardType="numeric" maxLength={1} value={verificationValue4} onChangeText={v => setVerificationValue4(v)} />
            </CodeInputArea>

            <CodeSubmitButton disabled={disableInput} backgroundColor={disableInput ? grayish : defaultColor} onPress={submitForm}>
                <CodeSubmitButtonText color={disableInput ? blackish : white}>Confirm Code</CodeSubmitButtonText>
            </CodeSubmitButton>

        </CodeContainer>
    )
}