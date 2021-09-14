import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

import { defaultColor } from '../../globals';
import LogoBranca from '../../assets/images/logo-recipe-branco.png';

import {
    PreloadContainer,
    CenterArea,
} from './styles';

export default function Preload() {
    const navigation = useNavigation();
    const token = useSelector(state=>state.user.token);

    const logoPosition = useSharedValue(-250);
    const widthLogo = useSharedValue(0);
    const heightLogo = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{translateY: logoPosition.value}],
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
        widthLogo.value = withTiming(200, {
            duration: 1000
        }, () => {
            heightLogo.value = withTiming(200, {
                duration: 1000
            });
            logoPosition.value = withSpring(0, {
                duration: 2000,
            });
        });

        
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