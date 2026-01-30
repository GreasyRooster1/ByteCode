import React from 'react';
import {Flex} from "@radix-ui/themes";
import styles from "./navSection.module.css"

function NavSection(props) {
    return (
        <Flex align="center" justify="start" px="2" py="1" m="1" className={styles.section}>
            <span className={styles.iconWrapper}>
                {props.icon}
            </span>
            {props.children}
        </Flex>
    );
}

export default NavSection;