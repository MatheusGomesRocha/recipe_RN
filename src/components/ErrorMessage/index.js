import React from 'react';

import {
    ErrorArea,
    ErrorText
} from './styles';

export default function ErrorMessage({text}) {
    return(
        <ErrorArea>
            <ErrorText>{text}</ErrorText>
        </ErrorArea>
    )
}