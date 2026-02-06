import React from 'react';
import {Card, Container, Flex, Grid, Text} from "@radix-ui/themes";
import UserIcon from "~icons/User.svg?react";
import AwardIcon from "~icons/Award.svg?react";
import {API_URL} from "~api/constants.js";

function InfoSection(props) {
    return (
        <Flex width="100%" height="100%" p="4" align="center" justify="center">
            <Card>
                <Flex p="3" direction="column" justify="between" align="center">
                    <Text size="8" mb="4">Org Name</Text>
                    <Container my="4">
                        <img alt="org logo image" src={API_URL+"/org/logo_redirect/"+props.orgId}/>
                    </Container>
                    <Grid columns="2" gap="2">
                        <Text color="gray" width="50%" align="center"><UserIcon/> 1038 Users</Text>
                        <Text color="gray" width="50%" align="center"><AwardIcon/> Pro</Text>
                    </Grid>
                </Flex>
            </Card>
        </Flex>
    );
}

export default InfoSection;