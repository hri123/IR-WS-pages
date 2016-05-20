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

<div class="container">
  <h4>Adapter</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <img border="0" height="150" src="source/Java/images/Adapter1.png" width="740" />
      <div class="panel panel-default">
        <div class="panel-body">
          Adapter.Request() {
            Adaptee.specificRequest();
          }        
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <h4>Bridge</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>Decouple an abstraction from its implementation so that the two can vary independently</p>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>Before bridge pattern</p>
          <img border="0" height="250" src="source/Java/images/Bridge1.jpg" width="240" />
          <p>
interface Vehicle {
  manufacture();
}

class Car {
  manufacture() {
    produceCar();
    assembleCar();
  }
}

||| produceBike and assembleBike inside Bike class          
          </p>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>After bridge pattern</p>
          <img border="0" height="250" src="source/Java/images/Bridge2.jpg" width="340" />
          <p>
// Abstraction

interface Vehicle {
  manufacture();
}

// Refined Abstraction
class Car and class Bike



// Implementor
interface Workshop {
  work();
}

// Concrete Implementation
class Produce and class Assemble          
          </p>
        </div>
      </div>
      <a href="http://javapapers.com/design-patterns/bridge-design-pattern/" target="_blank">Details here</a>
    </div>
  </div>
</div>


<div class="container">
  <h4>Composite</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>List -> add() and remove()</p>
      <p>Dealing with tree structured data, with this structure, not necessary to check between a leaf vs branch node</p>
      <img border="0" height="150" src="source/Java/images/Composite1.png" width="740" />
    </div>
  </div>
</div>


<div class="container">
  <h4>Decorator</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>modify behaviour of 'one instance'</p>
      <a href="http://javapapers.com/design-patterns/decorator-pattern/" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
public interface Icecream {

  public String makeIcecream();

}

public class SimpleIcecream implements Icecream {

  @Override
  public String makeIcecream() {
    return "Base Icecream";
  }
}

abstract class IcecreamDecorator implements Icecream {

  protected Icecream specialIcecream;

  public IcecreamDecorator(Icecream specialIcecream) {
    this.specialIcecream = specialIcecream;
  }

  public String makeIcecream() {
    return specialIcecream.makeIcecream();
  }
}

public class NuttyDecorator extends IcecreamDecorator {

  public NuttyDecorator(Icecream specialIcecream) {
    super(specialIcecream);
  }

  public String makeIcecream() {
    return specialIcecream.makeIcecream() + addNuts();
  }

  private String addNuts() {
    return " + cruncy nuts";
  }
}

public class HoneyDecorator extends IcecreamDecorator {

  public HoneyDecorator(Icecream specialIcecream) {

    super(specialIcecream);
  }

  public String makeIcecream() {
    return specialIcecream.makeIcecream() + addHoney();
  }

  private String addHoney() {
    return " + sweet honey";
  }
}

public class TestDecorator {
  public static void main(String args[]) {
    Icecream icecream = new HoneyDecorator(new NuttyDecorator(new SimpleIcecream()));
    System.out.println(icecream.makeIcecream());
  }
}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <h4>Façade</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>(JDBC, RSAPI Facade)</p>
      <img border="0" height="250" src="source/Java/images/Facade1.png" width="440" />
    </div>
  </div>
</div>

<div class="container">
  <h4>Flyweight</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>Many ||| objects are used, storage cost is high. The majority of objects's state data can be made extrinsic. A few shared objects would easily replace many unshared objects. The identity of each object does not matter.</p>
      <a href="http://javapapers.com/design-patterns/flyweight-design-pattern/" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
public interface MyShape {

  public void draw(Graphics g, int x, int y, int width, int height, Color color, boolean fill, String font);

}

public class MyOval implements MyShape {

  private String label;

  public MyOval(String label) {

    this.label = label;

  }

  public void draw(Graphics oval, int x, int y, int width, int height, Color color, boolean fill, String font) {
    oval.setColor(color);
    oval.drawOval(x, y, width, height);
    oval.setFont(new Font(font, 12, 12));
    oval.drawString(label, x + (width / 2), y);
    if (fill)
      oval.fillOval(x, y, width, height);
  }
}

public class MyRectangle implements MyShape {

  private String label;

  public MyRectangle(String label) {
    this.label = label;
  }

  public void draw(Graphics rectangle, int x, int y, int width, int height, Color color, boolean fill, String font) {

    rectangle.setColor(color);
    rectangle.drawRect(x, y, width, height);
    rectangle.setFont(new Font(font, 12, 12));
    rectangle.drawString(label, x + (width / 2), y);
    if (fill)
      rectangle.fillRect(x, y, width, height);
  }
}

public class ShapeFactory {

  private static final HashMap shapes = new HashMap();

  public static MyShape getShape(String label) {

    MyShape concreteShape = (MyShape) shapes.get(label);

    if (concreteShape == null) {

      if (label.equals("R")) {
        concreteShape = new MyRectangle(label);
      } else if (label.equals("O")) {
        concreteShape = new MyOval(label);
      }
      shapes.put(label, concreteShape);
    }
    return concreteShape;
  }
}

// In Main
MyShape shape = ShapeFactory.getShape(getRandomShape());
shape.draw(g, getRandomX(), getRandomY(), getRandomWidth(), getRandomHeight(), getRandomColor(), getRandomFill(), getRandomFont());          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <h4>Proxy</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <img border="0" height="250" src="source/Java/images/Proxy1.png" width="140" />
      <a href="http://javapapers.com/design-patterns/proxy-design-pattern/" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
public interface Animal {
  public void getSound();
}

package com.javapapers.designpattern.proxy;

public class Lion implements Animal {

  public void getSound() {

    System.out.println("Roar");
  }
}

package com.javapapers.designpattern.proxy;

import java.lang.reflect.InvocationHandler;

import java.lang.reflect.Method;

public class AnimalInvocationHandler implements InvocationHandler {

  public AnimalInvocationHandler(Object realSubject) {

    this.realSubject = realSubject;
  }
  
  public Object invoke(Object proxy, Method m, Object[] args) {

    Object result = null;
    try {

      result = m.invoke(realSubject, args);

    } catch (Exception ex) {
      ex.printStackTrace();
    }
    return result;
  }
  private Object realSubject = null;
}

package com.javapapers.designpattern.proxy;
import java.lang.reflect.Proxy;

public class ProxyExample {

  public static void main(String[] args) {
    Animal realSubject = new Lion();
    Animal proxy = (Animal) Proxy.newProxyInstance(realSubject.getClass()
        .getClassLoader(), realSubject.getClass().getInterfaces(),
        new AnimalInvocationHandler(realSubject));
    proxy.getSound();
  }
}          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

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
