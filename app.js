//npm ~ global command comes with node
//npm ~ Version

// Local dependency - use it only in this particular project
//npm i <packageName>

// Global dependency - use it in any project
// npm install -g <packageName> 
//sudo install -g <packageName> (mac)

//package.json - Manifest file(stores important info about project/package)
//manual approach [create package.json in the root , create properties etc]
//npm init [ step by step , press enter to skip]
//npm init -y [Everything default]

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);

