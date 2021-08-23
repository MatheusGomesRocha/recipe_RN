import styled from 'styled-components/native';
import { grayish } from '../../globals';

export const ReviewArea = styled.View`
    padding: 0 20px 20px 20px;
`;
export const ReviewItem = styled.View`
    background-color: ${grayish};
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
`;

/** ------------------------------------------- **/

export const ReviewHeader = styled.View`
    flex-direction: row;
`;

/** ------------------------------------------- **/

export const ReviewUserImg = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;

/** ------------------------------------------- **/

export const ReviewInfo = styled.View`
    margin-left: 20px;
`;
export const ReviewUserName = styled.Text`
    font-weight: bold;
    font-size: 16px;
    width: 140px;
`;
export const ReviewCommentDate = styled.Text``;

/** ------------------------------------------- **/

export const ReviewRatingInfo = styled.View`
    margin-left: auto;
`;
export const ReviewStars = styled.View`
    flex-direction: row;
`;
export const ReviewEmoji = styled.Text`
    text-align: right;
    margin-top: 5px;
`;

/** ------------------------------------------- **/

export const ReviewComment = styled.Text`
    color: #666;
    margin-top: 20px;
    line-height: 18px;
`;