import React from 'react';
import {Card} from "@radix-ui/themes";
import {Heading} from "@radix-ui/themes/dist/esm/index.d.ts";

function FeatureCard(props) {
    return (
        <Card>
            <Heading>{props.heading}</Heading>
            <br/>
            <Text>{props.subHead}</Text>
            {props.children}
        </Card>
    );
}

export default FeatureCard;