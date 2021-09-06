import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { defaultColor } from '../../globals';
import LogoBranca from '../../assets/images/logo-recipe-branco.png';

import {
    PreloadContainer,
    CenterArea,
    Logo,
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

    const example = async () => {
        try{    
            await changeNavigationBarColor('#D7263D');     // {success: true}
        }catch(e){
            console.log(e)  // {success: false}
        }
   
    };

    useEffect(() => {
        example()
    }, [])

    return(
        <PreloadContainer>
            <StatusBar barStyle='light-content' backgroundColor={defaultColor} />

            <CenterArea>
                <Logo source={LogoBranca} />
            </CenterArea>
        </PreloadContainer>
    )
}