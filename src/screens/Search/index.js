import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Dimensions } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import SearchImage from '../../assets/images/search.png';

import Header from '../../components/Header';
import { api } from '../../services/api';

import {
    SearchContainer,

    SearchArea,
    SearchInput,
    
    SearchWithoutValueImage,

    ItemArea,
    ItemHeader,
    ItemCategory,
    ItemName,
    ItemImage,
    ItemFooter,
    ItemDescription,
    ItemButton,
    ItemButtonText
} from './styles';

export default function Search() {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        api.get(`/searching-recipes/search?v=${search}`)
        .then((res) => {
            let data = res.data.recipes;
            setRecipes(data);
        }).catch((err) => {
            console.log(err);
        })
    }, [search]);
    
    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }, [search])

    const renderItem = ({item}) => {
        return(
            <ItemArea style={{width: windowWidth}}>
                <ItemHeader>
                    <ItemCategory>{item.category} Food</ItemCategory>
                    <ItemName numberOfLines={1}>{item.name}</ItemName>
                </ItemHeader>

                <ItemImage resizeMode="contain" source={{uri: `http://192.168.0.110:3000/media/${item.img}`}} />

                <ItemFooter>
                    <ItemDescription numberOfLines={3}>{item.description}kamsk akmsd akmds asmd am akdsm kamdk mak kma kmsdkm akmd kamsdk makdsm sakmdk maksd mkasmdkamdk makd kamd akmdsk</ItemDescription>

                    <ItemButton>
                        <ItemButtonText>View Recipe</ItemButtonText>
                    </ItemButton>
                </ItemFooter>
            </ItemArea>
        )
    }

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
                    recipes.length > 0 ? 
                        <FlatList
                            horizontal={true}
                            pagingEnabled={true}
                            data={recipes}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    :
                    <SearchWithoutValueImage source={SearchImage} />
                }
        </SearchContainer>
    )
}