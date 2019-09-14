import React from 'react';
import {Avatar} from "@vkontakte/vkui";
import Icon24User from '@vkontakte/icons/dist/16/user';

const COEF_RATE = 375;

const UserRating = ({ user, itemStyle }) =>
    <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 4 }} src={user.photo}>{!user.photo && <Icon24User />}</Avatar>
        <div style={{ marginBottom: 6 }}>{user.realName}</div>
        <div className="rating" style={{fontSize: 14 }}>{user.rating * COEF_RATE}</div>
    </div>
;

export default UserRating;
