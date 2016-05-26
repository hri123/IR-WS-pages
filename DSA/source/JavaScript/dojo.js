(function () {
    
/*

declare, parser, inheritance 
Dojo builds on JavaScript’s powerful prototype-based inheritance to provide you with familiar tools for implementing inheritance relationships. It also offers clean, intuitive mechanisms for wrapping up all of your CSS, HTML, JavaScript, and other static resources into portable, standalone widgets

Dojo allows you to transform your ideas into working applications quickly by leveraging design concepts you already know-without requiring you to take a sojourn into the bowels of IE memory leakages, JavaScript variations among the different browsers, and writing droves of boilerplate.

You’ll love the way that Dojo allows you to keep your templates, stylesheets, JavaScript files, and other static resources separate during the development cycle, yet to easily consolidate them into ultra-compact form when it’s time to roll out.

including the file dojo.js into the page is essential, and it bootstraps the rest of Dojo
include dojo.js before any other scripts!
and allows us to dojo.require anything else that we want to bring into the page.




Debugging:

Firebug
Chrome developer tools
Firebug is nothing short of incredible in terms of speeding up the development cycle. You can inspect/manipulate anything in the DOM (including style) in real-time, log events to the Firebug console, and get error information that’s often specific enough to identify your actual problem. 

a first-class object is an entity that can be passed around without restrictions

In our discussions, the most common way this term will be used is to highlight the fact that functions are first-class objects in JavaScript. As we’ll see, operations such as assigning functions directly to variables and/or placing them in associative arrays are fundamental to many Dojo design patterns.

A constructor function is a special kind of function that is invoked in conjunction with the new operator and that creates a new JavaScript function object and performs initialisation on it. Note that all JavaScript objects inherit from JavaScript’s built-in Object type and have a prototype property that conveys the basis for JavaScript’s powerful inheritance mechanism that is based on prototype-chaining.
In Dojo parlance, the term constructor may also refer to the anonymous function that maps to the constructor key in dojo.declare’s associative array and that is used primarily for initialising properties of a Dojo class.


in Dojo parlance, the anonymous functions that appear in the associative array that is the third parameter of a dojo.declare statement are said to be methods because dojo.declare provides the basis for a class-based inheritance mechanism.

Physically, a Dojo module is nothing more than a JavaScript file or a directory containing a cohesive collection of JavaScript files. As it turns out, this top-level directory also designates a namespace for the code it contains. In a logical sense, modules in Dojo are similar to the concept of packages in other programming languages in that they are used to compartmentalise related software components.
Do note, however, that while Dojo’s packaging system refers to the actual mechanism that performs tasks such as determining and fetching dependencies, Dojo modules themselves are not called “packages.” While you might notice the highest-level architectural components of the toolkit such as Dijit and DojoX being referred to as packages on mailing lists and online documentation, we’ll opt to call them components in order to keep our terminology as clear as possible.


Dojo preserves the global namespace of a page, and any modules you create with Dojo do not pollute the global namespace if implemented properly.

When it becomes necessary to split a Dojo module into multiple files, or when a module consists of only a single JavaScript file, each JavaScript file is referred to a resource. Although a resource could strictly be used to logically organise the various abstractions that are associated with a module, there is also the consideration of minimising the size of a JavaScript file. The trade-off essentially amounts to minimising file size so that you don’t download superfluous code that isn’t needed, while also not downloading too many small files—all of which are synchronous requests and incur the overhead of communicating back to the web server.

A toolkit is simply a collection of tools. It just so happens that toolkits in computer programming realm are frequently used within the context of user interface design.
Dojo is most accurately defined as a toolkit because it’s more than just a library of supporting code that provides a set of related functions and abstractions; it also provides items such as deployment utilities, testing tools, and a packaging system. It’s easy to get wrapped around the axle on library versus framework versus toolkit, and so forth, but Dojo has been dubbed a toolkit, so let’s go with it.

A Dojo widget is a function object that results from a dojo.declare statement and descends from dijit._Widget. Often, a widget has a visible appearance on the screen and logically bundles HTML, CSS, JavaScript, and static resources into a collective, unified entity that can easily be manipulated, maintained, and ported around just like a file.



At the kernel of the toolkit is Base, a tiny library wrapped up into a single JavaScript file (dojo.js[2]) that provides the foundation for everything else in the toolkit. Among other things, it provides the means of starting the bootstrap process, includes very convenient language and AJAX utilities, provides mechanisms for simulating class-based inheritance, and offers a very slick packaging system that preserves the global namespace and allows you to define your own compartmentalised modules in their own namespaces.

Core builds on Base by offering additional facilities for parsing widgets, providing effects such as wipes/slides, internationalisation (i18n), back-button handling, and more. For the most part, any module or resource that you have to explicitly import into the page external to dojo.js is a part of Core if it is associated with the dojo namespace.

Util is a collection of Dojo utilities and includes DOH (the Dojo Objective Harness), scripts for scraping documentation out of the Dojo source, and tools for leveraging Mozilla’s powerful Rhino JavaScript engine to create custom builds. DOH is a relatively new addition to Dojo and facilitates the creation of tests for your widgets.

Mozilla’s Rhino is used to create compressed builds of Dojo for production use; you can also use it to compress your own widgets. Rhino’s effectiveness is especially noteworthy in that it never mangles a public API. It is not uncommon to reduce your overall JavaScript file sizes by more than 50 percent with Rhino. The compression is a marvellous feature that comes gratis with any custom build of your Dojo widgets.


JavaScript does not employ class-based inheritance in the language itself, but class-based inheritance can be simulated fairly effectively by building upon JavaScript’s powerful prototype-based inheritance mechanism. Dojo handles this task very elegantly, wrapping up the implementation details into a single function call that is very appropriately called dojo.declare, because you’re essentially declaring a class with this function.



function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function() {return "x="+this.x+", y="+this.y;}


always define a namespace for your custom Dojo classes by including them
//in modules. Here, we're defining a Shape class that's defined in the
//sc module.


Dojo provides a specific constructor for classes
Always initialise class properties inside of the designated initialiser (constructor) —even if they’re primitives; maintain a consistent style. Never initialise a function object here in this associative array unless you want it to behave much like a static member, which is not usually the case.

mechanism that Dojo takes to simulate class-based inheritance.
when Dojo parses a class declaration, it takes the key/value pairs provided in the third parameter of dojo.declare (that entire associative array) and uses them to construct the prototype for the Dojo class that’s being declared.
Once dojo.declare has executed, an honest-to-goodness function object exists behind the scenes; this object serves as the basis for all future objects you create in the future, as well as for any inheritance relationships.
Coming full circle, you hopefully have deeper insight into why you should never initialise first-class function objects in the third parameter of dojo.declare unless the side effects are part of your design;


   function Foo() {};
    Foo.prototype.aNumber = 1;
    Foo.prototype.aList = [2,4,6];

    f = new Foo();

// assuming Bar inherits from Foo.
    function Bar() {};
    Bar.prototype = new Foo();
    b = new Bar();

    b.aNumber = 0;
    b.aList.push(8);

    console.log(b.aNumber); // 0
    console.log(b.aList); // [2,4,6,8]
    console.log(f.aNumber); // 1
    console.log(f.aList); // [2,4,6,8]
the Bar.prototype = new Foo() assignment produced what amounts to a shallow copy for the member value aList


Superclass constructors are always called automatically, and always before the subclass constructor. This convention reduces boilerplate in 90% of cases. If it doesn’t fit your needs see Manual Constructor Chaining (https://dojotoolkit.org/reference-guide/1.6/dojo/declare.html)
Important Convention: For single inheritance chains, list the superclass's args first in the subclass's constructor, followed by any subclass specific arguments.


anytime you declare any (single or multiple) inheritance relationship, Dojo copies the members defined in the superclass prototype(s) into the new subclass’s prototype, starting at the topmost superclass and working down until it reaches the subclass at hand. During each step of the process, each Dojo class’s constructor is called, ensuring the proper instantiation of all class members.


JavaScript: The Definitive Guide, 5th Edition
by David Flanagan
Chapter 9 last section has an example function of how dojo.declare would have been implemented. You can refer to dojo.declare implementation directly


Dojo uses the first superclass ancestor you provide to construct a prototype ancestor, and then copies the properties and methods from all of the mixin ancestors (if any) into that prototype ancestor.


dojo templates in html ? when is it parsed and how ?

a widget will always consist of three constituent pieces: a template file, a stylesheet file, and a JavaScript file. The Dojo parser takes care of assembling these pieces into a nice widget that appears on the screen by scanning the DOM for dojoType placeholder tags, swapping in the corresponding template string from the template file, applying CSS from the stylesheet, and performing any other DHTML initialisation operations defined in the JavaScript file.


all Dojo widgets that are displayed on screen inherit from _Widget and _Templated, which are both foundational Dijit classes. _Widget provides the prototypical ancestor, while _Templated is a mixin ancestor that overrides an important method,buildRendering, that provides your widget with the abilities to use a template.


    djConfig={
        isDebug: true,
        parseOnLoad: true,
        baseUrl: "./",
        modulePaths: {
            sc : "../../../shortcut/code/helloworld1/sc"
        }
    };


    //It's good practice to always explicitly require the parser to
    //equip Dojo with the goods to parse widgets on the page.
    dojo.require("dojo.parser");

    //Tell Dojo to fetch a widget called HelloWorld that's associated
    //with the sc namespace so that we can use it in the body.
    //Dojo will use the values in djConfig.modulePaths to look up the location.
    dojo.require("sc.HelloWorld");


<body>
    <!--
    This is where the Dojo parser swaps in the widget from the
    dojo.require statement based on our djConfig.parseOnLoad = true option.
    Any styles applied to the widget are provided by the style sheets imported.
    -->
    <div dojoType="sc.HelloWorld"></div>
</body>


//This is the place that widget properties that are referenced in
        //the template are best manipulated, because the template is not yet
        //instantiated when this method executes.
        postMixInProperties: function() {},

        //Method postCreate is called after postMixInProperties,
        //so manipulating properties referenced in the template in here
        //results in unexpected behaviour which can sometimes be very difficult
        //to find.
        postCreate: function() {
            this.greeting = "Hello World"; //BAD. DON'T DO THIS!
        }



Including the parameters in the element containing the dojoType tag is straightforward:
<div
        foo="[0,20,40]"
        bar="[60,80,100]"
        baz="{'a':'b', 'c':'d'}"
        dojoType="sc.HelloWorld"
   ></div>





Javascript concepts:

JavaScript must enforce a fundamental asymmetry between reading and writing property values. When you read property p of an object o, JavaScript first checks to see if o has a property named p. If it does not, it next checks to see if the prototype object of o has a property named p. This is what makes prototype-based inheritance work.

Therefore, property inheritance occurs only when you read property values, not when you write them. If you set the property p in an object o that inherits that property from its prototype, what happens is that you create a new property p directly in o. Now that o has its own property named p, it no longer inherits the value of p from its prototype. When you read the value of p, JavaScript first looks at the properties of o. Since it finds p defined in o, it doesn't need to search the prototype object and never finds the value of p defined there. We sometimes say that the property p in o "shadows" or "hides" the property p in the prototype object.



Simulating Classes in JS:

Instance Properties - r.width

Instance Methods - 
Rectangle.prototype.area = function() {…}
a = r.area();

Class Properties
Rectangle.UNIT = new Rectangle(1,1);


Class Methods
Circle.max = function(a,b) {…}


Private members:
http://javascript.crockford.com/private.html



Recall that objects inherit properties from the prototype object of their constructor. How do they also inherit properties from the Object class? Remember that the prototype object is itself an object; it is created with theObject( ) constructor. This means the prototype object itself inherits properties fromObject.prototype! Prototype-based inheritance is not limited to a single prototype object; instead, a chain of prototype objects is involved.



// Here is a simple Rectangle class.
// It has a width and height and can compute its own area
function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}
Rectangle.prototype.area = function( ) { return this.width * this.height; }

// Here is how we might subclass it
function PositionedRectangle(x, y, w, h) {
    // First, invoke the superclass constructor on the new object
    // so that it can initialise the width and height.
    // We use the call method so that we invoke the constructor as a
    // method of the object to be initialised.
    // This is called constructor chaining.
    Rectangle.call(this, w, h);

    // Now store the position of the upper-left corner of the rectangle
    this.x = x;
    this.y = y;
}

// If we use the default prototype object that is created when we
// define the PositionedRectangle( ) constructor, we get a subclass of Object.
// To subclass Rectangle, we must explicitly create our prototype object.
PositionedRectangle.prototype = new Rectangle( );

// We create this prototype object for inheritance purposes, but we
// don't actually want to inherit the width and height properties that
// each Rectangle object has, so delete them from the prototype.
delete PositionedRectangle.prototype.width;
delete PositionedRectangle.prototype.height;

// Since the prototype object was created with the Rectangle( ) constructor,
// it has a constructor property that refers to that constructor.  But
// we want PositionedRectangle objects to have a different constructor
// property, so we've got to reassign this default constructor property.
PositionedRectangle.prototype.constructor = PositionedRectangle;

// Now that we've configured the prototype object for our subclass,
// we can add instance methods to it.
PositionedRectangle.prototype.contains = function(x,y) {
    return (x > this.x && x < this.x + this.width &&
            y > this.y && y < this.y + this.height);
}




Big Words

dojo/behaviour - https://dojotoolkit.org/documentation/tutorials/1.6/using_behavior/
dojo/Deferred (Promise) - http://dojotoolkit.org/reference-guide/1.9/dojo/Deferred.html


Good Videos

Peter Higgins: dojo.Patterns for Lovers of JavaScript - https://www.youtube.com/watch?v=8BhGC7Rs3ec
Interview

widget structure - write a widget / widget lifecycle
progress bar - Standby
Grid

Dojo Bootstrapping

The term "bootstrap" refers to the idea of "pulling yourself up by your own bootstraps". The notional idea of Dojo bootstrapping itself is the same concept as your computer "booting up" when you turn it on.
dojo.addOnLoad
djConfig
dojo/ready
Interesting Dojo Widgets



Moveable - http://dojotoolkit.org/reference-guide/1.10/dojo/dnd/Moveable.html
Standby - http://livedocs.dojotoolkit.org/dojox/widget/Standby

Getting Started with DOJO Learning



Communities:

Dojo Toolkit: https://w3-connections.ibm.com/communities/service/html/communityview?communityUuid=d2002799-a89e-43b1-9591-6d2f16a59f7f

Tutorials:

Dojo Toolkit: http://dojotoolkit.org/documentation/
WJ170

Samples and demos:

1. http://archive.dojotoolkit.org/nightly/dojotoolkit/dijit/tests/
2. download http://download.dojotoolkit.org/release-1.8.5/dojo-release-1.8.5-demos.zip from http://download.dojotoolkit.org/release-1.8.5/,
one of the sample demos: localhost:1085/reportsScheduler/dojoDemo/demos/form/demo.html


Trivia


1. A jsp has dojo.require('wti.data.XMLData'); in it. This jsp page loads fine on Chrome, FF, but on IE throws error.

Soln:

Missing this directive at the top of your jsp:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

2. Outside a plugin without the following line
dojo.registerModulePath("reports", "../../../reportsScheduler/reports");
otherwise a line like this may not get resolved
dojo.require("reports.scheduler.OPMReportsPage");

3. Manual Chaining of constructors:
 "-chains-":
{
  constructor: "manual"
}

4. 
// returns the property of an object from a dot-separated string such as “A.B.C”
dojo.getObject('xxx.xxx.xxx');






*/
    
})();