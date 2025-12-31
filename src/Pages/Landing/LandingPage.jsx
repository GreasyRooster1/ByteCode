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

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>
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

            <LandingSection height="80vh" justify="center" align="center">
                <MatrixBG />
                <Flex width="80%" height="80%" direction="column" align="center" justify="center">
                    <Text size="9" weight="bold"><TypedText text={"ByteCode"} delay={90} raw/><Blinker><span>_</span></Blinker></Text>
                    <br />
                    <Text size="7" weight="bold">Learn coding one <Code weight="bold" color={"purple"}>byte</Code> at a time</Text>
                    <br /><br />
                    <Button size="3" variant="outline">Get Started</Button>
                </Flex>
            </LandingSection>

            <LandingSection height="20vh" justify="center" align="center" direction="column" className={styles.moreInfo}>
                <Text size="7" weight="bold">More Info</Text>
                <Text size="5" weight="bold">V</Text>
            </LandingSection>

            <LandingSection secondary>
                <Flex width="100%" direction="column" align="center" justify="between">
                <Heading>How it works</Heading>
                <br/>
                <Grid columns={{sm:"1",md:"3"}} gap={{initial:"3",sm:"5",lg:"7"}} width="100%" flexGrow="1" style={{ padding: "2%" }}>
                    <Card>
                        <Heading>Built in lesson plans</Heading>
                        <br/>
                    </Card>
                    <Card>
                        <Heading>Built in lesson plans</Heading>
                        <br/>
                    </Card>
                    <Card>
                        <Heading>Built in lesson plans</Heading>
                        <br/>
                    </Card>
                </Grid>
                </Flex>
            </LandingSection>
        </AuthProvider>
    )
}

export default LandingPage;