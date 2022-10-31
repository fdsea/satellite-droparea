import { Positions } from "../base";
import { PositionCheckerDataPayload, PositionCheckerOffsetsPayload } from "./types";
export declare class PositionAbilityChecker {
    private checkers;
    checkPosition(position: Positions, data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean;
    top(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean;
    bottom(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean;
    left(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean;
    right(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean;
    checkCrossByViewport(data: PositionCheckerDataPayload, offset: number): boolean;
}
