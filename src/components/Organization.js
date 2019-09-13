import React from 'react';
import {Cell, Div, Link} from "@vkontakte/vkui";
import Icon28Document from '@vkontakte/icons/dist/28/document';

const Organization = props => (
    <Cell className="listorg" multiline>
        <Div style={{background: '#eee', borderRadius: '7px', borderBottom: '1px solid #5181b8'}}>
            <Div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'stretch', background: '#eee', padding: '0'}}>
                <Div style={{background: '#eee', paddingLeft: '0', paddingRight: '0'}}><b>{props.info[0]}</b></Div>
                <Div><img style={{width: '90px'}} src={ props.info[2] } /></Div>
            </Div>
            <Div style={{background: '#4bb34b26',borderRadius: '4px',border: '1px solid #4eb94e', position: 'relative'}}>
                <Div style={{position: 'absolute',left: '-14px',top: '7px', padding: '0'}}><Icon28Document fill={'#5181b8'} /></Div>
                {props.info[6]}
            </Div>
            <Div style={{paddingLeft: '0', paddingRight: '0'}}>
                <Link href="https://vk.com/im?media=&sel=-120490298" onClick={props.message} target="_blank">Откликнуться</Link>
            </Div>
        </Div>
    </Cell>
);
export default Organization;
