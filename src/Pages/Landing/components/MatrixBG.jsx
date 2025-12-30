import React, {useEffect, useRef} from 'react';
import styles from './matrixBG.module.css';

function MatrixBg(props) {
    const canvasRef = useRef(null);
    let intervalId = null

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const radix = document.querySelector(".radix-themes");
        const font = window.getComputedStyle(radix, null).getPropertyValue("--default-font-family");
        const bg = window.getComputedStyle(radix, null).getPropertyValue("--neutral-dark");
        const primary = window.getComputedStyle(radix, null).getPropertyValue("--primary");

        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let w = canvas.width;
        let h = canvas.height;

        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);
        ctx.font = "15pt "+font;

        let cols = Math.floor(w / 20) + 1;
        let ypos = Array(cols).fill(0).map(() => Math.round(Math.random() *100)*20)
        let charset = "ByteCode";//charsets[Math.floor(Math.random()*charsets.length)];
        let offsets = Array(cols).fill(0).map(() => Math.round(Math.random() * charset.length));
        const render = ()=>{
            matrix(ctx,ypos,cols,charset,offsets,w,h,bg,primary)
        }

        intervalId = setInterval(render,70);

        return () => {
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
        let alt_text;
        text = charset[(offsets[ind] + y / 20) % charset.length];
        const x = ind * 20;

        ctx.fillText(text, x, y);
        if(alt_text!=null){
            ctx.fillText(alt_text, x, y);
        }

        if (y > 100 + Math.random() * 10000){
            ypos[ind] = 0;
        }else ypos[ind]+=20;
    });
}

export default MatrixBg;