import React from 'react';
import {Box, Flex, Section} from "@radix-ui/themes";
import styles from "./landingSection.module.css";

function LandingSection(props) {
    let primaryStyle = props.primary?styles.primary:styles.secondary;
    return (
        <Flex
            {...props}
            width="100%"
            height={props.height??"50vh"}
            className={`${primaryStyle} ${props.className}`}
        >
            {props.children}
        </Flex>
    );
}

export default LandingSection;