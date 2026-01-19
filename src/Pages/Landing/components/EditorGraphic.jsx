import React from 'react';
import {motion} from "motion/react";

function EditorGraphic(props) {
    return (
        <motion.svg width="533" height="305" viewBox="0 0 533 305" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_26_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="533" height="305">
                <rect width="533" height="305" rx="9" fill="#0F0F10"/>
            </mask>
            <g mask="url(#mask0_26_2)">
                <rect width="533" height="305" rx="9" fill="#0F0F10"/>
                <rect x="14" y="14" width="214.031" height="29.6" rx="14.8" fill="#1974E8"/>
                <rect x="48.1538" y="50.4308" width="214.031" height="29.6" rx="14.8" fill="#46494C"/>
                <rect x="48.1538" y="86.8615" width="214.031" height="29.6" rx="14.8" fill="#1CF16E"/>
                <rect x="14" y="123" width="75" height="30" rx="15" fill="#46494C"/>
                <rect x="14" y="187.046" width="207.2" height="29.6" rx="14.8" fill="#D019E8"/>
                <rect x="48.1538" y="223.477" width="243.631" height="29.6" rx="14.8" fill="#46494C"/>
                <rect x="48" y="260" width="142" height="30" rx="15" fill="#F1C31C"/>
                <rect x="328" y="-6" width="232" height="320" rx="8" fill="#0F0F10" stroke="#46494C" stroke-width="2"/>
                <rect x="328" y="197" width="232" height="320" fill="#0F0F10" stroke="#46494C" stroke-width="2"/>
                <rect x="379" y="42" width="116" height="116" rx="17" fill="#DC1B4B"/>
            </g>
        </motion.svg>

    );
}

export default EditorGraphic;