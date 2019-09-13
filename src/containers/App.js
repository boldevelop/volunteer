import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ConfigProvider, Root, View } from '@vkontakte/vkui';
// import {isWebView} from '@vkontakte/vkui/src/lib/webview.ts';
import vkConnect from '@vkontakte/vk-connect';
import * as vkSelectors from '../store/vk/reducer';
import * as vkActions from '../store/vk/actions';
import MainPanel from './MainPanel';
import { RouteNode } from 'react-router5';

const isWebView = vkConnect.isWebView();

class App extends Component {

    componentWillMount() {
        this.props.dispatch(vkActions.initApp());
    }

    render() {
        let activePanel = this.props.route.name === 'main' ? 'mainPanel' : 'mainPanel';

        return (
            <ConfigProvider insets={this.props.insets} isWebView={isWebView}>
                <Root activeView="mainView">
                    <View id="mainView" activePanel={activePanel}>
                        <MainPanel router={this.props.router} id="mainPanel" accessToken={this.props.accessToken}/>
                    </View>
                </Root>
            </ConfigProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        accessToken: vkSelectors.getAccessToken(state),
        insets: vkSelectors.getInsets(state),
    };
}

export default connect(mapStateToProps)(
    (props) => (
        <RouteNode nodeName="">
            {({ route }) => <App route={route} {...props}/>}
        </RouteNode>
    )
);
