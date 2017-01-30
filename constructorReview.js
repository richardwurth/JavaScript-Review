//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

  var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

function person (name, age, height, gender) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.gender = gender;
}

//Create a animal array and a person array.

  //code here

var animalArray = [];
var personArray = [];

//Create two instances of Animal and push those into your animal array

  //code here
function pusher (thing,array) {
  array.push(thing);
}


var newAnimal1 = new Animal("Dog","Negra",4,"black",["Scraps","Dog Food","Just about anything"]);
var newAnimal2 = new Animal("Cat","Mario",4,"Black and white",["Fish","Milk","Cat Food"]);

pusher(newAnimal1,animalArray);
pusher(newAnimal2,animalArray);
console.log(animalArray);

//Create two instances of person and push those into your person array.

  //code here

var newPerson1 = new person("Richard",25,"6 feet 2 inches","Male");
var newPerson2 = new person("Serena",28,"5 feet 3 inches","Female");
pusher(newPerson1,personArray);
pusher(newPerson2,personArray);
console.log(personArray);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

  Animal.prototype.eat = function () {
    var diceRoll = Math.floor(Math.random()*this.food.length);
    if (diceRoll === 0) {
      alert(this.name + " ate " + this.food[0]);
    } else if (diceRoll === 1) {
      alert(this.name + " ate " + this.food[1]);
    } else if (diceRoll === 2) {
      alert(this.name + " ate " + this.food[2]);
    } else (this.name + " decided that they aren't hungry.");
  }

newAnimal2.eat();

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?

console.log("No, we cannot. The reason that we cannot is because it uses a normal function and not the Constructor method cannot have the prototype modified in such a way that would allow us to do so.")

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
