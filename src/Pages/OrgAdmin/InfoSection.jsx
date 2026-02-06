import React from 'react';
import {Card, Container, Flex, Text} from "@radix-ui/themes";

function InfoSection(props) {
    return (
        <Flex width="100%" height="100%" p="4" align="center" justify="center">
            <Card>
                <Text size="8">Org Name</Text>
                <Container><img src=""/></Container>
            </Card>
        </Flex>
    );
}

export default InfoSection;