(function() {


/*

*/

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
    
  var i = inParam_i; // i only exists in the static scope of the object that gets returned below, so is private, cannot be accessed directly
  
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

// mixin for the rest of the parents
function extend(destination, source) {
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
// dojo classes follow the convention of using _ underscore for private variables
// instead of following the static scope / context way

var class_constructor_registration_dojo = function (className, parentArray, objectSkeleton) { // dojo's declare method
    
    var returnObject = createReturnObject(parentArray);
    
    extend(returnObject, objectSkeleton);
    
    global[className] = returnObject;
        
    return returnObject;
    
};

class_constructor_registration_dojo("my_class_1_dojo", [parentObj1, parentObj2], {
   i: 10,
   
   get: function() {
       return this.i;
   },
   
   increment: function () {
       this.i++;
   }
});

obj1_dojo = my_class_1_dojo;

console.log(obj1_dojo.get()); // 10


})();
