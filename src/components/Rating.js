import React from 'react';
import {Cell} from "@vkontakte/vkui";
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const Rating = props =>
    <Cell before={<Icon24FavoriteOutline className="rating" />}>
        <span className="rating">{props.rating ? 'props.rating' : '5660'}</span>
    </Cell>;

export default Rating;
