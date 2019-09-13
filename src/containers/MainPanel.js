import React, {Component} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, PanelHeader, List, Cell, Group, ListItem, Avatar} from '@vkontakte/vkui';
import '../components/Organization';
import Organization from "../components/Organization";

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
                    <List>
                    {organizations && organizations.map( (org,i) => (
                        <Organization key={i} info={org}/>
                    ))}
                    </List>
                </Group>
            </Panel>
        );
    }
}

export default MainPanel;
