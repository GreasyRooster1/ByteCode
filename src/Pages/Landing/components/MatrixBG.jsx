import React, {useEffect, useRef} from 'react';
import styles from './matrixBG.module.css';

const xinc = 35;
const yinc = 23;

function MatrixBg(props) {
    const canvasRef = useRef(null);
    let intervalId = null

    // useEffect(()=>{
    //     const updateSize = () => {
    //         const canvas = canvasRef.current;
    //         canvas.width  = canvas.offsetWidth;
    //         canvas.height = canvas.offsetWidth;
    //     }
    //     window.addEventListener('resize', updateSize);
    //     return () => {
    //         window.removeEventListener('resize', updateSize);
    //     }
    // })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const font = "20pt JetBrains Mono"
        const bg = "#0F0F10"
        const primary = "#8A13E5"

        let square = Math.max(window.innerWidth,window.innerHeight)
        canvas.width  = square;
        canvas.height = square;


        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = font;

        let cols = Math.floor(canvas.width / xinc) + 1;
        let ypos = Array(cols).fill(0).map(() => Math.round(Math.random() *100)*yinc)
        let charset = "ByteCode";//charsets[Math.floor(Math.random()*charsets.length)];
        let offsets = Array(cols).fill(0).map(() => Math.round(Math.random() * charset.length));
        const render = ()=>{
            matrix(ctx,ypos,cols,charset,offsets,canvas.width,canvas.height,bg,primary)
        }

        intervalId = setInterval(render,70);

        return () => {
            canvas.width = null;
            canvas.height = null;
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    },[])

    return (
        <canvas className={styles.canvas} ref={canvasRef}/>
    );
}

function matrix (ctx,ypos,cols,charset,offsets,w,h,bg,primary) {
    ctx.fillStyle = bg+'55';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = primary;

    ypos.forEach((y, ind) => {
        let text;
        text = charset[(offsets[ind] + y / yinc) % charset.length];
        const x = ind * xinc;

        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000){
            ypos[ind] = 0;
        }else ypos[ind]+=yinc;
    });
}

export default MatrixBg;