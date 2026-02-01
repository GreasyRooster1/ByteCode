import React from 'react';

function UIToggle(props) {
    let subComponentList = Object.keys(UIToggle);

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
UIToggle.True = True;
const False = (props) => <>{props.children}</>;
UIToggle.False = False;

export default UIToggle;