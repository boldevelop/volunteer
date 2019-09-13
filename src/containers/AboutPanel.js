import React from 'react';
import { Group, HeaderButton, IOS, Panel, PanelHeader, platform} from "@vkontakte/vkui";

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

        </Group>

        <Group title="Как пользоватсья">

        </Group>

        <Group title="Получай рейтинг">

        </Group>
    </Panel>
);

export default AboutPanel;
