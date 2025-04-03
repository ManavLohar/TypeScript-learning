var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 4));
// var d = [1, 2, 3, 4, 5];
// var e = d;
// d.pop();
// console.log(d);
var isDivisible4and8 = function (a) {
    return a % 4 === 0 && a % 8 === 0;
};
console.log(isDivisible4and8(32));
console.log(isDivisible4and8(20));
var longText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eius aut nam soluta saepe ad a modi dolorum, nemo nostrum!";
var shortText = longText.slice(0, 10);
console.log(shortText);
var product = "Laptop";
var price = 1300;
var sentence = function () {
    return "The product ".concat(product, " is priced at ").concat(price, " dollars.");
};
console.log(sentence());
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12321"));
// Type annotation
var e;
var abcd = function (obj) { };
abcd({
    name: "Rohan",
    email: "rohan@gmail.com",
    password: "123456",
});
var b = function (obj) {
    obj.admin;
};
// | Union
var f;
var g;
var c = function (obj) { };
c("hello");
// Classes and objects:-- Constructor
// Constructor:- A constructor is a special method that is called when an object of a class is created. It is used to initialize the properties of the class.
var LaptopMaker = /** @class */ (function () {
    function LaptopMaker(brand, color, price) {
    }
    return LaptopMaker;
}());
var h = new LaptopMaker("HP", "Black", 50000);
// -- this keyword
// this:- refers to the current object
var Example = /** @class */ (function () {
    function Example(name) {
        this.name = name;
        this.name = name;
    }
    return Example;
}());
var a1 = new Example("Mohit");
console.log(a1);
// -- Public, Private Access Modifier
// Public:- Accessible from anywhere
// Private:- Accessible only within the class
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
        this.test = "test";
    }
    return BottleMaker;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker(name) {
        return _super.call(this, name) || this;
    }
    MetalBottleMaker.prototype.getValue = function () {
        console.log(this.name, this.test);
    };
    return MetalBottleMaker;
}(BottleMaker));
var a2 = new MetalBottleMaker("Jello");
// a2.name = "ChangeBottle";
a2.getValue();
console.log(a2);
// -- Protected Access Modifier
// Protected:- Accessible within the class and its subclasses
var BottleMaker1 = /** @class */ (function () {
    function BottleMaker1() {
        this.name = "Harsh";
    }
    return BottleMaker1;
}());
var NewBottolMaker = /** @class */ (function (_super) {
    __extends(NewBottolMaker, _super);
    function NewBottolMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "Steel";
        return _this;
    }
    NewBottolMaker.prototype.getValue = function () {
        this.name = "Mohit";
    };
    return NewBottolMaker;
}(BottleMaker1));
var a3 = new NewBottolMaker();
console.log(a3);
a3.getValue();
// Readonly Properties
// :- TypeScript supports readonly properties. The readonly keyword is used to declare a read-only property.
var NewUser = /** @class */ (function () {
    function NewUser(name) {
        this.name = name;
    }
    NewUser.prototype.changeName = function () {
        this.name = "hello";
    };
    return NewUser;
}());
var a4 = new NewUser("Rohit");
a4.changeName();
console.log(a4);
// Optional and Parameter Properties
// Optional Properties:- These are the properties that can be optional or can be present or absent.
var NewUser1 = /** @class */ (function () {
    function NewUser1(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return NewUser1;
}());
// Parameter Properties:- It is used to define the properties of a class in the constructor parameter.
// Example:-
var NewUser2 = /** @class */ (function () {
    function NewUser2(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return NewUser2;
}());
var a5 = new NewUser1("Rohit", 25, "Male");
var a6 = new NewUser1("Raju", 19);
console.log(a5, a6);
// Getter and Setter
// Getter:- It is a method that is used to get the value of a property.
// Setter:- It is a method that is used to set the value of a property.
// Example:-
var NewUser3 = /** @class */ (function () {
    function NewUser3(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(NewUser3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewUser3.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return NewUser3;
}());
var a7 = new NewUser3("Rohit", 25);
a7.name;
a7.name = "Raghini";
console.log(a7);
// Static Members
// :- Static Members are the members of a class that can be accessed without creating an instance of the class.
// Example:-
var NewUser4 = /** @class */ (function () {
    function NewUser4() {
    }
    NewUser4.getRandomNumber = function () {
        return Math.random();
    };
    NewUser4.version = 4.0;
    return NewUser4;
}());
console.log(NewUser4.getRandomNumber());
// Abstract classes and methods
