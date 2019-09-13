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
                    Authorization: "Bearer ya29.GluCB3AOomOuAQNL7PhnWk6kF1n2ngJ_3wRpTgtMjglSIYnao8JUfP3GsFP6lGx_lQ19klinlgZ53mYJDFIvBpXgsa-NNlbSI98VzAoI-BFoXooSDQu97nwkk5h0"
                }
            });
        this.sheetsdata = await request.json();
        console.log(this.sheetsdata);
        return this.sheetsdata;
    };

    getRating = async () => {
        const request = await fetch('');
    }
}

export default App;
