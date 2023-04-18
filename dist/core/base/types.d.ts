export declare type PositionAlign = 'center' | 'start' | 'end';
export declare type Positions = 'top' | 'right' | 'bottom' | 'left' | 'auto' | string;
export declare type Emits = 'target-out-of' | string;
export declare type PayloadConfig = {
    target: HTMLElement;
    viewport: HTMLElement;
    dropper: HTMLElement;
    verticalOffset: number;
    horizontalOffset: number;
    viewportOffset: number;
    customDropWidth: number | null;
    verticalAlign: PositionAlign;
    horizontalAlign: PositionAlign;
    positionSteps: Array<string>;
};
export declare type ElementCoords = {
    tWidth: number;
    tTop: number;
    tHeight: number;
    tLeft: number;
    vpWidth: number;
    vpTop: number;
    vpHeight: number;
    vpLeft: number;
    dWidth: number;
    dTop: number;
    dHeight: number;
    dLeft: number;
    vpClientHeight: number;
};
export declare type OutputDropParameters = {
    width: number;
    left: number;
    top: number;
};
export declare type RulesList = {
    [key: string]: () => OutputDropParameters;
};
export declare type EmitsList = {
    [key: string]: () => void;
};
