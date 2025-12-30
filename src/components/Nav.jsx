import React from 'react';
import {Section} from "@radix-ui/themes";
import styles from "./nav.module.css"

function Nav(props) {
    return (
        <div className={`${styles.nav} ${styles.hidden}`} >
            <div className={`${styles.navInner} ${props.className}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Nav;