import React from 'react';
import { Container,Content, ListItem, Text } from 'native-base';

const HelpPage = () => {
    return (
        <Container style={{ paddingBottom: 20 }}>
            <Content style={{ paddingBottom: 10 + '%' }}>
                <ListItem bordered>
                    <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </ListItem>
                <ListItem bordered>
                    <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </ListItem>
                <ListItem bordered>
                    <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </ListItem>
            </Content>
        </Container>
    );
}

export default HelpPage;