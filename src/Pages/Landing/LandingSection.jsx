import React from 'react';
import {Flex} from "@radix-ui/themes";
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
            width={{sm:"100%",md:"70%"}}
            height={props.height??"70vh"}
            justify="center"
            className={`${styles.section} ${bgStyle} ${props.className}`}
        >
            {props.children}
        </Flex>
    );
}

export default LandingSection;