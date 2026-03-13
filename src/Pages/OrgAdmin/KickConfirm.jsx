import React from 'react';
import {Button, Flex, AlertDialog} from "@radix-ui/themes";

function KickConfirm(props) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger onClick={(e)=>{console.log(e)}}>
                {props.children}
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Kick User</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Are you sure? This user wont be able to join again unless they have a valid join link
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red">
                            Kick
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}

export default KickConfirm;