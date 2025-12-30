import React, {useEffect, useState} from 'react';
import styles from "./typedText.module.css"

function TypedText(props) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = props.delay??30;

    useEffect(() => {
        if(props.disableAnim){
            return;
        }

        if (currentIndex < props.text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + props.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }

    }, [currentIndex, delay, props.disableAnim]);

    useEffect(() => {
        setCurrentIndex(0);
        setCurrentText("");
    },[props.text])

    if(props.raw){
        return (<>{currentText}</>);
    }

    if(props.fade){
        return (<span className={`${props.className}`}>{
            currentText.split("").map((letter,index) =>
                (<span key={index} className={styles.fadeIn}>{letter}</span>)
            )
        }</span>)
    }else {
        return (
            <span className={`${props.className}`}>{currentText}</span>
        );
    }
}

export default TypedText;