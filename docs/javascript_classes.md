---
id: javascript_classes
title: Classes and objects
slug: /javascript_classes
---

### 1. How do you define a class in JavaScript?
> A class is a template for building objects.
> Objects are variables that can contain many values (properties)

Class syntax:

```ruby
class MyClass { 
  constructor(property1, property2) {  
    this.property1 = property1,
    this.property2 = property2,
    ...}
  method1() { ... }
  method2() { ... }
}
```
* Classes' name begin with capital letter as a convention.
* The object `constructor` method is a special method of a class for creating and initializing an object of that class. A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

### 2. What is a class property?  
> Class' properties are what build an object. Object is a collection of unordered properties.

* To access an object's property inside the class we use the reserved word `this.`
* To access an object's property outside the class we use `objectName.propertyName`.

### 3. What does mean to instantiate an object of a class?
> To instantiate an object is to create a new object from a class.

```
var myObject = new MyClass("whatever", "whatever");
```

* We define properties giving a value for each of them, separating values with comas. They can be strings, numbers, etc. It depends on your object's properties.

### 4. What is a class method and how do you use it ? Can methods in classes access to class properties? How?
* Methods are another class members, such as the constructor (that is a special method). 
* Class methods are created with the same syntax as object methods. You can add any number of methods.

```
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```


* Class methods are used as functions related with its class properties defined in the constructor. We also can access the function from each new object. The results will be based on the object being used.

Example:

```
class Rectangle {

  constructor(width, height){
    this.width = width
    this.height = height
  }

  getArea(){
    return this.width * this.height
  }
}
let myRectangle1 = new Rectangle (5, 4)

console.log(myRectangle1.getArea()) // will give us 20
```

### 5. What is the difference between a __standard__ class method and a static method?
> The `static` keyword defines a static method or property for a class.
A `static` method is that method that can be ran without having to instantiate a class.

* Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class. In other words, `static` methods have no access to data stored in specific objects.
* Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

Example:
```
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

  // You can calll 'hello()' on the Car Class, not in the object (NOT: myCar.hello()):

document.getElementById("demo").innerHTML = Car.hello();
```

**Setters & getters**
> Setters (`set`) and getters (`get`) are special methods that allow us define and obtain values from our class' properties.

* They behave as they were methods.
* `get`is used to obtain (`return`) the value of a property.
* `set`is used to asign new values for your properties.

Setter example:
```
class Square {
  constructor(width){
    this.width = width
    this.height = width
  }

  get area(){
    return this.width * this.height
  }
}
let square1 = new Square(4);
console.log(square1.area) // 16 as a result
```

Getter example:
If we set a new value value for the area (ex:25) and use a setter method, we will redefine each property into 5. 
```
class Square {
  constructor(width){
    this.width = width
    this.height = width
  }

  get area(){
    return this.width * this.height
  }

  set area(area){
    this.width = Math.sqrt(area)
    this.width = this.width
  }
}

let square1 = new Square(4);

square1.area = 25

console.log(square1.width) // will be 5 instead of 4
console.log(square1.height) // will be 5 instead of 4
```

### 6. How do you define a subclass in JavaScript?
> `extends` keyword is used in class declarations to create a class that is a child of another class.

Syntax:

```class ChildClass extends ParentClass { ... }```

* The child class inherits all the methods from another class.
* Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
* Note: the parent class cannot inherit methods from the extended class.

* We use the `super()` method to refer to the parent class. By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
Then we can add properties into the constructor.

```
// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}
 
// Child class
class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}
 
const mySong = new Song({ 
  artist: 'Queen', 
  name: 'Bohemian Rhapsody', 
  publishDate: 1975
}); 
```
### 8. General info about how to use classes in JavaScript

:point_right: Mozilla: [Mozilla classes](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes)

:point_right: Code Academy Lessons 8 & 9: [Lesson 8: objects](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects) & [Lesson 9: classes](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-classes)

:point_right: [Objects cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet)

:point_right: [Classes cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-classes/cheatsheet)

### 9. Crash course about classes in JavaScript
Video tutorials in spanish:

:point_right: Bluuweb! Basic tutorial: [Youtube tutorial](https://www.youtube.com/watch?v=DWnZi8G_kZs)

:point_right: Dcode tutorial: [Youtube tutorial](https://www.youtube.com/c/dcode-software/search?query=javascript%20classes)
### 10. A GitHub repository/page with exercises with classes (better if they have solution)
https://github.com/LambdaSchool/JS-Exercise-Classes
point_right: GitHub repository: [JS-Exercise-Classes](https://github.com/LambdaSchool/JS-Exercise-Classes)
Complete the tasks on index.html