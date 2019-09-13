import React from 'react';
import {Cell, Div} from "@vkontakte/vkui";


const Organization = props => (
    <Cell className="listorg"  multiline>
        <Div style={{display: 'flex', background: '#eee'}}>
            <Div>
                <Div style={{background: '#eee'}}>{props.info[0]}</Div>
                <Div>{props.info[1]}</Div>
            </Div>
            <Div>
                <Div><img style={{width: '70px'}} src={ props.info[2] } /></Div>
                <Div>{props.info[3]}</Div>
                <Div>{props.info[4]}</Div>
            </Div>
        </Div>
    </Cell>
);
export default Organization;
