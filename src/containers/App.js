import React, {Component} from 'react';
import { ConfigProvider, Root, View, ModalRoot, ModalCard } from '@vkontakte/vkui';
import VKConnect from '@vkontakte/vkui-connect';
import MainPanel from './MainPanel';
import AboutPanel from "./AboutPanel";
import connect from '@vkontakte/vkui-connect-promise';
import Icon56NotificationOutline from '@vkontakte/icons/dist/56/notification_outline';


const isWebView = VKConnect.isWebView();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'mainPanel',
            fetchedUser: null,
            rating: null,
            organizations: null,
            activeModal: null,
            users: null
        };
    }

    componentWillMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({ fetchedUser: e.detail.data });
                    break;
                case 'VKWebAppOpenQRResult':
                    this.checkUserLocation(e.detail.data);
                    break;
                case 'VKWebAppAccessTokenReceived':
                    this.getOtherUsers(e.detail.data.access_token);
                    break;
                case 'VKWebAppAccessTokenFailed':
                    break;
                case 'VKWebAppCallAPIMethodResult':
                    this.addRatingUsers(e.detail.data.response);
                    break;
                case 'VKWebAppOpenQRFailed':
                    break;
                default:
                    console.log(e.detail.type);
            }
        });

        connect.send("VKWebAppInit", {});
        connect.send('VKWebAppGetUserInfo', {}).then(data => {
            this.getRating();
        });
        connect.send("VKWebAppGetAuthToken", {"app_id": 7133183, "scope": "users.get"});

        this.getOrganizations().then(res => {
            setInterval(() => {
                this.setState({
                    organizations: res
                })
            }, 4000);
        });
    }

    go = (e) => {
        this.setState({ activePanel: e.currentTarget.dataset.to })
    };

    render() {
        return (
            <ConfigProvider insets={this.props.insets} isWebView={isWebView}>
                <Root activeView="mainView">
                    <View id="mainView"
                          activePanel={this.state.activePanel}>
                        <MainPanel
                            fetchedUser={this.state.fetchedUser}
                            id="mainPanel"
                            accessToken={this.props.accessToken}
                            go={this.go}
                            modal={this.checkUserLocation}
                            token={this.state.token}
                            organizations={this.state.organizations}
                            rating={this.state.rating}
                            users={this.state.users}
                        />
                        <AboutPanel
                            id="aboutPanel"
                            go={this.go}/>
                    </View>
                </Root>
                <ModalRoot activeModal={this.state.activeModal}>
                    <ModalCard
                        id='access'
                        onClose={() => this.setActiveModal(null)}
                        icon={<Icon56NotificationOutline />}
                        title="Ваше местоположение подтверждено"
                    >
                    </ModalCard>
                    <ModalCard
                        id='deny'
                        onClose={() => this.setActiveModal(null)}
                        icon={<Icon56NotificationOutline />}
                        title="Не в зоне мероприятия"
                    >
                    </ModalCard>
                </ModalRoot>
            </ConfigProvider>
        );
    }

    getOrganizations = async () => {
        const request = await fetch('https://volunteervkmini.herokuapp.com/public/api/organisation');
        this.sheetsdata = await request.json();
        return this.sheetsdata;
    };

    getRating = async () => {
        setInterval(() => {
            this.setState({
                rating: 3600
            })
        }, 4000);
    };

    checkUserLocation = async data => {
        if (data.hasOwnProperty('qr_data')) {
            const coord = data.qr_data.split(',');
            const url = `https://volunteervkmini.herokuapp.com/public/api/geolocation/calc/${coord[0].trim()}/${coord[1].trim()}`;
            const middle = await fetch(url,{
                method: "get"
            });
            const datares = await middle.text();
            if (datares === 'OK') {
                this.setActiveModal('access')
            } else {
                this.setActiveModal('deny')
            }
        } else {

        }
    };

    setActiveModal(activeModal) {
        this.setState({
            activeModal: activeModal
        });
    };

    getOtherUsers = async (token) => {
        const middle = await fetch('https://volunteervkmini.herokuapp.com/public/api/rating');
        const datares = await middle.json();
        let sendArr = [];
        datares.forEach(user => {
            sendArr.push(user.name)
        });
        this.setState({
            users: datares
        });
        connect.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "32test", "params":
                {"user_ids": sendArr.join(', '), "v":"5.101", "access_token": token,
                    "fields": "photo_200"}});
    };

    addRatingUsers = (arrUsers) => {
        const users = this.state.users;
        arrUsers.forEach((user, i) => {
            users[i].photo = user.photo_200;
            users[i].realName = user.first_name;
        });
        setInterval(() => {
            this.setState({
                users: users
            })
        }, 1000);
    }
}

export default App;
