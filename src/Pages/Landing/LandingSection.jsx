import React from 'react';
import {Box, Section} from "@radix-ui/themes";
import styles from "./landingSection.module.css";

function LandingSection(props) {
    let primaryStyle = props.primary?styles.primary:styles.secondary;
    return (
        <Box
            {...props}
            width="100vw"
            height="50vh"
            className={`${primaryStyle} ${props.className}`}
        >
            {props.children}
        </Box>
    );
}

export default LandingSection;