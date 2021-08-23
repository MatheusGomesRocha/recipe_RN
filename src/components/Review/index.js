import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import imgPlaceholder from '../../assets/images/profile.jpg';
import { defaultColor } from '../../globals';

import {
    ReviewArea,

    ReviewItem,

    ReviewHeader,

    ReviewUserImg,
    
    ReviewInfo,
    ReviewUserName,
    ReviewCommentDate,

    ReviewRatingInfo,
    ReviewStars,
    ReviewEmoji,

    ReviewComment
} from './styles';

let array = [
    {id: 1, userImg: imgPlaceholder, userName: 'Juniorianoadm askmd adm akmdka', commentDate: '59 minutes ago', commentRate: 4, commentEmoji: '😝', comment: 'Lorem ipsum asdkasmd askd amsam aakmsd aksmmd akakak amsms kamskma akmsa amsakdm askmakm'},
    {id: 2, userImg: imgPlaceholder, userName: 'Junioriano', commentDate: '59 minutes ago', commentRate: 4, commentEmoji: '😝', comment: 'Lorem ipsum asdkasmd askd amsam asdmakmsd aksmmd akakak amsmdmams kamskma akmsa amsakdm askmakm'},
    {id: 3, userImg: imgPlaceholder, userName: 'Junioriano', commentDate: '59 minutes ago', commentRate: 4, commentEmoji: '😝', comment: 'Lorem ipsum asdkasmd askd amsam asdmakmsd aksmmd akakak amsmdmams kamskma akmsa amsakdm askmakm'},
    {id: 4, userImg: imgPlaceholder, userName: 'Junioriano', commentDate: '59 minutes ago', commentRate: 4, commentEmoji: '😝', comment: 'Lorem ipsum asdkasmd askd amsam asdmakmsd aksmmd akakak amsmdmams kamskma akmsa amsakdm askmakm'},
];

export default function Review () {
    return(
        <ReviewArea>
            {array.map((item, k) => (
                <ReviewItem key={k}>
                    <ReviewHeader>
                        <ReviewUserImg source={item.userImg} />

                        <ReviewInfo>
                            <ReviewUserName numberOfLines={1}>{item.userName}</ReviewUserName>
                            <ReviewCommentDate>{item.commentDate}</ReviewCommentDate>
                        </ReviewInfo>

                        <ReviewRatingInfo>
                            <ReviewStars>   
                                <AntDesign name={item.commentRate > 0 ? 'star' : 'staro'} color={item.commentRate > 0 ? defaultColor : '#000'} size={15} />
                                <AntDesign name={item.commentRate > 1 ? 'star' : 'staro'} color={item.commentRate > 1 ? defaultColor : '#000'} size={15} />
                                <AntDesign name={item.commentRate > 2 ? 'star' : 'staro'} color={item.commentRate > 2 ? defaultColor : '#000'} size={15} />
                                <AntDesign name={item.commentRate > 3 ? 'star' : 'staro'} color={item.commentRate > 3 ? defaultColor : '#000'} size={15} />
                                <AntDesign name={item.commentRate > 4 ? 'star' : 'staro'} color={item.commentRate > 4 ? defaultColor : '#000'} size={15} />
                            </ReviewStars>
                            
                            <ReviewEmoji>{item.commentEmoji}</ReviewEmoji>
                        </ReviewRatingInfo>
                    </ReviewHeader>

                    <ReviewComment>{item.comment}</ReviewComment>
                </ReviewItem>
            ))}
        </ReviewArea>
    )
}