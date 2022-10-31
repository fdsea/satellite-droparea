import { Positions } from "../base";
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
    [key: Positions]: (data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload) => boolean;
};
