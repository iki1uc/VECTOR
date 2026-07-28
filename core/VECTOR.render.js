class VECTOR_RENDER {

    render27(list){
        const out = document.getElementById("vector27");
        out.innerHTML = "";

        list.forEach((item, i)=>{
            const div = document.createElement("div");
            div.className = "cell";
            div.innerText = `${i+1} · ${item}`;
            div.style.top = (i*40)+"px";
            out.appendChild(div);
export function VECTOR_RENDER(v) {
    return {
        x: v.x + v.whirl.S1,
        y: v.y + v.whirl.S2,
        z: v.z + v.whirl.S3,
        seq: v.whirl.seq
    };
}

        });


    }
}

window.VECTOR_RENDER = new VECTOR_RENDER();
