function AMIGA_SCENE(f){
    const bar1 = f%2 ? "██████████████████" : "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
    const bar2 = f%3 ? "██████████████████" : "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";

    return `
AMIGA‑SCENE
${bar1}
${bar2}
${bar1}
${bar2}
`;
}
