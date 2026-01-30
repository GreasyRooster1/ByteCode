import React from 'react';
import {useParams} from "react-router-dom";
import AuthLock from "~components/AuthLock.jsx";
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {net} from "~api/net/net.js";
import {Flex} from "@radix-ui/themes";

import styles from "./orgAdmin.module.css";


function OrgAdmin(props) {
    const params = useParams();
    const orgId = params.orgId;
    return (
        <AuthLock check={async (auth)=>{
            return await net.org.isAdmin(auth.user?.access_token,[orgId],undefined)
        }}>
            <ScreenPage>

                <Flex direction="row">
                    <Flex p="4" height="100vh" className={styles.nav}>
                        s
                    </Flex>
                    <Flex  className={styles.main}>

                    </Flex>
                </Flex>

            </ScreenPage>
        </AuthLock>
    );
}

export default OrgAdmin;