import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import food2 from '../../assets/images/food2.png';

import { api } from '../../services/api';

import {
    SmallerRecipeArea,

    SmallerRecipeItem,

    ItemImg,
    
    ItemRightContent,

    ItemHeader,
    ItemCategory,
    ItemCategoryMarkdown,
    ItemCategoryText,
    ItemActionButtons,
    ItemActionButton,

    ItemName,

    ItemFooter,
    ItemFooterDefault,
    ItemFooterDefaultText
} from './styles';

export default function SmallerRecipe({children}) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = useSelector(state => state.user.token);

    useEffect(() => {
        api.get(`/favorites/${token}`)
        .then(res => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, []);

    const renderItem = ({item}) => {
        return(
            <SmallerRecipeItem>
                <ItemImg source={food2} />

                <ItemRightContent>
                    <ItemHeader>
                        <ItemCategory>
                            <ItemCategoryMarkdown />
                            <ItemCategoryText>{item.category}</ItemCategoryText>
                        </ItemCategory>

                        <ItemActionButtons>
                            <ItemActionButton>
                                <Entypo name="share" color="#000" size={20} />
                            </ItemActionButton>
                            
                            <ItemActionButton>
                                <AntDesign name="pluscircleo" color="#000" size={20} />
                            </ItemActionButton>
                        </ItemActionButtons>
                    </ItemHeader>

                    <TouchableWithoutFeedback>
                    </TouchableWithoutFeedback>

                    <ItemFooter>
                        <ItemFooterDefault>
                            <Ionicons name="bonfire-outline" color="#000" size={25} />
                        </ItemFooterDefault>

                        <ItemFooterDefault>
                            <MaterialIcons name="kitchen" color="#000" size={25} />
                        </ItemFooterDefault>
                    </ItemFooter>
                </ItemRightContent>
            </SmallerRecipeItem>
        )
    } 

    return(
        <SmallerRecipeArea>
            {loading ?
                <ActivityIndicator size="large" color="#D7263D" />
                :
                <FlatList
                    contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 20}}
                    ListHeaderComponent={children}
                    showsVerticalScrollIndicator={false}
                    data={recipes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
        </SmallerRecipeArea>
    )
}