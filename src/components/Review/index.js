import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import imgPlaceholder from '../../assets/images/profile.jpg';

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
    {id: 1, userImg: imgPlaceholder, userName: 'Junioriano', commentDate: '59 minutes ago', commentRate: 4, commentEmoji: '😝', comment: 'Lorem ipsum asdkasmd askd amsam aakmsd aksmmd akakak amsms kamskma akmsa amsakdm askmakm'},
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
                            <ReviewUserName>{item.userName}</ReviewUserName>
                            <ReviewCommentDate>{item.commentDate}</ReviewCommentDate>
                        </ReviewInfo>

                        <ReviewRatingInfo>
                            <ReviewStars>   
                                <AntDesign name="star" color="gold" size={15} />
                                <AntDesign name="star" color="gold" size={15} />
                                <AntDesign name="star" color="gold" size={15} />
                                <AntDesign name="staro" color="#000" size={15} />
                                <AntDesign name="staro" color="#000" size={15} />
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