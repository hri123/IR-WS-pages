////////////////////////////////////////////////////////////////////////////////
// Images copied from http://dmitrysoshnikov.com/ecmascript/javascript-the-core //

// IIFE
(function understanding_IIFE() {
  
// function() {
//   console.log('this does not work');
// }();
// SyntaxError: Unexpected token ( - since this is a function declaration and not function expression, a function name is expected

// function namedTheFunc() {
//   console.log('this also does not work');
// }();
// syntax error again because grouping operator () needs to have an expression inside

function namedTheFunc() {
  console.log('there is no syntax error, but this function is not executed as it is just a declaration');
}(1);

// The most widely accepted way to tell the parser to expect a function expression is just to wrap it in parens, 
// because in JavaScript, parens can't contain statements. At this point, when the parser encounters the function keyword,
//  it knows to parse it as a function expression and not a function declaration.
(function () {
  console.log('Inside IIFE'); 
})();

(function () {
  console.log('This is different than the previous IIFE, but still works');
}()); // Crockford recommends this one

// Because the point of the parens or coercing operators is to disambiguate
// between function expressions and function declarations, they can be
// omitted when the parser already expects an expression
var dummyResult = function () {
  console.log('This is different than the previous IIFE, but still works');
}();


// If you don't care about the return value, or the possibility of making
// your code slightly harder to read, you can save a byte by just prefixing
// the function with a unary operator.

true && function(){ /* code */ }();
0, function(){ /* code */ }();
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();
new function(){ /* code */ }
new function(){ /* code */ }() // Only need parens if passing arguments


})();

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

  // <h4><b><u>__proto__</b></u></h4>
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

  // <h4><b><u>prototype</b></u></h4>
  // a function's prototype points to the same object, that is also referred by the object's __proto__ property, 
  // of all the objects that were created using this function as constructor
  console.log(
    a_constructor.prototype == b.__proto__ // true
  );

  // an object's prototype is usually undefined
  console.log(
    b.prototype == undefined // true
  );

  // <h4><b><u>constructor</b></u></h4>
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

(function ES6() {

"use strict"; // without this - Block-scoped declarations (let, const, function, class) not yet supported outside strict mode

class Foo {
  constructor(name) {
    this._name = name;
  }
 
  getName() {
    return this._name;
  }
}
 
class Bar extends Foo {
  getName() {
    return super.getName() + ' Doe';
  }
}
 
var bar = new Bar('John');
console.log(bar.getName()); // John Doe
  
})();


// <h4><b><u>Immediately invoked function expression (IIFE)</b></u></h4>
// (function() { ... }());

(function() {
 
// <h4><b><u>Hoisting</b></u></h4>

// ReferenceError: noSuchVariable is not defined
try {
    console.log(noSuchVariable);
} catch (e) {
    console.log(e.message);
}

// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);

// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: definitionNotHoisted is not a function
try {
    definitionNotHoisted();
} catch (e) {
    console.log(e.message);
}

// ReferenceError: funcName is not defined
try {
    funcName();
} catch (e) {
    console.log(e.message);
}

// <h4><b><u>Function Declaration</b></u></h4>
function definitionHoisted() {
    console.log("Definition hoisted!");
}

// <h4><b><u>Function Expression</b></u></h4>
var definitionNotHoisted = function funcName() {
    console.log("Definition not hoisted!");
};

// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: undefined is not a function
definitionNotHoisted();

// ReferenceError: funcName is not defined
try {
    funcName();
} catch (e) {
    console.log(e.message);
}

})();


// three types of <b><u>ECMAScript code</u></b>: 
// global code, 
// function code 
// eval code

// Every code is evaluated in its execution context.
// There is only ONE global context and may be many instances of function and eval execution contexts.
// Every call of a function, enters the function execution context and evaluates the function code type.
// Every call of eval function, enters the eval execution context and evaluates its code.

function foo1(bar) {}
 
foo1(10); // creates function execution context 1 with a different context state (e.g.: value of the bar argument)
foo1(20); // creates function execution context 2
foo1(30); // creates function execution context 3

// program runtime is presented as the execution context (EC) stack, where top of this stack is an active context:

// <img border="0" src="source/JavaScript/Language/images/ec-stack.png" />

// A context which activates another context is called a caller. A context is being activated is called a callee.

// <img border="0" src="source/JavaScript/Language/images/ec-stack-changes.png" />

// Every execution context has set of properties (which we may call a context’s state) necessary to track the execution progress of its associated code.

// <img border="0" src="source/JavaScript/Language/images/execution-context.png" />

// A variable object (VO) is a container of data associated with the execution context. (in ES6, concept of lexical environment is there)
// It’s a special object that stores variables and function declarations defined in the context.


var foo = 10;
 
function bar() {} // function declaration, FD
(function baz() {}); // function expression, FE
 
console.log(
  // this object in global scope when running on browser refers to the window object - 
  // that is global - in nodejs where the commonjs module system is used there is 
  // no window object, so have commented the below lines
  
  // this.foo == foo, // true
  // window.bar == bar // true
);

