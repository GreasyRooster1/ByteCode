import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import AuthLock from "~components/AuthLock.jsx";
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {net} from "~api/net/net.js";
import {Flex, Separator} from "@radix-ui/themes";
import UserIcon from "../../icons/User.svg?react"


import styles from "./orgAdmin.module.css";
import NavSection from "~/Pages/OrgAdmin/NavSection.jsx";


function OrgAdmin(props) {
    const params = useParams();
    const orgId = params.orgId;
    const [selectedTab, setSelectedTab] = useState("info");

    return (
        <AuthLock check={async (auth)=>{
            return await net.org.isAdmin(auth.user?.access_token,[orgId],undefined)
        }}>
            <ScreenPage>

                <Flex direction="row">
                    <Flex direction="column" width="10%" height="100vh" className={styles.nav}>
                        <NavSection icon={(<UserIcon />)} id={"info"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Info</NavSection>
                        <Separator />
                        <NavSection icon={(<UserIcon />)} id={"users"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Users</NavSection>
                        <NavSection icon={(<UserIcon />)} id={"classes"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Classes</NavSection>
                        <NavSection icon={(<UserIcon />)} id={"subscription"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Subscription</NavSection>
                    </Flex>
                    <Flex  className={styles.main}>

                    </Flex>
                </Flex>

            </ScreenPage>
        </AuthLock>
    );
}

export default OrgAdmin;