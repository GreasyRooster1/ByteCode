import React, {useEffect, useState} from 'react';
import {Badge, Flex, Table} from "@radix-ui/themes";
import {useAuth} from "react-oidc-context";
import {net} from "~api/net/net.js";
import {useReqState} from "~api/net/netutils.js";
import UIToggle from "~components/UIToggle.jsx";
import Pending from "~components/Pending.jsx";

function UsersSection(props) {
    let auth = useAuth();

    const [requestState,setRequestState] = useReqState(true);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        net.org.adminGetUsersDisplay(auth.user?.access_token, [props.orgId,page] ,setRequestState).then(response => {
            setUsers(response??[])
        })
    }, [page]);

    return (
        <Flex width="100%" height="100%" p="4" align="center" justify="center">
            <Pending requestState={requestState}>
                <Table.Root variant="surface">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <UIToggle value={users.length>0}>
                            <UIToggle.True>
                            {
                                users.map(user =>
                                    <Table.Row>
                                        <Table.RowHeaderCell>{user.username}</Table.RowHeaderCell>
                                        <Table.Cell>{user.email}</Table.Cell>
                                        <Table.Cell><Badge color={user.role==="Teacher"?"green":"gray"}>{user.role}</Badge></Table.Cell>
                                    </Table.Row>
                                )
                            }
                            </UIToggle.True>
                            <UIToggle.False>
                                <Text>Your organization has no users yet!</Text>
                            </UIToggle.False>
                        </UIToggle>
                    </Table.Body>
                </Table.Root>
            </Pending>
        </Flex>
    );
}

export default UsersSection;