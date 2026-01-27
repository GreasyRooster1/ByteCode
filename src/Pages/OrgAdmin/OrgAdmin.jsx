import React from 'react';
import {useParams} from "react-router-dom";
import AuthLock from "~components/AuthLock.jsx";
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {net} from "~api/net/net.js";


function OrgAdmin(props) {
    const params = useParams();
    const orgId = params.orgId;
    return (
        <AuthLock check={async (auth)=>{
            return await net.org.isAdmin(auth.user?.access_token,[orgId],undefined)
        }}>
            <ScreenPage>
                org admin
            </ScreenPage>
        </AuthLock>
    );
}

export default OrgAdmin;