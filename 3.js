function AMIGA_SCROLL(f){
    const text = " AMIGA DEMO SCROLLER · VECTOR ULTRA · GEO4D · ";
    const pos = f % text.length;
    const scroll = text.slice(pos) + text.slice(0, pos);

    return `
AMIGA‑SCROLLER
${scroll}
██████████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`;
}
