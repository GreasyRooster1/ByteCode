import React from 'react';
import {Section} from "@radix-ui/themes";
import styles from "./nav.module.css"

function Nav(props) {
    return (
        <div {...props} className={`${styles.nav} ${props.className}`} >

        </div>
    );
}

export default Nav;