// Ensure namespace exists without overwriting
var MyNamespace = MyNamespace || {};

(function (ns) {
  class MyClass {
    constructor(message) {
      this.message = message;
    }

    sayHello() {
      return this.message;
    }
  }

  // Expose class only inside namespace
  ns.MyClass = MyClass;
})(MyNamespace);

// Example usage:
var myObject = new MyNamespace.MyClass("Hello!");
var phrase = myObject.sayHello(); // 'Hello!'
console.log(phrase);
