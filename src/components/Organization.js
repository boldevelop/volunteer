import React, {Component} from 'react';
import {Cell, HeaderButton, IOS, List, Panel, PanelHeader} from "@vkontakte/vkui";

const Organization = props => (
    <Cell multiline>
        {props.info[0]}
    </Cell>
);

export default Organization;
