import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Panel, PanelHeader, List, Cell, Group } from '@vkontakte/vkui';
import * as vkSelectors from '../store/vk/reducer';
import Logger from './Logger';

class MainPanel extends Component {

    componentWillMount() {
    }

    render() {
        const isProduction = process.env.NODE_ENV === 'production';
        let logger = null;
        if (!isProduction) {
            logger = <Logger/>;
        }

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Организации
                </PanelHeader>
                <Group title="Организации">
                    <List>
                        <Cell multiline>
                            тестик
                        </Cell>
                    </List>
                </Group>
                {logger}
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        notificationStatus: vkSelectors.getNotificationStatus(state),
    };
}

export default connect(mapStateToProps)(MainPanel);
