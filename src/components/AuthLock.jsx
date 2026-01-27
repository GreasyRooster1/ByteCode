import React from 'react';
import LoadingScreen from "./LoadingScreen.jsx";
import {useAuth} from "react-oidc-context";

function AuthLock(props) {
    const auth = useAuth();

    if (auth.isLoading) {
        return <LoadingScreen />;
    }

    if (auth.error) {
        //todo error screen
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if(props.check){
        if(props.check(auth)&&auth.isAuthenticated){
            return props.children;
        }else{
            return auth.signinRedirect();
        }
    }

    if(auth.isAuthenticated) {
        return props.children;
    }else{
        return auth.signinRedirect();
    }
}

export default AuthLock;