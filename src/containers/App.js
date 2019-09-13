import React, {Component} from 'react';
import { ConfigProvider, Root, View } from '@vkontakte/vkui';
import vkConnect from '@vkontakte/vk-connect';
import MainPanel from './MainPanel';
import connect from "@vkontakte/vkui-connect";

const isWebView = vkConnect.isWebView();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'mainPanel',
            fetchedUser: null,
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
        connect.send('VKWebAppGetUserInfo', {});

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
                          activePanel="mainPanel">
                        <MainPanel
                            fetchedUser={this.state.fetchedUser}
                            id="mainPanel"
                            accessToken={this.props.accessToken}
                            go={this.go}
                            organizations={this.state.organizations}
                        />
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
                    Authorization: "Bearer ya29.Il-CB5eOPVZN_M9GiLTGLlBqXeeALa2h7IQ0SSHYaXF7jL35zi7dBIANvusXJPP5KLoto6kn-l-8a7upsi1I_dLxI0aYNjw-Ie6vf0290ldq4OsOe8nWHtnnUuNyFQn1dw"
                }
            });
        this.sheetsdata = await request.json();
        console.log(this.sheetsdata);
        return this.sheetsdata;
    }
}

export default App;
