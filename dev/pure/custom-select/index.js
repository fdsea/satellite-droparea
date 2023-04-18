import {SatelliteDroparea, getClosestPointCoords} from "../../../core";

function createDropElement({width, top, left, right}, {cleft, cTop}) {
  const markup = `<div class="drop drop--select" style="width:${width};top:${top};left:${left};right:${right}">
    <div class="corner" style="transform: translate(${cleft}px, ${cTop}px)"></div>
    <div class="drop__inner">
      <div class="drop__item">Test #1</div>
      <div class="drop__item">Test #2</div>
      <div class="drop__item">Test #3</div>
      <div class="drop__item">Test #4</div>
      <div class="drop__item">Test #5</div>
      <div class="drop__item">Test #6</div>
      <div class="drop__item">Test #7</div>
      <div class="drop__item">Test #8</div>
    </div>
	</div>`
  document.body.insertAdjacentHTML('beforeend', markup);
}

function removeDropElement() {
  const element = document.querySelector('.drop--select');
  document.body.removeChild(element)
}

function getDropElement() {
  return document.querySelector('.drop--select');
}

const target = document.querySelector('.target');

let DPRInstance = null;
let dropper = null;

function createDrop() {
  createDropElement({}, {});
  dropper = getDropElement();
}

function closeDrop() {
  DPRInstance = null;
  removeDropElement();
  dropper = null;
}

target.addEventListener('click', () => {

  createDrop();

  DPRInstance = new SatelliteDroparea({
    viewport: document.documentElement,
    target: document.querySelector('.target'),
    dropper: document.querySelector('.drop--select'),
    //customDropWidth: 200,
    verticalAlign: 'center',
    horizontalAlign: 'center',
    verticalOffset: 10,
    horizontalOffset: 10,
    viewportOffset: 10,
    positionSteps: ['right', 'bottom']
  });

  updatePosition();

  DPRInstance.emit('target-out-of', () => {
    console.log('out & close drop');
    closeDrop();
  });


});

document.body.addEventListener('click', (e) => {
  const t = document.querySelector('.target');
  if(
    dropper
    && t
    && (e.target !== dropper)
    && !dropper.contains(e.target)
    && !t.contains(e.target)
    && (e.target !== t)
  ) {
    closeDrop();
  }
});

window.addEventListener('scroll', () => {
  updatePosition();
});

window.addEventListener('resize', () => {
  updatePosition();
});



function updatePosition() {
  if(DPRInstance) {
    const {width, top, left} = DPRInstance.getDropAreaOutputData();
    const {
      tWidth: tw,
      tTop: ty,
      tLeft: tx,
      tHeight: th,
      dWidth: dw,
      dTop: dy,
      dLeft: dx,
      dHeight: dh
    } = DPRInstance.getElementsData();

    if(!!dropper) {

      console.log(DPRInstance.getPossiblePositions())

      dropper.style.width = `${width}px`;
      dropper.style.top = `${top}px`;
      dropper.style.left = `${left}px`;

      // const corner = dropper.querySelector('.corner');
      // const closestPoint = getClosestPointCoords({tw, ty, tx, th, dw, dy, dx, dh}, {xOffset: 0, yOffset: 0});
      // const {isPointExist, dropPosition, coordsPositionInPercentRelativeDropSize} = closestPoint;
      // if(isPointExist) {
      //   corner.style.left = `${coordsPositionInPercentRelativeDropSize.x}%`;
      //   corner.style.top = `${coordsPositionInPercentRelativeDropSize.y - 4}%`;
      // }
    }
  }
}