export const RESPO_LOG = [];

export function RESPO_Whirl(v){
    const flow = {
        core: v.whirl.core,
        seq: v.seq,
        drift: v.whirl.S4
    };

    RESPO_LOG.push(flow);
    return flow;
}
