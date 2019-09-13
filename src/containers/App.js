import React, {Component} from 'react';
import { ConfigProvider, Root, View } from '@vkontakte/vkui';
import vkConnect from '@vkontakte/vk-connect';
import MainPanel from './MainPanel';
import AboutPanel from "./AboutPanel";
import connect from '@vkontakte/vkui-connect-promise';

const isWebView = vkConnect.isWebView();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'mainPanel',
            fetchedUser: null,
            rating: null,
            organizations: null
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
        connect.send('VKWebAppGetUserInfo', {}).then(data => {
            this.getRating();
        });

        this.getOrganizations().then(res => {
            this.setState({
                organizations: res.values
            })
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
                            token={this.state.token}
                            organizations={this.state.organizations}
                            rating={this.state.rating}
                        />
                        <AboutPanel
                            id="aboutPanel"
                            go={this.go}/>
                    </View>
                </Root>
            </ConfigProvider>
        );
    }

    getOrganizations = async () => {
        const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1X848YaAiDmhD05BkYf-s7Up__I36zrdSBqRKxdBGrFI/values/A2:G`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ya29.GluCB_EwfUueFRaPMKUXKJc8dCyGn4SYyC1dCSOuOyvsMMiqfnecP-qLzuW5kOPab7-ynE98N-KEKRitd0yqMQRSpIXlfBWOn5UBrj4vG_0X8oaTyhy1G-n9MNi1"
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
        const request = await fetch('');
    };

    checkUserLocation = async data => {
        if (data.hasOwnProperty('qr_data')) {
            const coord = data.qr_data.split(',');
            const url = `https://kritbots.ru/${coord[0].trim()}/${coord[1].trim()}`;
            alert(url);
            await fetch(url).then(res => {
                console.log(res);
                // if (res === 'OK') {
                //
                // }
            })
        } else {

        }
    }
}

export default App;
