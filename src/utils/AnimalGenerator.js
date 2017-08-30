export { getAnimalLink, availableAnimals };

function availableAnimals() {
  return ["fox", "dog", "cat"];
}

function getAnimalLink(animalType) {
  var animalList = getAnimalList(animalType);
  var random = Math.random();
  var randomAnimal = Math.floor(random * animalList.length);

  return animalList[randomAnimal];
}

function getAnimalList(animalType) {
  switch(animalType) {
    case 'fox': return foxList();
    case 'dog': return dogList();
    case 'cat': return catList();
    default: throw new Error('Unknown Animal Type');
  }
}

function dogList() {
  return [ "http://i.imgur.com/gSEFJey.jpg",
           "http://i.redd.it/jir3ivdb1diz.jpg",
           "http://i.redd.it/el7zyljm7diz.jpg",
           "http://i.redd.it/ocm8vwpsbciz.jpg",
           "http://i.redd.it/fib9v78bs9iz.jpg",
           "http://i.redd.it/ew6zksck0siz.jpg",
           "http://i.imgur.com/rSURMBH.gif" ];
}

function foxList() {
  return [ "http://i.imgur.com/1dsVswi.jpg",
           "http://i.imgur.com/5d5pYxx.jpg",
           "http://i.redd.it/mp6gel8ihjhz.png",
           "http://i.imgur.com/vB31Dm0.jpg",
           "http://i.imgur.com/bKicRSa.jpg" ];
}

function catList() {
  return [ "http://i.imgur.com/oa3WtOT.jpg",
           "http://i.redd.it/g93nrh6h0tiz.jpg",
           "http://i.imgur.com/fYkAegF.gif",
           "http://i.redd.it/4aqyyf8qpriz.jpg",
           "http://i.redd.it/f8ksap8b5piz.jpg" ];
}
