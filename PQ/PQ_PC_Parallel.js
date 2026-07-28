export function PQ_PC_Parallel(v){

    const task = {
        depth: v.whirl.S4,
        seq: v.seq,
        core: v.whirl.core,
        axis: {
            B: v.whirl.S1,
            H: v.whirl.S2,
            T: v.whirl.S3
        }
    };

    PQ.push(task);

    const next = PQ.pull();
    if(!next) return null;

    next.result = PC.run(next);

    return next;
}
