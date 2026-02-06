import React from 'react';
import {Card, Container, Flex, Text} from "@radix-ui/themes";
import UserIcon from "~icons/User.svg?react";
import AwardIcon from "~icons/Award.svg?react";

function InfoSection(props) {
    return (
        <Flex width="100%" height="100%" p="4" align="center" justify="center">
            <Card>
                <Text size="8">Org Name</Text>
                <Container><img src=""/></Container>
                <Flex>
                    <Text color="gray"><UserIcon/> 1038 Users</Text>
                    <Text color="gray"><AwardIcon/> Pro</Text>
                </Flex>
            </Card>
        </Flex>
    );
}

export default InfoSection;