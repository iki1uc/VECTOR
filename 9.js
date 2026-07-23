function GEO3D_COLOR(f){
    const d = ["●","○","·","∙","•"];
    const p = (i)=> d[(f+i)%d.length];

    return `
GEO‑3D COLOR
X: <span style="color:#f00">${p(1)}</span> <span style="color:#f00">${p(2)}</span>
Y: <span style="color:#0f0">${p(3)}</span> <span style="color:#0f0">${p(4)}</span>
Z: <span style="color:#00f">${p(5)}</span> <span style="color:#00f">${p(1)}</span>
`;
}
