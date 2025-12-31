import React from 'react';
import {Card, Text, Heading, Box} from "@radix-ui/themes";

function FeatureCard(props) {
    return (
        <Box {...props} height="100%">
            <Card style={{height:"100%"}}>
                <Heading>{props.heading}</Heading>
                <br/>
                <Text>{props.sub}</Text>
                {props.children}
            </Card>
        </Box>
    );
}

export default FeatureCard;