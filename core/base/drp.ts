import {
  ElementCoords,
  EmitsList,
  OutputDropParameters,
  PayloadConfig, PositionAlign,
  Positions,
  RulesList
} from './types';
import {Rules} from "../rules";
import {PositionsEnum} from "../enums";

export class SatelliteDroparea extends Rules {
  target!: HTMLElement;
  viewport!: HTMLElement;
  dropper!: HTMLElement;
  verticalOffset: number;
  horizontalOffset: number;
  viewportOffset: number;
  customDropWidth: null | number;
  verticalAlign: PositionAlign;
  horizontalAlign: PositionAlign;
  elementsCoords = {} as ElementCoords;
  currentPosition: Positions;
  defaultPosition = PositionsEnum.AUTO;
  positionRules: RulesList;
  emits: EmitsList;
  positionsSteps: Array<string>;

  constructor(payload: PayloadConfig) {
    super();
    this.target = payload.target;
    this.viewport = payload.viewport;
    this.dropper = payload.dropper;
    this.verticalOffset = payload.verticalOffset || 0;
    this.horizontalOffset = payload.horizontalOffset || 0;
    this.viewportOffset = payload.viewportOffset || 10;
    this.customDropWidth = payload.customDropWidth || null;
    this.verticalAlign = payload.verticalAlign || 'center';
    this.horizontalAlign = payload.horizontalAlign || 'center';
    this.positionsSteps = payload.positionSteps || [PositionsEnum.BOTTOM];
    this.currentPosition = this.positionsSteps[0];
    this.positionRules = {
      'top': this.topAlign.bind(this),
      'right': this.rightAlign.bind(this),
      'bottom': this.bottomAlign.bind(this),
      'left': this.leftAlign.bind(this),
      'auto': this.autoAlign.bind(this)
    }
    this.emits = {
      'target-out-of': () => {}
    }

    this.lastPossiblePosition = this.currentPosition ?? this.positionsSteps[0];
  }

  private getPossiblePositions(): Array<Positions> {
    const list = this.positionsSteps.filter((position) => {
      const {
        tWidth: tw,
        tTop: ty,
        tLeft: tx,
        tHeight: th,

        dTop: dy,
        dLeft: dx,
        dHeight: dh,

        vpClientHeight: vh,
        vpWidth: vw,
        vpLeft: vx,
        vpTop: vy

      } = this.elementsCoords;
      const c = this.checkPosition(
        position,
        {tw, ty, tx, th, dh, dw: this.getDropWidth(), dx, dy, vh, vw, vx, vy },
        {x: this.horizontalOffset, y: this.verticalOffset}
      );
      return c;
    });
    return list;
  }

  protected setRule(name: string, method: Function) {
    this.positionRules = {
      ...this.positionRules,
      [name]: method.bind(this)
    }
  }

  protected updateDropLink(dropElement: HTMLElement) {
    this.dropper = dropElement;
  }

  protected updateTargetLink(targetElement: HTMLElement) {
    this.target = targetElement;
  }

  protected updateViewportLink(ViewPortElement: HTMLElement) {
    this.viewport = ViewPortElement;
  }

  private isTargetOutOfCheck() {
    const {tWidth, tHeight, tTop, tLeft, vpWidth, vpClientHeight} = this.elementsCoords;
    return tTop < 0 || tLeft < 0 || (tTop + tHeight) > vpClientHeight || (tLeft + tWidth) > vpWidth;
  }

  protected getDropWidth(): number {
    return this.customDropWidth || this.elementsCoords.tWidth;
  }

  private getElementRectData(element: HTMLElement) {
    return element ? element.getBoundingClientRect() : null;
  }
  private getDropperRectData() {
    return this.getElementRectData(this.dropper);
  }
  private getTargetRectData() {
    return this.getElementRectData(this.target);
  }
  private getViewPortSize() {
    return this.getElementRectData(this.viewport);
  }

  emit(name: string, callback: () => void) {
    this.emits[name] = callback.bind(this);
  }

  private calc(): OutputDropParameters {
    return this.positionRules[this.currentPosition]();
  }

  private correctionPosition(): OutputDropParameters {

    const positions = this.getPossiblePositions();

    this.currentPosition = this.defaultPosition;

    if(positions.length !== 0) {
      this.lastPossiblePosition = positions[0];
    }

    return this.calc();
  }
  private setElementsBounding() {
    const t = this.getTargetRectData();
    const vp = this.getViewPortSize();
    const d = this.getDropperRectData();
    if(!(t && vp && d)) {
      return false;
    }
    const {width: tWidth, top: tTop, height: tHeight, left: tLeft} = t;
    const {width: vpWidth, top: vpTop, height: vpHeight, left: vpLeft} = vp;
    const {width: dWidth, top: dTop, height: dHeight, left: dLeft} = d;

    const {clientHeight: vpClientHeight} = this.viewport;

    this.elementsCoords = {
      tWidth, tTop, tHeight, tLeft,
      vpWidth, vpTop, vpHeight, vpLeft,
      dWidth, dTop, dHeight, dLeft,
      vpClientHeight
    };

    if(this.isTargetOutOfCheck()) {
      this.emits['target-out-of']();
    }

    return true;
  }

  getElementsData(): ElementCoords | null {
    return this.elementsCoords || null;
  }

  getDropAreaOutputData(): OutputDropParameters | null {
    const isDataExist = this.setElementsBounding();
    if(!isDataExist) {
      return { width: 0, top: 0, left: 0 }
    }
    return this.correctionPosition() || null;
  }
}
