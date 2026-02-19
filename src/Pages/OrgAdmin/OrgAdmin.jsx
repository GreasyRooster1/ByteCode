import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import AuthLock from "~components/AuthLock.jsx";
import ScreenPage from "~components/screenPage/ScreenPage.jsx";
import {net} from "~api/net/net.js";
import {Flex, Separator, Text} from "@radix-ui/themes";
import UserIcon from "~icons/User.svg?react"
import BookOpenIcon from "~icons/BookOpen.svg?react"
import AwardIcon from "~icons/Award.svg?react";
import HomeIcon from "~icons/HomeAdmin.svg?react";


import styles from "./orgAdmin.module.css";
import NavSection from "~/Pages/OrgAdmin/NavSection.jsx";
import UISwitch from "~components/UISwitch.jsx";
import InfoSection from "~/Pages/OrgAdmin/InfoSection.jsx";
import UsersSection from "~/Pages/OrgAdmin/UsersSection.jsx";


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
                    <Flex direction="column" width={{md:"20%",lg:"15%",xl:"10%"}} height="100vh" className={styles.nav}>
                        <Flex align="center" justify="start" p="3">
                            <img src="/logo.svg" alt="logo" width="48px"/>
                            <Flex direction="column" ml="3">
                                <Text size="2">ByteCode</Text>
                                <Text size="1" color="gray">Org Admin</Text>
                            </Flex>
                        </Flex>
                        <Flex align="center" justify="center" width="100%"><Separator size="4" my="2" mx="2" /></Flex>
                        <NavSection icon={(<HomeIcon />)} id={"info"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Info</NavSection>
                        <NavSection icon={(<UserIcon />)} id={"users"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Users</NavSection>
                        <NavSection icon={(<BookOpenIcon />)} id={"classes"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Classes</NavSection>
                        <NavSection icon={(<AwardIcon />)} id={"subscription"} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>Subscription</NavSection>
                    </Flex>
                    <Flex className={styles.main}>
                        <UISwitch value={selectedTab}>

                            <UISwitch.Option id="info">
                                <InfoSection orgId={orgId}/>
                            </UISwitch.Option>

                            <UISwitch.Option id="users">
                                <UsersSection orgId={orgId}/>
                            </UISwitch.Option>

                            <UISwitch.Option id="classes">
                                classes
                            </UISwitch.Option>

                            <UISwitch.Option id="subscription">
                                subscription
                            </UISwitch.Option>

                        </UISwitch>
                    </Flex>
                </Flex>

            </ScreenPage>
        </AuthLock>
    );
}

export default OrgAdmin;