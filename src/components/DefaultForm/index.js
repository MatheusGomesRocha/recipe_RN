import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import validator from 'validator';
import { useNavigation } from '@react-navigation/native';

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

    ErrorMessage,
    
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

function DefaultForm (props) {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const [emailLoginValue, setEmailLoginValue] = useState('');
    const [passwordLoginValue, setPasswordLoginValue] = useState('');

    const [hasValidName, setHasValidName] = useState(false);
    const [hasValidEmail, setHasValidEmail] = useState(false);
    const [hasValidPassword, setHasValidPassword] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage('');
        }, 5000)
    }, [verificationLogin, verificationSignUp])

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
        if(props.screen === 'signUp') {
            if(passwordValue && passwordValue === confirmPasswordValue && passwordValue.length >= 6 && confirmPasswordValue.length >= 6) {
                setHasValidPassword(true);
            } else {
                setHasValidPassword(false);
            }
        } else {
            if(passwordValue.length >= 6) {
                setHasValidPassword(true);
            } else {
                setHasValidPassword(false);
            }
        }
    }

    function verificationSignUp () {
        if(!emailValue || !nameValue || !passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue) {
            setErrorMessage('All fields are required');
        } else {
            // api.get(`/has-user/${emailValue}`)
            // .then((response) => {
            //     if(response.data.error) {
            //         setErrorMessage(response.data.error);
            //     } else {
            //         api.post('/send-verification-code', {
            //             email: emailValue
            //         })
            //         .then((response) => {
            //             navigation.navigate('verification__code', { 
            //                 name: nameValue,
            //                 email: emailValue,
            //                 password: passwordValue,
            //                 code: response.data.code
            //             });
            //         })
            //         .catch((err) => console.error(err));
            //     }
            // })
            // .catch((err) => console.log(err));

            navigation.navigate('verification__code', { 
                name: nameValue,
                email: emailValue,
                password: passwordValue,
            });
        }
    };

    function verificationLogin () {
        if(!emailLoginValue || !passwordLoginValue) {
            setErrorMessage('All fields are required');
        } else {
            api.post('/login', {
                email: emailLoginValue,
                password: passwordLoginValue
            })
            .then((response) => {
                if(response.data.error) {
                    setErrorMessage(response.data.error)
                } else {
                    console.log('OK');
                }
            })
            .catch((err) => console.log(err));
        }
    }

    return(
        <FormArea>
            <LogoArea>
                <LogoImg source={Logo} />
            </LogoArea>

            <Title>{props.screen === 'signUp' ? 'Sign Up' : 'Login'}</Title>

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
                <DividerText>{props.screen === 'signUp' ? 'Or sign up with an email' : 'Or login with an email'}</DividerText>
            </Divider>

            {errorMessage ? 
                <ErrorMessage>{errorMessage}</ErrorMessage>
            : undefined}

            <InputArea>
                {props.screen === 'signUp' ? 
                    <InputDiv borderColor={hasValidName ? '#D7263D' : '#aaa'}>
                        <Feather name='user' size={22} color={hasValidName ? '#D7263D' : '#aaa'} />
                        <Input onBlur={nameValidation} value={nameValue} onChangeText={v => setNameValue(v)} placeholder="Name" placeholderTextColor="#aaa"  />
                    </InputDiv>
                : undefined}

                <InputDiv borderColor={hasValidEmail ? '#D7263D' : '#aaa'}>
                    <Fontisto name="email" size={22} color={hasValidEmail ? '#D7263D' : '#aaa'} />
                    <Input onBlur={emailValidation} value={props.screen === 'signUp' ? emailValue : emailLoginValue} keyboardType='email-address' onChangeText={props.screen === 'signUp' ? v => setEmailValue(v) : v => setEmailLoginValue(v)} placeholder="Email" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv borderColor={hasValidPassword ? '#D7263D' : '#aaa'}>
                    <Feather name="lock" size={22} color={hasValidPassword ? '#D7263D' : '#aaa'} />
                    <Input onBlur={passwordValidation} value={props.screen === 'signUp' ? passwordValue : passwordLoginValue} onChangeText={props.screen === 'signUp' ? v => setPasswordValue(v) : v => setPasswordLoginValue(v)} secureTextEntry={!showPassword} placeholder="Password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? 
                            <Feather name="eye-off" size={22} color="#aaa" />
                        :
                            <Feather name="eye" size={22} color="#aaa" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
                
                {props.screen === 'signUp' ? 
                    <InputDiv borderColor={hasValidPassword ? '#D7263D' : '#aaa'}>
                        <Feather name="lock" size={22} color={hasValidPassword ? '#D7263D' : '#aaa'} />
                        <Input onBlur={passwordValidation} value={confirmPasswordValue} onChangeText={v => setConfirmPasswordValue(v)} secureTextEntry={!showConfirmPassword} placeholder="Confirm your password" placeholderTextColor="#aaa"  />

                        <TouchableWithoutFeedback onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? 
                                <Feather name="eye-off" size={22} color="#aaa" />
                            :
                                <Feather name="eye" size={22} color="#aaa" />
                            }
                        </TouchableWithoutFeedback>
                    </InputDiv>
                : undefined}
            </InputArea>

            {props.screen === 'signUp' ? undefined : 
                <ForgotPasswordButton>
                    <ForgotPasswordText>Forgot password?</ForgotPasswordText>
                </ForgotPasswordButton>
            }

            <SubmitButton onPress={props.screen === 'signUp' ? verificationSignUp : verificationLogin}>
                <SubmitButtonText>{props.screen === 'signUp' ? 'Sign Up' : 'Login'}</SubmitButtonText>
            </SubmitButton>

            <AlreadyHaveAnAccount>
                <AlreadyHaveAnAccountText>{props.screen === 'signUp' ? 'Already have an account?' : "Don't have an account?"} </AlreadyHaveAnAccountText>

                <AlreadyHaveAnAccountButton onPress={() => navigation.navigate(props.screen === 'signUp' ? 'login' : 'sign__up')}>
                    <AlreadyHaveAnAccountButtonText>{props.screen === 'signUp' ? 'Login' : 'Sign Up'}</AlreadyHaveAnAccountButtonText>
                </AlreadyHaveAnAccountButton>
            </AlreadyHaveAnAccount>
        </FormArea>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME', payload: {name}}),    // Seta o email do usuário com redux
        setEmail:(email)=>dispatch({type:'SET_EMAIL', payload: {email}}),    // Seta o email do usuário com redux
        setToken:(token)=>dispatch({type:'SET_TOKEN', payload: {token}})    // Seta o email do usuário com redux
    };
}

export default connect(null, mapDispatchToProps) (DefaultForm);