import React from 'react';

import {
    ServerArea,
    ServerText
} from './styles';

export default function ServerMessage({type, text}) {
    return(
        <ServerArea backgroundColor={type === 'result' ? 'green' : 'red'}>
            <ServerText>{text}</ServerText>
        </ServerArea>
    )
}