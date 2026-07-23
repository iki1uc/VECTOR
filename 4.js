function GEO3D_COLOR(f){
    const d = ["●","○","·","∙","•"];
    const p = (i)=> d[(f+i)%d.length];

    return `
GEO‑4D COLOR
X: <span style="color:#f00">${p(1)}</span>
Y: <span style="color:#0f0">${p(2)}</span>
Z: <span style="color:#00f">${p(3)}</span>
W: <span style="color:#ff0">${p(4)}</span>

4D‑ROTATION:
${" ".repeat(f%20)}↻
`;
}
