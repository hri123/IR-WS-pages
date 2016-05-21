(function understandingScope() {


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