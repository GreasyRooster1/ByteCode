import React from 'react';
import styles from "./pending.module.css"
import ScreenPage from "./screenPage/ScreenPage.jsx";

function LoadingScreen(props) {
    return (
        <ScreenPage className={styles.background}>
            <div className={styles.textContainer}>
                <span className={styles.text}>
                    {props.message??"Loading..."}
                </span>
            </div>
        </ScreenPage>
    );
}

export default LoadingScreen;