// ReferenceError, "baz" is not defined
// function expressions (in contrast with function declarations) are not included into the variable object.
try {
    console.log(baz);
} catch (e) {
    console.log(e.message);
}

// <img border="0" src="source/JavaScript/Language/images/global-variable-object.png" />

// in global context VO is the global object itself
// in function context VO is called activation object (AO), AO is created when the function is invoked / activated by a caller
// In ECMAScript only functions create a new scope
// eval uses either global’s variable object, or a variable object of the caller (e.g. a function from which eval is called)


function foo2(x, y) {
  var z = 30;
  function bar() {} // FD
  (function baz() {}); // FE
}
 
foo2(10, 20);

// In addition to VO, AO has formal parameters and arguments, function expression are not included as in VO
// <img border="0" src="source/JavaScript/Language/images/activation-object.png" />



// A scope chain is a list of objects that are searched for identifiers appear in the code of the context.
// if a variable is not found in the own VO / AO, it is searched in its parent's VO, and so on. 


var x = 10;
 
(function foo() {
  var y = 20;
  (function bar() {
    var z = 30;
    // "x" and "y" are "free variables" - identifier which is not a local variable (or a local function or a formal parameter)
    console.log(x + y + z);
  })();
})();

// <img border="0" src="source/JavaScript/Language/images/scope-chain.png" />

(function () {
// At code execution, a scope chain may be augmented - with objects dynamically added to the scope chain - using with statement and catch clause objects.
// such as with-objects or special objects of catch-clauses.

Object.prototype.x = 10;
 
var w = 20;
var y = 30;

// in SpiderMonkey global object i.e. VO of the global context inherits from "Object.prototype",
// variable x is found in the prototype chain
console.log(x); // 10
 
(function foo() {
 
  var w = 40;
  var x = 100;
 
  with ({z: 50}) {
    // the object {z: 50} inherits from Object.prototype
    // variable x is found in the prototype chain of object {z: 50}
    // proto chain is considered before scope chain
    console.log(w, x, y , z); // 40, 10, 30, 50
  }
 
  // after "with" object is removed from the scope chain
  // "x" is found in the AO of "foo" context;
  console.log(w, x, y /*, z*/); // 40, 100, 30, 'ReferenceError: z is not defined'
 
  // and that's how we may refer shadowed global "w" variable in the browser host environment
  // console.log(window.w); // 20 // commented as window is not available in nodejs environment
 
})();

// <img border="0" src="source/JavaScript/Language/images/scope-chain-with.png" />
    
})();


(function understanding_Closures() {

// in JavaScript, functions are the first-class objects. This term means that functions may be passed as arguments to other functions
// and may be returned from other functions

// Until all parent variable objects exist, there is nothing special in getting parent data from the inner function — 
// we just traverse through the scope chain resolving (searching) needed variable. However, after a context ends, 
// all its state and itself are destroyed. At the same time an inner function may be returned from the parent function. 
// Moreover, this returned function may be later activated from another context. 
// What will be with such an activation if a context of some free variable is already "gone" ?

// to solve this problem, exactly at creation moment — a function saves parent's scope chain, 
// because exactly this saved scope chain will be used for variables lookup then in further calls of the function
// Scope chain = Activation object + [[Scope]]

function foo1() {
  var x = 10;
  return function bar() {
    console.log(x);
  };
}
 
// returned function uses free variable "x"
var returnedFunction = foo1();
 
// global variable "x"
var x = 20;
 
// execution of the returned function
returnedFunction(); // 10, NOT 20

// because ECMAScript uses static scope and not dynamic scope
// if ECMAScript used dynamic scope, the result would have been 20


// and even if the parent context exists, to prevent ambiguity, ECMAScript uses static scope

// global "x1"
var x1 = 10;
 
// global function
function foo2() {
  console.log(x1);
}
 
(function (funArg) {
 
  // local "x1"
  var x1 = 20;
 
  // global "x1" is used
  // not the "x1" of the caller's scope which activates the "funArg"
  funArg(); // 10, but not 20
 
})(foo2); // pass "down" foo as a "funarg"

// A closure is a combination of a code block (in ECMAScript this is a function) and statically/lexically saved all parent scopes. 
// Thus, via these saved scopes a function may easily refer free variables.



// In this case variables stored in the [[Scope]] property are shared between all functions having the same parent scope chain.
function baz() {
  var x = 1;
  return {
    foo: function foo() { return ++x; },
    bar: function bar() { return --x; }
  };
}
 
var closures = baz();
 
console.log(
  closures.foo(), // 2
  closures.bar()  // 1
);

// <img border="0" src="source/JavaScript/Language/images/shared-scope.png" />

// an example of problem create by shared scope
(function() {
    
var data = [];
 
for (var k = 0; k < 3; k++) {
  data[k] = function () {
    console.log(k);
  };
}

data[0](); // 3, but not 0
data[1](); // 3, but not 1
data[2](); // 3, but not 2

})();

// fix for the above problem
(function() {

var data = [];
 
for (var k = 0; k < 3; k++) {
  data[k] = (function (x) {
    return function () {
      console.log(x);
    };
  })(k); // pass "k" value
}
 
// now it is correct
data[0](); // 0
data[1](); // 1
data[2](); // 2
    
})();

// fix for the above problems in ES6
// ES6 introduced block-scope bindings. This is done via let or const keywords.
(function() {

"use strict"; // without this - Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
    
var data = [];
 
for (let k = 0; k < 3; k++) {
  data[k] = function () {
    console.log(k);
  };
}
 
data[0](); // 0
data[1](); // 1
data[2](); // 2
    
})();

    
})();

