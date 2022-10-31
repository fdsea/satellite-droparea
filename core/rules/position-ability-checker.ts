import {Positions} from "../base";
import {CheckersList, PositionCheckerDataPayload, PositionCheckerOffsetsPayload} from "./types";

export class PositionAbilityChecker {
  private checkers: CheckersList = {
    'top': this.top,
    'bottom': this.bottom,
    'left': this.left,
    'right': this.right
  }
  checkPosition(
    position: Positions,
    data: PositionCheckerDataPayload,
    offsets: PositionCheckerOffsetsPayload
  ) {
    return this.checkers[position](data, offsets);
  }

  top(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean {
    const {ty, dh, vy} = data;
    const {y} = offsets;
    return ty - dh - y >= Math.max(vy, 0);
  }
  bottom(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean {
    const {ty, dh, th, vh} = data;
    const {y} = offsets;
    return ty + th + dh + y <= vh
  }
  left(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean {
    const {tx, dw, vx} = data;
    const {x} = offsets;
    return tx - dw - x >= Math.max(vx, 0);
  }
  right(data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload): boolean {
    const {tx, dw, tw, vw} = data;
    const {x} = offsets;
    return tx + tw + dw + x <= vw
  }
  /* use later */
  checkCrossByViewport(data: PositionCheckerDataPayload, offset: number): boolean {
    const {dx, dw, vw, dy, dh, vh} = data;
    return dx - offset < 0 || dx + dw + offset > vw || dy - offset < 0 || dy + dh + offset > vh
  }
}