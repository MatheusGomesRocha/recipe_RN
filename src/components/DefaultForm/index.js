import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import validator from 'validator';

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

    AlreadyHaveAnAccount,
    AlreadyHaveAnAccountText,
    AlreadyHaveAnAccountButton,
    AlreadyHaveAnAccountButtonText,
} from './styles';

export default () => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const [hasValidName, setHasValidName] = useState(false);
    const [hasValidEmail, setHasValidEmail] = useState(false);
    const [hasValidPassword, setHasValidPassword] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    function nameValidation () {
        if(nameValue) {
            const isValidName = validator.isAlpha(nameValue);

            if(isValidName) {
                setHasValidName(true);
            } else {
                setHasValidName(false);
            }
        } else {
            setHasValidName(false);
        }
    }

    function emailValidation () {
        if(emailValue) {
            const isValidEmail = validator.isEmail(emailValue);

            if(isValidEmail) {
                setHasValidEmail(true);
            } else {
                setHasValidEmail(false);
            }
        } else {
            setHasValidEmail(false);
        }
    }

    function passwordValidation () {
        if(passwordValue && passwordValue === confirmPasswordValue && passwordValue.length >= 6 && confirmPasswordValue.length >= 6) {
            setHasValidPassword(true);
        } else {
            setHasValidPassword(false);
        }
    }

    function submitForm () {
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
                <OtherSignUpButton backgroundColor="#db4a39">
                    <AntDesign name="google" size={25} color="#fff" />
                </OtherSignUpButton>

                <OtherSignUpButton backgroundColor="#3b5998">
                    <FontAwesome5Pro name="facebook" size={25} color="#fff" />
                </OtherSignUpButton>

                <OtherSignUpButton backgroundColor="#000">
                    <AntDesign name="apple1" size={25} color="#fff" />
                </OtherSignUpButton>
            </OtherSignUpOptions>

            <Divider>
                <DividerText>Or sign up with an email</DividerText>
            </Divider>

            <InputArea>
                <InputDiv borderColor={hasValidName ? '#0125FC' : '#aaa'}>
                    <Feather name='user' size={22} color={hasValidName ? '#0125FC' : '#aaa'} />
                    <Input onBlur={nameValidation} value={nameValue} onChangeText={v => setNameValue(v)} placeholder="Name" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv borderColor={hasValidEmail ? '#0125FC' : '#aaa'}>
                    <Fontisto name="email" size={22} color={hasValidEmail ? '#0125FC' : '#aaa'} />
                    <Input onBlur={emailValidation} value={emailValue} keyboardType='email-address' onChangeText={v => setEmailValue(v)} placeholder="Email" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv borderColor={hasValidPassword ? '#0125FC' : '#aaa'}>
                    <Feather name="lock" size={22} color={hasValidPassword ? '#0125FC' : '#aaa'} />
                    <Input onBlur={passwordValidation} value={passwordValue} onChangeText={v => setPasswordValue(v)} secureTextEntry={!showPassword} placeholder="Password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? 
                            <Feather name="eye-off" size={22} color="#aaa" />
                        :
                            <Feather name="eye" size={22} color="#aaa" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
                
                <InputDiv borderColor={hasValidPassword ? '#0125FC' : '#aaa'}>
                    <Feather name="lock" size={22} color={hasValidPassword ? '#0125FC' : '#aaa'} />
                    <Input onBlur={passwordValidation} value={confirmPasswordValue} onChangeText={v => setConfirmPasswordValue(v)} secureTextEntry={!showConfirmPassword} placeholder="Confirm your password" placeholderTextColor="#aaa"  />

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

            <AlreadyHaveAnAccount>
                <AlreadyHaveAnAccountText>Already have an account?</AlreadyHaveAnAccountText>

                <AlreadyHaveAnAccountButton>
                    <AlreadyHaveAnAccountButtonText>Login</AlreadyHaveAnAccountButtonText>
                </AlreadyHaveAnAccountButton>
            </AlreadyHaveAnAccount>
        </FormArea>
    )
}