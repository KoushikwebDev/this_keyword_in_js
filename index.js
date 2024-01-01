// "use strict";

//? This in global space

console.log("global space", this); // global object => window object for the browser

//? This in side a function

function x() {
  console.log("function space", this); // global object => window object for the browser, in strict mode "this" is undefined

  //*   if the value of this keyword is undefined or null, browser will replace it with window object only in non-strict mode
}
x();

// This keyword value depends on how the function is called
window.x(); // global object => window object for the browser

//? This inside a object method

const obj = {
  name: "koushik",
  x: function () {
    console.log(this);
    return this;
  },
};

const value = obj.x();
// console.log(value.name);

//? Call Apply Bind

const student = {
  name: "koushik",
  age: 21,
  printInfo: function (param1, param2) {
    console.log(this.name, this.age);
    console.log(param1, param2);
  },
};
student.printInfo();

const student2 = {
  name: "shyam",
  age: 26,
};

student.printInfo.call(student2, "param1", "param2");
student.printInfo.bind(student2, "param1", "param2")();
student.printInfo.apply(student2, ["param1", "param2"]);

//? This inside Arrow function

const obj2 = {
  name: "koushik",
  x: () => {
    console.log(this); // global object => window object for the browser
    //* enclosing lexical context, arrow functions don't provide their own this binding
  },
};
obj2.x();

const obj3 = {
  name: "koushik",
  x: function () {
    const y = () => {
      console.log(this); // obj3 object
      //* enclosing lexical context, arrow functions don't provide their own this binding
    };
    y();

    function z() {
      console.log(this); // global object => window object for the browser, in strict mode it is undefined
    }
    z();
  },
};

obj3.x();

//? This inside DOM Element

document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // button element itself
});

//? This inside IIFE

(function () {
  console.log(this); // global object => window object for the browser
})();

//? This inside class

class Person {
  constructor() {
    console.log(this); // Person object
  }
  print() {
    console.log(this); // Person object
  }
}
const rahim = new Person();
rahim.print();
