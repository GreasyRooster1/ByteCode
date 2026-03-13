import React from 'react';
import styles from "./pending.module.css"
import ScreenPage from "./screenPage/ScreenPage.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

function Pending(props) {
    if(!props.requestState){
        if(props.isLoading) {
            return <Loading />;
        }
        return props.children;
    }
    if(props.requestState.isError) {
        return <Error message={props.showError?props.requestState.error:undefined} />;
    }
    if(props.requestState.isLoading||props.isLoading) {
        return <Loading />;
    }

    return props.children;
}

export default Pending;