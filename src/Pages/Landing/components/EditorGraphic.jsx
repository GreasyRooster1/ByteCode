import React from 'react';
import {motion} from "motion/react";

function EditorGraphic(props) {

    const getLineAnim = (i,w,col)=>{
        if(col){
            return {
                initial:{width:0,fill:col},
                whileInView:{width:w,fill:col},
                viewport:{ once: true, amount: 0.9 },
                transition:{duration:1,delay:1+i/4},
            }
        }
        return {
            initial:{width:0},
            whileInView:{width:w},
            viewport:{ once: true, amount: 0.9 },
            transition:{duration:1,delay:i/7},
        }
    }

    return (
        <motion.svg className={props.className} style={{width:"85S%"}} viewBox="0 0 533 305" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="7" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <filter id="blur">
                    <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                    </feMerge>
                </filter>

                <mask id="mask0_26_2" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="533" height="305">
                    <rect width="533" height="305" rx="9" fill="#0F0F10"/>
                </mask>
            </defs>

            <motion.mask
                initial={{height:0}}
                whileInView={{height:305}}
                viewport={{ once: true, amount: 0.9 }}
                transition={{duration:1}}

                id="codeMask" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="533" height="305">
                <rect width="533" height="305" rx="9" fill="#0F0F10"/>
            </motion.mask>

            <g mask="url(#mask0_26_2)">
                <rect width="533" height="305" rx="9" fill="#0F0F10"/>
                <rect x="328" y="-6" width="232" height="320" rx="8" fill="#0F0F10" stroke="#46494C" stroke-width="2"/>
                <rect x="328" y="197" width="232" height="320" fill="#0F0F10" stroke="#46494C" stroke-width="2"/>
                <motion.circle
                    initial={{scale:0,rotate:0,opacity:0}}
                    whileInView={{scale:1,rotate:360,opacity:0.1}}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{duration:1,delay:3}}
                    filter="url(#blur)"
                    cx="437" cy="100" r="100" rx="17" fill="#DC1B4B"/>
                <motion.rect
                    initial={{scale:0,rotate:0}}
                    whileInView={{scale:1,rotate:360}}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{duration:1,delay:3}}
                    filter="url(#glow)"
                    x="379" y="42" width="116" height="116" rx="17" fill="#DC1B4B"/>
            </g>
            <g mask="url(#codeMask">
                <motion.rect {...getLineAnim(0,142)} x="14" y="14" height="30" rx="15" fill="#46494C"/>
                <motion.rect {...getLineAnim(0,142,"#1974E8")} x="14" y="14" height="29.6" rx="14.8"/>
                <motion.rect {...getLineAnim(1,214)} x="48.1538" y="50.4308" height="29.6" rx="14.8" fill="#46494C"/>
                <motion.rect {...getLineAnim(2,214,)} x="48.1538" y="86.8615" height="29.6" rx="14.8" fill="#46494C"/>
                <motion.rect {...getLineAnim(1,214,"#1CF16E")} x="48.1538" y="86.8615" height="29.6" rx="14.8"/>
                <motion.rect {...getLineAnim(3,75)} x="14" y="123" height="30" rx="15" fill="#46494C"/>

                <motion.rect {...getLineAnim(3,207)} x="14" y="187.046" height="29.6" rx="14.8" fill="#46494C"/>
                <motion.rect {...getLineAnim(2,207,"#D019E8")} x="14" y="187.046" height="29.6" rx="14.8"/>
                <motion.rect {...getLineAnim(5,243)} x="48.1538" y="223.477" height="29.6" rx="14.8" fill="#46494C"/>
                <motion.rect {...getLineAnim(6,142)}x="48" y="260" height="29.6" rx="14.8" fill="#46494C"/>
                <motion.rect {...getLineAnim(3,142,"#F1C31C")} x="48" y="260" height="30" rx="15" />
            </g>
        </motion.svg>

    );
}

export default EditorGraphic;