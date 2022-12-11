const someJSCodeExample = `// You can use the 'someJSCodeExample' variable in your code`;

const jsonConfigure = `
{

  "quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": false
  },
  "quickSuggestionsDelay": 10,
  "iconsInSuggestions": true,
  "tabCompletion": "on",
  "suggestOnTriggerCharacters": true,
  "acceptSuggestionOnEnter": "smart",
  "acceptSuggestionOnCommitCharacter": true,
  "wordBasedSuggestions": true,
  "suggestSelection": "recentlyUsed",
  "suggestFilterGraceful": true,
  "selectionHighlight": true,
  "occurrencesHighlight": true,
  "codeLens": true,
  "folding": true,
  "foldingStrategy": "auto",
  "showFoldingControls": "mouseover",
  "matchBrackets": true,
  "find": {
    "autoFindInSelection": "always"
  },
  "lightbulb": {
    "enabled": true
  },
  "editorLightBulb.enabled": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.formatOnSaveMode": "modifications",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.codeActionsOnSaveTimeout": 1500,
  "editor.codeActionsOnSaveTimeout": 1500,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}`;

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


  const propsArray = Object.keys(props);

  const stylesDynamic = {

  };

  const stylesStatic = {

  };

  return (
    <div style={stylesStatic} className="component-name">
      <h2>ComponentName</h2>

      <div style={stylesDynamic}>
        <p>ComponentName</p>
      </div>
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
    language: 'javascript',
    value: componentName,
  },
};

export default files;
