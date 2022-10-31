import { ElementCoords, OutputDropParameters, PositionAlign, RulesList } from "../base/types";
import { PositionAbilityChecker } from "./position-ability-checker";
export declare class Rules extends PositionAbilityChecker {
    elementsCoords: ElementCoords;
    horizontalAlign: PositionAlign;
    verticalAlign: PositionAlign;
    horizontalOffset: number;
    verticalOffset: number;
    viewportOffset: number;
    lastPossiblePosition: string;
    positionRules: RulesList;
    constructor();
    protected getDropWidth(): number;
    getXOffset(offsetCoef?: number): number;
    getYOffset(offsetCoef?: number): number;
    getDropWAndXOffset(offsetCoef?: number): {
        dropWidth: number;
        dropLeft: number;
    };
    getDropWAndYOffset(offsetCoef?: number): {
        dropWidth: number;
        dropTop: number;
    };
    topAlign(): OutputDropParameters;
    bottomAlign(): OutputDropParameters;
    rightAlign(): OutputDropParameters;
    leftAlign(): OutputDropParameters;
    autoAlign(): OutputDropParameters;
}
