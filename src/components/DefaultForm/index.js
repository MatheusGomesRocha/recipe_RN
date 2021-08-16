import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import {
    FormArea,

    Title,

    InputArea,
    InputDiv,
    Input,

    ForgotPasswordButton,
    ForgotPasswordText
} from './styles';

export default () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
        <FormArea>
            <Title>Sign Up</Title>

            <InputArea>
                <InputDiv>
                    <Feather name="user" size={20} color="#999" />
                    <Input placeholder="Name" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv>
                    <Fontisto name="email" size={20} color="#999" />
                    <Input placeholder="Email" placeholderTextColor="#aaa"  />
                </InputDiv>

                <InputDiv>
                    <Feather name="lock" size={20} color="#999" />
                    <Input placeholder="Password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? 
                            <Feather name="eye-off" size={20} color="#999" />
                        :
                            <Feather name="eye" size={20} color="#999" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
                
                <InputDiv>
                    <Feather name="lock" size={20} color="#999" />
                    <Input placeholder="Confirm your password" placeholderTextColor="#aaa"  />

                    <TouchableWithoutFeedback onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? 
                            <Feather name="eye-off" size={20} color="#999" />
                        :
                            <Feather name="eye" size={20} color="#999" />
                        }
                    </TouchableWithoutFeedback>
                </InputDiv>
            </InputArea>

            <ForgotPasswordButton>
                <ForgotPasswordText>Forgot password?</ForgotPasswordText>
            </ForgotPasswordButton>
        </FormArea>
    )
}