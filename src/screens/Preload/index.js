import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { defaultColor } from '../../globals';
import LogoBranca from '../../assets/images/logo-recipe-branco.png';

import {
    PreloadContainer,
    CenterArea,
    Logo,
    WelcomeText
} from './styles';

export default function Preload() {
    const navigation = useNavigation();
    const token = useSelector(state=>state.user.token);
    const name = useSelector(state=>state.user.name);

    useEffect(() => {
        if(token) {
            setTimeout(() => {
                navigation.reset({
                    routes: [
                        { name: 'app__tab' },
                    ]
                });
            }, 4000)
        } else {
            setTimeout(() => {
                navigation.reset({
                    routes: [
                        { name: 'login' },
                    ]
                });
            }, 4000)
        }
    }, [])

    return(
        <PreloadContainer>
            <StatusBar barStyle='light-content' backgroundColor={defaultColor} />

            <CenterArea>
                <Logo source={LogoBranca} />
                {token ? 
                    <WelcomeText>Welcome {name}</WelcomeText>
                : undefined    
                }
            </CenterArea>


            <ActivityIndicator color="#fff" size='large' style={{marginTop: 'auto', marginBottom: 40}} />
        </PreloadContainer>
    )
}