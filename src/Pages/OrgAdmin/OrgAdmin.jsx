import React from 'react';
import {useParams} from "react-router-dom";


function OrgAdmin(props) {
    const params = useParams();

    console.log(params)
    return (
        <div>
            Viewing user profile for ID: {params.orgid}
        </div>
    );
    // return (
    //     <AuthLock check={async (auth)=>{
    //         return await net.org.isAdmin(auth.user?.access_token,[],undefined)
    //     }}>
    //         <ScreenPage>
    //             org admin
    //         </ScreenPage>
    //     </AuthLock>
    // );
}

export default OrgAdmin;