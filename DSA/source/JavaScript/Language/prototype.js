////////////////////////////////////////////////////////////////////////////////
// Images copied from http://dmitrysoshnikov.com/ecmascript/javascript-the-core //

(function understandingPrototype_1() {

  // An object is a collection of properties and has a single prototype object. The prototype may be either an object or the null value.
  var simpleObject = {
    x: 10, // explicit own properties
    y: 20,
    mySimpleFunc: function() {
        console.log("Inside mySimpleFunc of simpleObject");
      }
      // implicit __proto__ property which is the reference to the prototype of simpleObject
  }

  simpleObject.mySimpleFunc();
  // prints Inside mySimpleFunc of simpleObject

  console.log(simpleObject.prototype);
  // prints undefined

  console.log(simpleObject.__proto__.toString());
  // returns [object Object]

  // <img border="0" height="150" src="source/JavaScript/Language/images/basic-object.png" width="440" />

  // Prototype objects are also just simple objects and may have their own prototypes.
  // If a prototype has a non-null reference to its prototype, and so on, this is called the prototype chain.
  // A prototype chain is a finite chain of objects which is used to implement inheritance and shared properties.

  // class-based inheritance — you put similar functionality into the class A, 
  // and provide classes B and C which inherit from A and have their own small additional changes.


  // delegation based inheritance or prototype based inheritance

  var a = {
    x: 10,
    calculate: function(z) {
      return this.x + this.y + z;
    }
  }

  var b = {
    y: 20,
    __proto__: a
  }

  // alternate way to create b -
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Using_propertiesObject_argument_with_Object.create() 
  // var b = Object.create(a, {y: {value: 20}}); 

  var c = {
    y: 30,
    __proto__: a
  }

  console.log(b.calculate(30)); // 60
  console.log(c.calculate(40)); // 80

  console.log(c.noMethodWithThisName);
  // print undefined

  console.log(a.__proto__.toString());
  // <b>a's prototype by default is set to Object.prototype, not Object, because Object is a function and Object.prototype is an object</b>
  console.log(a.__proto__.__proto == null); // prints true because Object.prototype's __proto__ is the root object

  console.log(typeof Object); // prints function
  console.log(typeof Object.prototype); // prints object
  console.log(typeof Object.__proto__); // prints function

  console.log(Object.name); // prints Object

  console.log(Object.prototype.__proto__ == null); // prints true
  console.log(Object.__proto__.prototype); // prints undefined
  console.log(typeof Object.__proto__.__proto__); // prints object
  console.log(Object.__proto__.__proto__.__proto__ == null); // prints true

  // the above is so much confusion - between __proto__ and prototype
  // ES5 rectifies this with functions like Object.isPrototypeOf and Object.getPrototypeOf which will always work
  // So, the following is a consistent way to use prototype based inheritance
  // use Object methods like Object.create, Object.getPrototypeOf, etc

  var k = {
    x: 10,
    calculate: function(z) {
      return this.x + this.y + z;
    }
  }

  var l = Object.create(k, {
    y: {
      value: 20
    }
  });
  var m = Object.create(k, {
    y: {
      value: 30
    }
  });

  console.log(l.calculate(30)); // 60
  console.log(m.calculate(40)); // 80 

  console.log(Object.getPrototypeOf(l) == k); // true
  console.log(Object.getPrototypeOf(k) == Object.prototype); // true
  console.log(Object.getPrototypeOf(Object.prototype) == null); // true

  // <img border="0" height="250" src="source/JavaScript/Language/images/prototype-chain.png" width="440" />

})();


////////////////////////////////////////////////////////////////////////////////

(function understandingPrototype_2() {

  // a combination of the constructor function and the prototype object may be called as a "class"

  // a constructor function
  // note here that a_constructor is a function and not an object
  // so the inherited object inherit from a_constructor.prototype which is an object
  function a_constructor(y) {
    this.y = y; // own y property
  }

  a_constructor.prototype.x = 10;

  a_constructor.prototype.calculate = function(z) {
    return this.x + this.y + z;
  }

  // without toString(), it hangs in the debugger
  console.log(a_constructor.prototype.toString());
  // prints [object Object]

  console.log(a_constructor.__proto__.toString());
  // prints 'function () {}'



  var b = new a_constructor(20); // create a new object from a constructor function
  var c = new a_constructor(30);


  console.log(b.__proto__.constructor == a_constructor);
  // returns true


  console.log(b.calculate(30)); // 60
  console.log(c.calculate(40)); // 80

  console.log(
    b.calculate == b.__proto__.calculate // true
  );


  console.log(
    Function.prototype.__proto__ == Object.prototype // true
  );

  // <h4>__proto__</h4>
  // a function's __proto__ points to the same object Function.prototype points to
  console.log(
    a_constructor.__proto__ == Function.prototype // true
  );

  // an object's __proto__ points to the object it is created from if created using Object.create
  var d = Object.create(b); // here you create a new object from another object
  console.log(
    d.__proto__ == b // true
  );
  // or to the function's prototype if created through constructor
  console.log(
    b.__proto__ == a_constructor.prototype, // true
    c.__proto__ == a_constructor.prototype // true
  );

  // <h4>prototype</h4>
  // a function's prototype points to the same object, that is also referred by the object's __proto__ property, 
  // of all the objects that were created using this function as constructor
  console.log(
    a_constructor.prototype == b.__proto__ // true
  );

  // an object's prototype is usually undefined
  console.log(
    b.prototype == undefined // true
  );

  // <h4>constructor</h4>
  // a function's constructor is meaningless, a function by itself is a constructor

  // an object's constructor refers to the constructor function it was created with
  // a special property "constructor", which is a reference to the constructor function is automatically created
  console.log(
    b.constructor == a_constructor, // true
    c.constructor == a_constructor, // true
    a_constructor.prototype.constructor == a_constructor // true
  );




  // <img border="0" height="300" src="source/JavaScript/Language/images/constructor-proto-chain.png" width="440" />


})();