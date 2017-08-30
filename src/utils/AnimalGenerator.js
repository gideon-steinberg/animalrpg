export { getAnimalLink, availableAnimals };

function availableAnimals() {
  return ["dog"];
}

function getAnimalLink(animalType) {
  var animalList = getAnimalList(animalType);
  var random = Math.random();
  var randomAnimal = Math.floor(random * animalList.length);

  return animalList[randomAnimal];
}

function getAnimalList(animalType) {
  switch(animalType) {
    case "dog": return dogList();
    default: throw 'Unknown Animal Type'; 
  }
}

function dogList() {
  return [ "http://i.imgur.com/gSEFJey.jpg",
           "https://i.redd.it/jir3ivdb1diz.jpg",
           "https://i.redd.it/el7zyljm7diz.jpg",
           "https://i.redd.it/ocm8vwpsbciz.jpg",
           "https://i.redd.it/fib9v78bs9iz.jpg" ];
}
