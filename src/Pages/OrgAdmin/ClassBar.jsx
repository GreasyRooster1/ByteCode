import React, {useEffect, useState} from 'react';
import {Separator} from "@radix-ui/themes/dist/esm/index.d.ts";
import {Box, Flex, IconButton,Select,TextField,Button} from "@radix-ui/themes";
import {PlusIcon} from "@radix-ui/react-icons";
import {net as auth, net} from "~api/net/net.js";
import {useReqState} from "~api/net/netutils.js";
import Pending from "~components/Pending.jsx";
import {useAuth} from "react-oidc-context";
import c from "react-syntax-highlighter/src/languages/hljs/c.js";

function ClassBar(props) {
    let auth = useAuth();
    const [classList, setClassList] = useState([]);
    const [classes, setClasses] = useState([]);
    const [currentClass, setCurrentClass] = useState(null);
    const [currentClassName, setCurrentClassName] = useState(null);
    const [reqState, setReqState] = useReqState();

    useEffect(() => {
        net.org.adminGetClasses(auth.user?.access_token,[props.orgId],setReqState).then(response => {
            if(!response){
                return;
            }
            setClassList(response);
            let tmpClasses = []
            for(let c of response){
                tmpClasses[c.id] = c;
            }
            setClasses(tmpClasses);
        })
    },[])

    useEffect(() => {
        setCurrentClassName(classes[currentClass]?.name);
    },[currentClass])

    return (
        <Flex width="100%" justify="space-between" direction="row" align="center">
            <Box m="1">
                <IconButton variant="outline" m="1">
                    <PlusIcon width="18" height="18" />
                </IconButton>

                <Select.Root value={currentClass} onValueChange={setCurrentClass}>
                    <Select.Trigger m="1" placeholder="Select a class"/>
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Select a Class</Select.Label>
                            {classList.map((classData, idx) => (
                                <Select.Item key={idx} value={classData.id}>{classData.name}</Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </Box>
            <Separator orientation="vertical" size="4"/>
            <Flex m="2" direction="row" flexGrow="1" align="center">
                <TextField.Root placeholder="Class name" m="1" style={{width:"100%"}} value={currentClassName} onValueChange={setCurrentClassName}></TextField.Root>

                {/*<Text ml="6">Teacher: </Text>*/}
                <Select.Root defaultValue="apple">
                    <Select.Trigger m="1" size="2"/>
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Fruits</Select.Label>
                            <Select.Item value="orange">Orange</Select.Item>
                            <Select.Item value="apple">M</Select.Item>
                            <Select.Item value="grape" disabled>
                                Grape
                            </Select.Item>
                            <Select.Item value="carrot">Carrot</Select.Item>
                            <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>

                <Button ml="6" color="red">Delete</Button>
            </Flex>
        </Flex>
    );
}

export default ClassBar;