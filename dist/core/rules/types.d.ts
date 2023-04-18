export declare type PositionCheckerDataPayload = {
    dw: number;
    dh: number;
    dx: number;
    dy: number;
    th: number;
    tw: number;
    tx: number;
    ty: number;
    vw: number;
    vh: number;
    vx: number;
    vy: number;
};
export declare type PositionCheckerOffsetsPayload = {
    x: number;
    y: number;
};
export declare type CheckersList = {
    [key: string]: (data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload) => boolean;
};
