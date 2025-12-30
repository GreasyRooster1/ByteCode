import React, {useEffect, useState} from 'react';
import {Section} from "@radix-ui/themes";
import styles from "./nav.module.css"

function Nav(props) {
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    let isVisible = scrollPosition < 10;

    return (
        <div className={`${styles.nav} ${isVisible?styles.hidden:""}`} >
            <div className={`${styles.navInner} ${props.className}`}>
                {props.children}
            </div>
        </div>
    );
}

export default Nav;