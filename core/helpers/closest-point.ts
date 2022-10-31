import {
  ClosestPointCoordsOutput,
  ClosestPointOffsets,
  ClosestPointOutput,
  ClosestPointPayload,
  DropPosition
} from "./types";


export function getClosestPointCoords(
  data: ClosestPointPayload,
  offsets: ClosestPointOffsets = {xOffset: 0, yOffset: 0}
): ClosestPointOutput {
  const {dw, dh, dx, dy, th, tw, tx, ty} = data;
  const {xOffset, yOffset} = offsets;
  const MAX_PERCENT = 100;
  const MIN_PERCENT = 0;
  const txc = tx + tw / 2;
  const tyc = ty + th / 2;

  let coords: ClosestPointCoordsOutput = {x: 0, y: 0};

  const x1 = dx + dw - xOffset <= tx; // left
  const x2 = tx + tw - xOffset <= dx; // right

  const y1 = dy + dh - yOffset <= ty; // top
  const y2 = ty + th - yOffset <= dy; // bottom

  const sumVectorsWithoutCrossXAxis = Math.max(dx + dw, tx + tw) - Math.min(dx, tx);
  const sumVectorsWithoutCrossYAxis = Math.max(dy + dh, ty + th) - Math.min(dy, ty);

  // const isXCross = sumVectorsWithoutCrossXAxis < ((dw + tw) - xOffset);
  // const isYCross = sumVectorsWithoutCrossYAxis < ((dh + th) - yOffset);

  const dwPercentBar = dw / MAX_PERCENT;
  const dhPercentBar = dh / MAX_PERCENT;

  const halfCrossXArea = (((dw + tw) - sumVectorsWithoutCrossXAxis) / 2);
  const halfCrossYArea = (((dh + th) - sumVectorsWithoutCrossYAxis) / 2);

  const isDropdownDontCrossXTargetCenter = dx + dw > txc && dx < txc;
  const isDropdownDontCrossYTargetCenter = dy + dh > tyc && dy < tyc;

  let dropPosition: DropPosition = null;

  if(!x1 && !x2) {
    coords = {
      x: isDropdownDontCrossXTargetCenter
        ? (txc - dx) / dwPercentBar
        : dx >= txc ? halfCrossXArea / dwPercentBar : (dw - halfCrossXArea) / dwPercentBar,
      y: y1 ? MAX_PERCENT : y2 ? MIN_PERCENT : MIN_PERCENT
    };
    dropPosition = y1 ? 'top' : y2 ? 'bottom' : null;
  }

  if(!y1 && !y2) {
    coords = {
      y: isDropdownDontCrossYTargetCenter
        ? (tyc - dy) / dhPercentBar
        : dy >= tyc ? halfCrossYArea / dhPercentBar : (dh - halfCrossYArea) / dhPercentBar,
      x: x1 ? MAX_PERCENT : x2 ? MIN_PERCENT : MIN_PERCENT
    };
    dropPosition = x1 ? 'left' : x2 ? 'right' : null;
  }

  return {
    isPointExist: !((x1 || x2) &&  (y1 || y2)),
    coordsPositionInPercentRelativeDropSize: coords,
    dropPosition
  }
}