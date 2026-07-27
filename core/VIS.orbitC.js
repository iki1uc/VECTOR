export function VIS_ORBIT_C(value, vector) {

    const ORBIT_C = ["⊙","⊕","⊗","○","□","△","◇","∞"];
    const qi = vector.qi(value);

    return {
        orbit: ORBIT_C[qi],
        sequence: ORBIT_C.slice(0, qi + 1)
    };
}
