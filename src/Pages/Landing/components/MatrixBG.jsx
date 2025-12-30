import React, {useEffect} from 'react';

const charsets = [
    "ByteCode",
    "Just one byte at a time",
    "ASM",
    "NOP",
]

function MatrixBg(props) {
    useEffect(() => {

    })

    return (
        <canvas>

        </canvas>
    );
}

function matrix (ctx,) {
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
            if(Math.random()>0.90){
                glitches[ind] = true
            }else{
                glitches[ind] = false;
            }
        }else ypos[ind]+=20;
    });
}

export default MatrixBg;