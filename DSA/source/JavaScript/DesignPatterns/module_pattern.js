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

var counterObject = (function() {
    
  var i = 10; // i only exists in the static scope of the object that gets returned below, so is private, cannot be accessed directly
  
  return {
      
    get: function() {
        return i;
    },
    
    increment: function() {
        i++;
    }
    
  };  
    
})();

console.log(counterObject.get());
counterObject.increment();
console.log(counterObject.get());

// the disadvantage with above style is that the private members can be accessed directly
console.log(counterObject.i); // undefined


})();
