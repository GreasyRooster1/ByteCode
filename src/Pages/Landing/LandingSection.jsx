import React from 'react';
import {Box, Section} from "@radix-ui/themes";
import styles from "./landingSection.module.scss";

function LandingSection(props) {
    let isPrimaryStyle = props.isPrimary?styles.primary:styles.secondary;
    return (
        <Box
            width="100vh"
            height="50vh"
            className={`${isPrimaryStyle} ${props.className}`}
            {...props}
        >
            {props.children}
        </Box>
    );
}

export default LandingSection;