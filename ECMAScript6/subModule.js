var sayHello = ()=>{ //Browser: Uncaught ReferenceError: exports is not defined
    console.log("Hello")
}
var privateMethod =()=>{
    console.log("This should be private method");
}
export var sayHello;
