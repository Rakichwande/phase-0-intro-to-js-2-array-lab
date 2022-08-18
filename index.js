// Write your solution here!
let cats= ["Milo" ,"Otis" ,"Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
let feline = cats.concat (["Broom"])

function appendCat(name) {
    return feline
}
const copyOfCats = [...cats]
copyOfCats.unshift("Arnold")
function prependCat () {
    return copyOfCats
}
const newCopy = [...cats]
function removeLastCat() {
    console.log(newCopy.pop());
    return newCopy
}
const lastCopy = [...cats]
function removeFirstCat () {
    console.log (lastCopy.shift())
    return lastCopy
}
