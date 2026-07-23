function GEO_UNIVERSE(f){
    const star = f%2 ? "✦" : "✧";
    const line = "· ".repeat((f%20)+5);

    return `
GEO‑UNIVERSE
${star} ${star} ${star} ${star}

COSMIC‑FLOW:
${line}

DIMENSIONS:
4D → 5D → ∞D
`;
}
