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
            token: null,
            organizations: null
        };
    }

    componentWillMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({ fetchedUser: e.detail.data });
                    break;
                case 'VKWebAppAccessTokenReceived':
                    alert(e.detail.data.access_token);
                    this.setState({
                        token: e.detail.data.access_token
                    });
                    break;
                case 'VKWebAppAccessTokenFailed':
                    alert(JSON.stringify(e.detail.data.error_data, null, 4));
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
        connect.send('VKWebAppGetUserInfo', {}).then(data => this.getRating());

        this.getOrganizations().then(res => {
            this.setState({
                organizations: res.values
            })
        });
    }

    go = (e) => {
        console.log(e.currentTarget.dataset.to);
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
                    Authorization: "Bearer ya29.GluCB0Pnaksvufs5IU8khmNbovTtJQVkrzz3RN-xfXwPLjUsE3I7WQptFIiP8kNzUafDzQItlmt54AGRwghCbBd6BhN-IQSM8dCCI0-bZphjbfEQMQXOJToCgI_S"
                }
            });
        this.sheetsdata = await request.json();
        console.log(this.sheetsdata);
        return this.sheetsdata;
    };

    getRating = async () => {
        const request = await fetch('');
    };

    checkUserLocation = (data) => {
        if (data.hasOwnProperty('qr_data')) {
            alert(data.qr_data);
        } else {

        }
    }
}

export default App;
