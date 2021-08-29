import React from 'react';
import { FlatList, Text } from 'react-native';

import profile from '../../assets/images/profile.jpg';
import Header from '../../components/Header';

import {
    NotificationContainer,

    NotificationItem,
    NotificationImg,
    NotificationContentText
} from './styles';

let array = [
    {id: 1, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 2, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 3, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 4, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 5, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 6, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 7, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 8, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 9, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
    {id: 10, img: profile, user: '@Matheus1424', text: 'just posted a new recipe, click here to see details'},
];

export default function Notification () {

    const renderItem = ({item}) => {
        return(
            <NotificationItem>
                <NotificationImg source={item.img} />

                <NotificationContentText><Text style={{fontWeight: 'bold'}}>{item.user}</Text> {item.text}</NotificationContentText>
            </NotificationItem>
        )
    }

    return(
        <NotificationContainer>
            <FlatList 
                data={array}
                ListHeaderComponent={
                    <Header title="Notifications" />
                }
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </NotificationContainer>
    )
}