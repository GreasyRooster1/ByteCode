import React, {useState} from 'react';
import {DropdownMenu, IconButton, Spinner} from "@radix-ui/themes";
import {DotsVerticalIcon} from "@radix-ui/react-icons";
import UIToggle from "~components/UIToggle.jsx";
import {useAuth} from "react-oidc-context";
import {useReqState} from "~api/net/netutils.js";
import {net} from "~api/net/net.js";

function UserActionButton(props) {
    let auth = useAuth();

    const [isSent, setIsSent] = useState(null);
    const [requestState,setRequestState] = useReqState(true);

    const setRole = (role) => {
        setIsSent(true);
        props.setLoadingUsers(a => {
            a.push(props.user.user_id);
            return a
        });
        net.org.adminChangeUserRole(auth.user?.access_token, [props.orgId, props.user.user_id, role], setRequestState).then( r =>{
            setIsSent(false);
            props.triggerReload();
        })
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <IconButton variant="ghost" color="gray">
                    <DotsVerticalIcon width="18" height="18" />
                </IconButton>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Change Classes</DropdownMenu.Item>
                <UIToggle value={isSent}>
                    <UIToggle.True>
                        <Spinner />
                    </UIToggle.True>
                    <UIToggle.False>
                        <UIToggle value={props.user.role==="Student"} >
                            <UIToggle.True>
                                <DropdownMenu.Item color="red" onClick={()=>setRole("Teacher")}>Promote to Teacher</DropdownMenu.Item>
                            </UIToggle.True>
                            <UIToggle.False>
                                <DropdownMenu.Item color="red" onClick={()=>setRole("Student")}>Make Student</DropdownMenu.Item>
                            </UIToggle.False>
                        </UIToggle>
                    </UIToggle.False>
                </UIToggle>
                <DropdownMenu.Item color="red">
                    Kick
                </DropdownMenu.Item>
            </DropdownMenu.Content>

        </DropdownMenu.Root>
    );
}

export default UserActionButton;