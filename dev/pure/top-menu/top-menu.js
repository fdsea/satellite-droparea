import {SatelliteDroparea} from "../../../core";

function createDropElement({width, top, left, right}) {
  const markup = `<div class="top-menu" style="width:${width};top:${top};left:${left};right:${right}">
		<ul>
		    <li>Link #1</li>
		    <li>Link #2</li>
		    <li>Link #3</li>
		    <li>Link #4</li>
		    <li>Link #5</li>
		    <li>Link #6</li>
    </ul>
	</div>`
  document.body.insertAdjacentHTML('beforeend', markup);
}

function removeDropElement() {
  const element = document.querySelector('.top-menu');
  document.body.removeChild(element)
}

function getDropElement() {
  return document.querySelector('.top-menu');
}

const target = document.querySelector('.menu-target');



let DPRInstance = null;
let dropper = null;

function createDrop() {
  createDropElement({});
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
    target: document.querySelector('.menu-target'),
    dropper: document.querySelector('.top-menu'),
    customDropWidth: 200,
    verticalAlign: 'start',
    horizontalAlign: 'center',
    verticalOffset: 0,
    horizontalOffset: 10,
    positionSteps: ['bottom', 'left']
  });

  updatePosition();

  DPRInstance.emit('target-out-of', () => {
    console.log('out & close drop');
    closeDrop();
  });

});

document.body.addEventListener('click', (e) => {
  const t = document.querySelector('.menu-target');
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
    if(!(width && top && left)) {
      return false;
    }
    if(dropper) {
      dropper.style.width = `${width}px`;
      dropper.style.top = `${top}px`;
      dropper.style.left = `${left}px`;
    }
  }
}