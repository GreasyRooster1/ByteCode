import React from 'react';
import {Button, Card, Select, Flex, TextField, Separator, Text, Box, IconButton} from "@radix-ui/themes";
import UserIcon from "~icons/User.svg?react";
import AwardIcon from "~icons/Award.svg?react";
import {API_URL} from "~api/constants.js";
import Dropdown from "~components/form/Dropdown.jsx";
import {PlusIcon} from "@radix-ui/react-icons";
import {Badge, Table} from "@radix-ui/themes/dist/esm/index.d.ts";
import UIToggle from "~components/UIToggle.jsx";
import UserActionButton from "~/Pages/OrgAdmin/UserActionButton.jsx";
import ClassBar from "~/Pages/OrgAdmin/ClassBar.jsx";

function ClassSection(props) {
    const [selectedClass, setSelectedClass] = React.useState(null);

    return (
        <Flex width="100%" height="100%" p="4" align="center" justify="center" direction="column">
            <ClassBar selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
            <Separator size="4" m="2"/>
            <Flex width="100%" flexGrow="1" justify="space-between" direction="column">
                {/*<Table.Root width="100%" variant="surface" size="2" >*/}
                {/*    <Table.Header>*/}
                {/*        <Table.Row>*/}
                {/*            <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>*/}
                {/*            <Table.ColumnHeaderCell>Display Name</Table.ColumnHeaderCell>*/}
                {/*            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>*/}
                {/*            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>*/}
                {/*            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>*/}
                {/*        </Table.Row>*/}
                {/*    </Table.Header>*/}

                {/*    <Table.Body>*/}
                {/*        <UIToggle value={users.length>0}>*/}
                {/*            <UIToggle.True>*/}

                {/*                {*/}
                {/*                    users.map(user =>*/}
                {/*                            // <Pending isLoading={loadingUsers.includes(user.user_id)}>*/}
                {/*                            <Table.Row style={{color: loadingUsers.includes(user.user_id)?"var(--gray-8)":"var(--gray-12)"}}>*/}
                {/*                                <Table.RowHeaderCell>{user.username}</Table.RowHeaderCell>*/}
                {/*                                <Table.Cell>{user.display_name}</Table.Cell>*/}
                {/*                                <Table.Cell>{user.email}</Table.Cell>*/}
                {/*                                <Table.Cell><Badge color={user.role==="Teacher"?"green":"gray"}>{user.role}</Badge></Table.Cell>*/}
                {/*                                <Table.Cell>*/}
                {/*                                    <UserActionButton user={user} orgId={props.orgId} triggerReload={triggerReload} setLoadingUsers={setLoadingUsers}/>*/}
                {/*                                </Table.Cell>*/}
                {/*                            </Table.Row>*/}
                {/*                        // </Pending>*/}
                {/*                    )*/}
                {/*                }*/}

                {/*            </UIToggle.True>*/}
                {/*            <UIToggle.False>*/}
                {/*                <Text>Your organization has no users yet!</Text>*/}
                {/*            </UIToggle.False>*/}
                {/*        </UIToggle>*/}
                {/*    </Table.Body>*/}

                {/*</Table.Root>*/}
            </Flex>
        </Flex>
    );
}

export default ClassSection;