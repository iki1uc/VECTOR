function GEO_ID(mode, f){
    const map = {
        koop: ID_KOOP,
        neutral: ID_NEUTRAL,
        pook: ID_POOK
    };

    const id = map[mode];
    const info = id.info();

    const spin = ["●","○","∙","•","◦"];
    const p = spin[f % spin.length];

    return `
GEO‑ID (${mode.toUpperCase()})
${p}  ${p}  ${p}

ID‑INFO:
${info}

DIMENSION‑LINK:
4D → 5D → ∞D

STATE:
SYNC OK
`;
}
