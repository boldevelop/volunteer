import React from 'react';
import {Avatar, Cell, Div, Link, ListItem, Header} from "@vkontakte/vkui";


const Organization = props => (
    <Cell multiline>
        <ListItem
            before={<Avatar src={props.info[2]}/>}
            description={props.info[1]}
        >
            {props.info[0]}
        </ListItem>
        <Div>
            <Header className="title">
                О нас
            </Header>
            <Div>{props.info[3]}</Div>
            <Header className="title-find">
                Кого мы ищем
            </Header>
            <Div>
                {props.info[6]}
            </Div>
            <Div className="button-cta">
                <Link href="https://vk.com/im?media=&sel=-120490298" onClick={props.message} target="_blank">Откликнуться</Link>
            </Div>
        </Div>
    </Cell>
);
export default Organization;