// this: context object in which context the execution context is activated
// this value is a property of the execution context, but not a property of the variable object.
// in contrast with variables, this value never participates in identifier resolution process. i.e. when accessing this in a code, 
// its value is taken directly from the execution context and without any scope chain lookup. 
// The value of this is determined only once, on entering the context.
// In ECMAScript it is not possible to assign a new value to this, because, repeat, it's not a variable and is not placed in the variable object.
// In ES6 this actually became a property of a lexical environment, i.e. property of the VO in ES3 terminology.
// This is done to support arrow functions, which have lexical this, which they inherit from parent contexts.

// In the global context, a this value is the global object itself (that means, this value here equals to variable object)
    
var x_this = 10;
 
console.log(
  // window.x_this, // 10 // does not work in nodejs
  // this.x_this, // 10 // does not work in nodejs
  x_this // 10
);

(function understanding_this() {
    
// In case of a function context, this value in every single function call may be different. 
// Here this value is provided by the caller via the form of a call expression (i.e. the way of how a function is activated).

// the code of the "foo" function never changes, but the "this" value differs in every activation

this.name = 'outer function';
 
function foo() {
  console.log(this.name);
}
foo.prototype.name = 'function - foo.prototype'
 
// caller activates "foo" (callee) and
// provides "this" for the callee
 
foo(); // global object // prints 'outer function'
foo.prototype.constructor(); // foo.prototype // prints 'function - foo.prototype' even though 'foo === foo.prototype.constructor' is true 
 
var bar = {
  name: 'bar',
  baz: foo
};
 
// http://dmitrysoshnikov.com/ecmascript/chapter-3-this/#function-call-and-non-reference-type 

bar.baz(); // bar

// Grouping operator ()
// The next 4 prints are explained here - http://perfectionkills.com/know-thy-reference/
// read this section in the link - http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife - before the above link
(bar.baz)(); // also bar

// http://stackoverflow.com/a/30365375/512126 

(bar.baz = bar.baz)(); // prints 'outer function'

(bar.baz, bar.baz)(); // prints 'outer function'
(false || bar.baz)(); // prints 'outer function'
 
var otherFoo = bar.baz;
otherFoo(); // prints 'outer function'


// using apply and call, the this value can be set at the time of function invocation
var outsider = {
  name: 'outsider'
};

// dojo.hitch, dojo.partial
// "A for array and C for comma."
foo.apply(outsider, []);
foo.call(outsider, 'foo does not take any args');
    
})();



(function() {


  // this function behaves like a constructor when 'new GrandParent()' is called
  var GrandParent = function() {

    var aFuncAssignedToVar = function() {
      console.log("GrandParent's aFuncAssignedToVar");
    }

    this.getClassName = function() {
      console.log("GrandParent");
    };

  };

  GrandParent.newFunc = function() {
    console.log('inside newFunc');
  }
  
  GrandParent.prototype.pFunc = function () {
      console.log('inside pFunc');
  }

  console.log(typeof GrandParent == 'function' ? 'GrandParent is of type function' : '');
  
  // GrandParent.aFuncAssignedToVar();
  // GrandParent.aFuncAssignedToVar is not a function
  // function defined within function scope - is visible only within this function

  // GrandParent.getClassName();
  // throws error - GrandParent.getClassName is not a function
  // getClassName is accessible only from inside the object created using new of this constructor function
  

  GrandParent.newFunc();
  // prints inside newFunc
  // property of the function GrandParent
  
  GrandParent.prototype.pFunc();
  // prints inside pFunc
  // property of the function GrandParent.prototype object

  var parentObj = new GrandParent();
  
  console.log(typeof parentObj == 'object' ? 'parentObj is of type object' : '');

  // parentObj.aFuncAssignedToVar();
  // parentObj.aFuncAssignedToVar is not a function
  // function defined within function scope - is visible only within this function

  parentObj.getClassName();
  // prints GrandParent

  // parentObj.newFunc();
  // parentObj.newFunc is not a function
  // newFunc is a property of the function GrandParent variable, cannot be inherited as it is not part of the constructor
  
  parentObj.pFunc();
  // prints inside pFunc
  // parentObj has access to properties inherited from GrandParent.prototype

  // override getClassName
  parentObj.getClassName = function() {

    console.log("parentObj");

  }

  parentObj.getClassName();
  // prints parentObj
  
})();