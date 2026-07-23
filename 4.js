function SOUND_BARS(f){
    const bars = [
        "▁","▂","▃","▄","▅","▆","▇","█"
    ];
    const b = (i)=> bars[(f+i)%bars.length];

    return `
SOUND‑BARS
${b(1)} ${b(3)} ${b(5)} ${b(7)} ${b(2)} ${b(4)} ${b(6)}
`;
}
