(function() {


/*

*/

// Object Literal
var counterObjectRegular = {
  
  i: 10,
  
  get: function() {
      return this.i;
  },
  
  increment: function() {
      this.i++;
  }
    
};

console.log(counterObjectRegular.get());
counterObjectRegular.increment();
console.log(counterObjectRegular.get());

// the disadvantage with above style is that the private members can be accessed directly

counterObjectRegular.i = 1;
console.log(counterObjectRegular.get());

// so the module pattern comes to rescue

var counterObject = (function(inParam_i) {
    
  var i = inParam_i; // closure: i only exists in the static scope of the object that gets returned below, so is private, cannot be accessed directly
  
  return {
      
    get: function() {
        return i;
    },
    
    increment: function() {
        i++;
    }
    
  };  
    
})(10);

console.log(counterObject.get());
counterObject.increment();
console.log(counterObject.get());

// the advantage with above style is that the private members cannot be accessed directly
console.log(counterObject.i); // undefined



// the above pattern can be used to create one object, what about multiple objects, make it a Java like class

// Simplified class with private variables
function class_constructor_2(iparams_i, inparams_j) {
    
    var i = iparams_i, j = inparams_j;
    
    this.getProduct = function() {
        return i * j;
    }
    
    this.seti = function(inparams_i) {
        i = inparams_i;
    }
    
    this.setj = function(inparams_j) {
        j = inparams_j;
    }
}

var cc2Obj1 = new class_constructor_2(2, 3);
console.log(cc2Obj1.getProduct()); // 6
var cc2Obj2 = new class_constructor_2(5, 6);
console.log(cc2Obj2.getProduct()); // 30
console.log(cc2Obj1.getProduct()); // 6



var class_constructor = function (inParam_i, parentArray) {
    
    var i = inParam_i; // private var
    var returnObject = createReturnObject(parentArray);
        
    returnObject.get = function() { // public methods
        return i;
    };
    
    returnObject.increment = function() {
        i++;
    };
    
    return returnObject;
    
};

// mixin for the rest of the parents
function extend(destination, source) { // jquery extend
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

// inheritance (prototypal) for the first parent
function createReturnObject(parentArray) {
    if(parentArray && parentArray[0]) {
        returnObject = Object.create(parentArray[0]); // set the returnObject's prototype to first object of the parentArray
        for (var j = 1; j < parentArray.length; j++) {
            extend(returnObject, parentArray[j]); // copy all the properties and methods of the other objects of the parentArray
        }
    } else {
        returnObject = Object.create(Object.prototype);
    }
    
    return returnObject;
}

var obj1 = new class_constructor(10);
console.log(obj1.get()); // 10
obj1.increment();
console.log(obj1.get()); // 11

var obj2 = new class_constructor(20);
console.log(obj2.get()); // 20
obj2.increment();
console.log(obj2.get()); // 21
console.log(obj1.get()); // 11

var obj3 = class_constructor(30); // new object gets created without the new operator too
console.log(obj3.get()); // 30
obj3.increment();
console.log(obj3.get()); // 31
console.log(obj1.get()); // 1

var obj4 = {};
extend(obj4, obj3); // using mixin to make a copy of object - using an object to create a new object - clone
console.log(obj4.get()); // 31 - this is not copied but shared with obj3
obj4.increment();
console.log(obj4.get()); // 32
console.log(obj3.get()); // becomes 32 as the same var is now shared by obj4
// problem with clone / extend / mixin to create objects from other objects instead of using constructor function is that
// the private variables - part of the static scope (context) are not copied, but shared

var parentObj1 = {parentObj1_var1: 200};
var parentObj2 = {parentObj2_var1: 300};

// create object with inheritance
var obj5 = new class_constructor(100, [parentObj1, parentObj2]);
console.log(obj5.get()); // 100
console.log(obj5.parentObj1_var1); // 200
console.log(obj5.hasOwnProperty('parentObj1_var1')); // false - because it is part of prototype
console.log(obj5.parentObj2_var1); // 200
console.log(obj5.hasOwnProperty('parentObj2_var1')); // true - because it was mixin-ed

// to avoid unnecessary complexity created for using the private variables
// lik - We also can't access private members in methods that are added to the object at a later point
// Other disadvantages include the inability to create automated unit tests for private members and additional complexity when bugs require hot fixes.

// dojo classes follow the convention of using _ underscore for private variables
// instead of following the static scope / context way

var class_constructor_registration_dojo = function (className, parentArray, objectSkeleton) { // dojo's declare method
    
    var returnObject = createReturnObject(parentArray);
    
    extend(returnObject, objectSkeleton);
    
    global[className] = function(params) { // add it to global namespace so new can be called from anywhere
        
        if (returnObject.constructor && typeof returnObject.constructor == 'function') {
            var constructorObj = new returnObject.constructor(params);
            extend(returnObject, constructorObj);
        } 
        
        return extend({}, returnObject); // clone the original and return
    }
    
};

class_constructor_registration_dojo("my_class_1_dojo", [parentObj1, parentObj2], { // invoke declare method to create and register a class
   i: 10,
   
   constructor: function(params) {
       extend(this, params);
   },
   
   get: function() {
       return this.i;
   },
   
   increment: function () {
       this.i++;
   }
});

obj1_dojo = new my_class_1_dojo();

console.log(obj1_dojo.get()); // 10

obj2_dojo = new my_class_1_dojo({i: 20});

console.log(obj2_dojo.get()); // 20

obj1_dojo.increment();
console.log(obj1_dojo.get()); // 11
obj2_dojo.increment();
console.log(obj2_dojo.get()); // 21



// Revealing module pattern
var myRevealingModule = (function() {
    var privateVar = 10;
    
    function privateFunction() {
        
        console.log(privateVar);
        
    }
    
    function publicFunction() {
        privateFunction();
    }
    
    return {
      pointerToPublicFunction: publicFunction  
    };
    
}());
myRevealingModule.pointerToPublicFunction(); // 10
// Advantage of revealing module pattern is you have more control of what functions the user can access without having to touch the main logic code
// A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary.
// the regular pattern used in dojo seems the middle ground providing enough abstraction and at the same time not adding problems and complexity

})();
