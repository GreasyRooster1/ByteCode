import React from 'react';
import {useParams} from "react-router-dom";
import AuthLock from "~components/AuthLock.jsx";
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {net} from "~api/net/net.js";
import {Flex} from "@radix-ui/themes";
import UserIcon from "../../icons/User.svg?react"


import styles from "./orgAdmin.module.css";
import NavSection from "~/Pages/OrgAdmin/NavSection.jsx";


function OrgAdmin(props) {
    const params = useParams();
    const orgId = params.orgId;
    return (
        <AuthLock check={async (auth)=>{
            return await net.org.isAdmin(auth.user?.access_token,[orgId],undefined)
        }}>
            <ScreenPage>

                <Flex direction="row">
                    <Flex direction="column" width="10%" height="100vh" className={styles.nav}>
                        <NavSection icon={(<UserIcon />)}>Users</NavSection>
                    </Flex>
                    <Flex  className={styles.main}>

                    </Flex>
                </Flex>

            </ScreenPage>
        </AuthLock>
    );
}

export default OrgAdmin;