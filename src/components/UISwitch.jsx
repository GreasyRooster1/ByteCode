import React from 'react';

function UISwitch(props) {
    let subComponentList = Object.keys(UISwitch);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(props.children, (child) =>
            {
                if(child.type.name === key && child.type.name === "Option" && props.value===child.props.id){
                    return child
                }
            }

        );
    });

    console.log(subComponentList);

    return (
        <>
            {subComponents.map((component) => component)}
        </>
    );
}

const Option = (props) => <>{props.children}</>;
UISwitch.Option = Option;

export default UISwitch;