
export type PositionAlign = 'center' | 'start' | 'end';

export type Positions = 'top' | 'right' | 'bottom' | 'left' | 'auto' | string;

export type Emits = 'target-out-of' | string;

export type PayloadConfig = {
  target: HTMLElement;
  viewport: HTMLElement;
  dropper: HTMLElement;
  verticalOffset?: number;
  horizontalOffset?: number;
  viewportOffset?: number;
  customDropWidth?: number | null;
  verticalAlign?: PositionAlign;
  horizontalAlign?: PositionAlign;
  positionSteps?: Array<string>;
}

export type ElementCoords = {
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
}

export type OutputDropParameters = {
  width: number;
  left: number;
  top: number;
}

export type RulesList = {
  [key in Positions]: () => OutputDropParameters
}


export type EmitsList = {
  [key in Emits]: () => void
}
