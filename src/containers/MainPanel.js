import React, {Component} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, PanelHeader, List, Div, Button, Group, ListItem, Avatar} from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Organization from "../components/Organization";
import connect from "@vkontakte/vkui-connect";

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
                        description={fetchedUser.city && fetchedUser.city.title ? `${fetchedUser.city.title} 110 points` : '110 points'}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </ListItem>
                    <Div>
                        <Button before={<Icon24Camera/>} size="l" onClick={() => this.readQRCode()}>Считать QR-code</Button>
                    </Div>
                </Group>}

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
        data.qr_data ?
        alert("Запрос на соседний столик") : alert('нет параметров');
    }
}

export default MainPanel;
