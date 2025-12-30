import React from 'react';
import styles from "./pending.module.css"
import ScreenPage from "./screenPage/ScreenPage.jsx";

function Loading(props) {
    return (
        <div className={styles.textContainer}>
            <span className={styles.textNorm}>
                {props.message??"Loading..."}
            </span>
        </div>
    );
}

export default Loading;