import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';
import { Container, Thumbnail, Header, Body, Content, List, ListItem, Text } from 'native-base';
import Styles from '../constants/Styles';

const ExpensesPage = () => {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem itemDivider style={ {flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#89ce97' }}>
                        <Text style={{ TextAlign: 'left'}}>Child(ren)s</Text>
                        <Body style={{flexDirection: 'row', alignItems: "flex-start", justifyContent: "space-between" }}>
                            <Body style={{ padding: 15 }}>
                                <Thumbnail  source={require('../images/empty_avatar.jpg')} />
                            </Body>
                            <Body style={{ padding: 15 }}>
                                <Thumbnail  source={require('../images/empty_avatar.jpg')} />
                            </Body>
                            <Body style={{ padding: 15 }}>
                                <Thumbnail  source={require('../images/empty_avatar.jpg')} />
                            </Body>
                        </Body>
                    </ListItem>
                    <ListItem  style={Styles.FlexRow}>
                        <Text style={{ marginLeft: 20 }}>lorem ipsum</Text>
                        <Body style={[Styles.FlexRow, {justifyContent: 'flex-end'}]}>
                            <Text style={{ marginLeft: 20 }}>0 $</Text>
                            <Thumbnail source={require('../images/empty_avatar.jpg')} />
                        </Body>
                    </ListItem>
                    <ListItem  style={Styles.FlexRow}>
                        <Text style={{ marginLeft: 20 }}>lorem ipsum</Text>
                        <Body style={[Styles.FlexRow, {justifyContent: 'flex-end'}]}>
                            <Text style={{ marginLeft: 20 }}>0 $</Text>
                            <Thumbnail source={require('../images/empty_avatar.jpg')} />
                        </Body>
                    </ListItem>
                    <ListItem  style={Styles.FlexRow}>
                        <Text style={{ marginLeft: 20 }}>lorem ipsum</Text>
                        <Body style={[Styles.FlexRow, {justifyContent: 'flex-end'}]}>
                            <Text style={{ marginLeft: 20 }}>0 $</Text>
                            <Thumbnail source={require('../images/empty_avatar.jpg')} />
                        </Body>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ExpensesPage;