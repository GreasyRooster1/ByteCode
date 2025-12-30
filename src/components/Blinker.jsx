import React, {useEffect, useState} from 'react';

function Blinker(props) {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const toggle=()=>{
            setVisible((v)=>!v);
        }

        let intervalId=setInterval(toggle,props.delay??1000)

        return () => {
            if(intervalId) clearInterval(intervalId);
        }
    }, []);

    return (
        <span style={{opacity:isVisible?'1':'0'}}>
            {props.children}
        </span>
    );
}

export default Blinker;