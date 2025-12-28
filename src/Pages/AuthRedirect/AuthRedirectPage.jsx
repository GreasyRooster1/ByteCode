import React from 'react';
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {Navigate} from "react-router-dom";

function AuthRedirectPage() {
    return (
        <>
        <ScreenPage>
            Logging in...
            <Navigate to="/" replace />
        </ScreenPage>
        </>
    );
}

export default AuthRedirectPage;