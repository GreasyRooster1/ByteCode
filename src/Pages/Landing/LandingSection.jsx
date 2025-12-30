import React from 'react';
import {Box, Flex, Section} from "@radix-ui/themes";
import styles from "./landingSection.module.css";

function LandingSection(props) {
    let bgStyle = "";
    if(props.primary){
        bgStyle = styles.primary
    }else if(props.secondary){
        bgStyle = styles.secondary
    }
    return (
        <Flex
            {...props}
            width="100%"
            height={props.height??"50vh"}
            className={`${bgStyle} ${props.className}`}
        >
            {props.children}
        </Flex>
    );
}

export default LandingSection;