import React from 'react';
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import AuthLock from "~components/AuthLock.jsx";

function OrgAdmin(props) {
    return (
        <AuthLock>
            <ScreenPage>
                org admin
            </ScreenPage>
        </AuthLock>
    );
}

export default OrgAdmin;