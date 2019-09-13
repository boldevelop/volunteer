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
    Separator
} from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Organization from "../components/Organization";
import connect from "@vkontakte/vkui-connect";
import './MainPanel.css';

class MainPanel extends Component {

    componentWillMount() {
    }

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    console.log(e.detail.data);
                    //this.setState({fetchedUser: e.detail.data});
                    break;
                case 'VKWebAppAccessTokenReceived':
                    console.log(e.detail.data.access_token);
                    //this.setState({authToken: e.detail.data.access_token});
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetAuthToken', {'app_id': 7133183, 'scope': 'friends,status,messages'});
    }

    message() {
        //connect.send('VKWebAppGetAuthToken', {"app_id": 7133183, "scope": "friends,status,messages"});   
        connect.subscribe((e) => {
            console.log(e);
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
                    <Cell> <Button before={<Icon24Camera/>} size="l" onClick={() => this.readQRCode()}>Считать QR-code</Button></Cell>
                    <Separator/>
                    <Cell before={<Icon24FavoriteOutline className="rating" />}><span className="rating">1670</span></Cell>
                </Group>}

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
