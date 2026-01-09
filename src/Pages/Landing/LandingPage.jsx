import React from 'react';
import AuthProvider from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";
import {Box, Button, Card, Code, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import Nav from "~components/Nav.jsx";
import styles from "./landingPage.module.css";
import UiSwitch from "~components/UISwitch.jsx";
import LandingSection from "~/Pages/Landing/LandingSection.jsx";
import TextScroll from "~/Pages/Landing/components/TextScroll.jsx";
import MatrixBG from "~/Pages/Landing/components/MatrixBG.jsx";
import TypedText from "~components/text/TypedText.jsx";
import Blinker from "~components/Blinker.jsx";
import FeatureCard from "~/Pages/Landing/components/FeatureCard.jsx";
import { motion } from "motion/react"

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>

            <LandingSection height="90vh" justify="center" align="center">
                <MatrixBG />
                <Flex width="80%" height="80%" direction="column" align="center" justify="center">
                    <Text size="9" weight="bold"><TypedText text={"ByteCode"} delay={90} raw/><Blinker><span>_</span></Blinker></Text>
                    <br />
                    <Text size="7" weight="bold" align="center">Learn coding one <Code weight="bold" color={"purple"}>byte</Code> at a time</Text>
                    <br /><br />
                    <Button size="3" variant="outline">Get Started</Button>
                    {/*<Text size="6" color="purple">Coming Soon...</Text>*/}
                </Flex>
            </LandingSection>

            <LandingSection height="10vh" justify="end" align="center" direction="column" className={styles.moreInfo}>
                <Text size="5" weight="bold">More Info</Text>
                <Text size="4" weight="bold">V</Text>
            </LandingSection>


            <LandingSection height="100vh" secondary>
                <Flex width="100%" direction="column" align="center" justify="between">
                    <Heading>How it works</Heading>
                    <br/>
                    <Grid columns={{sm:"1",md:"2",lg:"3"}} gap={{initial:"3",sm:"5",lg:"7"}} width="100%" height="100%" flexGrow="1" style={{ padding: "2%" }}>
                        <FeatureCard
                            gridColumn={{md:"unset", lg:"1 / 3"}}
                            heading="Built in code editor"
                            sub="Students never need to leave the browser"
                        >

                        </FeatureCard>

                        <FeatureCard
                            heading="Adaptive pacing"
                            sub="Students follow lessons at their own pace"
                        >

                        </FeatureCard>

                        <FeatureCard
                            heading="Language support"
                            sub="We support a variety of popular languages to teach with"
                        >

                        </FeatureCard>

                        <FeatureCard
                            gridColumn={{md:"unset", lg:"2 / 4"}}
                            heading="Ready to go lesson plans"
                            sub="Follow a premade curriculum designed to teach effectively"
                        >

                        </FeatureCard>
                    </Grid>
                </Flex>
            </LandingSection>

            <LandingSection>
                <Flex width="100%" direction="column" align="center" justify="between">
                    <Heading>Tested on real students</Heading>
                </Flex>
            </LandingSection>

            <LandingSection>
                section 4
            </LandingSection>

            <Nav className={styles.nav}>
                <UiSwitch value={auth.isAuthenticated}>
                    <UiSwitch.True>
                        <Button onClick={() => {
                            localStorage.clear();
                            sessionStorage.clear();
                            window.location.reload();
                            auth.signoutRedirect();
                        }}>
                            Log Out
                        </Button>
                    </UiSwitch.True>
                    <UiSwitch.False>
                        <Button onClick={() => auth.signinRedirect()}>Sign up/Login</Button>
                    </UiSwitch.False>
                </UiSwitch>

                <Text size="4">ByteCode</Text>

                <Button onClick={() => navigate("/home")}>
                    Home
                </Button>
            </Nav>
        </AuthProvider>
    )
}

export default LandingPage;