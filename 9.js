function SOUND_BASS(f){
    const bars = ["▁","▂","▃","▄","▅","▆","▇","█"];
    const b = (i)=> bars[(f+i)%bars.length];

    return `
SOUND‑BARS (BASS BOOST)
${b(1)} ${b(3)} ${b(5)} ${b(7)} ${b(2)} ${b(4)} ${b(6)}
${b(7)} ${b(6)} ${b(5)} ${b(4)} ${b(3)} ${b(2)} ${b(1)}
`;
}
