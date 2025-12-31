import React from 'react';
import {Card, Text, Heading, Box} from "@radix-ui/themes";

function FeatureCard(props) {
    return (
        <Box {...props} height="100%">
            <Card style={{height:"100%"}}>
                <Text size="5" weight="bold">{props.heading}</Text>
                <br/>
                <Text color="gray">{props.sub}</Text>
                {props.children}
            </Card>
        </Box>
    );
}

export default FeatureCard;