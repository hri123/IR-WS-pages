(function() {

// Images copied from various sources in the internet //

/*


<h3>Creational Patterns</h3>

<div class="container">
  <h4>Abstract Factory</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <img border="0" height="220" src="source/Java/images/AbstractFactory1.png" width="600" />
    </div>
  </div>
</div>
<div class="container">
  <h4>Factory</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <img border="0" height="220" src="source/Java/images/Factory1.png" width="600" />
    </div>
  </div>
</div>
<div class="container">
  <h4>Singleton</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="panel panel-default">
        <div class="panel-body">
           public enum Singleton {
            INSTANCE;
           }
        </div>
      </div>
      <p>e.g.: Connection Pool -> that manages connection pool is a singleton</p>
      <a href="http://jdevel.wordpress.com/2010/10/02/the-perfect-singleton/" target="_blank">Implementing singleton using enum</a>
    </div>
  </div>
</div>
<div class="container">
  <h4>Prototype</h4>
  <div class="panel panel-default">
    <div class="panel-body">
     <img border="0" height="170" src="source/Java/images/Prototype1.png" width="500" />
     <div class="panel panel-default">
        <div class="panel-body">
            IPrototype orig = new PrototypeImpl();
            IPrototype newObj= orig.clone();
            newObj.setx(x);
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <h4>Builder</h4>
  <div class="panel panel-default">
    <div class="panel-body">
     <div class="panel panel-default">
        <div class="panel-body">
 // "Product"
 class Pizza {
    private String dough = "";
    private String sauce = "";
    private String topping = "";
 
 
    public void setDough(String dough)     { this.dough = dough; }
    public void setSauce(String sauce)     { this.sauce = sauce; }
    public void setTopping(String topping) { this.topping = topping; }
 }
 
 
 // "Abstract Builder"
 abstract class PizzaBuilder {
    protected Pizza pizza;
 
    public Pizza getPizza() { return pizza; }
    public void createNewPizzaProduct() { pizza = new Pizza(); }
 
    public abstract void buildDough();
    public abstract void buildSauce();
    public abstract void buildTopping();
 }
 
 // "ConcreteBuilder"
 class HawaiianPizzaBuilder extends PizzaBuilder {
    public void buildDough()   { pizza.setDough("cross"); }
    public void buildSauce()   { pizza.setSauce("mild"); }
    public void buildTopping() { pizza.setTopping("ham+pineapple"); }
 }
 
 // "ConcreteBuilder"
 class SpicyPizzaBuilder extends PizzaBuilder {
    public void buildDough()   { pizza.setDough("pan baked"); }
    public void buildSauce()   { pizza.setSauce("hot"); }
    public void buildTopping() { pizza.setTopping("pepperoni+salami"); }
 }
 
 // "Director"
 class Waiter {
    private PizzaBuilder pizzaBuilder;
 
    public void setPizzaBuilder(PizzaBuilder pb) { pizzaBuilder = pb; }
    public Pizza getPizza() { return pizzaBuilder.getPizza(); }
 
    public void constructPizza() {
       pizzaBuilder.createNewPizzaProduct();
       pizzaBuilder.buildDough();
       pizzaBuilder.buildSauce();
       pizzaBuilder.buildTopping();
    }
 }
 
 // A customer ordering a pizza.
 class BuilderExample {
    public static void main(String[] args) {
        Waiter waiter = new Waiter();
        PizzaBuilder hawaiianPizzaBuilder = new HawaiianPizzaBuilder();
        PizzaBuilder spicyPizzaBuilder = new SpicyPizzaBuilder();
 
        waiter.setPizzaBuilder( hawaiianPizzaBuilder );
        waiter.constructPizza();
 
        Pizza pizza = waiter.getPizza();
    }
 }
        </div>
      </div>
      <a href="http://en.wikipedia.org/wiki/Builder_pattern#Java" target="_blank">Pizza builder example here</a>
    </div>
  </div>
</div>

<h3>Structural Patterns</h3>


<h3>Behavioural Patterns</h3>





<div class="container">
  <h4>Name</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>Text</p>
      <img border="0" height="250" src="source/Java/images/AbstractFactory1.png" width="440" />
      <a href="" target="_blank">link</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>Text</p>
          <img border="0" height="250" src="source/Java/images/AbstractFactory1.png" width="440" />
          <a href="" target="_blank">link</a>
        </div>
      </div>
    </div>
  </div>
</div>

*/

})();
