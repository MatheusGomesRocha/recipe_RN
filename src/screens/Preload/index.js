import React from 'react';
import { StatusBar } from 'react-native';

import { defaultColor } from '../../globals';

import {
    PreloadContainer
} from './styles';

export default function Preload() {
    return(
        <PreloadContainer>
            <StatusBar barStyle='light-content' backgroundColor={defaultColor} />
        </PreloadContainer>
    )
}