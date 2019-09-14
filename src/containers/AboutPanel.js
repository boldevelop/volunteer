import React from 'react';
import { Group, HeaderButton, IOS, Panel, PanelHeader, platform, List, Cell, Div} from "@vkontakte/vkui";

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const AboutPanel = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="mainPanel">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            О нас
        </PanelHeader>

        <Group title="Наши цели">
            <Div>Информирование об организациях и связывания с ними заинтересованных людей.</Div>
        </Group>

        <Group title="Как пользоватсья">
            <List>
                <Cell>Просматривай организации.</Cell>
                <Cell>Откликайся на интересную.</Cell>
                <Cell>Помогай людям!</Cell>
            </List>
        </Group>

        <Group title="Получай рейтинг">
            <Div>Посещай мероприятия, отмечайся по qr коду и получай за это балы.</Div>
        </Group>
    </Panel>
);

export default AboutPanel;
