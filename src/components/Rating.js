import React from 'react';
import {Cell, Spinner} from "@vkontakte/vkui";
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

const Rating = props =>
    <Cell before={<Icon24FavoriteOutline className="rating" />}>
        {props.rating === null ? <Spinner size="small"/> : <span className="rating">{props.rating}</span> }
    </Cell>;

export default Rating;
