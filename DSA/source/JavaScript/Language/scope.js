(function understandingScope_1() {

// three types of <b><u>ECMAScript code</u></b>: 
// global code, 
// function code 
// eval code

// Every code is evaluated in its execution context.
// There is only ONE global context and may be many instances of function and eval execution contexts.
// Every call of a function, enters the function execution context and evaluates the function code type.
// Every call of eval function, enters the eval execution context and evaluates its code.

function foo(bar) {}
 
foo(10); // creates function execution context 1 with a different context state (e.g.: value of the bar argument)
foo(20); // creates function execution context 2
foo(30); // creates function execution context 3

// program runtime is presented as the execution context (EC) stack, where top of this stack is an active context:

// <img border="0" src="source/JavaScript/Language/images/ec-stack.png" />

// A context which activates another context is called a caller. A context is being activated is called a callee.

// <img border="0" src="source/JavaScript/Language/images/ec-stack-changes.png" />

// Every execution context has set of properties (which we may call a context’s state) necessary to track the execution progress of its associated code.

// <img border="0" src="source/JavaScript/Language/images/execution-context.png" />

// A variable object (VO) is a container of data associated with the execution context. 
// It’s a special object that stores variables and function declarations defined in the context.

})();


(function understandingScope_2() {


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


  // GrandParent.aFuncAssignedToVar();
  // GrandParent.aFuncAssignedToVar is not a function
  // because GrandParent is of type function and not an object

  // GrandParent.getClassName();
  // throws error - GrandParent.getClassName is not a function
  console.log(typeof GrandParent == 'function' ? 'GrandParent is of type function' : '');

  GrandParent.newFunc();
  // prints inside newFunc

  var parentObj = new GrandParent();

  // parentObj.aFuncAssignedToVar();
  // parentObj.aFuncAssignedToVar is not a function
  // function assigned to var inside a 'constructor' cannot be accessed from outside

  parentObj.getClassName();
  // prints GrandParent

  // parentObj.newFunc();
  // parentObj.newFunc is not a function
  // newFunc is a property of the function GrandParent variable, cannot be inherited as it is not part of the constructor

  // override getClassName
  parentObj.getClassName = function() {

    console.log("parentObj");

  }

  parentObj.getClassName();
  // prints parentObj
  
})();