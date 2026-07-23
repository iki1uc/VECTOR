function GTA6_ASCII(f){
    const car = f%2 ? "🚗" : "🚓";
    const boom = f%3 ? "🔥" : "💥";
    const city = "🏙".repeat(5);

    return `
GTA‑6 LIVE
${car}──${city}──${boom}
${boom}──${car}──${city}
`;
}
