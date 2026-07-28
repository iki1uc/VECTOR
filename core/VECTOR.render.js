import { WHIRL_CORE } from "./WHIRL/WHIRL_CORE.js";

class VECTOR_RENDER {

    // mathematischer WHIRL-Renderer
    compute(v, t){
        const whirl = WHIRL_CORE(v, t);

        return {
            x: v.x + whirl.S1,
            y: v.y + whirl.S2,
            z: v.z + whirl.S3,
            seq: whirl.seq,
            whirl
        };
    }

    // UI-Renderer für 27 Felder
    render27(list){
        const out = document.getElementById("vector27");
        out.innerHTML = "";

        list.forEach((item, i)=>{
            const div = document.createElement("div");
            div.className = "cell";
            div.innerText = `${i+1} · ${item}`;
            div.style.top = (i*40)+"px";
            out.appendChild(div);
        });
    }

    // UI-Renderer für WHIRL-Sequenzen
    renderWhirl(v){
        const out = document.getElementById("whirlSeq");
        out.innerHTML = "";

        v.seq.forEach((s, i)=>{
            const div = document.createElement("div");
            div.className = "seq";
            div.innerText = `SEQ ${i+1}: ${s}`;
            div.style.left = (i*40)+"px";
            out.appendChild(div);
        });
    }
}

window.VECTOR_RENDER = new VECTOR_RENDER();
