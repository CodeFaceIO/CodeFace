const someJSCodeExample = `
  
// You can use the 'someJSCodeExample' variable in your code

const calendarTable = document.getElementById("table-calendar");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

let maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let firstMonthIndexes = [26, 27, 28, 29, 30, 31].reverse();
let allDays = [],
  newArr = [],
  totalArr = [],
  calendarIndex = [],
  allTrs = [];

let counter = -1;
let initialIndex = 0;

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", createCalendarController);
  leftButton.addEventListener("click", previousMonthController);
  rightButton.addEventListener("click", nextMonthController);
}

maxDays.forEach((max) => {
  for (let i = 1; i <= max; i++) {
    allDays.push(i);
  }
});

for (let i = 0; i < firstMonthIndexes.length; i++) {
  allDays.unshift(firstMonthIndexes[i]);
  allDays.pop();
}

for (let i = 0; i < allDays.length; i++) {
  newArr.push(allDays[i]);
  if (newArr.length === 42) {
    totalArr.push([...newArr]);
    newArr = [];
  }
}

function calendarController(paramsIndex) {
  calendarViewCleaner();
  calendarIndex = totalArr[paramsIndex];

  let TRCounter = calendarIndex.length / 7;

  for (let i = 0; i < TRCounter; i++) {
    let tr = document.createElement("tr");
    allTrs.push(tr);
  }

  calendarIndex.forEach((day, index) => {
    counter++;
    let td = document.createElement("td");
    td.className = "rounded";
    td.textContent = day;
    let trustedIndex = Math.floor(counter / 7);
    allTrs[trustedIndex].appendChild(td);
    calendarTable.appendChild(allTrs[trustedIndex]);
  });
}

function createCalendarController() {
  calendarController(initialIndex);
}

function previousMonthController() {
  initialIndex -= 1;

  if (initialIndex < 0) initialIndex = 7;

  calendarController(initialIndex);
}

function nextMonthController() {
  initialIndex += 1;

  if (initialIndex === 7) initialIndex = 0;

  calendarController(initialIndex);
}

function calendarViewCleaner() {
  while (calendarTable.firstElementChild !== null) {
    calendarTable.removeChild(calendarTable.firstElementChild);
  }
}

`;

const jsonConfigure = `
{

  "glyphMargin": true,
  "automaticLayout": true,
  "fontSize": 11,
  "fontFamily": "Fira Code",
  "fontWeight": "light",
  "lineHeight": 2,
  "wordWrap": "on",
  "wordWrapColumn": 120,
  "folding": true,
  "lineNumbersMinChars": 3,
  "scrollBeyondLastLine": false,
  "fixedOverflowWidgets": true,
  "renderLineHighlight": "line",
  "renderIndentGuides": true,
  "renderFinalNewline": true,
  "renderWhitespace": "none",
  "parameterHints": {
    "enabled": true
  },
  "suggest": {
    "filterGraceful": true,
    "snippets": "inline",
    "localityBonus": true,
    "shareSuggestSelections": true,
    "showIcons": false,
    "maxVisibleSuggestions": 12,
    "insertMode": "insert",
    "insertHighlight": true,
    "suggestFontSize": 14,
    "suggestLineHeight": 24
  },
  "minimap": {
    "enabled": true
  },
  "quickSuggestions": {
    "enabled": true,
    "other": true,
    "comments": true
  },
  "scrollbar": {
    "verticalScrollbarSize": 0,
    "horizontalScrollbarSize": 0,
    "vertical": "visible",
    "horizontal": "visible",
    "verticalHasArrows": true,
    "horizontalHasArrows": true,
    "useShadows": true,
    "arrowSize": 0
  }
}
`;

const cakejs = `


function isAValidSlice(cake, x, y, width, height) {

  if ((x + width) > cake[0].length) return false;
  if ((y + height) > cake.length) return false;



  const slice = cake.slice(y, y + height).map(e => e.slice(x, x + width));
  const slice_str = stringify(slice);


  if (slice_str.match(/x/)) {

    return false;
  }
  

  const numberOfO = (slice_str.match(/o/g) || []).length;
  if (numberOfO != 1) {

    return false;
  }
  

  return slice_str;
}


function doCut(cake, x, y, width, height) {

  for (let i = y; i < (y + height); i++) {
    for (let j = x; j < (x + width); j++) {
      cake[i][j] = 'x';
    }
  }
  return cake;
}


function findFirstTopLeftCorner(cake) {
  for (let i = 0; i < cake.length; i++) {
    for (let j = 0; j < cake[i].length; j++) {
      if (cake[i][j] !== 'x') {
        return [i,j];
      }
    }
  }
}

function run(cake, size, slices) {

  const corner = findFirstTopLeftCorner(cake);


  if (null == corner) return slices;
  
  let x = corner[1];
  let y = corner[0];

  for (let width = size; width >= 1; width--) {
    for (let height = 1; height <= size; height++) {
      if ((height * width) !== size) continue;
  

      const slice = isAValidSlice(cake, x, y, width, height);
      if (!slice) continue;
  

      const newSlices = Object.assign([], slices);
      newSlices.push(slice);
      

      let newCake = doCut(JSON.parse(JSON.stringify(cake)), x, y, width, height);
      

      let r = run(newCake, size, newSlices);

      if (r.length) {

        return r;
      }
    }
  }

  return [];
}

function cut(cake) {

  const num = cake.match(/o/g).length;

const cake_array = cake.split('').map(e => e.split(''));
  

  const rows = cake_array.length;
  const cols = cake_array[0].length;

  const size = (rows * cols) / num;

  return run(cake_array, size, []);
}

`;

const componentName = `
import React from 'react';

const ComponentName = (props) => {

  const stylesDynamic = {

  };

  const stylesStatic = {

  };

  return (
    <div style={stylesStatic} className="component-name">
      <h2>ComponentName</h2>
    </div>
  );

};

export default ComponentName;
`;

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: someJSCodeExample,
  },
  'configure.json': {
    name: 'configure.json',
    language: 'json',
    value: jsonConfigure,
  },
  'cake.js': {
    name: 'cake.js',
    language: 'javascript',
    value: cakejs,
  },
  'ComponentName.js': {
    name: 'ComponentName.js',
    language: 'jsx',
    value: componentName,
  },
};

export default files;
