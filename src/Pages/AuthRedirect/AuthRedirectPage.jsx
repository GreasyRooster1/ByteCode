import React from 'react';
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {Navigate} from "react-router-dom";
import {AuthProvider, useAuth} from "react-oidc-context";
import LoadingScreen from "~components/LoadingScreen.jsx";
import Error from "~components/Error.jsx";

function AuthRedirectPage() {
    const auth = useAuth();

    if (auth.isLoading) {
        return <LoadingScreen message={"Logging you in..."}/>;
    }

    if (auth.error) {
        //todo error screen
        return <Error message={"Failed to login!"}/>
    }

    if(auth.isAuthenticated) {
        return (
            <Navigate to="/" replace />
        );
    }else{
        return auth.signinRedirect();
    }

}

export default AuthRedirectPage;