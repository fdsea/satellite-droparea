import {ElementCoords, OutputDropParameters, PositionAlign, RulesList} from "../base/types";
import {PositionAbilityChecker} from "./position-ability-checker";

export class Rules extends PositionAbilityChecker {

  elementsCoords = {} as ElementCoords;
  horizontalAlign: PositionAlign;
  verticalAlign: PositionAlign;
  horizontalOffset: number;
  verticalOffset: number;
  viewportOffset: number;
  lastPossiblePosition: string;

  positionRules: RulesList = {} as RulesList;

  constructor() {
    super();
  }

  protected getDropWidth(): number {return 0}

  getXOffset(offsetCoef: number = 1): number {
    const { tWidth, tLeft } = this.elementsCoords;
    const dropWidth = this.getDropWidth();
    return this.horizontalAlign === 'center'
      ? tLeft - ((dropWidth / 2) - (tWidth / 2) + this.horizontalOffset * offsetCoef)
      : this.horizontalAlign === 'start'
        ? tLeft + this.horizontalOffset
        : tLeft - ((dropWidth) - (tWidth) + this.horizontalOffset * offsetCoef)
  }

  getYOffset(offsetCoef: number = 1): number {
    const {tTop, tHeight, dHeight} = this.elementsCoords;
    return this.verticalAlign === 'center'
      ? tTop - ((dHeight / 2) - (tHeight / 2) + this.verticalOffset * offsetCoef)
      : this.verticalAlign === 'start'
        ? tTop + this.verticalOffset
        : tTop - ((dHeight) - (tHeight) + this.verticalOffset * offsetCoef)
  }

  getDropWAndXOffset(offsetCoef: number = 1): {dropWidth: number; dropLeft: number} {
    return {
      dropWidth: this.getDropWidth(),
      dropLeft: this.getXOffset(offsetCoef)
    }
  }

  getDropWAndYOffset(offsetCoef: number = 1): {dropWidth: number; dropTop: number} {
    return {
      dropWidth: this.getDropWidth(),
      dropTop: this.getYOffset(offsetCoef)
    }
  }

  topAlign(): OutputDropParameters {
    const {tTop, dHeight} = this.elementsCoords;
    const {dropWidth, dropLeft} = this.getDropWAndXOffset(0);
    const dropTop = tTop - dHeight - this.verticalOffset;
    return {
      width: dropWidth,
      left: dropLeft,
      top: dropTop
    }
  }
  bottomAlign(): OutputDropParameters {
    const { tTop, tHeight} = this.elementsCoords;
    const {dropWidth, dropLeft} = this.getDropWAndXOffset(0);
    const dropTop = tTop + tHeight + this.verticalOffset;
    return {
      width: dropWidth,
      left: dropLeft,
      top: dropTop
    }
  }
  rightAlign(): OutputDropParameters {
    const { tWidth, tLeft} = this.elementsCoords;
    const {dropWidth, dropTop} = this.getDropWAndYOffset(0);
    const dropLeft = tLeft + tWidth + this.horizontalOffset;
    return {
      width: dropWidth,
      left: dropLeft,
      top: dropTop
    }
  }
  leftAlign(): OutputDropParameters {
    const {tLeft} = this.elementsCoords;
    const {dropWidth, dropTop} = this.getDropWAndYOffset(0);
    const dropLeft = tLeft - dropWidth - this.horizontalOffset;
    return {
      width: dropWidth,
      left: dropLeft,
      top: dropTop
    }
  }
  autoAlign(): OutputDropParameters {
    const {vpWidth, tLeft, tWidth, tTop, tHeight, dHeight, vpClientHeight} = this.elementsCoords;
    const rule = this.positionRules[this.lastPossiblePosition];
    const {width, left, top} = rule();

    const output =  {
      width: width,
      left: left < 0
        ? this.viewportOffset
        : left + width > vpWidth
          ? vpWidth - width - this.horizontalOffset
          : left,
      top: top < 0
        ? this.viewportOffset
        : top + dHeight > vpClientHeight
          ? vpClientHeight - dHeight - this.verticalOffset
          : top,
    }
    return output;
  }
}