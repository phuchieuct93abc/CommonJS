const subModule = require("./subModule"); //Browser: Uncaught ReferenceError: require is not defined
console.log(subModule.sayHello()); //Node: "Hello"
console.log(subModule.privateMethod()); //Node: Undefined
