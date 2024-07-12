// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(me){
    cats.push(me);
}
function destructivelyPrependCat(keith){
    cats.unshift(keith);
}

console.log(cats);

// Function removes the last cat from the list
function destructivelyRemoveLastCat(){
    cats.pop();
}

function appendCat(no) {

    return [...cats, no];
  }

  function destructivelyRemoveFirstCat(){
    cats.shift();
  }

  function removeFirstCat() {

    return cats.slice(1);
  }

  function prependCat(yes) {

    return [yes,...cats];
  }

  function removeLastCat() {
    
    return cats.slice(0, -1);
  }