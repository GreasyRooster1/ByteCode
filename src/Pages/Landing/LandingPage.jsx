import React from 'react';
import AuthProvider from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";
import {Button, Code, Container, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import Nav from "~components/Nav.jsx";
import styles from "./landingPage.module.css";
import UiSwitch from "~components/UISwitch.jsx";
import LandingSection from "~/Pages/Landing/LandingSection.jsx";
import MatrixBG from "~/Pages/Landing/components/MatrixBG.jsx";
import TypedText from "~components/text/TypedText.jsx";
import Blinker from "~components/Blinker.jsx";
import FeatureCard from "~/Pages/Landing/components/FeatureCard.jsx";
import JsGraphic from "~/Pages/Landing/components/JsGraphic.jsx";
import EditorGraphic from "~/Pages/Landing/components/EditorGraphic.jsx";

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>

            <LandingSection height="70vh" justify="center" align="center">
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

            <LandingSection height="30vh" justify="end" align="center" direction="column" className={styles.moreInfo}>
                {/*<Text size="5" weight="bold">More Info</Text>*/}
                {/*<Text size="4" weight="bold">V</Text>*/}
            </LandingSection>

            <LandingSection height="80vh" secondary>
                <Flex p="9" width="100%" height="100%" direction="row" align="center" justify="between">
                    <Flex width="50%">
                        <Heading size="8">Who is ByteCode Made For?</Heading>
                    </Flex>
                    <Flex width="50%" height="100%" direction="column" align="center" justify="between">
                        <div>
                            <Heading size="6">Schools</Heading>
                            <Text>ByteCode lessons provide a well defined and rigorous course plan for teachers to follow</Text>
                            <Text>Our editor allows students to have all their projects in one place, without ever needing to leave the browser</Text>
                        </div>
                        <div>
                            <Heading size="6">Extracurricular</Heading>
                            <Text>ByteCode lessons also provide a course structure for at-your-own-pace learning, perfect for after school programs or clubs</Text>
                        </div>
                        <div>
                            <Heading size="6">Individuals</Heading>
                            <Text>Individuals can also learn with ByteCode. Follow lessons at your own pace, solve challenging programming problems, and make projects to learn programming</Text>
                        </div>
                    </Flex>
                </Flex>
            </LandingSection>

            <LandingSection height={{initial:"200vh",sm:"100vh",lg:"120vh"}} secondary>
                <Flex width={{initial:"100%",lg:"80%"}} direction="column" align="center" justify="between">
                    <Heading size="8">How it works</Heading>
                    <br/>
                    <Grid columns={{initial:"1",sm:"2",lg:"2"}}  gap={{initial:"5",lg:"7"}} width="100%" height="100%" flexGrow="1" style={{ padding: "2%" }}>
                        <FeatureCard
                            // gridColumn={{md:"unset", lg:"1 / 3"}}
                            heading="Built in code editor"
                            sub="Students never need to leave the browser"
                        >
                            <EditorGraphic className={styles.graphic}/>
                        </FeatureCard>

                        <FeatureCard
                            heading="Adaptive pacing"
                            sub="Course flow can adapt to any level of programmer"
                        >
                            <JsGraphic className={styles.graphic}/>
                        </FeatureCard>

                        <FeatureCard
                            heading="Language support"
                            sub="We support the largest programming langauge in real world jobs: JavaScript"
                        >
                            <JsGraphic className={styles.graphic}/>
                        </FeatureCard>

                        <FeatureCard
                            // gridColumn={{md:"unset", lg:"2 / 4"}}
                            heading="Ready to go lesson plans"
                            sub="Follow a premade curriculum designed to teach effectively"
                        >
                            <EditorGraphic className={styles.graphic}/>
                        </FeatureCard>
                    </Grid>
                </Flex>
            </LandingSection>

            <LandingSection secondary>
                <Flex width="100%" direction="column" align="center" justify="between">
                    <Container>
                        <Heading align="center" size="8">Our Mission</Heading>
                        <Text>
                            lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem
                        </Text>
                    </Container>
                </Flex>
            </LandingSection>

            <LandingSection secondary>
                <Flex width="100%" direction="column" align="center" justify="between">
                    <Heading size="8">Tested on real students</Heading>
                </Flex>
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