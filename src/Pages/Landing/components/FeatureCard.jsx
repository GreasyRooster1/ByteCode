import React from 'react';
import {Box, Card, Text} from "@radix-ui/themes";
import styles from "./featureCard.module.css";

function FeatureCard(props) {
    return (
        <Box {...props} className={`${styles.cardbox} ${props.className} ${styles.glow}`} height="100%">
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