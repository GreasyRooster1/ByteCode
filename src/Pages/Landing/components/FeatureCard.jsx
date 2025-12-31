import React from 'react';
import {Card,Text,Heading} from "@radix-ui/themes";

function FeatureCard(props) {
    return (
        <Card>
            <Heading>{props.heading}</Heading>
            <br/>
            <Text>{props.sub}</Text>
            {props.children}
        </Card>
    );
}

export default FeatureCard;