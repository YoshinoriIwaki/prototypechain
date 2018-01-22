let obj = { val: "hoge" };
let copyObj = Object.assign({}, obj);
copyObj.val;

let objA = {a:'a'};
let objB = {b:'b'};
let objC = {c:'c'};
let mergeObj = Object.assign(objA, objB, objC);
objA;
objA === mergeObj;

let objD = {d:'d'};
let objSym = {[Symbol('sym')]:2};
let copyObj = Object.assign(objD, objSym);
objD;

let human = {name:'iga'};
let igarashi = Object.assign({}, human);
human.name = 'tara';
igarashi;