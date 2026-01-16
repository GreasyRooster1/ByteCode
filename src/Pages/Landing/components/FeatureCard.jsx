import React from 'react';
import {Box, Text} from "@radix-ui/themes";
import styles from "./featureCard.module.css";

function FeatureCard(props) {
    return (
        <Box {...props} className={`${styles.card} ${props.className} ${styles.glow}`} height="100%">
            <div className={styles.text}>
                <Text size="5" weight="bold">{props.heading}</Text>
                <br/>
                <Text color="gray">{props.sub}</Text><br/><br/><br/>
            </div>
            {props.children}

        </Box>
    );
}

export default FeatureCard;