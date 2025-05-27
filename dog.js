class Dog {
  #name;  // Private field

  constructor(name) {
    this.#name = name;
  }

  set name(newName) {  // Setter method
    this.#name = newName;
  }

  get name() {  // Getter method
    return this.#name;
  }
}

const myDog = new Dog('Max');
myDog.name = 'Buddy';   
console.log(myDog.name);  // Output: Buddy
