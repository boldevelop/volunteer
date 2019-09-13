import React, {Component} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, PanelHeader, List, Cell, Group, ListItem, Avatar} from '@vkontakte/vkui';

class MainPanel extends Component {

    componentWillMount() {

    }

    render() {
        const fetchedUser = this.props.fetchedUser;
        const organizations = this.props.organizations;
        console.log(organizations);

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Организации
                </PanelHeader>

                {this.props.fetchedUser &&
                <Group title="User Data Fetched with VK Connect">
                    <ListItem
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </ListItem>
                </Group>}

                <Group title="Организации">
                    <List>
                        <Cell multiline>
                            тестик
                        </Cell>
                    </List>

                    {organizations && organizations.map( (org,i) => (
                        <List key={i}>
                            <Cell multiline>
                                {org[0]}
                            </Cell>
                        </List>
                    ))}

                </Group>
            </Panel>
        );
    }
}

export default MainPanel;
