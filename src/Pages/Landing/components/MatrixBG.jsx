import React, {useEffect, useRef} from 'react';
import styles from './matrixBG.module.css';

const charsets = [
    "ByteCode",
    "Just one byte at a time",
    "ASM",
    "NOP",
]

function MatrixBg(props) {
    const canvasRef = useRef(null);
    let animationFrameId = null

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');


        let w = canvas.width;
        let h = canvas.height;

        let cols = Math.floor(w / 20) + 1;
        let ypos = Array(cols).fill(0).map(() => Math.round(Math.random() *100)*20)
        let charset = charsets[Math.floor(Math.random()*charsets.length)];
        let offsets = Array(cols).fill(0).map(() => Math.round(Math.random() * charset.length));
        const render = ()=>{
            matrix(ctx,ypos,cols,charset,offsets,w,h)
            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    },[])

    return (
        <canvas className={styles.canvas} ref={canvasRef}/>
    );
}

function matrix (ctx,ypos,cols,charset,offsets,w,h) {
    // Draw a semitransparent black rectangle on top of previous drawing
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    // Set color to green and font to 15pt monospace in the drawing context
    ctx.fillStyle = '#00ff00';
    ctx.font = '15pt monospace';

    // for each column put a random character at the end
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