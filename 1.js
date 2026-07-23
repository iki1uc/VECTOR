function GTA6_ASCII(f){
    const car = f%2 ? "🚗" : "🚓";
    const boom = f%3 ? "🔥" : "💥";
    const npc = f%4 ? "🧍" : "🏃";
    const city = "🏙".repeat(8);

    return `
GTA‑6 LIVE
${car}──${city}──${boom}
${npc}──${car}──${city}
${boom}──${npc}──${car}
`;
}
