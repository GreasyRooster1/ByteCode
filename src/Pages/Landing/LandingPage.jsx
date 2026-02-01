import React from 'react';
import AuthProvider from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";
import {Button} from "@radix-ui/themes";
import Nav from "~components/Nav.jsx";
import styles from "./landingPage.module.css";
import UIToggle from "~components/UIToggle.jsx";

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>
            <Nav className={styles.nav}>

                <UIToggle value={auth.isAuthenticated}>
                    <UIToggle.True>
                        <Button onClick={() => {
                            auth.signoutRedirect().then(() => {
                                console.log("logged out");
                            })
                        }}>
                            Log Out
                        </Button>
                    </UIToggle.True>
                    <UIToggle.False>
                        <Button onClick={() => auth.signinRedirect()}>Sign up/Login</Button>
                    </UIToggle.False>
                </UIToggle>
                <Button onClick={() => navigate("/home")}>
                    Home
                </Button>
            </Nav>
        </AuthProvider>
    )
}

export default LandingPage;