import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

import Logo from '../../assets/images/logo.png';

import { api } from '../../services/api';

import {
    FormArea,

    LogoArea,
    LogoImg,

    Title,

    OtherSignUpOptions,
    OtherSignUpButton,

    Divider,
    DividerText,

    InputArea,
    InputDiv,
    Input,

    ForgotPasswordButton,
    ForgotPasswordText,

    SubmitButton,
    SubmitButtonText,
} from './styles';

export default () => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function submitForm () {
        if(passwordValue !== confirmPasswordValue) {
            setPasswordError(true);
            setConfirmPasswordError(true);
        }  else if (passwordValue === confirmPasswordValue) {
            setPasswordError(false);
            setConfirmPasswordError(false);
        }
        
        if (!nameValue) {
            setNameError(true);
        } else if (nameValue) {
            setNameError(false);
        }
        
        if (!emailValue) {
            setEmailError(true);
        } else if (emailValue) {
            setEmailError(false);
        }
        
        if (!passwordValue) {
            setPasswordError(true);
        } else if (passwordValue) {
            setPasswordError(true);
        }
        
        if (!confirmPasswordValue) {
            setConfirmPasswordError(true);
        } else if (confirmPasswordValue) {
            setConfirmPasswordError(false);
        }
        
        if(nameValue && emailValue && passwordValue && confirmPasswordValue && passwordValue === confirmPasswordValue) {
            api.post('/create-user', {
                name: nameValue,
                email: emailValue,
                password: passwordValue,
            })
            .then((response) => console.log(response.data))
            .catch((err) => console.error(err));

            setNameError(false);
            setEmailError(false);
            setPasswordError(false);
            setConfirmPasswordError(false);
        }
    };

        
    return(
        <FormArea>
            <LogoArea>
                <LogoImg source={Logo} />
            </LogoArea>

            <Title>Sign Up</Title>

            <OtherSignUpOptions>
                <OtherSignUpButton>
                    <AntDesign name="google" size={30} color="#db4a39" />
                </OtherSignUpButton>

                <OtherSignUpButton>
                    <FontAwesome5Pro name="facebook" size={30} color="#3b5998" />
                </OtherSignUpButton>

                <OtherSignUpButton>
                    <AntDesign name="apple1" size={30} color="#000" />
                </OtherSignUpButton>
            </OtherSignUpOptions>

            <Divider>
                <DividerText>Or sign up with an email</DividerText>
            </Divider>

            <InputArea>
                <InputDiv borderColor={nameError ? 'red' : '#eee'}>
                    <Feather name="user" size={22} color="#aaa" />
                    <Input value={nameValue} onChangeText={v => setNameValue(v)} placeholder="Name" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv borderColor={emailError ? 'red' : '#eee'}>
                    <Fontisto name="email" size={22} color="#aaa" />
                    <Input value={emailValue} onChangeText={v => setEmailValue(v)} placeholder="Email" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv borderColor={passwordError ? 'red' : '#eee'}>
                    <Feather name="lock" size={22} color="#aaa" />
                    <Input value={passwordValue} onChangeText={v => setPasswordValue(v)} secureTextEntry={!showPassword} placeholder="Password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? 
                            <Feather name="eye-off" size={22} color="#aaa" />
                        :
                            <Feather name="eye" size={22} color="#aaa" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
                
                <InputDiv borderColor={confirmPasswordError ? 'red' : '#eee'}>
                    <Feather name="lock" size={22} color="#aaa" />
                    <Input value={confirmPasswordValue} onChangeText={v => setConfirmPasswordValue(v)} secureTextEntry={!showConfirmPassword} placeholder="Confirm your password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? 
                            <Feather name="eye-off" size={22} color="#aaa" />
                        :
                            <Feather name="eye" size={22} color="#aaa" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
            </InputArea>

            <ForgotPasswordButton>
                <ForgotPasswordText>Forgot password?</ForgotPasswordText>
            </ForgotPasswordButton>

            <SubmitButton onPress={submitForm} underlayColor="rgba(0, 0, 0, 0.1)">
                <SubmitButtonText>Sign Up</SubmitButtonText>
            </SubmitButton>
        </FormArea>
    )
}