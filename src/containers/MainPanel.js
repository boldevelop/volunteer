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
import connect from "@vkontakte/vkui-connect";
import './MainPanel.css';

class MainPanel extends Component {

    componentWillMount() {
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
                        <Button size="xl" level="2" onClick={this.props.go} data-to="aboutPanel">
                            Туториал
                        </Button>
                    </Div>
                </Group>

                <Group title="Организации">
                    <List>
                    {organizations && organizations.map( (org,i) => (
                        <Organization key={i} info={org}/>
                    ))}
                    </List>
                </Group>
            </Panel>
        );
    }

    readQRCode = () => {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppOpenQRResult':
                    this.checkUserLocation(e.detail.data);
                    break;
                case 'VKWebAppOpenQRFailed':
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send("VKWebAppOpenQR", {});
    };

    checkUserLocation = (data) => {
        if (data.hasOwnProperty('qr_data')) {

        } else {

        }
    }
}

export default MainPanel;
