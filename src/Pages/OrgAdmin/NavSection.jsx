import React from 'react';
import {Flex} from "@radix-ui/themes";

function NavSection(props) {
    return (
        <Flex align="center" justify="center" className={styles.section}>
            {props.children}
        </Flex>
    );
}

export default NavSection;