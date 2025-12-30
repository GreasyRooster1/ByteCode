import React from 'react';

function UiSwitch(props) {
    let subComponentList = Object.keys(UiSwitch);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(props.children, (child) =>
            {
                if(child.type.name === key && child.type.name === "True" && props.value){
                    return child
                }
                if(child.type.name === key && child.type.name === "False" && !props.value){
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

const True = (props) => <>{props.children}</>;
UiSwitch.True = True;
const False = (props) => <>{props.children}</>;
UiSwitch.False = False;

export default UiSwitch;