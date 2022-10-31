!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["satellite-droparea"]=e():t["satellite-droparea"]=e()}(this,(()=>(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{DRP:()=>f,PositionAbilityChecker:()=>r,PositionsEnum:()=>i,Rules:()=>s,getClosestPointCoords:()=>l});var o,i,r=function(){function t(){this.checkers={top:this.top,bottom:this.bottom,left:this.left,right:this.right}}return t.prototype.checkPosition=function(t,e,o){return this.checkers[t](e,o)},t.prototype.top=function(t,e){var o=t.ty,i=t.dh,r=t.vy;return o-i-e.y>=Math.max(r,0)},t.prototype.bottom=function(t,e){var o=t.ty,i=t.dh,r=t.th,n=t.vh;return o+r+i+e.y<=n},t.prototype.left=function(t,e){var o=t.tx,i=t.dw,r=t.vx;return o-i-e.x>=Math.max(r,0)},t.prototype.right=function(t,e){var o=t.tx,i=t.dw,r=t.tw,n=t.vw;return o+r+i+e.x<=n},t.prototype.checkCrossByViewport=function(t,e){var o=t.dx,i=t.dw,r=t.vw,n=t.dy,s=t.dh,p=t.vh;return o-e<0||o+i+e>r||n-e<0||n+s+e>p},t}(),n=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=function(t){function e(){var e=t.call(this)||this;return e.elementsCoords={},e.positionRules={},e}return n(e,t),e.prototype.getDropWidth=function(){return 0},e.prototype.getXOffset=function(t){void 0===t&&(t=1);var e=this.elementsCoords,o=e.tWidth,i=e.tLeft,r=this.getDropWidth();return"center"===this.horizontalAlign?i-(r/2-o/2+this.horizontalOffset*t):"start"===this.horizontalAlign?i+this.horizontalOffset:i-(r-o+this.horizontalOffset*t)},e.prototype.getYOffset=function(t){void 0===t&&(t=1);var e=this.elementsCoords,o=e.tTop,i=e.tHeight,r=e.dHeight;return"center"===this.verticalAlign?o-(r/2-i/2+this.verticalOffset*t):"start"===this.verticalAlign?o+this.verticalOffset:o-(r-i+this.verticalOffset*t)},e.prototype.getDropWAndXOffset=function(t){return void 0===t&&(t=1),{dropWidth:this.getDropWidth(),dropLeft:this.getXOffset(t)}},e.prototype.getDropWAndYOffset=function(t){return void 0===t&&(t=1),{dropWidth:this.getDropWidth(),dropTop:this.getYOffset(t)}},e.prototype.topAlign=function(){var t=this.elementsCoords,e=t.tTop,o=t.dHeight,i=this.getDropWAndXOffset(0);return{width:i.dropWidth,left:i.dropLeft,top:e-o-this.verticalOffset}},e.prototype.bottomAlign=function(){var t=this.elementsCoords,e=t.tTop,o=t.tHeight,i=this.getDropWAndXOffset(0);return{width:i.dropWidth,left:i.dropLeft,top:e+o+this.verticalOffset}},e.prototype.rightAlign=function(){var t=this.elementsCoords,e=t.tWidth,o=t.tLeft,i=this.getDropWAndYOffset(0),r=i.dropWidth,n=i.dropTop;return{width:r,left:o+e+this.horizontalOffset,top:n}},e.prototype.leftAlign=function(){var t=this.elementsCoords.tLeft,e=this.getDropWAndYOffset(0),o=e.dropWidth,i=e.dropTop;return{width:o,left:t-o-this.horizontalOffset,top:i}},e.prototype.autoAlign=function(){var t=this.elementsCoords,e=t.vpWidth,o=(t.tLeft,t.tWidth,t.tTop,t.tHeight,t.dHeight),i=t.vpClientHeight,r=(0,this.positionRules[this.lastPossiblePosition])(),n=r.width,s=r.left,p=r.top;return{width:n,left:s<0?this.viewportOffset:s+n>e?e-n-this.horizontalOffset:s,top:p<0?this.viewportOffset:p+o>i?i-o-this.verticalOffset:p}},e}(r);!function(t){t.TOP="top",t.LEFT="left",t.BOTTOM="bottom",t.RIGHT="right",t.AUTO="auto"}(i||(i={}));var p=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),h=function(){return h=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},h.apply(this,arguments)},f=function(t){function e(e){var o,r=this;return(r=t.call(this)||this).elementsCoords={},r.defaultPosition=i.AUTO,r.target=e.target,r.viewport=e.viewport,r.dropper=e.dropper,r.verticalOffset=e.verticalOffset||0,r.horizontalOffset=e.horizontalOffset||0,r.viewportOffset=e.viewportOffset||10,r.customDropWidth=e.customDropWidth||null,r.verticalAlign=e.verticalAlign||"center",r.horizontalAlign=e.horizontalAlign||"center",r.positionsSteps=e.positionSteps||[i.BOTTOM],r.currentPosition=r.positionsSteps[0],r.positionRules={top:r.topAlign.bind(r),right:r.rightAlign.bind(r),bottom:r.bottomAlign.bind(r),left:r.leftAlign.bind(r),auto:r.autoAlign.bind(r)},r.emits={"target-out-of":function(){}},r.lastPossiblePosition=null!==(o=r.currentPosition)&&void 0!==o?o:r.positionsSteps[0],r}return p(e,t),e.prototype.getPossiblePositions=function(){var t=this;return this.positionsSteps.filter((function(e){var o=t.elementsCoords,i=o.tWidth,r=o.tTop,n=o.tLeft,s=o.tHeight,p=o.dTop,h=o.dLeft,f=o.dHeight,l=o.vpClientHeight,u=o.vpWidth,a=o.vpLeft,c=o.vpTop;return t.checkPosition(e,{tw:i,ty:r,tx:n,th:s,dh:f,dw:t.getDropWidth(),dx:h,dy:p,vh:l,vw:u,vx:a,vy:c},{x:t.horizontalOffset,y:t.verticalOffset})}))},e.prototype.setRule=function(t,e){var o;this.positionRules=h(h({},this.positionRules),((o={})[t]=e.bind(this),o))},e.prototype.updateDropLink=function(t){this.dropper=t},e.prototype.updateTargetLink=function(t){this.target=t},e.prototype.updateViewportLink=function(t){this.viewport=t},e.prototype.isTargetOutOfCheck=function(){var t=this.elementsCoords,e=t.tWidth,o=t.tHeight,i=t.tTop,r=t.tLeft,n=t.vpWidth,s=t.vpClientHeight;return i<0||r<0||i+o>s||r+e>n},e.prototype.getDropWidth=function(){return this.customDropWidth||this.elementsCoords.tWidth},e.prototype.getElementRectData=function(t){return t?t.getBoundingClientRect():null},e.prototype.getDropperRectData=function(){return this.getElementRectData(this.dropper)},e.prototype.getTargetRectData=function(){return this.getElementRectData(this.target)},e.prototype.getViewPortSize=function(){return this.getElementRectData(this.viewport)},e.prototype.emit=function(t,e){this.emits[t]=e.bind(this)},e.prototype.calc=function(){return this.positionRules[this.currentPosition]()},e.prototype.correctionPosition=function(){var t=this.getPossiblePositions();return this.currentPosition=this.defaultPosition,0!==t.length&&(this.lastPossiblePosition=t[0]),this.calc()},e.prototype.setElementsBounding=function(){var t=this.getTargetRectData(),e=this.getViewPortSize(),o=this.getDropperRectData();if(!(t&&e&&o))return!1;var i=t.width,r=t.top,n=t.height,s=t.left,p=e.width,h=e.top,f=e.height,l=e.left,u=o.width,a=o.top,c=o.height,d=o.left,g=this.viewport.clientHeight;return this.elementsCoords={tWidth:i,tTop:r,tHeight:n,tLeft:s,vpWidth:p,vpTop:h,vpHeight:f,vpLeft:l,dWidth:u,dTop:a,dHeight:c,dLeft:d,vpClientHeight:g},this.isTargetOutOfCheck()&&this.emits["target-out-of"](),!0},e.prototype.getElementsData=function(){return this.elementsCoords||null},e.prototype.getDropAreaOutputData=function(){return this.setElementsBounding()?this.correctionPosition()||null:{width:0,top:0,left:0}},e}(s);function l(t,e){void 0===e&&(e={xOffset:0,yOffset:0});var o=t.dw,i=t.dh,r=t.dx,n=t.dy,s=t.th,p=t.tw,h=t.tx,f=t.ty,l=e.xOffset,u=e.yOffset,a=100,c=h+p/2,d=f+s/2,g={x:0,y:0},v=r+o-l<=h,y=h+p-l<=r,O=n+i-u<=f,m=f+s-u<=n,w=o/a,b=i/a,P=(o+p-(Math.max(r+o,h+p)-Math.min(r,h)))/2,W=(i+s-(Math.max(n+i,f+s)-Math.min(n,f)))/2,T=null;return v||y||(g={x:r+o>c&&r<c?(c-r)/w:r>=c?P/w:(o-P)/w,y:O?a:0},T=O?"top":m?"bottom":null),O||m||(g={y:n+i>d&&n<d?(d-n)/b:n>=d?W/b:(i-W)/b,x:v?a:0},T=v?"left":y?"right":null),{isPointExist:!((v||y)&&(O||m)),coordsPositionInPercentRelativeDropSize:g,dropPosition:T}}return e})()));