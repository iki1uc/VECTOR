export function VIS_STATIONEN(value, vector) {

    const stations = [
        "IKI","UC","ORBIT","SHIFT","AURA","NAVI",
        "DRIFT","CORE","EDGE","FLOW","BALANCE","MATRIX"
    ];

    const qi = vector.qi(value);

    return {
        station: stations[qi],
        matrix: stations.map((s, i) => ({
            id: `S${i+1}`,
            name: s,
            active: i === qi
        }))
    };
}
