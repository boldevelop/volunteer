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
    Separator,
    Div
} from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Organization from "../components/Organization";
import Rating from "../components/Rating";
import connect from '@vkontakte/vkui-connect-promise';
import './MainPanel.css';

class MainPanel extends Component {

    componentDidMount() {
    }

    render() {
        const fetchedUser = this.props.fetchedUser;
        const organizations = this.props.organizations;
        const rating = this.props.rating;
        const go = this.props.go;

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Ez Volunteers
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

                {fetchedUser && <Group>
                    <Cell><Button before={<Icon24Camera/>} size="l" onClick={() => this.readQRCode()}>Считать QR-code</Button></Cell>
                    <Separator/>
                    <Rating rating={rating} />
                </Group>}

                <Group>
                    <Div>
                        <Button size="xl" level="2" onClick={go} data-to="aboutPanel">
                            Туториал
                        </Button>
                        <Button onClick={this.props.modal}>gogogogo</Button>
                    </Div>
                </Group>

                <Group title="Организации">
                    <List>
                    {organizations ? organizations.map( (org,i) => (
                        <Organization key={i} info={org}/>
                    )) :
                        <>
                            <Cell className="load" multiline>
                                <Div className="load-div"/>
                            </Cell>

                            <Cell className="load" multiline>
                                <Div className="load-div"/>
                            </Cell>

                            <Cell className="load" multiline>
                                <Div className="load-div"/>
                            </Cell>

                            <Cell className="load" multiline>
                                <Div className="load-div"/>
                            </Cell>
                        </>
                    }

                    </List>
                </Group>
            </Panel>
        );
    }

    readQRCode = () => {
        connect.send("VKWebAppOpenQR", {});
    };
}

export default MainPanel;
