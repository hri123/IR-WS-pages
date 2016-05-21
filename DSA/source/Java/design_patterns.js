(function() {

// Images copied from various sources in the internet //

/*


<h4>
<a href="http://www.tutorialspoint.com/design_pattern/design_pattern_overview.htm" target="_blank">Design Pattern - Overview</a></h4>
<br />
General Notes:<br />
<br />
<a href="http://stackoverflow.com/questions/1673841/examples-of-gof-design-patterns" rel="nofollow" target="_blank">TODO: add one or more real world examples from here for each of the design patterns</a><br />
<br />
<a href="http://www.makeuseof.com/dir/yuml-free-uml-diagrams/" rel="nofollow" target="_blank">Using yuml to create class diagrams</a><br />
<br />
<br />


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
  <h4>Chain of Responsibility</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>e.g.: Java Servlet Filter</p>
      <p>Approval process:</p>
      <img border="0" height="100" src="source/Java/images/ChainOfResponsibility1.png" width="740" />
    </div>
  </div>
</div>

<div class="container">
  <h4>Command</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>
public Interface Command() {
  public void execute() {
  }
}      
      </p>
    </div>
  </div>
</div>

<div class="container">
  <h4>Interpreter</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <img border="0" height="250" src="source/Java/images/Interpreter1.jpg" width="440" />
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
The following Reverse Polish notation example illustrates the interpreter pattern. The grammar
expression ::= plus | minus | variable | number
plus ::= expression expression '+'
minus ::= expression expression '-'
variable  ::= 'a' | 'b' | 'c' | ... | 'z'
digit = '0' | '1' | ... '9'
number ::= digit | digit numberdefines a language which contains reverse Polish expressions like:
a b +
a b c + -
a b + c a - -Following the interpreter pattern there is a class for each grammar rule.          
          </p>
          <p>
import java.util.Map;
 
interface Expression {
    public int interpret(Map<String,Expression> variables);
}
 
class Number implements Expression {
    private int number;
    public Number(int number)       { this.number = number; }
    public int interpret(Map<String,Expression> variables)  { return number; }
}
 
class Plus implements Expression {
    Expression leftOperand;
    Expression rightOperand;
    public Plus(Expression left, Expression right) { 
        leftOperand = left; 
        rightOperand = right;
    }
 
    public int interpret(Map<String,Expression> variables)  { 
        return leftOperand.interpret(variables) + rightOperand.interpret(variables);
    }
}
 
class Minus implements Expression {
    Expression leftOperand;
    Expression rightOperand;
    public Minus(Expression left, Expression right) { 
        leftOperand = left; 
        rightOperand = right;
    }
 
    public int interpret(Map<String,Expression> variables)  { 
        return leftOperand.interpret(variables) - rightOperand.interpret(variables);
    }
}
 
class Variable implements Expression {
    private String name;
    public Variable(String name)       { this.name = name; }
    public int interpret(Map<String,Expression> variables)  { 
        if(null==variables.get(name)) return 0; //Either return new Number(0).
        return variables.get(name).interpret(variables); 
    }
}          
          </p>
          <p>
While the interpreter pattern does not address parsing[2] a parser is provided for completeness.          
          </p>
          <p>
import java.util.Map;
import java.util.Stack;
 
class Evaluator implements Expression {
    private Expression syntaxTree;
 
    public Evaluator(String expression) {
        Stack<Expression> expressionStack = new Stack<Expression>();
        for (String token : expression.split(" ")) {
            if  (token.equals("+")) {
                Expression subExpression = new Plus(expressionStack.pop(), expressionStack.pop());
                expressionStack.push( subExpression );
            }
            else if (token.equals("-")) {
                // it's necessary remove first the right operand from the stack
                Expression right = expressionStack.pop();
                // ..and after the left one
                Expression left = expressionStack.pop();
                Expression subExpression = new Minus(left, right);
                expressionStack.push( subExpression );
            }
            else                        
                expressionStack.push( new Variable(token) );
        }
        syntaxTree = expressionStack.pop();
    }
 
    public int interpret(Map<String,Expression> context) {
        return syntaxTree.interpret(context);
    }
}          
          </p>
          <p>
Finally evaluating the expression "w x z - +" with w = 5, x = 10, and z = 42.          
          </p>
          <p>
import java.util.Map;
import java.util.HashMap;
 
public class InterpreterExample {
    public static void main(String[] args) {
        String expression = "w x z - +";
        Evaluator sentence = new Evaluator(expression);
        Map<String,Expression> variables = new HashMap<String,Expression>();
        variables.put("w", new Number(5));
        variables.put("x", new Number(10));
        variables.put("z", new Number(42));
        int result = sentence.interpret(variables);
        System.out.println(result);
    }
}          
          </p>      
        </div>
      </div>
      <a href="http://en.wikipedia.org/wiki/Interpreter_pattern" target="_blank">Inspired from here</a>
    </div>
  </div>
</div>

<div class="container">
  <h4>Iterator</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>
Java Iterator -> hasNext() & next()
the class should implement those two methods      
      </p>
    </div>
  </div>
</div>

<div class="container">
  <h4>Mediator</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>To reduce coupling between classes that communicate with each other.</p>
      <img border="0" height="250" src="source/Java/images/Mediator1.jpg" width="440" />
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
//Mediator interface
public interface Mediator {

    public void send(String message, Colleague colleague);

}

//Colleage interface
public abstract Colleague {

    private Mediator mediator;
    public Colleague(Mediator m) {
        mediator = m;
    }

    //send a message via the mediator
    public void send(String message) {

        mediator.send(message, this);

    }

    //get access to the mediator
    public Mediator getMediator() {
        return mediator;
    }
    
    public abstract void receive(String message);

}

public class ApplicationMediator implements Mediator {

    private ArrayList < Colleague > colleagues;
    public ApplicationMediator() {
        colleagues = new ArrayList < Colleague > ();
    }

    public void addColleague(Colleague colleague)
    {
        colleagues.add(colleague);
    }

    public void send(String message, Colleague originator)
    {
        //let all other screens know that this screen has changed

        for (Colleague colleague: colleagues)
        {
            //don't tell ourselves
            if (colleague != originator)
            {
                colleage.receive(message);
            }
        }
    }
}

public class ConcreteColleague extends Colleague
{
    public void receive(String message)
    {
        System.out.println("Colleague Received: " + message);
    }
}

public class MobileColleague extends Colleague
{
    public void receive(String message)
    {
        System.out.println("Mobile Received: " + message);
    }
}

public class Client
{
    public static void main(String[] args)
    {
        ApplicationMediator mediator = new ApplicationMediator();
        ConcreteColleague desktop = new ConcreteColleague(mediator)

        ConcreteColleague mobile = new MobileColleague(mediator)

        mediator.addColleague(desktop);
        mediator.addColleague(mobile);

        desktop.send("Hello World");

        mobile.send("Hello");
    }
}          
          </p>
        </div>
      </div>
      <a href="http://java.dzone.com/articles/design-patterns-mediator" target="_blank">Inspired from here</a>
    </div>
  </div>
</div>

<div class="container">
  <h4>Memento</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>used in undo frameworks to bring an object back to a previous state</p>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
//Memento
public class EditorMemento
{
    private final String editorState;
    public EditorMemento(String state)
    {
        editorState = state;
    }
    public String getSavedState()
    {
        return editorState;
    }
}
//Originator
public class Editor
{
    //state
    public String editorContents;
    public void setState(String contents)
    {
        this.editorContents = contents;
    }
    public EditorMemento save()
    {
        return new EditorMemento(editorContents);
    }
    public void restoreToState(EditorMemento memento)
    {
        editorContents = memento.getSavedState();
    }
}

//Caretaker

main() {

  originator = new();
  orig.setstate('state1');
  orig.setstate('state2');

  memento = orig.save();
  orig.setstate('state4');
  orig.restoreToState(memento);

}          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <h4>Observer</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
import java.util.Observable;
public class DataStore extends Observable
{
    private String data;
    public String getData()
    {
        return data;
    }
    public void setData(String data)
    {
        this.data = data;
        //mark the observable as changed
        setChanged();
    }
}
public class Screen implements Observer {
    @Override
    public void update(Observable o, Object arg) {
        //act on the update
    }
}
Screen screen = new Screen();
DataStore dataStore = new DataStore();
//register observer
dataStore.addObserver(screen);
//send a notification
dataStore.notifyObservers();          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <h4>State</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>very ||| to strategy</p>
      <a href="http://onjavahell.blogspot.in/2009/05/simple-example-of-state-design-pattern.html" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>// without state design pattern</p>
          <p>
public class Pizza {
 
 public final static int COOKED = 0;
 public final static int BAKED = 1;
 public final static int DELIVERED = 2;
 
 private String name;
 
 int state = COOKED;
 
 public String getName() {
  return name;
 }
 
 public void setName(String name) {
  this.name = name;
 }
 
 public int getState() {
  return state;
 }
 
 public void setState(int state) {
  this.state = state;
 }
 
 public void bake() throws Exception {
  
  if(state == COOKED) {
   System.out.print("Baking the pizza...");
   state = BAKED;
  }
  else if(state == BAKED) {
   throw new Exception("Can't bake a pizza already baked");
  }
  else if(state == DELIVERED) {
   throw new Exception("Can't bake a pizza already delivered");
  }
 } 
 
 public void deliver() throws Exception {
  
  if(state == COOKED) {
   throw new Exception("Can't deliver a pizza not baked yet");
  }
  else if(state == BAKED) {
   System.out.print("Delivering the pizza...");
   state = DELIVERED;
  }
  else if(state == DELIVERED) {
   throw new Exception("Can't deliver a pizza already delivered");
  }
 }
}          
          </p>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>// after applying state design pattern</p>
          <p>
public interface PizzaState {

 void bake() throws Exception;

 void deliver() throws Exception;
}

public class CookedPizzaState implements PizzaState {
 
 private Pizza pizza;
 
 public CookedPizzaState(Pizza pizza) {
  this.pizza = pizza;
 }

 public void bake() throws Exception {
  System.out.print("Baking the pizza...");
  pizza.setState(pizza.getBakedState());
 }

 public void deliver() throws Exception {
  throw new Exception("Can't deliver a pizza not baked yet");
 }

}

public class Pizza {
 
 PizzaState cookedState;
 PizzaState bakedState;
 PizzaState deliveredState;
 
 private String name;
 
 //State initialization
 private PizzaState state = cookedState;
 
 public Pizza() {
  cookedState = new CookedPizzaState(this);
  bakedState = new BakedPizzaState(this);
  deliveredState = new DeliveredPizzaState(this);
 }
 
 public String getName() {
  return name;
 }

 public void setName(String name) {
  this.name = name;
 }

 public PizzaState getState() {
  return state;
 }

 public void setState(PizzaState state) {
  this.state = state;
 }
 
 public void bake() throws Exception {
  this.state.bake();
 } 
 
 public void deliver() throws Exception {
  this.state.deliver();
 }

 public PizzaState getCookedState() {
  return createdState;
 }

 public PizzaState getBakedState() {
  return bakedState;
 }

 public PizzaState getDeliveredState() {
  return deliveredState;
 }
}          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <h4>Strategy</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <p>if too much specialization logic in the sub classes, it is better to use an algorithm variable to move the logic outside the subclasses so that the business logic is not spread in the sub classes</p>
      <a href="http://shafaetsplanet.com/uploads/pdf/Design_Patterns_For_Dummies.pdf" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>//Before Stategy pattern</p>
          <p>
public abstract class Vehicle {
    public void go() {
        System.out.println(“Now I’ m driving.”);
    }
}


public class StreetRacer extends Vehicle {}

public class FormulaOne extends Vehicle {}


public class Helicopter extends Vehicle {
    public void go() {
        System.out.println(“Now I’ m flying.”);
    }
}


public class Jet extends Vehicle {
    public void go() {
        System.out.println(“Now I’ m flying fast.”);
    }
}          
          </p>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>(has-a instead of is-a)
When converted to strategy pattern it looks like below -></p>
          <p>
public interface GoAlgorithm {
    public void go();
}


public class GoByDrivingAlgorithm implements GoAlgorithm {
    public void go() {
        System.out.println(“Now I’ m driving.”);
    }
}


public class GoByFlying implements GoAlgorithm {
    public void go() {
        System.out.println(“Now I’ m flying.”);
    }
}


public class GoByFlyingFast implements GoAlgorithm {
    public void go() {
        System.out.println(“Now I’ m flying fast.”);
    }
}


public abstract class Vehicle {
    private GoAlgorithm goAlgorithm;
    public void setGoAlgorithm(GoAlgorithm algorithm) {
        goAlgorithm = algorithm;
    }

    public void go() {
        goAlgorithm.go();
    }

}


public class StreetRacer extends Vehicle {
    public StreetRacer() {
        setGoAlgorithm(new GoByDrivingAlgorithm());
    }
}          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <h4>Template Method</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <img border="0" height="350" src="source/Java/images/TemplateMethod1.jpg" width="240" />
      <a href="http://java.dzone.com/articles/design-patterns-template-method" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
public abstract class CrossCompiler
{
    public final void crossCompile()
    {
        collectSource();
        compileToTarget();
    }
    protected abstract void collectSource();
    protected abstract void compileToTarget();
}
public class IPhoneCompiler extends CrossCompiler
{
    protected void collectSource()
    {
        //anything specific to this class
    }
    protected void compileToTarget()
    {
        //iphone specific compilation
    }
}
public class AndroidCompiler extends CrossCompiler
{
    protected void collectSource()
    {
        //anything specific to this class
    }
    protected void compileToTarget()
    {
        //android specific compilation
    }
}
public class Client
{
    public static void main(String[] args)
    {
        CrossCompiler iphone = new IPhoneCompiler();
        iphone.crossCompile();
        CrossCompiler android = new AndroidCompiler();
        android.crossCompile();
    }
}          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <h4>Visitor</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <a href="http://snehaprashant.blogspot.in/2009/01/visitor-pattern-in-java.html" target="_blank">Inspired from here</a>
      <div class="panel panel-default">
        <div class="panel-body">
          <p>
// Visitor
public interface JavaFeatureVisitor {
 void visit(Collections collections);
 void visit(Generics generics);
 void visitJavaFeatures(Java java);
}

// Visitable
public interface JavaFeature {
 void accept(JavaFeatureVisitor visitor);
}


// Concrete Visitables
class Collections implements JavaFeature{

 private String name;
 
 Collections(String name) {
  this.name = name;
 }
 String getName() {
  return this.name;
 }
 public void accept(JavaFeatureVisitor visitor) {
  visitor.visit(this);
 }
}


class Generics implements JavaFeature{
 
 public void accept(JavaFeatureVisitor visitor) {
  visitor.visit(this);
 }
}

public class Java {
 
 JavaFeature[] javaFeatures;
 
 public JavaFeature [] getJavaFeatures(){
  return javaFeatures.clone();
 }
 public Java() {
  this.javaFeatures = new JavaFeature[]
                                 { new Collections(" List "), new Collections(" Set "),
    new Collections(" Map ") ,new Generics()};
 }
}

// Concrete Visitors
public class JavaFeatureReadVisitor implements JavaFeatureVisitor {
 
 public void visit(Collections collections) {      
  System.out.println("Going through "+ collections.getName()
    + " Collections");
 }
 public void visit(Generics generics) {
  System.out.println("Going through  generics");
 }
 public void visitJavaFeatures(Java java) {
  System.out.println("\nLearning Java");
  for(JavaFeature javaFeature : java.getJavaFeatures()) {
   javaFeature.accept(this);
  }
  System.out.println("Got an Idea of Java Language");
 }
}

public class JavaFeatureImplVisitor implements JavaFeatureVisitor {
 
 public void visit(Collections collections) {
  System.out.println("using Collections "+ collections.getName());
 }
 public void visit(Generics generics) {
  System.out.println("using Generics");
 }
 public void visitJavaFeatures(Java java) {
  System.out.println("\nImplementing Java Features");
  for(JavaFeature javaFeature : java.getJavaFeatures()) {
   javaFeature.accept(this);
  }
  System.out.println("Very useful features");
 }
 
}


public class VisitorDemo {
 static public void main(String[] args){
  Java java = new Java();
  JavaFeatureVisitor learnJavaFeature = new JavaFeatureReadVisitor();
  JavaFeatureVisitor implJavaFeature = new JavaFeatureImplVisitor();
  learnJavaFeature.visitJavaFeatures(java);
  implJavaFeature.visitJavaFeatures(java);
 }
}          
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

*/

})();
