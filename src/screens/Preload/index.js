import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

import { defaultColor } from '../../globals';
import LogoBranca from '../../assets/images/logo-recipe-branco.png';

import {
    PreloadContainer,
    CenterArea,
} from './styles';

export default function Preload() {
    const navigation = useNavigation();
    const token = useSelector(state=>state.user.token);

    const opacityLogo = useSharedValue(0);
    const widthLogo = useSharedValue(180);
    const heightLogo = useSharedValue(180);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacityLogo.value,
            width: widthLogo.value,
            height: heightLogo.value,
        };
    });

    const example = async () => {
        try{    
            await changeNavigationBarColor('#000000');     // {success: true}
        }catch(e){
            console.log(e)  // {success: false}
        }
    };
    
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


    useEffect(() => {
        example()
    }, []);

    useEffect(() => {
        opacityLogo.value = withTiming(1, {duration: 1500});
        widthLogo.value = withRepeat(withTiming(200, {duration: 750}), -1, true)
        heightLogo.value = withRepeat(withTiming(200, {duration: 750}), -1, true)
    }, []);

    return(
        <PreloadContainer>
            <StatusBar barStyle='light-content' backgroundColor={defaultColor} />

            <CenterArea>
                <Animated.Image style={[animatedStyles]} source={LogoBranca} />
            </CenterArea>
        </PreloadContainer>
    )
}