import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

import Logo from '../../assets/images/logo.png';

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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                <InputDiv>
                    <Feather name="user" size={22} color="#aaa" />
                    <Input placeholder="Name" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv>
                    <Fontisto name="email" size={22} color="#aaa" />
                    <Input placeholder="Email" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv>
                    <Feather name="lock" size={22} color="#aaa" />
                    <Input secureTextEntry={!showPassword} placeholder="Password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? 
                            <Feather name="eye-off" size={22} color="#aaa" />
                        :
                            <Feather name="eye" size={22} color="#aaa" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
                
                <InputDiv>
                    <Feather name="lock" size={22} color="#aaa" />
                    <Input secureTextEntry={!showConfirmPassword} placeholder="Confirm your password" placeholderTextColor="#aaa"  />

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

            <SubmitButton>
                <SubmitButtonText>Sign Up</SubmitButtonText>
            </SubmitButton>
        </FormArea>
    )
}