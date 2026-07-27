export function VIS_QI_IQQ(value, vector) {

    const qi = vector.qi(value);
    const iqq = vector.iqq(value);

    return {
        qi,
        iqq,
        bars: {
            qiBar: "█".repeat(qi + 1),
            iqqBar: "▓".repeat(iqq + 1)
        }
    };
}
