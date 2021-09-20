import React, { useState, useEffect } from 'react';
import { View, Modal, ActivityIndicator, FlatList, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header';

import shrimp from '../../assets/images/shrimp.png';

import { blackish, defaultColor } from '../../globals';
import { api } from '../../services/api';

import {
    FoodManagerContainer,

    ModalContainer,
    ModalArea,
    ModalTitle,
    ModalText,
    ModalButton,
    ModalButtonText,

    SubHeaderArea,
    SubHeader,
    SubHeaderText,

    FoodItem,
    FoodImageArea,
    FoodImage,
    FoodContent,
    FoodContentRow,
    FoodContentName,
    FoodContentQuantityType,
    FoodContentDate
} from './styles';

let array = [
    {id: 1, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 2, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 3, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 4, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 5, img: shrimp, name: 'Shrimadasdadasasaaaaaasp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 6, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 7, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 8, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
    {id: 9, img: shrimp, name: 'Shrimp', addedAt: '20-08-2018', quantity: '3', quantityType: 'packets', expireAt: '21-11-2022'},
];

export default function FoodManager() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const token = useSelector(state => state.user.token);

    const navigation = useNavigation();

    useEffect(() => {
        api.get(`/refrigerator/${token}`)
        .then((res) => {
            setData(res.data.refrigerator);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, []);

    function deleteFood () {
        api.delete(`/delete-food/${token}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

    const renderItem = ({item}) => {
        return(
            <>
                <TouchableNativeFeedback onLongPress={() => setModalVisible(true)} background={TouchableNativeFeedback.Ripple('#ccc', false)}>
                    <FoodItem>
                        <FoodImageArea>
                            <FoodImage source={{uri: `http://192.168.0.110:3000/media/${item.img}`}} />
                        </FoodImageArea>

                        <FoodContent>
                            <FoodContentRow>
                                <FoodContentName numberOfLines={1}>{item.name}</FoodContentName>
                                <FoodContentQuantityType>{item.quantity} {item.quantityType}</FoodContentQuantityType>
                            </FoodContentRow>

                            <FoodContentRow>
                                <FoodContentDate>Added: {item.addedAt}</FoodContentDate>
                                <FoodContentDate>Expire: {item.expireAt}</FoodContentDate>
                            </FoodContentRow>
                        </FoodContent>
                    </FoodItem>
                </TouchableNativeFeedback>

                <Modal
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    animationType="fade"
                    transparent={true}
                >
                    <ModalContainer>
                        <ModalArea>
                            <ModalTitle>Delete item</ModalTitle>
                            <ModalText>You want to delete this item?</ModalText>
                            
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 'auto', marginRight: 15}}>
                                <ModalButton onPress={() => setModalVisible(false)}>
                                    <ModalButtonText>Cancel</ModalButtonText>
                                </ModalButton>

                                <ModalButton onPress={deleteFood}>
                                    <ModalButtonText>Ok</ModalButtonText>
                                </ModalButton>
                            </View>
                        </ModalArea>
                    </ModalContainer>
                </Modal>
            </>
        )
    }

    return(
        <FoodManagerContainer>
            <Header title='Food Manager' />

            <SubHeaderArea>
                <SubHeader>
                    <SubHeaderText color={blackish}>Ingredients ({data.length})</SubHeaderText>
                </SubHeader>

                <TouchableOpacity onPress={() => navigation.navigate('add__food')}>
                    <SubHeader>
                            <AntDesign style={{marginRight: 7}} name="pluscircleo" color={defaultColor} size={20} />
                            <SubHeaderText color={defaultColor}>Add New</SubHeaderText>
                    </SubHeader>
                </TouchableOpacity>
            </SubHeaderArea>

            {loading ? <ActivityIndicator size="large" color={defaultColor} style={{marginTop: 200}} /> 
                :
                <FlatList 
                    ListHeaderComponentStyle={{marginBottom: 25}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
            
        </FoodManagerContainer>
    )
}