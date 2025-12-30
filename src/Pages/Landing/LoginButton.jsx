import React from 'react';
import {Button} from "@radix-ui/themes/dist/esm/index.js";

function LoginButton(props) {
    return (
        <>
        {
            props.auth.isAuthenticated ?
        <Button onClick={() => props.auth.removeUser()}>
            Log Out
        </Button>
                :
        <Button onClick={() => props.auth.signinRedirect()}>Login</Button>
        }
        </>
    );
}

export default LoginButton;