import React from 'react';
import {DropdownMenu, IconButton} from "@radix-ui/themes";
import {DotsVerticalIcon} from "@radix-ui/react-icons";
import UIToggle from "~components/UIToggle.jsx";

function UserActionButton(props) {
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
                <UIToggle value={true}>
                    <UIToggle.True>
                        <DropdownMenu.Item>Promote to Teacher</DropdownMenu.Item>
                    </UIToggle.True>
                    <UIToggle.False>
                        <DropdownMenu.Item>Make Student</DropdownMenu.Item>
                    </UIToggle.False>
                </UIToggle>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red">
                    Kick
                </DropdownMenu.Item>
            </DropdownMenu.Content>

        </DropdownMenu.Root>
    );
}

export default UserActionButton;