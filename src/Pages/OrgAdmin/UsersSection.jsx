import React, {useEffect, useState} from 'react';
import {Flex, Table} from "@radix-ui/themes";
import {useAuth} from "react-oidc-context";
import {net} from "~api/net/net.js";
import {useReqState} from "~api/net/netutils.js";

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
            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        users.map(user =>
                            <Table.Row>
                                <Table.RowHeaderCell>{user.username}</Table.RowHeaderCell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.role}</Table.Cell>
                            </Table.Row>
                        )
                    }

                </Table.Body>
            </Table.Root>
        </Flex>
    );
}

export default UsersSection;