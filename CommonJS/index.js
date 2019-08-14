const subModule = require("./subModule"); //Browser: Uncaught ReferenceError: require is not defined
console.log(subModule()); //Node: "Hello"
console.log(subModule.privateMethod()); //Node: Undefined
