import React from 'react';
import {Card, Text, Heading, Box} from "@radix-ui/themes";
import styles from "./featureCard.module.css";

function FeatureCard(props) {
    return (
        <Box {...props} height="100%">
            <Card className={styles.card}>
                <Text size="5" weight="bold">{props.heading}</Text>
                <br/>
                <Text color="gray">{props.sub}</Text>
                {props.children}
            </Card>
        </Box>
    );
}

export default FeatureCard;