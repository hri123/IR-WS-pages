// <h4><b><u>HoistingImmediately invoked function expression (IIFE)</b></u></h4>
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

this.name = 'outermost function';
 
function foo() {
  console.log(this.name);
}
 
// caller activates "foo" (callee) and
// provides "this" for the callee
 
foo(); // global object
foo.prototype.constructor(); // foo.prototype
 
var bar = {
  name: 'bar',
  baz: foo
};
 
bar.baz(); // bar

// TODO: I think it is eval

(bar.baz)(); // also bar
(bar.baz = bar.baz)(); // but here is global object
(bar.baz, bar.baz)(); // also global object
(false || bar.baz)(); // also global object
 
var otherFoo = bar.baz;
otherFoo(); // again global object    

// TODO: how to pass this - the this I require like in dojo hitch
    
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