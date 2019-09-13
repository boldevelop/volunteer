import React, {Component} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {
    Panel,
    PanelHeader,
    List,
    Button,
    Group,
    ListItem,
    Avatar,
    Cell,
    Separator, Div
} from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Organization from "../components/Organization";
import Rating from "../components/Rating";
import connect from '@vkontakte/vkui-connect-promise';
import './MainPanel.css';

class MainPanel extends Component {

    componentDidMount() {
    }

    message() {
        connect.send('VKWebAppGetAuthToken', {'app_id': 7133183, 'scope': 'messages'})
            .then(res => {
                this.setState({
                    token: this.props.token
                });
            });
    }

    render() {
        const fetchedUser = this.props.fetchedUser;
        const organizations = this.props.organizations;

        return (
            <Panel id={this.props.id}>
                <PanelHeader>

                </PanelHeader>

                {this.props.fetchedUser &&
                <Group title="">
                    <ListItem
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? `${fetchedUser.city.title}` : ''}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </ListItem>
                </Group>}

                {this.props.fetchedUser && <Group>
                    <Cell><Button before={<Icon24Camera/>} size="l" onClick={() => this.readQRCode()}>Считать QR-code</Button></Cell>
                    <Separator/>
                    <Rating rating={this.props.rating} />
                </Group>}

                <Group>
                    <Div>
                        {this.props.token ? this.props.token : 'token'}
                        <Button size="xl" level="2" onClick={this.props.go} data-to="aboutPanel">
                            Туториал
                        </Button>
                    </Div>
                </Group>

                <Group title="Организации">
                    <List>
                    {organizations && organizations.map( (org,i) => (
                        <Organization key={i} info={org} message={this.message}/>
                    ))}
                    </List>
                </Group>
            </Panel>
        );
    }

    readQRCode = () => {
        connect.send("VKWebAppOpenQR", {});
    };
}

export default MainPanel;
