class Person {
  #name;  // Private field

  constructor(name) {
    this.#name = name;
  }

  getName() {  // Accessor method
    return this.#name;
  }
}

const person = new Person('Alice');
console.log(person.getName());  // Accessing private field via accessor method. Output: Alice
console.log(person.#name); // Error: Private field '#name' must be declared in an enclosing class
