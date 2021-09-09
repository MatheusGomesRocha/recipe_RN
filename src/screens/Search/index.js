import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import SearchImage from '../../assets/images/search.png';

import Header from '../../components/Header';

import {
    SearchContainer,

    SearchArea,
    SearchInput,
    
    SearchWithoutValueImage
} from './styles';

export default function Search() {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }, [search])

    return(
        <SearchContainer>
            <Header title="Search" />

            <SearchArea>
                <Feather name="search" color="#000" size={25} />
                <SearchInput value={search} onChangeText={v => setSearch(v)} placeholder="Search recipes" placeholderTextColor="#999" />
            </SearchArea>

            {isLoading ? 
                <ActivityIndicator style={{marginTop: 200}} size="large" color="#D7263D" />
            : 
                <SearchWithoutValueImage source={SearchImage} />
            }
        </SearchContainer>
    )
}