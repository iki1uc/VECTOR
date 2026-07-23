function AMIGA_SCENE(f){
    const text = " AMIGA DEMO SCROLLER ";
    const pos = f % text.length;

    const scroll = text.slice(pos) + text.slice(0, pos);

    return `
AMIGA‑SCROLLER
${scroll}
██████████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`;
}
