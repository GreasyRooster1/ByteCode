import React from 'react';
import AuthProvider from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";
import {Button, Flex, Text} from "@radix-ui/themes";
import Nav from "~components/Nav.jsx";
import styles from "./landingPage.module.css";
import UiSwitch from "~components/UISwitch.jsx";
import LandingSection from "~/Pages/Landing/LandingSection.jsx";
import TextScroll from "~/Pages/Landing/components/TextScroll.jsx";

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

            <LandingSection height="80vh" justify="center" align="center" primary>
                <Flex width="80%" height="80%" direction="column">
                    <Text size="9" weight="bold">Bytecode,</Text>
                    <Text size="7" weight="bold">Learn coding one byte at a time</Text>
                </Flex>
            </LandingSection>

            <LandingSection height="10vh" justify="center">
                <Text size="7" weight="bold">More Info</Text>
            </LandingSection>

            <LandingSection>
                section 3
            </LandingSection>
        </AuthProvider>
    )
}

export default LandingPage;