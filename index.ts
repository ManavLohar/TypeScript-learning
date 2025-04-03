function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(5, 4));

// var d = [1, 2, 3, 4, 5];
// var e = d;
// d.pop();
// console.log(d);

const isDivisible4and8 = (a: number): boolean => {
  return a % 4 === 0 && a % 8 === 0;
};
console.log(isDivisible4and8(32));
console.log(isDivisible4and8(20));

let longText: string =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eius aut nam soluta saepe ad a modi dolorum, nemo nostrum!";
let shortText: string = longText.slice(0, 10);
console.log(shortText);

let product: string = "Laptop";
let price: number = 1300;
const sentence = (): string =>
  `The product ${product} is priced at ${price} dollars.`;
console.log(sentence());

const isPalindrome = (palin: string): boolean => {
  let myPalin = palin.split("").reverse().join("");
  return myPalin === palin;
};

console.log(isPalindrome("12321"));

// Type annotation
let e: string;

// Interface

// Interface:- It is a blueprint of an object. It defines the structure of an object.

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

const abcd = (obj: User) => {};

abcd({
  name: "Rohan",
  email: "rohan@gmail.com",
  password: "123456",
});

// Extending Interfaces

// Extending Interfaces:- We can extend the existing interface by using the extends keyword.

interface Admin extends User {
  admin: boolean;
}

const b = (obj: Admin) => {
  obj.admin;
};

// Type aliases

// Type Aliases:- Type aliases are used to give a new name to an existing type. It is used to make the code more readable.

type numberType1 = string;
type numberType2 = string | boolean | null;
// | Union
let f: numberType2;
let g: numberType1;

const c = (obj: numberType2) => {};

c("hello");

// Classes and objects:-- Constructor

// Constructor:- A constructor is a special method that is called when an object of a class is created. It is used to initialize the properties of the class.

class LaptopMaker {
  constructor(brand: string, color: string, price: number) {}
}

let h = new LaptopMaker("HP", "Black", 50000);

// -- this keyword

// this:- refers to the current object
class Example {
  constructor(public name: string) {
    this.name = name;
  }
}

let a1 = new Example("Mohit");

console.log(a1);

// -- Public, Private Access Modifier

// Public:- Accessible from anywhere

// Private:- Accessible only within the class

class BottleMaker {
  public test = "test";
  constructor(public name: string) {}
  // constructor(private name: string) {}
}

class MetalBottleMaker extends BottleMaker {
  constructor(name: string) {
    super(name);
  }
  getValue() {
    console.log(this.name, this.test);
  }
}

let a2 = new MetalBottleMaker("Jello");
// a2.name = "ChangeBottle";
a2.getValue();
console.log(a2);

// -- Protected Access Modifier

// Protected:- Accessible within the class and its subclasses

class BottleMaker1 {
  protected name = "Harsh";
}

class NewBottolMaker extends BottleMaker1 {
  public material = "Steel";
  getValue() {
    this.name = "Mohit";
  }
}

const a3 = new NewBottolMaker();
console.log(a3);
a3.getValue();

// Readonly Properties

// :- TypeScript supports readonly properties. The readonly keyword is used to declare a read-only property.

class NewUser {
  constructor(public readonly name: string) {}

  changeName() {
    this.name = "hello";
  }
}
const a4 = new NewUser("Rohit");
a4.changeName();
console.log(a4);

// Optional and Parameter Properties

// Optional Properties:- These are the properties that can be optional or can be present or absent.

class NewUser1 {
  public name;
  public age;
  public gender;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// Parameter Properties:- It is used to define the properties of a class in the constructor parameter.

// Example:-
class NewUser2 {
  constructor(public name: string, public age: number, public gender: string) {}
}

const a5 = new NewUser1("Rohit", 25, "Male");
const a6 = new NewUser1("Raju", 19);
console.log(a5, a6);

// Getter and Setter

// Getter:- It is a method that is used to get the value of a property.

// Setter:- It is a method that is used to set the value of a property.

// Example:-

class NewUser3 {
  constructor(public _name: string, public _age: number) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age() {
    return this._age;
  }
}

const a7 = new NewUser3("Rohit", 25);
a7.name;
a7.name = "Raghini";
console.log(a7);

// Static Members

// :- Static Members are the members of a class that can be accessed without creating an instance of the class.

// Example:-

class NewUser4 {
  static version = 4.0;

  static getRandomNumber() {
    return Math.random();
  }
}

console.log(NewUser4.getRandomNumber());

// Abstract classes and methods
