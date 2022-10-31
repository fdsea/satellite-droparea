export type ClosestPointPayload = {
  dw: number;
  dh: number;
  dx: number;
  dy: number;
  th: number;
  tw: number;
  tx: number;
  ty: number;
}

export type ClosestPointOffsets = {
  xOffset: number;
  yOffset: number;
}

export type ClosestPointCoordsOutput = {
  x: number;
  y: number;
}

export type DropPosition = "top" | "left" | "bottom" | "right" | "auto" | null;

export type ClosestPointOutput = {
  isPointExist: boolean;
  coordsPositionInPercentRelativeDropSize: ClosestPointCoordsOutput;
  dropPosition: DropPosition;
}