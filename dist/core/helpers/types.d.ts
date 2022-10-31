export declare type ClosestPointPayload = {
    dw: number;
    dh: number;
    dx: number;
    dy: number;
    th: number;
    tw: number;
    tx: number;
    ty: number;
};
export declare type ClosestPointOffsets = {
    xOffset: number;
    yOffset: number;
};
export declare type ClosestPointCoordsOutput = {
    x: number;
    y: number;
};
export declare type DropPosition = "top" | "left" | "bottom" | "right" | "auto" | null;
export declare type ClosestPointOutput = {
    isPointExist: boolean;
    coordsPositionInPercentRelativeDropSize: ClosestPointCoordsOutput;
    dropPosition: DropPosition;
};
