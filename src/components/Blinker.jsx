import React, {useEffect, useState} from 'react';

function Blinker(props) {
    const [isVisible, setVisible] = useState(false);
    let intervalId = null;
    useEffect(() => {
        const toggle=()=>{
            setVisible(!isVisible);
        }

        intervalId=setInterval(toggle,props.delay??100)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            {isVisible && <>{props.children}</>}
        </>
    );
}

export default Blinker;