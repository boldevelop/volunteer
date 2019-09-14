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
            activeModal: null
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

        this.getOrganizations().then(res => {
            setInterval(() => {
                this.setState({
                    organizations: res.values
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
        const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1X848YaAiDmhD05BkYf-s7Up__I36zrdSBqRKxdBGrFI/values/A2:G`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ya29.GluDB_VPqXKuM5ng34mlllD4U404ZcMHFdT7M7ubOYKg0BvQKYQwHaX5J_ydj0e9qpgvGk7l8EGEAzzq1_iWZGI-mnL1rbSsDMDozBfSbyq1_p_3LTqXBdpgKnqn"
                }
            });
        this.sheetsdata = await request.json();
        console.log(this.sheetsdata);
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
        // const url = `https://volunteervkmini.herokuapp.com/public/api/geolocation/calc/56.473126/84.951845`;
        // const middle = await fetch(url,{
        //     method: "get",
        //     mode: 'no-cors',
        // });
        // console.log(middle);
        // const datares = await middle.text();
        // console.log(datares);
        // if (datares === 'OK') {
        //     this.setActiveModal('access')
        // } else {
        //     this.setActiveModal('access')
        //     // this.setActiveModal('deny')
        // }
        if (data.hasOwnProperty('qr_data')) {
            const coord = data.qr_data.split(',');
            const url = `https://volunteervkmini.herokuapp.com/public/api/geolocation/calc/${coord[0].trim()}/${coord[1].trim()}`;
            const middle = await fetch(url,{
                method: "get",
                mode: 'no-cors',
            });
            console.log(middle);
            const datares = await middle.text();
            console.log(datares);
            if (datares === 'OK') {
                this.setActiveModal('access')
            } else {
                this.setActiveModal('access')
                // this.setActiveModal('deny')
            }
        } else {

        }
    };

    setActiveModal(activeModal) {
        this.setState({
            activeModal: activeModal
        });
    };
}

export default App;
