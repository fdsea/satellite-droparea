import {Positions} from "../base";

export type PositionCheckerDataPayload = {
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
}

export type PositionCheckerOffsetsPayload = {
  x: number;
  y: number;
}

export type CheckersList = {
  [key: Positions]: (data: PositionCheckerDataPayload, offsets: PositionCheckerOffsetsPayload) => boolean
}