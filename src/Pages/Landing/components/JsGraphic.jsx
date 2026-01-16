import React from 'react';
import {motion} from "motion/react";

function JsGraphic(props) {

    let yellowPulseAnim = {
        initial:{pathLength:.2,pathOffset:1,pathSpacing:1},
        animate:{pathLength:.2,pathOffset:-.5,pathSpacing:1},
        transition:{
            repeatType:"loop",
            repeat:Infinity,
            duration:1,
        },
        filter:"url(#glow)"
    }

    let bigGlowAnim = {
        initial:{pathLength:.5,pathOffset:1,pathSpacing:1},
        animate:{pathLength:.5,pathOffset:-.5,pathSpacing:1},
        transition:{
            repeatType:"loop",
            repeat:Infinity,
            duration:1,
        },
        filter:"url(#bigGlow)",
        mask:"url(#wireMask)"
    }

    return (
        <motion.svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 102" fill="none">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>

                <filter id="bigGlow">
                    <feGaussianBlur stdDeviation="10" result="coloredBlur2"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="5.0"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="coloredBlur2"/>
                    </feMerge>
                </filter>

                <mask id="wireMask">
                    <path d="M11 0.5H79.5C81.7091 0.5 83.5 2.29086 83.5 4.5V13C83.5 15.2091 85.2909 17 87.5 17H103.5" stroke="#fff"/>
                    <path d="M0 28.5H68.5C70.7091 28.5 72.5 30.2909 72.5 32.5V41C72.5 43.2091 74.2909 45 76.5 45H92.5" stroke="#fff"/>
                    <path d="M10 101.5H78.5C80.7091 101.5 82.5 99.7091 82.5 97.5V89C82.5 86.7909 84.2909 85 86.5 85H102.5" stroke="#fff"/>
                    <path d="M0 80H68.5C70.7091 80 72.5 78.2091 72.5 76V67.5C72.5 65.2909 74.2909 63.5 76.5 63.5H92.5" stroke="#fff"/>
                    <path d="M232.5 0.5H164C161.791 0.5 160 2.29086 160 4.5V13C160 15.2091 158.209 17 156 17H140" stroke="#fff"/>
                    <path d="M243.5 28.5H175C172.791 28.5 171 30.2909 171 32.5V41C171 43.2091 169.209 45 167 45H151" stroke="#fff"/>
                    <path d="M233.5 101.5H165C162.791 101.5 161 99.7091 161 97.5V89C161 86.7909 159.209 85 157 85H141" stroke="#fff"/>
                    <path d="M243.5 80H175C172.791 80 171 78.2091 171 76V67.5C171 65.2909 169.209 63.5 167 63.5H151" stroke="#fff"/>
                </mask>
            </defs>

            <path d="M11 0.5H79.5C81.7091 0.5 83.5 2.29086 83.5 4.5V13C83.5 15.2091 85.2909 17 87.5 17H103.5" stroke="#46494C"/>
            <path d="M0 28.5H68.5C70.7091 28.5 72.5 30.2909 72.5 32.5V41C72.5 43.2091 74.2909 45 76.5 45H92.5" stroke="#46494C"/>
            <path d="M10 101.5H78.5C80.7091 101.5 82.5 99.7091 82.5 97.5V89C82.5 86.7909 84.2909 85 86.5 85H102.5" stroke="#46494C"/>
            <path d="M0 80H68.5C70.7091 80 72.5 78.2091 72.5 76V67.5C72.5 65.2909 74.2909 63.5 76.5 63.5H92.5" stroke="#46494C"/>
            <path d="M232.5 0.5H164C161.791 0.5 160 2.29086 160 4.5V13C160 15.2091 158.209 17 156 17H140" stroke="#46494C"/>
            <path d="M243.5 28.5H175C172.791 28.5 171 30.2909 171 32.5V41C171 43.2091 169.209 45 167 45H151" stroke="#46494C"/>
            <path d="M233.5 101.5H165C162.791 101.5 161 99.7091 161 97.5V89C161 86.7909 159.209 85 157 85H141" stroke="#46494C"/>
            <path d="M243.5 80H175C172.791 80 171 78.2091 171 76V67.5C171 65.2909 169.209 63.5 167 63.5H151" stroke="#46494C"/>


            <motion.path {...yellowPulseAnim} d="M11 0.5H79.5C81.7091 0.5 83.5 2.29086 83.5 4.5V13C83.5 15.2091 85.2909 17 87.5 17H103.5" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M0 28.5H68.5C70.7091 28.5 72.5 30.2909 72.5 32.5V41C72.5 43.2091 74.2909 45 76.5 45H92.5" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M10 101.5H78.5C80.7091 101.5 82.5 99.7091 82.5 97.5V89C82.5 86.7909 84.2909 85 86.5 85H102.5" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M0 80H68.5C70.7091 80 72.5 78.2091 72.5 76V67.5C72.5 65.2909 74.2909 63.5 76.5 63.5H92.5" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M232.5 0.5H164C161.791 0.5 160 2.29086 160 4.5V13C160 15.2091 158.209 17 156 17H140" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M243.5 28.5H175C172.791 28.5 171 30.2909 171 32.5V41C171 43.2091 169.209 45 167 45H151" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M233.5 101.5H165C162.791 101.5 161 99.7091 161 97.5V89C161 86.7909 159.209 85 157 85H141" stroke="#F1C31C"/>
            <motion.path {...yellowPulseAnim} d="M243.5 80H175C172.791 80 171 78.2091 171 76V67.5C171 65.2909 169.209 63.5 167 63.5H151" stroke="#F1C31C"/>

            <motion.path {...bigGlowAnim} d="M11 0.5H79.5C81.7091 0.5 83.5 2.29086 83.5 4.5V13C83.5 15.2091 85.2909 17 87.5 17H103.5" stroke="#F00"/>
            <motion.path {...bigGlowAnim} d="M0 28.5H68.5C70.7091 28.5 72.5 30.2909 72.5 32.5V41C72.5 43.2091 74.2909 45 76.5 45H92.5" stroke="#F1C31C"/>
            <motion.path {...bigGlowAnim} d="M10 101.5H78.5C80.7091 101.5 82.5 99.7091 82.5 97.5V89C82.5 86.7909 84.2909 85 86.5 85H102.5" stroke="#F1C31C"/>
            <motion.path {...bigGlowAnim} d="M0 80H68.5C70.7091 80 72.5 78.2091 72.5 76V67.5C72.5 65.2909 74.2909 63.5 76.5 63.5H92.5" stroke="#F1C31C"/>
            <motion.path {...bigGlowAnim} d="M232.5 0.5H164C161.791 0.5 160 2.29086 160 4.5V13C160 15.2091 158.209 17 156 17H140" stroke="#F1C31C"/>
            <motion.path {...bigGlowAnim} d="M243.5 28.5H175C172.791 28.5 171 30.2909 171 32.5V41C171 43.2091 169.209 45 167 45H151" stroke="#F1C31C"/>
            <motion.path {...bigGlowAnim} d="M233.5 101.5H165C162.791 101.5 161 99.7091 161 97.5V89C161 86.7909 159.209 85 157 85H141" stroke="#F1C31C"/>
            <motion.path {...bigGlowAnim} d="M243.5 80H175C172.791 80 171 78.2091 171 76V67.5C171 65.2909 169.209 63.5 167 63.5H151" stroke="#F1C31C"/>

            <circle cx="121.5" cy="49" r="41.5" fill="#F1C31C" filter="url(#glow)"/>
            <path d="M129.665 57.9919C131.621 61.1548 134.166 63.4797 138.667 63.4797C142.448 63.4797 144.864 61.6082 144.864 59.0223C144.864 55.9235 142.382 54.8259 138.22 53.0231L135.939 52.0538C129.354 49.2755 124.979 45.7951 124.979 38.4373C124.979 31.6596 130.194 26.5 138.343 26.5C144.145 26.5 148.317 28.4997 151.322 33.7357L144.216 38.2541C142.652 35.4759 140.964 34.3814 138.343 34.3814C135.67 34.3814 133.976 36.0605 133.976 38.2541C133.976 40.9652 135.672 42.0628 139.587 43.7419L141.869 44.7097C149.622 48.0024 154 51.3592 154 58.9063C154 67.0426 147.546 71.5 138.878 71.5C130.403 71.5 124.928 67.5005 122.249 62.2585L129.665 57.9919ZM97.4283 58.775C98.8619 61.2938 100.166 63.4232 103.301 63.4232C106.299 63.4232 108.191 62.2616 108.191 57.7446V27.016H117.316V57.8667C117.316 67.2242 111.776 71.4832 103.69 71.4832C96.3832 71.4832 92.1519 67.7387 90 63.2286L97.4283 58.775Z" fill="black"/>
        </motion.svg>
    );
}

export default JsGraphic;